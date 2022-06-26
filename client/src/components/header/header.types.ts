import { LogoutAction } from '../../store/types/auth.types';

export interface HeaderProps {
    isAuth: boolean;
    logoutUserAction: () => LogoutAction;
    currentUser: string | null;
    locationURL: string;
}
