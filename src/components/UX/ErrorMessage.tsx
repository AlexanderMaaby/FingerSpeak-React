import React from 'react'
import styles from './Error.module.css'

type ErrorProps = {
    message: string
}

const ErrorMessage = ({message} : ErrorProps) => {
    return (
        <div className={styles.ErrorContainer}>
            <p>{message}</p>
        </div>
    )
}

export default ErrorMessage
