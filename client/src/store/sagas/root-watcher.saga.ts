import { all } from 'redux-saga/effects';
import { serverNotificationWatcher } from '../../common/server-notification/server-notification.saga';
import { incidentsWatcher } from './incidents.saga';
import { usersWatcher } from './users.saga';

export function* rootWatcher() {
    yield all([
        usersWatcher(),
        incidentsWatcher(),
        serverNotificationWatcher()
    ]);
}
