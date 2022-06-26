import { combineReducers } from 'redux';
import incidentsReducer from './incidents.reducer';
import authReducer from './auth.reducer';
import isShowModalReducer from './is-show-modal.reducer';
import usersReducer from './users.reducer';
import alertReducer from './alert.reducer';

export const rootReducer = combineReducers({
    auth: authReducer,
    user: usersReducer,
    isShowModal: isShowModalReducer,
    incident: incidentsReducer,
    alertMessage: alertReducer
});

export type RootState = ReturnType<typeof rootReducer>;
