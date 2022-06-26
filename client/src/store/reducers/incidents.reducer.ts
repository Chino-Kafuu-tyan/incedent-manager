import { Auth } from '../types/auth.types';
import {
    IncidentsActionsTypes,
    IncidentsAction,
    IncidentData
} from '../types/incidents.types';

interface IncidentsState {
    incidents: IncidentData[];
    loading: boolean;
}

const initialState: IncidentsState = {
    incidents: [],
    loading: false
};

const incidentsReducer = (
    state = initialState,
    action: IncidentsAction
): IncidentsState => {
    switch (action.type) {
        case IncidentsActionsTypes.FETCH_INCIDENTS:
            return {
                ...state,
                loading: true,
                incidents: []
            };
        case IncidentsActionsTypes.FETCH_INCIDENTS_SUCCESS:
            return {
                ...state,
                loading: false,
                incidents: action.payload
            };
        case Auth.LOGOUT: {
            return {
                ...state,
                loading: false,
                incidents: []
            };
        }
        default:
            return state;
    }
};
export default incidentsReducer;
