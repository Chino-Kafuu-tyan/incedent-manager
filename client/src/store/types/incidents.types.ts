import { Moment } from 'moment';
import { LogoutAction } from './auth.types';

export enum IncidentsActionsTypes {
    FETCH_INCIDENTS = 'FETCH_INCIDENTS',
    FETCH_INCIDENTS_SUCCESS = 'FETCH_INCIDENTS_SUCCESS',
    DELETE_INCIDENT = 'DELETE_INCIDENT',
    EDIT_INCIDENT = 'EDIT_INCIDENT'
}
interface CommonIncidentData {
    area: string;
    assignee?: string;
    description: string;
    priority: string;
    status: string;
    title: string;
    id: string;
}
export interface IncidentData extends CommonIncidentData {
    dueDate: string;
    startDate: string;
}
export interface IncidentDataBefore extends CommonIncidentData {
    dueDate: Moment;
    startDate: Moment;
}

export interface FetchIncidentsAction {
    type: IncidentsActionsTypes.FETCH_INCIDENTS;
}
export interface FetchIncidentsSuccessAction {
    type: IncidentsActionsTypes.FETCH_INCIDENTS_SUCCESS;
    payload: IncidentData[];
}

export type IncidentsAction =
    | FetchIncidentsAction
    | FetchIncidentsSuccessAction
    | LogoutAction;
