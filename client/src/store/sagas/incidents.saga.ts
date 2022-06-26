import { put, call, takeEvery } from 'redux-saga/effects';
import {
    CreateIncidentResponse,
    DeleteIncidentResponse,
    GetIncidentResponse,
    IncidentsSaga,
    EditIncidentResponse,
    CreateIncidentAction,
    EditIncidentAction,
    DeleteIncidentAction
} from '../types/saga-incidents.types';
import {
    fetchIncidentsAction,
    fetchIncidentsSuccessAction
} from '../actions/incidents.action';
import {
    createIncidentApi,
    deleteIncidentsApi,
    editIncidentApi,
    getIncidentsApi
} from './api';
import { getIncidents } from '../actions/incidents-saga.action';
import { serverNotification } from '../actions/server-notification-saga.action';

function* editIncidentWorker(action: EditIncidentAction) {
    try {
        const response: EditIncidentResponse = yield call(
            editIncidentApi,
            action.payload
        );
        yield put(getIncidents());
        yield put(serverNotification(response.data.message));
    } catch (e) {
        yield put(serverNotification(e.response.data.message));
    }
}

function* deleteIncidentWorker(action: DeleteIncidentAction) {
    try {
        const { id } = action.payload;
        const response: DeleteIncidentResponse = yield call(
            deleteIncidentsApi,
            id
        );
        yield put(getIncidents());
        yield put(serverNotification(response.data.message));
    } catch (e) {
        yield put(serverNotification(e.response.data.message));
    }
}

function* createIncidentWorker(action: CreateIncidentAction) {
    try {
        const response: CreateIncidentResponse = yield call(
            createIncidentApi,
            action.payload
        );
        yield put(getIncidents());
        yield put(serverNotification(response.data.message));
    } catch (e) {
        yield put(serverNotification(e.response.data.message));
    }
}

function* getIncidentWorker() {
    try {
        yield put(fetchIncidentsAction());
        const response: GetIncidentResponse = yield call(getIncidentsApi);
        yield put(fetchIncidentsSuccessAction(response.data.incidents));
    } catch (e) {
        yield put(serverNotification(e.response.data.message));
    }
}

export function* incidentsWatcher() {
    yield takeEvery(IncidentsSaga.CREATE_INCIDENT, createIncidentWorker);
    yield takeEvery(IncidentsSaga.DELETE_INCIDENTS, deleteIncidentWorker);
    yield takeEvery(IncidentsSaga.EDIT_INCIDENTS, editIncidentWorker);
    yield takeEvery(IncidentsSaga.GET_INCIDENTS, getIncidentWorker);
}
