import {
    UserSaga,
    GetAllUsersAction,
    RegistrationAction,
    LoginAction,
    AuthAction,
    RegistrationActionPayload,
    LoginActionPayload
} from '../types/saga-user.types';

export const getAllUsers = (): GetAllUsersAction => ({
    type: UserSaga.GET_ALL_USERS
});

export const registration = (
    registrationArgs: RegistrationActionPayload
): RegistrationAction => ({
    type: UserSaga.REGISTRATION,
    payload: registrationArgs
});

export const loginAction = (loginArgs: LoginActionPayload): LoginAction => ({
    type: UserSaga.LOGIN_USER,
    payload: loginArgs
});
// export const getCurrentUserAction =  ():
export const auth = (): AuthAction => ({
    type: UserSaga.AUTH_USER
});
