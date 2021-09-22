import React, { useState } from 'react';
import { fetchUser } from '../../api/userAPI';
import IUser from '../../models/IUser';
import InputForm from '../Translate/InputForm';

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
            <h1>Startup</h1>
            <p> {error} </p>
            {
                isLoadingUser &&
                <p>Loading...</p>
            }
            {
                user &&
                <p>Username: {user.username}</p>
            }
            <InputForm name="Username" formHandler={handleSubmitUsername} />
        </div>
    )
}

export default StartUp
