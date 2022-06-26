import { FormInstance } from 'antd';
import { Moment } from 'moment';
import {
    RegistrationActionPayload,
    RegistrationAction
} from '../../../store/types/saga-user.types';

export interface RegistrationValues {
    fullName: string;
    login: string;
    password: string;
    dateOfBirth: Moment;
    position: string;
}
export interface RegistrationProps {
    alert: { message?: string } | null;
    registrationAction: (
        registrationArgs: RegistrationActionPayload
    ) => RegistrationAction;
}
export interface RegistrationFormProps {
    form: FormInstance;
    onFinish: (values: RegistrationValues) => void;
}
