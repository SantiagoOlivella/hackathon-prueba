import React from 'react'
import { NavLink } from 'react-router-dom'
import { useUser } from '../context/UserContext';

export const Nav = () => {

    // Estoy importando esta función desde el estado global UserContext
    const { login, setLogin } = useUser();

    const salir=()=>{
        setLogin(false);
        localStorage.setItem('login', false);
    }

    return (
        // Inicia creación de la Nav
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div className="container">
                <NavLink className="navbar-brand" to="/home"><i className="fas fa-utensils"></i> Recetas.com <i className="fas fa-hamburger"></i></NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    {/* Verificamos con la función loguin si el usuario esta logueado para saber que pestañas mostrar en la Nav, tener en cuenta que el login lo estamos trayendo del estado global useUser */}

                    { 
                    //  Si esta logueado me muestra esta información 
                        login ?
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <NavLink className="nav-link" aria-current="page" to="/home" activeClassName="active" ><i className="fas fa-home"></i></NavLink >
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" aria-current="page" to="/recetas" activeClassName="active" >Recetas</NavLink >
                                </li>
                                <li className="nav-item">
                                    <button className="btn btn-warning nav-link " onClick={()=>salir()} >Salir</button >
                                </li>
                            </ul>
                            :
                            // Si no esta logueado esto
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <NavLink className="nav-link" aria-current="page" to="/" exact activeClassName="active" >Login</NavLink >
                                </li>
                            </ul>
                    }
                </div>
            </div>
        </nav>
    )
}
