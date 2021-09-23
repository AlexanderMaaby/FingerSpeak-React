import React, {useState} from 'react'
import InputForm from "./InputForm";
import {useDispatch} from "react-redux";
import {actionAddToUserTranslations} from "../../store/user/userActions";
import {useUserSelector} from "../../store/user/userReducers";
import styles from './TranslationResult.module.css';

const TranslationResult = () => {

    const [translation, setTranslation] = useState<string | null>(null);

    const dispatch = useDispatch()
    const user = useUserSelector(state => state.user)

    const createHandSignElement = (translation : string) => {
        return (
            translation.split("").map((letter, i)=> {
                return (
                <span key={i} className={styles.LetterContainer}>
                    <img className={styles.HandSign}
                        width="10%"
                        alt={letter}
                        src={process.env.PUBLIC_URL + '/signs/' + letter + '.png'}/>
                    <p className={styles.HandLetter}>{letter}</p>
                </span>
                )
            })
        )
    }

    const handleSubmitTranslate = (value : string) => {
        value = value.replace(/[^a-zA-Z]+/g, '');
        //If user session is active and the length of the word is still over 0 after regex trim.
        if (user && value.length > 0) {
            dispatch(actionAddToUserTranslations(user, value));
            setTranslation(value);
        }
    }

    return (
        <div className={styles.TranslateContainer}>
            <InputForm name={"Translate"} formHandler={handleSubmitTranslate} limit={40}/>
            {
                translation &&
                <>
                    <div className={styles.HeaderContainer}>
                        <p>Result</p>
                    </div>
                    <article className={styles.ResultContainer}>
                        <div>
                            {createHandSignElement([translation].toString())}
                        </div>
                    </article>
                </>
            }
        </div>
    )
}

export default TranslationResult
