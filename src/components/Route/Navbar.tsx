import React from 'react'
import { useHistory } from 'react-router'
import { useUserSelector } from '../../store/user/userReducers';
import styles from './Navbar.module.css'

const Navbar = () => {

    const history = useHistory();

    const user = useUserSelector(state => state.user);

    const routeTo = (path: string) => {
        history.push(path);
    }

    return (
        <nav className={styles.NavbarContainer}>
            <h1 onClick={() => routeTo("/")} >FingerSpeak</h1>
            {
                user &&
                <ul>
                    <li onClick={() => routeTo("/translate")} >
                        Translate
                    </li>
                    <li onClick={() => routeTo("/profile")} >
                        {user ? user.username : "Profile"}
                    </li>
                </ul>
            }   
        </nav>
    )
}

export default Navbar
