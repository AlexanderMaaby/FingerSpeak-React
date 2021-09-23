import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { actionFetchUser } from '../../store/user/userActions';
import { useUserSelector } from '../../store/user/userReducers';
import InputForm from '../Translate/InputForm';
import Loader from '../UX/Loader';

const StartUp = () => {

    const [isLoadingUser, setIsLoadingUser] = useState<boolean>(false);
    console.log(isLoadingUser)

    const dispatch = useDispatch()
    const user = useUserSelector(state => state.user)
    const error = useUserSelector(state => state.error)
    
    const history = useHistory();

    const handleSubmitUsername = (value: string) => {
        dispatch( actionFetchUser(value) )
        setIsLoadingUser(true);
    }

    useEffect(() => {
        if (user) {
            setIsLoadingUser(false);
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

        </div>
    )
}

export default StartUp
