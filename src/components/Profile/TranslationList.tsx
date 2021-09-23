import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import IUser from '../../models/IUser';
import { actionClearUserTranslations } from "../../store/user/userActions";
import ErrorMessage from '../UX/ErrorMessage';
import styles from './TranslationList.module.css';
import TranslationListItem from "./TranslationListItem";

type TranslationListProps = {
    user: IUser,
    limit?: number
}

const TranslationList = ({user, limit = 10} : TranslationListProps) => {

    const dispatch = useDispatch();
    const [withoutLimit, setWithoutLimit] = useState(false)

    const onDeleteClick = () => {
        if(window.confirm("Are you sure you want to delete all translations?")) {
            if(user) dispatch( actionClearUserTranslations(user) );
        }
    }

    const onViewAllClick = () => {
        setWithoutLimit(true);
    }

    const createTranslationList = () => {
        if(!user.translations || user.translations.length < 1) {
            return <ErrorMessage message="No Translations Found" />
        }
        return user.translations.slice(withoutLimit ? 0 : -limit)
            .map((translation, i) => {
                return <TranslationListItem key={i} translation={translation} />
        })
    }

    return (
        <div>
            {
                !withoutLimit &&
                <p className={styles.LimitText}>Showing 10 most recent translations out of {user.translations.length}</p>
            }
            <div className={styles.TranslationList}>
                { createTranslationList() }
            </div>
            {
                user.translations.length > 0 &&
                <div>
                    <button 
                        className={`${styles.GeneralButton} ${styles.ShowAllButton}`} 
                        onClick={onViewAllClick}
                        disabled={withoutLimit || user.translations.length <= (limit ? limit : 10)}>
                        View All
                    </button>
                    <button className={`${styles.GeneralButton} ${styles.DeleteButton}`} onClick={onDeleteClick}>
                        Delete All
                    </button>
                </div>
            }
        </div>
    )
}

export default TranslationList
