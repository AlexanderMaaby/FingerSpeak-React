import React from 'react'

const TranslationResult = () => {
    const word : string = "PTSD555"

    const createHandSignElement = () => {
        return (
            word.split("").map((letter, i, arr )=> {
                return <img src={process.env.PUBLIC_URL + '/signs/' + letter + '.png'}/>;
            })
        )
    }

    return (
        <div>
            {createHandSignElement()}
        </div>
    )
}

export default TranslationResult
