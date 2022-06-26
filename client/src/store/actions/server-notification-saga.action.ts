export enum Notification {
    SERVER_NOTIFICATION = 'SERVER_NOTIFICATION'
}
export interface ServerNotification {
    type: Notification.SERVER_NOTIFICATION;
    payload: { message?: string };
}
export const serverNotification = (message?: string): ServerNotification => ({
    type: Notification.SERVER_NOTIFICATION,
    payload: { message }
});
