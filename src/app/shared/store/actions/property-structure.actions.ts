import { createAction, props } from "@ngrx/store";

export const getPropertyStructure = createAction(
  "[PROPERTY_STRUCTURE] Get Property Structure",
  props<{ id: string }>()
);

export const getPropertyStructureSuccess = createAction(
  "[PROPERTY_STRUCTURE] Get Property Structure Success",
  props<any>()
);

export const getPropertyStructureFailure = createAction(
  "[PROPERTY_STRUCTURE] Get Property Structure Failure",
  props<any>()
);

export const getPropertyStructureDetail = createAction(
  "[PROPERTY_STRUCTURE] Get Property Structure Detail",
  props<any>()
);

export const getPropertyStructureDetailSuccess = createAction(
  "[PROPERTY_STRUCTURE] Get Property Structure Detail Success",
  props<any>()
);

export const getPropertyStructureDetailFailure = createAction(
  "[PROPERTY_STRUCTURE] Get Property Structure Detail Failure",
  props<any>()
);

export const getSelectedPropertyStructure = createAction(
  "[PROPERTY_STRUCTURE] Get Selected Property Structure",
  props<any>()
);

export const getSelectedPropertyStructureSuccess = createAction(
  "[PROPERTY_STRUCTURE] Get Selected Property Structure Success",
  props<any>()
);

export const getSelectedPropertyStructureFailure = createAction(
  "[PROPERTY_STRUCTURE] Get Selected Property Structure Failure",
  props<any>()
);

export const savePropertyStructure = createAction(
  "[PROPERTY_STRUCTURE] Save Property Structure",
  props<{ payload: any }>()
);

export const savePropertyStructureSuccess = createAction(
  "[PROPERTY_STRUCTURE] Save Property Structure Success",
  props<any>()
);

export const savePropertyStructureFailure = createAction(
  "[PROPERTY_STRUCTURE] Save Property Structure Failure",
  props<any>()
);

export const deletePropertyStructure = createAction("[PROPERTY_STRUCTURE] Delete Property Structure", props<any>());

export const deletePropertyStructureSuccess = createAction(
  "[PROPERTY_STRUCTURE] Delete Property Structure Success",
  props<any>()
);

export const deletePropertyStructureFailure = createAction(
  "[PROPERTY_STRUCTURE] Delete Property Structure Failure",
  props<any>()
);
