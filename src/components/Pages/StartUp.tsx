import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import getCurrentSession from '../../store/localstorage';
import { actionFetchUser, actionSetUser } from '../../store/user/userActions';
import { useUserSelector } from '../../store/user/userReducers';
import InputForm from '../Translate/InputForm';
import Loader from '../UX/Loader';

const StartUp = () => {

    const [isLoadingUser, setIsLoadingUser] = useState<boolean>(false);

    const dispatch = useDispatch()
    const user = useUserSelector(state => state.user)
    const error = useUserSelector(state => state.error)
    
    const history = useHistory();

    const handleSubmitUsername = (value: string) => {
        dispatch( actionFetchUser(value) )
        setIsLoadingUser(true);
    }

    useEffect(() => {
        const localUser = getCurrentSession();
        if (localUser) dispatch( actionSetUser(localUser) )
        if (user) {
            setIsLoadingUser(false);
            history.replace("/translate")
        }
    }, [user, history, dispatch])

    return (
        <div>
            <h1>Login</h1>
            <InputForm name="Username" formHandler={handleSubmitUsername} limit={20}/>
            {
                isLoadingUser &&
                <Loader text="Signing in..." />
            }
            {
                error &&
                <p>Error: {error}</p>
            }

        </div>
    )
}

export default StartUp
