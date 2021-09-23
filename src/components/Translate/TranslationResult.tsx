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
                return <img key={i} alt={letter} src={process.env.PUBLIC_URL + '/signs/' + letter + '.png'}/>;
            })
        )
    }
    const handleSubmitTranslate = (value : string) => {
        setTranslation(value);
        if (user) dispatch(actionAddToUserTranslations(user, value))
    }

    return (
        <div>
            <InputForm name={"Translate"} formHandler={handleSubmitTranslate}/>
            {createHandSignElement([translation].toString())}
        </div>
    )
}

export default TranslationResult
