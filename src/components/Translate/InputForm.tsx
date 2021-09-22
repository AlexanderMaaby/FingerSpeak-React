import React, { useState } from 'react'
import styles from './InputForm.module.css'

type InputFormProps = {
    name: string,
    formHandler(value: string): void
}

const InputForm = ({name, formHandler} : InputFormProps) => {

    const [value, setValue] = useState<string>("")

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
                type="text" 
                onKeyUp={(e : any) => setValue(e.target.value) } />
            </div>
            <button 
            className={styles.FormButton}
            formAction="submit" 
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
