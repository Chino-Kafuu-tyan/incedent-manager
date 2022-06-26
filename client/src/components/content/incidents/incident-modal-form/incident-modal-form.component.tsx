import React, { FC, memo, useEffect } from 'react';
import { Form, DatePicker, Select } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import moment from 'moment';
import 'moment/locale/ru';
import locale from 'antd/es/date-picker/locale/ru_RU';
import { IncidentFormProps } from './incidents-modal-form.types';
import {
    configModalForm,
    incidentAreaOptions,
    incidentPrioritiesOptions,
    incidentStatusOptions,
    dueDateRules
} from './incidents-modal-form.constants';
import { FlexFormItem } from '../edit-incident-modal/edit-incident-modal.style';
import PriorityIcon from '../../../../common/components/priority-icon/priority-icon.component';
import { requiredRule } from '../../../../common/constants/common.constants';

const IncidentForm: FC<IncidentFormProps> = ({
    form,
    editableIncident,
    incidentPriority,
    userOptions,
    getIncidentPriority,
    getStartData,
    disabledDueDate,
    disabledStartDate
}) => {
    useEffect(() => {
        form.setFieldsValue({
            ...editableIncident,
            dueDate: editableIncident?.dueDate
                ? moment(editableIncident?.dueDate, 'Do MMMM YYYY')
                : moment(),
            startDate: editableIncident?.startDate
                ? moment(editableIncident?.startDate, 'Do MMMM YYYY')
                : moment()
        });
        // eslint-disable-next-line
    }, [editableIncident]);

    return (
        <Form
            form={form}
            layout="vertical"
            initialValues={{ modifier: 'public' }}
        >
            <Form.Item
                name="title"
                label="Название инцидента"
                rules={[
                    ...requiredRule,
                    {
                        max: 60,
                        message:
                            'Название может содержать не более 60 символов!'
                    }
                ]}
            >
                <TextArea autoSize />
            </Form.Item>

            <Form.Item name="assignee" label="Ответственный за выполнение">
                <Select showSearch options={userOptions} />
            </Form.Item>

            <Form.Item
                name="area"
                label="Область выполнения"
                rules={requiredRule}
            >
                <Select options={incidentAreaOptions} />
            </Form.Item>

            <Form.Item name="description" label="Описание" rules={requiredRule}>
                <TextArea autoSize />
            </Form.Item>

            <Form.Item
                name="startDate"
                label="Дата начала"
                {...configModalForm}
            >
                <DatePicker
                    locale={locale}
                    clearIcon={false}
                    onChange={getStartData}
                    disabledDate={disabledStartDate}
                />
            </Form.Item>

            <Form.Item
                name="dueDate"
                label="Дата выполнения"
                rules={dueDateRules}
            >
                <DatePicker locale={locale} disabledDate={disabledDueDate} />
            </Form.Item>

            <FlexFormItem>
                <Form.Item
                    name="priority"
                    label="Приоритет инцидента"
                    rules={requiredRule}
                >
                    <Select
                        showSearch
                        options={incidentPrioritiesOptions}
                        onChange={getIncidentPriority}
                    />
                </Form.Item>
                <PriorityIcon priority={incidentPriority} />
            </FlexFormItem>

            <Form.Item
                name="status"
                label="Статус инцидента"
                rules={requiredRule}
            >
                <Select showSearch options={incidentStatusOptions} />
            </Form.Item>
        </Form>
    );
};

export default memo(IncidentForm);
