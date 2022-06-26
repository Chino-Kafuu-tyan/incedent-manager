export interface CurrentUser {
    currentUser: string;
}

export interface LoginAction {
    type: Auth.LOGIN;
    payload: string;
}

export interface LogoutAction {
    type: Auth.LOGOUT;
}

export type AuthAction = LoginAction | LogoutAction;

export enum Auth {
    LOGIN = 'LOGIN',
    LOGOUT = 'LOGOUT'
}
