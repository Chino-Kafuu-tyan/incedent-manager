import {
    UserData,
    UsersActionsTypes,
    FetchUserSuccessAction
} from '../types/users.types';

export const fetchUsersSuccess = (
    users: UserData[]
): FetchUserSuccessAction => ({
    type: UsersActionsTypes.FETCH_USERS_SUCCESS,
    payload: users
});
