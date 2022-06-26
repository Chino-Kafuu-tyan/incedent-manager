import React, { FC, memo, useCallback } from 'react';
import { connect } from 'react-redux';
import IncidentModalForm from '../incident-modal-form/incident-modal-form.container';
import { IncidentDataBefore } from '../../../../store/types/incidents.types';
import { isShowCreateAction } from '../../../../store/actions/is-show-modal.action';
import { createIncident } from '../../../../store/actions/incidents-saga.action';
import { formatDate } from '../../../../common/constants/common.constants';
import { CreateIncidentModalProps } from './create-incident-modal.types';
import { RootState } from '../../../../store/reducers/root.reducer';

const CreateIncidentModal: FC<CreateIncidentModalProps> = ({
    isShowCreateModal,
    createIncidentAction,
    isShowCreateModalAction
}) => {
    const onCreate = useCallback((values: IncidentDataBefore) => {
        const { dueDate, startDate, ...restParams } = values;
        const formatDueDate = formatDate(dueDate);
        const formatStartDate = formatDate(startDate);
        createIncidentAction({
            dueDate: formatDueDate,
            startDate: formatStartDate,
            ...restParams
        });
        isShowCreateModalAction();
        // eslint-disable-next-line
    }, []);

    return (
        <IncidentModalForm
            visible={isShowCreateModal}
            onCreate={onCreate}
            onCancel={isShowCreateModalAction}
            titleOfForm="Создание инцидента"
            okText="Создать"
        />
    );
};
const mapStateToProps = (state: RootState) => ({
    isShowCreateModal: state.isShowModal.isShowCreateModal
});
export default memo(
    connect(mapStateToProps, {
        isShowCreateModalAction: isShowCreateAction,
        createIncidentAction: createIncident
    })(CreateIncidentModal)
);
