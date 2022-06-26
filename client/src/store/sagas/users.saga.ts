import { put, call, takeEvery } from 'redux-saga/effects';
import { fetchUsersSuccess } from '../actions/users.action';
import { loginUser } from '../actions/auth.action';
import {
    UserSaga,
    RegistrationResponse,
    GetUsersResponse,
    AuthResponse,
    LoginResponse,
    RegistrationAction,
    LoginAction
} from '../types/saga-user.types';
import { authApi, getUsersApi, loginApi, registrationApi } from './api';
import { Auth } from '../types/auth.types';
import { serverNotification } from '../actions/server-notification-saga.action';

function* registrationWorker(action: RegistrationAction) {
    try {
        const response: RegistrationResponse = yield call(
            registrationApi,
            action.payload
        );
        yield put(serverNotification(response.data.message));
    } catch (e) {
        yield put(serverNotification(e.response.data.message));
    }
    // в будующем обдумать как исправить на нормальный код
    try {
        const response: LoginResponse = yield call(loginApi, action.payload);
        yield put(loginUser(response.data.currentUser));
        yield localStorage.setItem('token', response.data.token);
    } catch (e) {
        yield put(serverNotification(e.response.data.message));
    }
}

function* loginWorker(action: LoginAction) {
    try {
        const response: LoginResponse = yield call(loginApi, action.payload);
        yield put(loginUser(response.data.currentUser));
        yield localStorage.setItem('token', response.data.token);
    } catch (e) {
        yield put(serverNotification(e.response.data.message));
    }
}

function* logoutWorker() {
    try {
        yield localStorage.removeItem('token');
    } catch (e) {
        yield put(serverNotification(e.response.data.message));
    }
}

function* getUsersWorker() {
    try {
        const response: GetUsersResponse = yield call(getUsersApi);
        yield put(fetchUsersSuccess(response.data.users));
    } catch (e) {
        yield put(serverNotification(e.response.data.message));
    }
}
function* authWorker() {
    try {
        const response: AuthResponse = yield call(authApi);
        yield put(loginUser(response.data.currentUser));
        yield localStorage.setItem('token', response.data.token);
    } catch (e) {
        yield localStorage.removeItem('token');
        yield put(serverNotification(e.response.data.message));
    }
}

export function* usersWatcher() {
    yield takeEvery(UserSaga.REGISTRATION, registrationWorker);
    yield takeEvery(UserSaga.LOGIN_USER, loginWorker);
    yield takeEvery(Auth.LOGOUT, logoutWorker);
    yield takeEvery(UserSaga.GET_ALL_USERS, getUsersWorker);
    yield takeEvery(UserSaga.AUTH_USER, authWorker);
}
