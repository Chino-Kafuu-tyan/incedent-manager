import { Auth } from '../types/auth.types';
import { UserAction, UsersActionsTypes, UserData } from '../types/users.types';

interface UsersState {
    users: UserData[];
}

const initialState: UsersState = {
    users: []
};

const usersReducer = (state = initialState, action: UserAction): UsersState => {
    switch (action.type) {
        case UsersActionsTypes.FETCH_USERS_SUCCESS:
            return {
                ...state,
                users: action.payload
            };
        case Auth.LOGOUT:
            return {
                ...state,
                users: []
            };
        default:
            return state;
    }
};
export default usersReducer;
