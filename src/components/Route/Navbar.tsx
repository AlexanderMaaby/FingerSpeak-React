import React from 'react'
import { useHistory } from 'react-router'
import styles from './Navbar.module.css'

const Navbar = () => {

    const history = useHistory();

    const routeTo = (path: string) => {
        history.push(path);
    }

    return (
        <nav className={styles.NavbarContainer}>
            <h1 onClick={() => routeTo("/")} >FingerSpeak</h1>
            <ul>
                <li onClick={() => routeTo("/translate")} >
                    Translate
                </li>
                <li onClick={() => routeTo("/profile")} >
                    Profile
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
