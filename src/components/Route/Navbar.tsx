import React from 'react'
import { useHistory } from 'react-router'
import { useUserSelector } from '../../store/user/userReducers';
import styles from './Navbar.module.css'
import {actionLogoutUser} from "../../store/user/userActions";
import {useDispatch} from "react-redux";

const Navbar = () => {

    const history = useHistory();

    const dispatch = useDispatch()

    const user = useUserSelector(state => state.user);

    const routeTo = (path: string) => {
        history.push(path);
    }

    const handleLogout = () => {
        if(window.confirm("Are you sure you want to logout?")) {
            dispatch(actionLogoutUser())
        }
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
                    <li className={styles.LogOut}  onClick={() => handleLogout()} >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 970.06 741.43"><path d="M569.34,648.47h-7.88q-133.49,0-267,.07a42.28,42.28,0,0,1-31.78-13.36c-6.71-6.9-10.36-15.11-10.36-24.82,0-73.64-.15-147.28.09-220.93.07-21.58,19.07-37.93,42.95-37.94q121.52,0,243,0h30.9v-15c0-49.92.35-99.83-.15-149.74-.2-20.55,17.61-37.21,33.62-38.44,13.66-1.06,26.08,2.74,36.14,12.18q122.4,114.82,244.62,229.83,43.82,41.18,87.7,82.29c18.29,17.14,18.39,37.59.11,54.78Q805.46,683.24,639.52,839.07c-17.47,16.41-41.09,17.19-58.27,2.16-8.61-7.52-12-17-12-28.33.16-52,.08-103.92.08-155.87Z" transform="translate(-14.97 -129.29)"/><path d="M15.24,499.59c0-66.69,1-133.39-.24-200-1.7-92.38,74-157.83,147.7-167.77a274.58,274.58,0,0,1,35.45-2.35c63.21-.22,126.41-.11,189.62-.1,16,0,22.69,5.71,23.32,21.64a262.34,262.34,0,0,1-1,35.35c-1.26,13.14-6.6,16.82-19.91,16.8-66.27-.08-132.55-.44-198.82.13-46.41.41-86.26,33-95.5,77.05A114.16,114.16,0,0,0,94,303.45q-.16,197-.11,394c0,47,29.14,84.7,75,95.67a137,137,0,0,0,31,3.48c63.2.31,126.41.15,189.62.16,14.58,0,19.82,5.19,21.61,19.48a133.45,133.45,0,0,1-1.64,42.07c-1.09,5.66-3.73,9.42-9.6,10.37-4.22.69-8.45,1.82-12.67,1.83-64.84.12-129.69.46-194.53,0C129.35,870,78.84,843.87,42,792.29c-18-25.2-26.5-53.89-26.67-84.67C15,638.28,15.25,568.93,15.24,499.59Z" transform="translate(-14.97 -129.29)"/></svg>
                    </li>
                </ul>
            }   
        </nav>
    )
}

export default Navbar
