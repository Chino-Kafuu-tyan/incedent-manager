import { Alert, ShowAlertAction, HideAlertAction } from '../types/alert.types';

export const showAlert = (message?: string): ShowAlertAction => ({
    type: Alert.SHOW_ALERT,
    payload: { message }
});
export const hideAlert = (): HideAlertAction => ({
    type: Alert.HIDE_ALERT
});
