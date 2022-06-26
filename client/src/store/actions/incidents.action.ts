import {
    IncidentData,
    IncidentsActionsTypes,
    FetchIncidentsAction,
    FetchIncidentsSuccessAction
} from '../types/incidents.types';

export const fetchIncidentsAction = (): FetchIncidentsAction => ({
    type: IncidentsActionsTypes.FETCH_INCIDENTS
});
export const fetchIncidentsSuccessAction = (
    incidents: IncidentData[]
): FetchIncidentsSuccessAction => ({
    type: IncidentsActionsTypes.FETCH_INCIDENTS_SUCCESS,
    payload: incidents
});
