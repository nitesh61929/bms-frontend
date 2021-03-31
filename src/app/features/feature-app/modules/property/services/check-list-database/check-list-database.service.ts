import { Injectable } from "@angular/core";
import { BaseComponent } from "@core/components";
import { BehaviorSubject } from "rxjs";
import { TodoItemNode } from "../../models/todo-item-node";

@Injectable()
export class ChecklistDatabase extends BaseComponent {
  TREE_DATA = { Blocks: {} };

  dataChange = new BehaviorSubject<TodoItemNode[]>([]);

  parentNodeMap = new Map<TodoItemNode, TodoItemNode>();

  ownerType: string;
  propertyType: string;

  get data(): TodoItemNode[] {
    return this.dataChange.value;
  }

  constructor() {
    super();
    this.initialize();
  }

  setTreeData(treeData: any) {
    this.TREE_DATA = treeData;

    this.initialize();
  }

  initialize() {
    // Build the tree nodes from Json object. The result is a list of `TodoItemNode` with nested
    //     file node as children.
    const data = this.buildFileTree(this.TREE_DATA, 0, true, 8, true);

    // Notify the change.
    this.dataChange.next(data);
  }

  /**
   * Build the file structure tree. The `value` is the Json object, or a sub-tree of a Json object.
   * The return value is the list of `TodoItemNode`.
   */
  buildFileTree(
    obj: { [key: string]: any },
    level: number,
    isDropdown: boolean,
    order: number,
    multiple: boolean
  ): TodoItemNode[] {
    return Object.keys(obj).reduce<TodoItemNode[]>((accumulator, key) => {
      const value = obj[key];
      const node = new TodoItemNode();
      node.name = key;
      node.isDropdown = isDropdown;
      node.order = order;
      node.multiple = multiple;

      if (value != null) {
        if (typeof value === "object") {
          node.value = this.buildFileTree(value, level + 1, isDropdown, order, multiple);
        } else {
          node.name = value;
        }
      }

      return accumulator.concat(node);
    }, []);
  }

  getHighestOrderValue(propertyStructures: any) {
    const maxOrder = propertyStructures.reduce(function (prev, current) {
      return prev.order > current.order ? prev : current;
    }).order;
    return maxOrder;
  }

  /** Add an name to to-do list */
  insertItem(parent: TodoItemNode, name: string, propertyStructures: any, selectedPropertyStructures: any) {
    const maxOrder = this.getHighestOrderValue(propertyStructures);

    let child;
    if (parent.order === maxOrder) {
      child = { name: name };
    } else {
      child = {
        name: name,
        value: [{ name: "test", isDropdown: true, keyId: "1234", value: [] }],
      };
    }

    if (parent.value) {
      // parent already has value
      parent.value.push(child as TodoItemNode);
      this.dataChange.next(this.data);
      this.parentNodeMap.set(child, parent);
    } else {
      // if parent is a leaf node
      parent.value = [];
      parent.value.push(child as TodoItemNode);
      this.dataChange.next(this.data);
      this.parentNodeMap.set(child, parent);
    }
  }

  // private appendChildToBlocks(child: any, propertyStructures: any, selectedPropertyStructures: any) {
  //   const tower = selectedPropertyStructures.find(
  //     (selectedPropertyStructure) => selectedPropertyStructure.name.toLowerCase() === "tower"
  //   );
  //   if (tower) {
  //     child = {
  //       name: name,
  //       value: [{ name: "Towers", keyId: this.getKeyId(propertyStructures, "towers"), value: [] }],
  //     };
  //   } else {
  //     child = {
  //       name: name,
  //       value: [{ name: "Floors", keyId: this.getKeyId(propertyStructures, "floors"), value: [] }],
  //     };
  //   }
  // }

  updateItem(node: TodoItemNode, name: string) {
    node.name = name;
    node.isDropdown = false;
    this.dataChange.next(this.data);
  }

  removeItem(node: TodoItemNode) {
    const parentNode = this.parentNodeMap.get(node);
    if (parentNode) {
      const index = parentNode.value.indexOf(node);
      if (index !== -1) {
        parentNode.value.splice(index, 1);
        this.dataChange.next(this.data);
        this.parentNodeMap.delete(node);
      }
    } else {
      node.isDropdown = true;
      node.keyId = null;
      node.value = [];
      this.dataChange.next(this.data);
    }
  }

  // getKeyId(propertyStructures: any, node: string): string {
  //   let rootNodeKeyId;
  //   if (node === "blocks") {
  //     const blockStructure = propertyStructures.find(
  //       (selectedPropertyStructure) => selectedPropertyStructure.name.toLowerCase() === "block"
  //     );
  //     rootNodeKeyId = blockStructure.id;
  //   }
  //   if (node === "towers" && this.propertyType !== "HOUSING") {
  //     const towerStructure = propertyStructures.find(
  //       (selectedPropertyStructure) => selectedPropertyStructure.name.toLowerCase() === "tower"
  //     );

  //     rootNodeKeyId = towerStructure.id;
  //   }
  //   if (node === "floors" && this.propertyType !== "HOUSING") {
  //     const floorStructure = propertyStructures.find(
  //       (selectedPropertyStructure) => selectedPropertyStructure.name.toLowerCase() === "floor"
  //     );

  //     rootNodeKeyId = floorStructure.id;
  //   }
  //   if (node === "units") {
  //     const unitStructure = propertyStructures.find(
  //       (selectedPropertyStructure) => selectedPropertyStructure.name.toLowerCase() === "unit"
  //     );
  //     rootNodeKeyId = unitStructure.id;
  //   }
  //   return rootNodeKeyId;
  // }
}
