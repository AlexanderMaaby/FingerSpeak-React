import React, { useState } from 'react'
import styles from './InputForm.module.css'

type InputFormProps = {
    name: string,
    formHandler(value: string): void,
    limit?: number | undefined,
    autofocus?: boolean;
}

const InputForm = ({name, formHandler, limit, autofocus = false} : InputFormProps) => {

    const [value, setValue] = useState<string>("")
    const [danger, setDanger] = useState(false);

    const handleValueChange = (input : string) => {
        if (limit) {
            limit - value.length < 10 ? setDanger(true) : setDanger(false);
            if(limit - value.length >= 0) { setValue(input); }
        } else {
            setValue(input);
        }
    }

    return (
        <form 
        className={styles.FormContainer}
        onSubmit={e => {
            e.preventDefault(); // Prevent HTML reload on submit
            formHandler(value);
            }}>
            <div className={styles.FormInputContainer}>
                <input 
                className={styles.FormInput}
                placeholder={name} 
                maxLength={limit ? limit : 100}
                type="text" 
                autoFocus={true}
                onChange={(e : any) => handleValueChange(e.target.value)} />
                {
                    limit &&
                    <p className={danger ? styles.Danger : ""}>{limit - value.length}</p>
                }
            </div>
            <button 
            className={styles.FormButton}
            formAction="submit" 
            disabled={value.length < 1}
            onClick={e => {
                e.preventDefault() // Prevent HTML reload on submit
                formHandler(value)
                }}>
                {">"}
            </button>
        </form>
    )
}

export default InputForm
