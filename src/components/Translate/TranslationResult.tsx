import React, {useState} from 'react'
import InputForm from "./InputForm";
import {useDispatch} from "react-redux";
import {actionAddToUserTranslations} from "../../store/user/userActions";
import {useUserSelector} from "../../store/user/userReducers";

const TranslationResult = () => {

    const [translation, setTranslation] = useState<string | null>(null);
    const user = useUserSelector(state => state.user)
    const dispatch = useDispatch()

    const createHandSignElement = (translation : string) => {
        return (
            translation.split("").map((letter, i, arr )=> {
                return <img
                    key={i}
                    alt={letter}
                    width="10%"
                    src={process.env.PUBLIC_URL + '/signs/' + letter + '.png'}/>;
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
        <div>
            <InputForm name={"Translate"} formHandler={handleSubmitTranslate}/>
            {createHandSignElement([translation].toString())}
        </div>
    )
}

export default TranslationResult
