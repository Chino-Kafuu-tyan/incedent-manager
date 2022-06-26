import React from 'react';
import { Moment } from 'moment';
import { IncidentData } from '../../../../store/types/incidents.types';
import PriorityIcon from '../../../../common/components/priority-icon/priority-icon.component';
import { FormInstance } from '../../../../../node_modules/rc-field-form/lib/interface';

const incidentPriorities: string[] = [
    'Blocker',
    'Critical',
    'Major',
    'Minor',
    'Normal'
];

export const incidentPrioritiesOptions = incidentPriorities.map(
    (priority: string) => ({
        value: priority
    })
);

const incidentArea: string[] = ['Frontend', 'Backend'];

export const incidentAreaOptions = incidentArea.map((area: string) => ({
    value: area
}));

const incidentStatus: string[] = [
    'Открыт',
    'В работе',
    'Необходима дополнительная информация',
    'Информация предоставлена',
    'Исправлено',
    'Проверено',
    'Закрыто',
    'Брак',
    'Переоткрыто'
];
export const incidentStatusOptions = incidentStatus.map((status: string) => ({
    value: status
}));

export const subColumns = [
    {
        // title: 'Индетификатор приоритета',
        dataIndex: 'icon',
        key: '1',
        render: (editCellValue: any, record: IncidentData) => (
            <PriorityIcon priority={record.priority} />
        )
    },
    {
        title: 'Название',
        dataIndex: 'title',
        key: '2'
    },
    {
        title: 'Описание',
        dataIndex: 'description',
        key: '3'
    },
    {
        title: 'Ответственный за выполнение',
        dataIndex: 'assignee',
        key: '4'
    },
    {
        title: 'Область',
        dataIndex: 'area',
        key: '5'
    },
    {
        title: 'Дата начала',
        dataIndex: 'startDate',
        key: '6'
    },
    {
        title: 'Дата сдачи',
        dataIndex: 'dueDate',
        key: '7'
    },
    {
        title: 'Приоритет',
        dataIndex: 'priority',
        key: '8'
    },
    {
        title: 'Статус',
        dataIndex: 'status',
        key: '9'
    }
];

export const configModalForm = {
    rules: [
        {
            required: true,
            message: 'Укажите дату!'
        }
    ]
};

export const dueDateRules = [
    ...configModalForm.rules,
    ({ getFieldValue }: FormInstance<Moment>) => ({
        validator(rules: any, value: Moment) {
            if (!value || getFieldValue('startDate') <= value) {
                return Promise.resolve();
            }
            return Promise.reject(
                new Error(
                    'Измените дату! Дата выполнения не может быть раньше даты начала инцидента!'
                )
            );
        }
    })
];
