import { AxiosResponse } from 'axios';
import { UserData } from './users.types';

export enum UserSaga {
    GET_ALL_USERS = 'GET_ALL_USERS',
    REGISTRATION = 'REGISTRATION',
    LOGIN_USER = 'LOGIN_USER',
    AUTH_USER = 'AUTH_USER'
}

export interface GetAllUsersAction {
    type: UserSaga.GET_ALL_USERS;
}
export interface RegistrationActionPayload extends Omit<UserData, 'id'> {}

export interface RegistrationAction {
    type: UserSaga.REGISTRATION;
    payload: RegistrationActionPayload;
}
export interface LoginActionPayload {
    login: string;
    password: string;
}
export interface LoginAction {
    type: UserSaga.LOGIN_USER;
    payload: LoginActionPayload;
}

export interface AuthAction {
    type: UserSaga.AUTH_USER;
}

interface RegistrationApiArgs {
    message?: string;
}
export interface RegistrationType {
    ({
        fullName,
        login,
        password,
        dateOfBirth,
        position
    }: RegistrationActionPayload): Promise<AxiosResponse<RegistrationApiArgs>>;
}
export type RegistrationResponse = AxiosResponse<RegistrationApiArgs>;

interface GetUsersApiArgs {
    users: UserData[];
    message?: string;
}
export interface GetUsersType {
    (): Promise<AxiosResponse<GetUsersApiArgs>>;
}
export type GetUsersResponse = AxiosResponse<GetUsersApiArgs>;

interface LoginApiArgs {
    token: string;
    currentUser: string;
    message?: string;
}

export interface LoginType {
    ({ login, password }: LoginActionPayload): Promise<
        AxiosResponse<LoginApiArgs>
    >;
}

export type LoginResponse = AxiosResponse<LoginApiArgs>;

interface AuthApiArgs {
    token: string;
    currentUser: string;
    message?: string;
}
export interface AuthType {
    (): Promise<AxiosResponse<AuthApiArgs>>;
}
export type AuthResponse = AxiosResponse<AuthApiArgs>;
