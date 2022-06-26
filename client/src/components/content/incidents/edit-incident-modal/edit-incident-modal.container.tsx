import React, { FC, memo, useCallback } from 'react';
import { connect } from 'react-redux';
import IncidentModalForm from '../incident-modal-form/incident-modal-form.container';
import { IncidentDataBefore } from '../../../../store/types/incidents.types';
import { isShowEditAction } from '../../../../store/actions/is-show-modal.action';
import { editIncident } from '../../../../store/actions/incidents-saga.action';
import { formatDate } from '../../../../common/constants/common.constants';
import { EditIncidentModalProps } from './edit-incident-modal.types';
import { RootState } from '../../../../store/reducers/root.reducer';

const EditIncidentModal: FC<EditIncidentModalProps> = ({
    editableIncident,
    resetEditableIncident,
    IsShowEditModal,
    isShowEditModalAction,
    editIncidentAction
}) => {
    const closeModal = useCallback(() => {
        resetEditableIncident({});
        isShowEditModalAction();
        // eslint-disable-next-line
    }, []);

    const onEdit = useCallback((values: IncidentDataBefore) => {
        const { dueDate, startDate, ...restParams } = values;
        const formatDueDate = formatDate(dueDate);
        const formatStartDate = formatDate(startDate);
        editIncidentAction({
            dueDate: formatDueDate,
            startDate: formatStartDate,
            ...restParams
        });
        closeModal();
        // eslint-disable-next-line
    }, []);

    return (
        <IncidentModalForm
            visible={IsShowEditModal}
            onCreate={onEdit}
            onCancel={closeModal}
            titleOfForm="Редактирование инцидента"
            okText="Редактировать"
            editableIncident={editableIncident}
        />
    );
};
const mapStateToProps = (state: RootState) => ({
    IsShowEditModal: state.isShowModal.IsShowEditModal
});
export default memo(
    connect(mapStateToProps, {
        isShowEditModalAction: isShowEditAction,
        editIncidentAction: editIncident
    })(EditIncidentModal)
);
