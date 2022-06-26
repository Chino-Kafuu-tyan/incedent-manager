import { Auth, AuthAction } from '../types/auth.types';

interface InitialAuthState {
    isAuth: boolean;
    currentUser: string | null;
}

const initialState: InitialAuthState = {
    isAuth: false,
    currentUser: null
};
const UsersReducer = (state = initialState, action: AuthAction) => {
    switch (action.type) {
        case Auth.LOGIN:
            return {
                ...state,
                isAuth: true,
                currentUser: action.payload
            };
        case Auth.LOGOUT:
            return {
                ...state,
                isAuth: false,
                currentUser: null
            };
        default:
            return state;
    }
};
export default UsersReducer;
