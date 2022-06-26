import { put, delay, takeEvery } from 'redux-saga/effects';
import { hideAlert, showAlert } from '../../store/actions/alert.action';
import {
    Notification,
    ServerNotification
} from '../../store/actions/server-notification-saga.action';

function* notificationWorker(action: ServerNotification) {
    yield put(showAlert(action.payload.message));
    yield delay(2000);
    yield put(hideAlert());
}

export function* serverNotificationWatcher() {
    yield takeEvery(Notification.SERVER_NOTIFICATION, notificationWorker);
}
