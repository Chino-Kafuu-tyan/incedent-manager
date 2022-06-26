import { LoginAction, Auth, LogoutAction } from '../types/auth.types';

export const loginUser = (currentUser: string): LoginAction => ({
    type: Auth.LOGIN,
    payload: currentUser
});

export const logoutUser = (): LogoutAction => ({ type: Auth.LOGOUT });
