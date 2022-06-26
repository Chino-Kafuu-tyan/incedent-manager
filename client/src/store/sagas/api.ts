import axios from 'axios';
import {
    CreateIncidentType,
    DeleteIncidentType,
    EditIncidentType,
    GetIncidentType
} from '../types/saga-incidents.types';
import {
    AuthType,
    GetUsersType,
    LoginType,
    RegistrationType
} from '../types/saga-user.types';

const ownAxios = axios.create({
    // baseURL: '/api/'
    baseURL: 'http://localhost:5000/api/',
    headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
    }
});

export const registrationApi: RegistrationType = (registrationArgs) =>
    ownAxios.post('auth/registration', registrationArgs);

export const loginApi: LoginType = (loginArgs) =>
    ownAxios.post('auth/login', loginArgs);

export const authApi: AuthType = () => ownAxios.get('auth/refresh');

export const getUsersApi: GetUsersType = () => ownAxios.get('users');

export const createIncidentApi: CreateIncidentType = (createIncidentArgs) =>
    ownAxios.post('incidents', createIncidentArgs);

export const getIncidentsApi: GetIncidentType = () => ownAxios.get('incidents');

export const deleteIncidentsApi: DeleteIncidentType = (id) =>
    ownAxios.delete(`incidents/${id}`);

export const editIncidentApi: EditIncidentType = ({
    id,
    ...editIncidentArgs
}) => ownAxios.put(`incidents/${id}`, editIncidentArgs);
