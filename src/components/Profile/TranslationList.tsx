import React from 'react'
import TranslationListItem from "./TranslationListItem";
const TranslationList = () => {

    const onDeleteClick = () => {
        console.log("KNAPPTRYKK")
    }

    return (
        <div>
            <TranslationListItem/>
            <button onClick={onDeleteClick}>Delete all translations</button>
        </div>
    )
}

export default TranslationList
