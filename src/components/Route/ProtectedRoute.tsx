import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Redirect, Route } from 'react-router'
import getCurrentSession from '../../store/localstorage'
import { actionFetchUser } from '../../store/user/userActions'
import { useUserSelector } from '../../store/user/userReducers'

type ProtectedRouteProps = {
    path: string,
    component: any, // We just use any here because finding the actual type is pain
    exact: boolean
}

const ProtectedRoute = ({path, component, exact} : ProtectedRouteProps) => {

    const dispatch = useDispatch()
    const user = useUserSelector(state => state.user)

    useEffect(() => {
        const localUser = getCurrentSession();
        if(localUser)  dispatch( actionFetchUser(localUser.username) ) 
    }, [dispatch])

    if(!user) {
        return <Redirect to="/" />
    } else {
        return <Route path={path} component={component} exact={exact}/>
    }
}

export default ProtectedRoute
