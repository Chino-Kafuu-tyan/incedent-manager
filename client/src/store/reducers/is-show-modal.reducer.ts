import { IsShowModal, IsShowModalAction } from '../types/is-show-modal.types';

interface InitialIsShowModalState {
    isShowCreateModal: boolean;
    IsShowEditModal: boolean;
}

const initialState: InitialIsShowModalState = {
    isShowCreateModal: false,
    IsShowEditModal: false
};

const isShowModalReducer = (
    state = initialState,
    action: IsShowModalAction
): InitialIsShowModalState => {
    const { isShowCreateModal, IsShowEditModal } = state;
    switch (action.type) {
        case IsShowModal.CREATE:
            return {
                ...state,
                isShowCreateModal: !isShowCreateModal
            };
        case IsShowModal.EDIT:
            return {
                ...state,
                IsShowEditModal: !IsShowEditModal
            };
        default:
            return state;
    }
};
export default isShowModalReducer;
