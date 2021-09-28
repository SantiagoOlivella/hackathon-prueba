import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { ValidarLogin } from '../components/ValidarLogin'

export const PublicRoute = ({ component: Component, ...rest }) => {

    
    return (
        <Route {...rest} >

            {ValidarLogin() ? <Redirect to="/recetas" /> : <Component />}

        </Route>
    )
}
        // return validar() ? <Redirect to='/'/> : <Route {...props} />;