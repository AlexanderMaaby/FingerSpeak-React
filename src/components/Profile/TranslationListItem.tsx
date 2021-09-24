import React from 'react';
import styles from './TranslationListItem.module.css';

type TranslationListItemProps = {
    translation: string
}

const TranslationListItem = ({translation} : TranslationListItemProps) => {

    const createHandSignElement = (translation : string) => {
        return (
            translation.trim().split("").map((letter, i)=> {
                return <img
                    key={i}
                    alt={letter}
                    width="3%"
                    src={process.env.PUBLIC_URL + '/signs/' + letter.toLowerCase() + '.png'}/>;
            })
        )
    }

    return (
        <div className={styles.ItemContainer}>
            <div className={styles.TranslationItemFlair}></div>
            <div className={styles.TranslationItemContainer}>
                <div className={styles.TranslationItem}> 
                    <p className={styles.ListItemDescriptor}> Original: </p>
                    <p className={styles.OriginalWord}>"{translation}"</p>
                </div>
                <div className={styles.TranslationItem}>
                    <p className={styles.ListItemDescriptor}> Result: </p>
                    <div className={styles.ListTranslation}>
                    {createHandSignElement(translation)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TranslationListItem
