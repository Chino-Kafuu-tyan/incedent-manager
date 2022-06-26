export enum Alert {
    SHOW_ALERT = 'SHOW_ALERT',
    HIDE_ALERT = 'HIDE_ALERT'
}
export interface AlertActionPayload {
    message?: string;
}
export interface ShowAlertAction {
    type: Alert.SHOW_ALERT;
    payload: AlertActionPayload;
}
export interface HideAlertAction {
    type: Alert.HIDE_ALERT;
}

export type AlertAction = ShowAlertAction | HideAlertAction;
