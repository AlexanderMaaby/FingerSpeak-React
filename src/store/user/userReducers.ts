import { TypedUseSelectorHook, useSelector } from "react-redux";
import IUser from "../../models/IUser";
import { UserAction } from "./userActions";

interface UserState {
    user: IUser | null
    error: string | null
}

export const useUserSelector : TypedUseSelectorHook<UserState> = useSelector;

export const userReducer = (state : UserState | null = null , action : {type: UserAction, payload: any}) => {
    switch(action.type) {
        case UserAction.FETCH_USER:
            return state;
        case UserAction.SET_ERROR:
            return action.payload;
        case UserAction.SET_USER:
            return action.payload;
        case UserAction.ADD_TO_USER_TRANSLATIONS:
            return action.payload;
        case UserAction.CLEAR_USER_TRANSLATIONS:
            return action.payload;
        default:
            return state;
    }
}