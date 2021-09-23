import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { actionAddToUserTranslations, actionClearUserTranslations, actionFetchUser } from '../../store/user/userActions';
import { useUserSelector } from '../../store/user/userReducers';
import InputForm from '../Translate/InputForm';
import Loader from '../UX/Loader';

const StartUp = () => {

    const [isLoadingUser, setIsLoadingUser] = useState<boolean>(false);
    
    /*
    const [user, setUser] = useState<IUser | null>(null)
    const [error, setError] = useState<string | null>(null);
    */

    const dispatch = useDispatch()
    const user = useUserSelector(state => state.user)
    const error = useUserSelector(state => state.error)
    
    const history = useHistory();

    const handleSubmitUsername = async (value: string) => {
        setIsLoadingUser(true);
        dispatch( actionFetchUser(value) )
        setIsLoadingUser(false);
    }

    useEffect(() => {
        if (user) {
            history.push("/translate")
        }
    }, [user, history])

    return (
        <div>
            <h2>Login</h2>
            <InputForm name="Username" formHandler={handleSubmitUsername} />
            {
                isLoadingUser &&
                <Loader text="Signing in..." />
            }
            {
                error &&
                <p>Error: {error}</p>
            }
            {
                user &&
                <>
                    <p>Username: {user.username}</p>
                    <button onClick={() => {
                        dispatch( actionAddToUserTranslations(user ,"Startup Test Add") )
                    }}> Add to </button>
                    <button onClick={() => {
                        dispatch( actionClearUserTranslations(user) )
                    }}> Clear </button>
                </>
            }

        </div>
    )
}

export default StartUp
