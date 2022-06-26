import { Alert, AlertAction } from '../types/alert.types';

export interface InitialStateAlert {
    alert: { message?: string } | null;
}

const initialState: InitialStateAlert = {
    alert: null
};
const alertReducer = (state = initialState, action: AlertAction) => {
    switch (action.type) {
        case Alert.SHOW_ALERT:
            return {
                ...state,
                alert: action.payload
            };
        case Alert.HIDE_ALERT:
            return {
                ...state,
                alert: null
            };
        default:
            return state;
    }
};
export default alertReducer;
