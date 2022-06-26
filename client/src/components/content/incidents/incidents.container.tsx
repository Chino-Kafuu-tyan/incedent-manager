import React, { FC, useCallback, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Button } from 'antd';
import { EditIncidents } from './edit-incident-modal/edit-incident-modal.types';
import Loading from '../../../common/components/loading/loading.component';
import { IncidentsProps } from './Incidents.types';
import { IncidentData } from '../../../store/types/incidents.types';
import { RootState } from '../../../store/reducers/root.reducer';
import {
    isShowEditAction,
    deleteIncident,
    getIncidents,
    getAllUsers
} from './index';
import IncidentComponent from './incidents.component';
import AlertMessage from '../../../common/components/alert/alert.component';
import { isShowCreateAction } from '../../../store/actions/is-show-modal.action';

const Incidents: FC<IncidentsProps> = ({
    alert,
    incidents,
    loading,
    isShowEditModalAction,
    deleteIncidentAction,
    getAllUsersAction,
    getIncidentsAction,
    isShowCreateModalAction,
    isAuth
}) => {
    const [editableIncident, setEditableIncident] = useState<
        Partial<EditIncidents>
    >({});

    const editHandler = useCallback((record: IncidentData): void => {
        isShowEditModalAction();
        setEditableIncident({ ...record });
        // eslint-disable-next-line
    }, []);
    const deleteHandler = useCallback((id: string): void => {
        deleteIncidentAction(id);
        // eslint-disable-next-line
    }, []);

    useEffect(() => {
        getAllUsersAction();
        getIncidentsAction();
        // eslint-disable-next-line
    }, []);

    if (loading) {
        return <Loading />;
    }

    return (
        <>
            {alert && <AlertMessage message={alert?.message} />}
            {isAuth && (
                <Button size="middle" onClick={isShowCreateModalAction}>
                    Создать
                </Button>
            )}
            <IncidentComponent
                incidents={incidents}
                editableIncident={editableIncident}
                resetEditableIncident={setEditableIncident}
                deleteHandler={deleteHandler}
                editHandler={editHandler}
            />
        </>
    );
};

const mapStateToProps = (state: RootState) => ({
    alert: state.alertMessage.alert,
    incidents: state.incident.incidents,
    loading: state.incident.loading,
    isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, {
    isShowEditModalAction: isShowEditAction,
    deleteIncidentAction: deleteIncident,
    getAllUsersAction: getAllUsers,
    getIncidentsAction: getIncidents,
    isShowCreateModalAction: isShowCreateAction
})(Incidents);
