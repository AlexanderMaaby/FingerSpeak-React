import React, {useState} from 'react'
import InputForm from "./InputForm";

const TranslationResult = () => {

    const [translation, setTranslation] = useState<string | null>(null);

    const createHandSignElement = (translation : string) => {
        return (
            translation.split("").map((letter, i, arr )=> {
                return <img key={i} alt={letter} src={process.env.PUBLIC_URL + '/signs/' + letter + '.png'}/>;
            })
        )
    }
    const handleSubmitTranslate = (value : string) => {
        setTranslation(value);
    }

    return (
        <div>
            <InputForm name={"Translate"} formHandler={handleSubmitTranslate}/>
            {createHandSignElement([translation].toString())}
        </div>
    )
}

export default TranslationResult
