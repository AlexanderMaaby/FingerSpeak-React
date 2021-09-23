import React from 'react'
import styles from './TranslationList.module.css'
import {useUserSelector} from "../../store/user/userReducers";

const TranslationListItem = () => {

    const user = useUserSelector(state => state.user)
    let translationList : string[];
    const setTranslationList = () => {
        if(user?.translations) translationList = user.translations
    }
    setTranslationList()

    const createListElements = () => {
        return (
            translationList.map((word, i, arr )=> {
                if(arr.length-11 < i) {
                    return <p key={i}>{word}</p>
                }
            })
        )
    }

    return (
        <div>
            <h3 className={styles.List}>Last 10 translations</h3>
            {createListElements()}
        </div>
    )
}

export default TranslationListItem
