import { SelectionModel } from "@angular/cdk/collections";
import { FlatTreeControl } from "@angular/cdk/tree";
import { Component, EventEmitter, Input, Output, SimpleChanges } from "@angular/core";
import { MatSelectChange } from "@angular/material/select";
import { MatTreeFlatDataSource, MatTreeFlattener } from "@angular/material/tree";
import { BaseComponent } from "@core/components";
import { SnackBarService } from "@core/services";
import { IPropertyStructure } from "@shared/interfaces/property-structure";
import { Observable, of as ofObservable } from "rxjs";
import { TodoItemFlatNode } from "../../models/todo-item-flat-node";
import { TodoItemNode } from "../../models/todo-item-node";
import { ChecklistDatabase } from "../../services/check-list-database/check-list-database.service";

@Component({
  selector: "app-property-tree",
  templateUrl: "./property-tree.component.html",
})
export class PropertyTreeComponent extends BaseComponent {
  @Input() selectedPropertyStructures: IPropertyStructure[];
  @Input() propertyStructures: IPropertyStructure[];
  filteredPropertyStructures: IPropertyStructure[];
  @Input() hasDetailView: boolean;
  @Input() propertyType: string;
  @Output() deleteStructure: EventEmitter<any> = new EventEmitter<any>();

  /** Map from flat node to nested node. This helps us finding the nested node to be modified */
  flatNodeMap: Map<TodoItemFlatNode, TodoItemNode> = new Map<TodoItemFlatNode, TodoItemNode>();

  /** Map from nested node to flattened node. This helps us to keep the same object for selection */
  nestedNodeMap: Map<TodoItemNode, TodoItemFlatNode> = new Map<TodoItemNode, TodoItemFlatNode>();

  treeControl: FlatTreeControl<TodoItemFlatNode>;

  treeFlattener: MatTreeFlattener<TodoItemNode, TodoItemFlatNode>;

  dataSource: MatTreeFlatDataSource<TodoItemNode, TodoItemFlatNode>;

  /** The selection for checklist */
  checklistSelection = new SelectionModel<TodoItemFlatNode>(true /* multiple */);

  currentAddedParentNode: any;

