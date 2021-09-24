import React from 'react';
import { useUserSelector } from '../../store/user/userReducers';
import TranslationList from "../Profile/TranslationList";

const Profile = () => {

    const user = useUserSelector(state => state.user)

    if(user) {
        document.title = user.username
    }

    return (
        <>
            {
                user &&
                <>
                    <h1>Your Translations</h1>
                    <TranslationList user={user} limit={10}/>
                </>
            }
        </>
    )
}

export default Profile
