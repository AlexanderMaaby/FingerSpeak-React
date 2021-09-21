import React, { useState } from 'react'

type InputFormProps = {
    name: string,
    formHandler(value: string): void
}

const InputForm = ({name, formHandler} : InputFormProps) => {

    const [value, setValue] = useState<string>("")

    return (
        <form onSubmit={e => {
            e.preventDefault();
            formHandler(value);
            }}>
            <div>
                <label>{name}</label>
                <input placeholder={name} 
                type="text" 
                onKeyUp={(e : any) => setValue(e.target.value) } />
            </div>
            <button formAction="submit" onClick={e => {
                e.preventDefault()
                formHandler(value)
                }}>
                GO
            </button>
        </form>
    )
}

export default InputForm
