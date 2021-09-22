import React from 'react'
import styles from './Loader.module.css'

type LoaderProps = {
    text: string
}

const Loader = ({text} : LoaderProps) => {
    return (
        <div className={styles.LoaderContainer }>
            <p className={styles.LoaderText + " anim-bob"}>{text}</p>
            <div className={styles.Loader + " anim-spin"}>
                <img className={styles.LoaderPepe} src="https://blog.cdn.own3d.tv/resize=fit:crop,height:400,width:600/BoYRMteyQBOo9hgM2TO0" alt="pepeLoader" />
            </div>
        </div>
    )
}

export default Loader
