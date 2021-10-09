import React from 'react'
import { Redirect, Route } from 'react-router-dom';
import { ValidarLogin } from '../components/ValidarLogin';


export const PrivateRoute = ({ component: Component, ...rest }) => {

    // Creo el componente de ruta privada y evaluo si estoy logueado usando el componente validar login

    return (
        <Route {...rest} >

            {/* Si estoy logueado retorno el componente que especifico en la ruta y si no me dirige al Login */}

            {ValidarLogin() ? <Component /> : <Redirect to="/" />}

        </Route>
    )

    // return validar() ? <Route {...props} /> : <Redirect to='/' />;

}
