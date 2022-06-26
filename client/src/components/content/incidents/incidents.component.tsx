import React, { FC, memo, useMemo } from 'react';
import { DeleteOutlined, FormOutlined } from '@ant-design/icons';
import { Button, Table } from 'antd';
import { IncidentData } from '../../../store/types/incidents.types';
import { IncidentsComponentProps } from './Incidents.types';
import { EditIncidentModal, CreateIncidentModal } from './index';
import { subColumns } from './incident-modal-form/incidents-modal-form.constants';
import { key, pagination } from './incidents.constants';

const IncidentComponent: FC<IncidentsComponentProps> = ({
    editableIncident,
    incidents,
    resetEditableIncident,
    editHandler,
    deleteHandler
}) => {
    const columns = useMemo(
        () => [
            ...subColumns,
            {
                title: '',
                dataIndex: 'edit',
                key: '10',
                render: (editCellValue: any, record: IncidentData) => (
                    <Button
                        shape="round"
                        icon={<FormOutlined />}
                        size="large"
                        onClick={() => editHandler(record)}
                    />
                )
            },
            {
                title: '',
                dataIndex: 'delete',
                key: '11',
                render: (editCellValue: any, record: { id: string }) => (
                    <Button
                        shape="round"
                        icon={<DeleteOutlined />}
                        size="large"
                        onClick={() => deleteHandler(record.id)}
                    />
                )
            }
        ],
        [editHandler, deleteHandler]
    );

    return (
        <>
            <CreateIncidentModal />
            <EditIncidentModal
                editableIncident={editableIncident}
                resetEditableIncident={resetEditableIncident}
            />
            <Table
                bordered
                dataSource={incidents}
                columns={columns}
                pagination={pagination}
                rowKey={key}
            />
        </>
    );
};
export default memo(IncidentComponent);
