export enum IsShowModal {
    CREATE = 'CREATE_MODAL',
    EDIT = 'EDIT_MODAL'
}

export interface IsShowCreateModalAction {
    type: IsShowModal.CREATE;
}
export interface IsShowEditModalAction {
    type: IsShowModal.EDIT;
}
export type IsShowModalAction = IsShowCreateModalAction | IsShowEditModalAction;
