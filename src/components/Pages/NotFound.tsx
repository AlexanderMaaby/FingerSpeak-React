import React from 'react'
import { useHistory } from 'react-router'
import styles from './NotFound.module.css'

const NotFound = () => {

    const history = useHistory();

    document.title = "404 - Not Found"

    const onTakeBack = () => {
        history.replace("/");
    }

    return (
        <div className={styles.NotFoundBody} >
            <h1>404 Not Found</h1>
            <p> Whoops! Looks like you got lost! </p>
            <button className={styles.TakeBackButton} onClick={onTakeBack}> Take Me Back </button>
        </div>
    )
}

export default NotFound
