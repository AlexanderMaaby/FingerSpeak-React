import React from 'react'
import TranslationListItem from "./TranslationListItem";
import styles from './TranslationList.module.css'
import {useUserSelector} from "../../store/user/userReducers";
import {useDispatch} from "react-redux";
import {actionClearUserTranslations} from "../../store/user/userActions";

const TranslationList = () => {

    const user = useUserSelector(state => state.user)
    const dispatch = useDispatch()

    const onDeleteClick = () => {
        console.log("Button is clicked")
        if(user)
            dispatch(actionClearUserTranslations(user))
    }

    return (
        <div>
            <TranslationListItem/>
            <button className={styles.DeleteButton} onClick={onDeleteClick}>Delete all translations</button>
        </div>
    )
}

export default TranslationList
