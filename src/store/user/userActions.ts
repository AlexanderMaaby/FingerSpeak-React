import IUser from "../../models/IUser"

export enum UserAction {
    FETCH_USER = 'FETCH_USER',
    SET_USER = 'SET_USER',
    SET_ERROR = 'SET_ERROR',
    ADD_TO_USER_TRANSLATIONS = 'ADD_TO_USER_TRANSLATIONS',
    CLEAR_USER_TRANSLATIONS = 'CLEAR_USER_TRANSLATIONS',
    LOGOUT_USER = 'LOGOUT_USER',
}

// Actions
export const actionFetchUser = (username : string) => ({
    type: UserAction.FETCH_USER,
    payload: username
})

export const actionSetUser = (user : IUser) => ({
    type: UserAction.SET_USER,
    payload: user
})

export const actionSetError = (error : Error) => ({
    type: UserAction.SET_ERROR,
    payload: error
})

export const actionAddToUserTranslations = (user : IUser, translation: string) => ({
    type: UserAction.ADD_TO_USER_TRANSLATIONS,
    payload: {user, translation}
})

export const actionClearUserTranslations = (user : IUser) => ({
    type: UserAction.CLEAR_USER_TRANSLATIONS,
    payload: user
})

export const actionLogoutUser = () => ({
    type : UserAction.LOGOUT_USER,
})
