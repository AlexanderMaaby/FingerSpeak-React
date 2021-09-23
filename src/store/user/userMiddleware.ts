import { addToTranslations, fetchUser } from "../../api/userAPI";
import { actionSetError, actionSetUser, UserAction } from "./userActions";

// I have no idea what types dispatch, next and action are :')

export const userMiddleware = ({dispatch} : any) => (next : any) => async (action : any) => {
    next(action);
    if(action.type === UserAction.FETCH_USER) {
        const [error, user] = await fetchUser(action.payload)
        dispatch(actionSetUser(user), actionSetError(error))
    } else if (action.type === UserAction.ADD_TO_USER_TRANSLATIONS) {
        const [error, user] = await addToTranslations(action.payload.user, action.payload.translation)
        dispatch(actionSetUser(user), actionSetError(error))
    } else if (action.type === UserAction.CLEAR_USER_TRANSLATIONS) {

    }
}