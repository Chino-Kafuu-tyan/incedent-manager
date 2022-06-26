import {
    IsShowModal,
    IsShowCreateModalAction,
    IsShowEditModalAction
} from '../types/is-show-modal.types';

export const isShowCreateAction = (): IsShowCreateModalAction => ({
    type: IsShowModal.CREATE
});

export const isShowEditAction = (): IsShowEditModalAction => ({
    type: IsShowModal.EDIT
});
