import { LogoutAction } from './auth.types';

export enum UsersActionsTypes {
    FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS'
}
export interface UserData {
    fullName: string;
    login: string;
    password: string;
    dateOfBirth: string;
    position: string;
    id: string;
}

export interface FetchUserSuccessAction {
    type: UsersActionsTypes.FETCH_USERS_SUCCESS;
    payload: UserData[];
}

export type UserAction = FetchUserSuccessAction | LogoutAction;
