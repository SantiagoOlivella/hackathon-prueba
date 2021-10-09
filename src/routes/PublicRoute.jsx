import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { ValidarLogin } from '../components/ValidarLogin'

export const PublicRoute = ({ component: Component, ...rest }) => {

     // Creo el componente de ruta pública y evaluo si estoy logueado usando el componente validar login
    
    return (
        <Route {...rest} >

            {/* si estoy logueado me dirige a la ruta especificada si no al componente que estoy llamando */}

            {ValidarLogin() ? <Redirect to="/recetas" /> : <Component />}

        </Route>
    )
}
        // return validar() ? <Redirect to='/'/> : <Route {...props} />;