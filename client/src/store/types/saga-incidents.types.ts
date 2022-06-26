import { AxiosResponse } from 'axios';
import { IncidentData } from './incidents.types';

export enum IncidentsSaga {
    CREATE_INCIDENT = 'CREATE_INCIDENT',
    GET_INCIDENTS = 'GET_INCIDENTS',
    DELETE_INCIDENTS = 'DELETE_INCIDENTS',
    EDIT_INCIDENTS = 'EDIT_INCIDENTS'
}

export interface CreateIncidentActionPayload {
    area: string;
    description: string;
    dueDate: string;
    priority: string;
    startDate: string;
    status: string;
    title: string;
    assignee?: string;
}

export interface DeleteIncidentActionPayload {
    id: string;
}

export interface CreateIncidentAction {
    type: IncidentsSaga.CREATE_INCIDENT;
    payload: CreateIncidentActionPayload;
}
export interface GetIncidentsAction {
    type: IncidentsSaga.GET_INCIDENTS;
}

export interface EditIncidentActionPayload extends CreateIncidentActionPayload {
    id: string;
}

export interface EditIncidentAction {
    type: IncidentsSaga.EDIT_INCIDENTS;
    payload: EditIncidentActionPayload;
}

export interface DeleteIncidentAction {
    type: IncidentsSaga.DELETE_INCIDENTS;
    payload: DeleteIncidentActionPayload;
}

interface CreateIncidentsApiArgs {
    message?: string;
}
export interface CreateIncidentType {
    ({
        area,
        description,
        dueDate,
        priority,
        startDate,
        status,
        title,
        assignee
    }: CreateIncidentActionPayload): Promise<
        AxiosResponse<CreateIncidentsApiArgs>
    >;
}
export type CreateIncidentResponse = AxiosResponse<CreateIncidentsApiArgs>;

interface GetIncidentsApiArgs {
    message: string;
    incidents: IncidentData[];
}
export interface GetIncidentType {
    (): Promise<AxiosResponse<GetIncidentsApiArgs>>;
}
export type GetIncidentResponse = AxiosResponse<GetIncidentsApiArgs>;

interface DeleteIncidentsApiArgs {
    message?: string;
}

export interface DeleteIncidentType {
    (id: string): Promise<AxiosResponse<DeleteIncidentsApiArgs>>;
}
export type DeleteIncidentResponse = AxiosResponse<DeleteIncidentsApiArgs>;

interface EditIncidentsApiArgs {
    message?: string;
}
export interface EditIncidentType {
    ({
        area,
        description,
        dueDate,
        priority,
        startDate,
        status,
        title,
        id,
        assignee
    }: EditIncidentActionPayload): Promise<AxiosResponse<EditIncidentsApiArgs>>;
}
export type EditIncidentResponse = AxiosResponse<EditIncidentsApiArgs>;
