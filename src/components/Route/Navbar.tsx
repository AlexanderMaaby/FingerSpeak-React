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
            <h1 className={styles.NavTitle} onClick={() => routeTo("/")} >FingerSpeak</h1>
            {
                user &&
                <ul>
                    <li onClick={() => routeTo("/translate")} >
                        <p>Translate</p>
                    </li>
                    <li onClick={() => routeTo("/profile")} >
                        <img src={`${process.env.PUBLIC_URL}/base-avatar.png`} alt="User Avatar" />
                        <p>{user ? user.username : "Profile"}</p>
                    </li>
                </ul>
            }   
        </nav>
    )
}

export default Navbar
