import React from 'react'
import { Redirect, Route } from 'react-router-dom';
import { ValidarLogin } from '../components/ValidarLogin';


export const PrivateRoute = ({ component: Component, ...rest }) => {

       return (
        <Route {...rest} >

            {ValidarLogin() ? <Component /> : <Redirect to="/" />}

        </Route>
    )

    // return validar() ? <Route {...props} /> : <Redirect to='/' />;

}