  constructor(private database: ChecklistDatabase, private snackbar: SnackBarService) {
    super();
    this.treeFlattener = new MatTreeFlattener(this.transformer, this.getLevel, this.isExpandable, this.getChildren);
    this.treeControl = new FlatTreeControl<TodoItemFlatNode>(this.getLevel, this.isExpandable);
    this.dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

    database.dataChange.subscribe((data) => {
      this.dataSource.data = data;
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.propertyType && changes.propertyType.currentValue) {
      if (this.propertyType) {
        this.database.propertyType = this.propertyType;
      }
    }

    if (changes.propertyStructures && changes.propertyStructures.currentValue) {
      this.filteredPropertyStructures = this.propertyStructures;
    }
  }

  getLevel = (node: TodoItemFlatNode) => {
    return node?.level;
  };

  isExpandable = (node: TodoItemFlatNode) => {
    return node.expandable;
  };

  getChildren = (node: TodoItemNode): Observable<TodoItemNode[]> => {
    return ofObservable(node.value);
  };

  hasChild = (_: number, _nodeData: TodoItemFlatNode) => {
    return _nodeData.expandable;
  };

  hasNoContent = (_: number, _nodeData: TodoItemFlatNode) => {
    return _nodeData.name === "";
  };

  /**
   * Transformer to convert nested node to flat node. Record the nodes in maps for later use.
   */
  transformer = (node: TodoItemNode, level: number) => {
    let flatNode =
      this.nestedNodeMap.has(node) && this.nestedNodeMap.get(node)!.name === node.name
        ? this.nestedNodeMap.get(node)!
        : new TodoItemFlatNode();

    flatNode.name = node.name;
    flatNode.level = level;
    flatNode.expandable = !!node.value;
    flatNode.isDropdown = node.isDropdown;
    flatNode.order = node.order;
    flatNode.multiple = node.multiple;
    this.flatNodeMap.set(flatNode, node);
    this.nestedNodeMap.set(node, flatNode);
    return flatNode;
  };

  onStructureSelect(structureSelect: MatSelectChange, node: any) {
    const structure = structureSelect.value;
    const name = `${structure.name}`;

    node.name = name;
    node.order = structure.order;
    node.multiple = structure.multiple;
    node.keyId = structure.id;

    const parentNode = this.flatNodeMap.get(node);
    parentNode.name = node.name;
    parentNode.order = node.order;
    parentNode.multiple = node.multiple;
    parentNode.isDropdown = node.isDropdown;
    parentNode.keyId = node.keyId;
  }

  /* Get the parent node of a node */
  getParentNode(node: TodoItemFlatNode): TodoItemFlatNode | null {
    const currentLevel = this.getLevel(node);

    if (currentLevel < 1) {
      return null;
    }

    const startIndex = this.treeControl.dataNodes.indexOf(node) - 1;

    for (let i = startIndex; i >= 0; i--) {
      const currentNode = this.treeControl.dataNodes[i];

      if (this.getLevel(currentNode) < currentLevel) {
        return currentNode;
      }
    }
    return null;
  }

  hasMultipleField(node: TodoItemFlatNode) {
    return (
      this.getParentNode(node)?.hasOwnProperty("multiple") && typeof this.getParentNode(node).multiple !== "undefined"
    );
  }

  /** Select the category so we can insert the new name. */
  addNewItem(node: TodoItemFlatNode) {
    this.currentAddedParentNode = node;
    const parentNode = this.flatNodeMap.get(node);
    parentNode.isDropdown = false;

    //
    let isParentHasChildren: boolean = false;
    if (parentNode.value) {
      isParentHasChildren = true;
    }
    //
    this.database.insertItem(parentNode!, "", this.propertyStructures, this.selectedPropertyStructures);
    // expand the subtree only if the parent has children (parent is not a leaf node)
    if (isParentHasChildren) {
      this.treeControl.expand(node);
    }
  }

  getSelectedStructureKeyIds() {
    const ids = [];
    JSON.stringify(this.database.dataChange.value[0], (key, value) => {
      if (key === "keyId") {
        ids.push(value);
      }
      return value;
    });
    return ids;
  }

  filterStructureDropdown(node: TodoItemFlatNode) {
    const flatNode = this.getParentNode(this.getParentNode(node));
    if (flatNode) {
      this.filteredPropertyStructures = this.propertyStructures.filter((s) => s?.order > flatNode?.order);
    }
  }

  /** Save the node to database */
  saveNode(node: TodoItemFlatNode, itemValue: string) {
    const nestedNode = this.flatNodeMap.get(node);
    this.database.updateItem(nestedNode!, itemValue);
  }

  removeNode(node: TodoItemFlatNode) {
    const parentNode = this.flatNodeMap.get(node);
    this.database.removeItem(parentNode);
  }

  generateNode(node: TodoItemFlatNode, prefixValue: string, fromValue: string, toValue: string) {
    if (!prefixValue || !fromValue || !toValue) {
      return this.snackbar.open(this.getTranslatedString("missing_values_message"));
    }

    if (parseInt(fromValue, 10) > parseInt(toValue, 10)) {
      return this.snackbar.open(this.getTranslatedString("from_to_value_message"));
    }

    const diff = parseInt(toValue, 10) - parseInt(fromValue, 10);
    if (diff > 200) {
      return this.snackbar.open(this.getTranslatedString("unit_limit_exceeded"));
    }

    this.removeNode(node);

    const rangeArray = Array.from(Array(diff + 1), (x, index) => index + parseInt(fromValue, 10));

    rangeArray.forEach((value) => {
      this.database.insertItem(
        this.flatNodeMap.get(this.currentAddedParentNode),
        `${prefixValue}-${value}`,
        this.propertyStructures,
        this.selectedPropertyStructures
      );
    });
  }

  onDeleteStructure() {
    this.deleteStructure.emit();
  }
}
