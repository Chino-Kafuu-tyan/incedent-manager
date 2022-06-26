import { IncidentData } from '../../../store/types/incidents.types';
import {
    IsShowEditModalAction,
    IsShowCreateModalAction
} from '../../../store/types/is-show-modal.types';
import {
    DeleteIncidentAction,
    GetIncidentsAction
} from '../../../store/types/saga-incidents.types';
import { GetAllUsersAction } from '../../../store/types/saga-user.types';
import { EditIncidents } from './edit-incident-modal/edit-incident-modal.types';

interface CommonIncidentsProps {
    incidents: IncidentData[];
}
export interface IncidentsProps extends CommonIncidentsProps {
    alert: { message?: string } | null;
    loading: boolean;
    isShowEditModalAction: () => IsShowEditModalAction;
    deleteIncidentAction: (id: string) => DeleteIncidentAction;
    getAllUsersAction: () => GetAllUsersAction;
    getIncidentsAction: () => GetIncidentsAction;
    isAuth: boolean;
    isShowCreateModalAction: () => IsShowCreateModalAction;
}
export interface IncidentsComponentProps extends CommonIncidentsProps {
    editableIncident?: Partial<EditIncidents>;
    resetEditableIncident: (editableIncident: Partial<EditIncidents>) => void;
    editHandler: (record: IncidentData) => void;
    deleteHandler: (id: string) => void;
}
