import {
    IncidentsSaga,
    EditIncidentAction,
    CreateIncidentAction,
    EditIncidentActionPayload,
    DeleteIncidentAction,
    GetIncidentsAction,
    CreateIncidentActionPayload
} from '../types/saga-incidents.types';

export const createIncident = (
    createIncidentArgs: CreateIncidentActionPayload
): CreateIncidentAction => ({
    type: IncidentsSaga.CREATE_INCIDENT,
    payload: createIncidentArgs
});

export const getIncidents = (): GetIncidentsAction => ({
    type: IncidentsSaga.GET_INCIDENTS
});
export const deleteIncident = (id: string): DeleteIncidentAction => ({
    type: IncidentsSaga.DELETE_INCIDENTS,
    payload: { id }
});

export const editIncident = (
    editIncidentArgs: EditIncidentActionPayload
): EditIncidentAction => ({
    type: IncidentsSaga.EDIT_INCIDENTS,
    payload: editIncidentArgs
});
