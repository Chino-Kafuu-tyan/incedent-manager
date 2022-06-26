import {
    LoginActionPayload,
    LoginAction
} from '../../../store/types/saga-user.types';

export interface LoginValues {
    login: string;
    password: string;
}
export interface LoginProps {
    alert: { message?: string } | null;
    loginActionProps: (loginArgs: LoginActionPayload) => LoginAction;
}
export interface LoginFormProps {
    onFinish: (value: LoginValues) => void;
}
