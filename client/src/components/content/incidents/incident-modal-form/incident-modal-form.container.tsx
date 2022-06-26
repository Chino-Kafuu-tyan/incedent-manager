import React, { FC, useState, useMemo, useCallback } from 'react';
import { Modal, Form } from 'antd';
import { connect } from 'react-redux';
import moment, { Moment } from 'moment';
import 'moment/locale/ru';
import { IncidentModalFormProps } from './incidents-modal-form.types';
import IncidentForm from './incident-modal-form.component';
import { UserData } from '../../../../store/types/users.types';
import { RootState } from '../../../../store/reducers/root.reducer';

const IncidentModalForm: FC<IncidentModalFormProps> = ({
    visible,
    onCreate,
    onCancel,
    titleOfForm,
    okText,
    users,
    editableIncident
}) => {
    const [form] = Form.useForm();
    const [startDate, setStartDate] = useState<Moment>(moment());
    const [incidentPriority, setIncidentPriority] = useState<string>('');

    const id = editableIncident?.id;

    const userOptions = useMemo(
        () =>
            users.map((user: UserData) => ({
                value: user.fullName
            })),
        [users]
    );

    const getIncidentPriority = useCallback((priorityValue: string): void => {
        setIncidentPriority(priorityValue);
    }, []);

    const getStartData = useCallback((data: Moment | any): void => {
        setStartDate(data);
    }, []);
    const disabledDueDate = useCallback(
        (date: Moment): boolean =>
            new Date(date.format()) < new Date(startDate.format()),
        [startDate]
    );

    const disabledStartDate = useCallback((date: Moment): boolean => {
        const today = moment().startOf('date').format();
        return new Date(date.format()) < new Date(today);
    }, []);

    const hideModal = useCallback(() => {
        form.resetFields();
        onCancel();
        // eslint-disable-next-line
    }, []);

    const submitModal = useCallback(() => {
        form.validateFields().then((values) => {
            form.resetFields();
            onCreate({ ...values, id });
        });
        // eslint-disable-next-line
    }, [id]);

    return (
        <Modal
            visible={visible}
            title={titleOfForm}
            okText={okText}
            cancelText="Отменить"
            forceRender
            onCancel={hideModal}
            onOk={submitModal}
        >
            <IncidentForm
                form={form}
                editableIncident={editableIncident}
                incidentPriority={incidentPriority}
                userOptions={userOptions}
                getIncidentPriority={getIncidentPriority}
                getStartData={getStartData}
                disabledDueDate={disabledDueDate}
                disabledStartDate={disabledStartDate}
            />
        </Modal>
    );
};
const mapStateToProps = (state: RootState) => ({
    users: state.user.users
});
export default connect(mapStateToProps, {})(IncidentModalForm);
