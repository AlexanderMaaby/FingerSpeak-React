import React from 'react'

const TranslationListItem = () => {

    const translationList : string[] = ["hello", "happy", "attenåttien", "banan", "soconfused", "meowmeow", "mertest", "enda et element",
    "meretull", "erdet10snart?", "prolly", "entiltobesure"];

    const createListElements = () => {
        return (
            translationList.map((x, i, arr )=> {
                if(arr.length-11 < i) {
                    return <p key={x}>{x}</p>
                }
            })
        )
    }

    return (
        <div>
            <h3>Liste =)</h3>
            {createListElements()}
        </div>
    )
}

export default TranslationListItem
