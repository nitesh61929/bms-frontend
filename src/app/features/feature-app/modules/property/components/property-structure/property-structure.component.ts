import { Component, Input, OnInit, SimpleChanges, ViewChild } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { BaseComponent } from "@core/components";
import { AppPermissions } from "@core/enums";
import { SnackBarService } from "@core/services";
import { Actions, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { IProperty } from "@shared/interfaces";
import { IPropertyStructure } from "@shared/interfaces/property-structure";
import {
  deletePropertyStructure,
  deletePropertyStructureSuccess,
  getPropertyStructure,
  getPropertyStructureDetail,
  getSelectedPropertyStructure,
  savePropertyStructure,
  savePropertyStructureSuccess,
} from "@shared/store/actions/property-structure.actions";
import { Observable, Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { ChecklistDatabase } from "../../services/check-list-database/check-list-database.service";

@Component({
  selector: "app-property-structure",
  templateUrl: "./property-structure.component.html",
  providers: [ChecklistDatabase],
})
export class PropertyStructureComponent extends BaseComponent implements OnInit {
  @ViewChild("propertyTree") propertyTree: any;
  @Input() propertyDetail: IProperty;
  propertyStructures$: Observable<IPropertyStructure[]>;
  propertyStructures: IPropertyStructure[];
  selectedPropertyStructureDetail$: Observable<any>;
  selectedPropertyStructureDetail: any;
  destroyed$ = new Subject<boolean>();
  propertyStructureForm: FormGroup;
  selectedPropertyStructures: IPropertyStructure[];
  propertyStructureDetail$: any;
  propertyStructureDetail: any;
  hasDetailView: boolean = false;
  hasStructureCreateAccess = AppPermissions.SAVE_PROPERTY_STRUCTURE;
  hasStructureDetailAccess = AppPermissions.PROPERTY_STRUCTURE_DETAIL;
  hasUnitValue: boolean;
  isUnitValueEmpty: boolean;
  propertyType: string;

  constructor(
    private store: Store<any>,
    public savePropertyStructureSuccess$: Actions,
    public deletePropertyStructureSuccess$: Actions,
    private checklistDatabase: ChecklistDatabase,
    private snackbar: SnackBarService
  ) {
    super();

    savePropertyStructureSuccess$
      .pipe(ofType(savePropertyStructureSuccess), takeUntil(this.destroyed$))
      .subscribe((d) => {
        this.fetchRequiredPropertyData();
      });

    deletePropertyStructureSuccess$
      .pipe(ofType(deletePropertyStructureSuccess), takeUntil(this.destroyed$))
      .subscribe((d) => {
        this.fetchRequiredPropertyData();
        this.resetTreeData();
      });
  }

  fetchRequiredPropertyData() {
    this.fetchPropertyStructure();
    this.fetchSelectedPropertyStructure();
    this.fetchPropertyStructureDetail();
  }

  resetTreeData() {
    this.hasDetailView = false;
    this.selectedPropertyStructures = null;
    const treeData = { Blocks: {} };
    this.checklistDatabase.setTreeData(treeData);
  }

  ngOnInit(): void {
    this.setPropertyStructureForm();
    this.listenObservables();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.propertyDetail && changes.propertyDetail.currentValue) {
      if (this.propertyDetail) {
        this.hasDetailView = false;
        this.propertyType = this.propertyDetail?.propertyType?.code.toUpperCase();
        // this.checklistDatabase.setTreeData({});
        this.fetchRequiredPropertyData();
      }
    }
  }

  setPropertyStructureForm() {
    this.propertyStructureForm = this.formBuilder.group({
      propertyId: [this.propertyDetail.id],
      structureTree: [],
      selectedStructures: [],
    });
  }

  isChecked(structure: any) {
    if (structure) {
      if (structure.name.toLowerCase() === "unit" || structure.name.toLowerCase() === "floor") {
        return true;
      }
      if (this.selectedPropertyStructureDetail) {
        const found = this.selectedPropertyStructureDetail.find((p) => p.id === structure.id);
        return found ? true : false;
      }
    }
  }

  isDisabled(structure: any) {
    if (this.hasDetailView) {
      return true;
    }
    if (structure.name.toLowerCase() === "unit" || structure.name.toLowerCase() === "floor") {
      return true;
    }
    return false;
  }

  fetchPropertyStructure() {
    this.store.dispatch(getPropertyStructure({ id: this.propertyDetail.propertyType.id }));
  }

  fetchPropertyStructureDetail() {
    this.store.dispatch(getPropertyStructureDetail({}));
  }

  fetchSelectedPropertyStructure() {
    this.store.dispatch(getSelectedPropertyStructure({}));
  }

  onUpdatePropertyStructure() {
    this.hasUnitValue = false;
    this.isUnitValueEmpty = false;
    // this.setKeyIdForRootnode();
    const structureValue = this.propertyTree.database.dataChange._value[0];
    const bool = this.isUnitValueEmptyFn(structureValue);
    if (bool || structureValue.value.length === 0 || !this.hasUnitValue) {
      this.snackbar.open(this.translate.instant("no_structure_configured"));
    } else {
      this.propertyStructureForm.get("structureTree").setValue(structureValue);
      const lastSelectedStructureIds = this.propertyTree.getSelectedStructureKeyIds();
      const filteredValue = this.propertyStructureForm.value.selectedStructures.filter((id) =>
        lastSelectedStructureIds.includes(id)
      );
      this.propertyStructureForm.get("selectedStructures").patchValue(filteredValue);
      this.store.dispatch(savePropertyStructure({ payload: this.propertyStructureForm.value }));
    }
  }

  getHighestOrderValue() {
    const maxOrder = this.propertyStructures.reduce(function (prev, current) {
      return prev.order > current.order ? prev : current;
    }).order;
    return maxOrder;
  }

  isUnitValueEmptyFn(obj): boolean {
    for (var k in obj) {
      if (this.isUnitValueEmpty) {
        return this.isUnitValueEmpty;
      }
      if (k === "order" && obj[k] === this.getHighestOrderValue()) {
        this.hasUnitValue = true;
        if (obj["value"].length === 0) this.isUnitValueEmpty = true;
        if (obj["value"].length === 1 && obj["value"][0].name === "") this.hasUnitValue = false;
        break;
      } else if (k === "value" && !this.isUnitValueEmpty) {
        obj[k].forEach((element, index) => {
          this.isUnitValueEmptyFn(obj[k][index]);
        });
      }
    }
    return this.isUnitValueEmpty;
  }

  // setKeyIdForRootnode() {
  //   const rootNodeName = this.propertyTree.database.dataChange._value[0].name.toLowerCase();

  //   this.propertyTree.database.dataChange._value[0]["keyId"] = this.checklistDatabase.getKeyId(
  //     this.propertyStructures,
  //     rootNodeName
  //   );
  // }

  // onCreateTree() {
  //   this.selectedPropertyStructures = this.propertyStructures.filter((propertyStructure) => {
  //     return this.propertyStructureForm
  //       .get("selectedStructures")
  //       .value.find((selectedStructureId) => selectedStructureId === propertyStructure.id);
  //   });
  //   const name = `${this.selectedPropertyStructures[0].name}s`;
  //   const treeData = {};
  //   treeData[name] = {};
  //   this.checklistDatabase.setTreeData(treeData);
  // }

  // onStructureSelect(event: any, structure: any) {
  //   if (event.checked) {
  //     if (
  //       this.propertyStructureForm.get("selectedStructures").value &&
  //       this.propertyStructureForm.get("selectedStructures").value.length > 0
  //     ) {
  //       this.propertyStructureForm.get("selectedStructures").value.push(structure.id);
  //     } else {
  //       const arr = [];
  //       arr.push(structure.id);
  //       this.propertyStructureForm.get("selectedStructures").setValue(arr);
  //     }
  //   } else {
  //     const filteredValue = this.propertyStructureForm.value.selectedStructures.filter((id) => id !== structure.id);
  //     this.propertyStructureForm.get("selectedStructures").patchValue(filteredValue);
  //   }
  // }

  listenObservables() {
    this.propertyStructures$ = this.store.select((store) => store.sharedModule.propertyStructure.propertyStructures);
    this.propertyStructureDetail$ = this.store.select(
      (store) => store.sharedModule.propertyStructure.propertyStructureDetail
    );
    this.selectedPropertyStructureDetail$ = this.store.select(
      (store) => store.sharedModule.propertyStructure.selectedPropertyStructures
    );

    this.propertyStructures$.subscribe((d) => {
      this.propertyStructures = d;
      const defaultSelected = this.propertyStructures
        // .filter(
        //   (propertyStructure) =>
        //     propertyStructure.name.toLowerCase() === "floor" || propertyStructure.name.toLowerCase() === "unit"
        // )
        .map((f) => f.id);

      this.propertyStructureForm.get("selectedStructures").patchValue(defaultSelected);
    });

    this.selectedPropertyStructureDetail$.subscribe((d) => {
      this.selectedPropertyStructureDetail = d;
      this.buildPropertyStructureForm();
    });

    this.propertyStructureDetail$.subscribe((d) => {
      if (d) {
        this.propertyStructureDetail = d;
        if (this.propertyStructureDetail.structureTree) {
          this.hasDetailView = true;
          var removedUnwantedProp = this.removeProp(this.propertyStructureDetail?.structureTree);
          removedUnwantedProp = this.removeEmptyOrNull(removedUnwantedProp);
          const preparedStructureTree = this.prepareStructure(removedUnwantedProp);
          this.checklistDatabase.setTreeData(preparedStructureTree);
        }
      }
    });
  }

  // Remove all the nodes other than NAME and VALUE
  removeProp(obj) {
    for (var property in obj) {
      if (obj.hasOwnProperty(property)) {
        if (Array.isArray(obj[property])) {
          this.removeProp(obj[property][0]);
        }
        if (typeof obj[property] == "object") {
          this.removeProp(obj[property]);
        } else {
          if (property !== "name") {
            delete obj[property];
          }
        }
      }
    }
    return obj;
  }

  // Remove empty or null keys
  removeEmptyOrNull(obj) {
    Object.keys(obj).forEach(
      (k) =>
        (obj[k] && typeof obj[k] === "object" && this.removeEmptyOrNull(obj[k])) ||
        (!obj[k] && obj[k] !== undefined && delete obj[k])
    );

    return obj;
  }

  // Convert the selected structure from DB to required structure for tree
  prepareStructure(obj, name = null) {
    let newObj = [];

    const prepareStructure = Object.keys(obj).reduce((acc, key) => {
      var keyName = obj[key];
      if (obj["value"]) {
        newObj[keyName] = {};
        obj["value"].forEach((element, index) => {
          var name = obj["name"];
          if (obj["value"].some((obj) => obj.hasOwnProperty("value"))) {
            Object.assign(newObj[name], this.prepareStructure(obj["value"][index]));
          } else {
            newObj[name] = obj["value"].map((n) => n.name);
          }
        });
      }
      return newObj;
    }, []);

    Object.keys(prepareStructure).forEach((p) => {
      if (typeof prepareStructure[p] === "object" && Object.keys(prepareStructure[p]).length === 0) {
        delete prepareStructure[p];
      }
    });
    return prepareStructure;
  }

  buildPropertyStructureForm() {
    if (this.selectedPropertyStructureDetail && this.selectedPropertyStructureDetail.length > 0) {
      const filteredValue = this.selectedPropertyStructureDetail.map((propertystructure) => propertystructure.id);
      this.propertyStructureForm.get("selectedStructures").setValue(filteredValue);
    }
  }

  onDeleteStructure() {
    const options = {
      message: this.getTranslatedString("confirm_delete_structure"),
      cancelText: this.getTranslatedString("common.cancel"),
      confirmText: this.getTranslatedString("common.yes"),
    };
    this.confirmDialog.open(options);
    this.confirmDialog.confirmed().subscribe((confirmed) => {
      if (confirmed) {
        this.store.dispatch(deletePropertyStructure(null));
      }
    });
  }
}
