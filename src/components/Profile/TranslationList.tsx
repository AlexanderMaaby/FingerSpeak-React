import React from 'react'
import TranslationListItem from "./TranslationListItem";


const TranslationList = () => {
    return (
        <div>
            <TranslationListItem/>
            <button>Delete all translations</button>
        </div>
    )
}

export default TranslationList
