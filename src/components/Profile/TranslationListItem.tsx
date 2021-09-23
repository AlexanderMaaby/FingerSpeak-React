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

    const createHandSignElement = (translation : string) => {
        return (
            translation.split("").map((letter, i, arr )=> {
                return <img
                    key={i}
                    alt={letter}
                    width="3%"
                    src={process.env.PUBLIC_URL + '/signs/' + letter + '.png'}/>;
            })
        )
    }

    const createListElements = () => {
        if(translationList === undefined)
            return <p className={styles.List}>No translations found</p>
        if(translationList.length === 0) {
            return <p className={styles.List}>No translations found</p>
        }
        else {
            return (
                translationList.map((word, i, arr )=> {
                    if(arr.length-11 < i) {
                        return <p key={i}><span className={styles.List}>{word} -</span>{createHandSignElement(word)}</p>
                    }
                    return null
                })
            )
        }
    }

    return (
        <div>
            <h3 className={styles.List}>Last 10 translations</h3>
            {createListElements()}
        </div>
    )
}

export default TranslationListItem
