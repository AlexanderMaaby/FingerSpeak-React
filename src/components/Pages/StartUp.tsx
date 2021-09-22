import React, { useState } from 'react';
import { fetchUser } from '../../api/userAPI';
import IUser from '../../models/IUser';
import InputForm from '../Translate/InputForm';
import Loader from '../UX/Loader';

const StartUp = () => {

    const [isLoadingUser, setIsLoadingUser] = useState<boolean>(false);
    const [user, setUser] = useState<IUser | null>(null)
    const [error, setError] = useState<string | null>(null);

    const handleSubmitUsername = async (value: string) => {
        setIsLoadingUser(true);
        const [error, user] = await fetchUser(value);
        setError(error)
        setUser(user);
        setIsLoadingUser(false);
    }

    return (
        <div>
            <h2>Login</h2>
            <InputForm name="Username" formHandler={handleSubmitUsername} />
            <p> {error} </p>
            {
                isLoadingUser &&
                <Loader text="Signing in..." />
            }
            {
                user &&
                <p>Username: {user.username}</p>
            }
        </div>
    )
}

export default StartUp
