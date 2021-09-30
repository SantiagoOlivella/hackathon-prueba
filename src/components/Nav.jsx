import React from 'react'
import { NavLink } from 'react-router-dom'
import { useUser } from '../context/UserContext';

export const Nav = () => {

    const { login, setLogin } = useUser();

    const salir=()=>{
        setLogin(false);
        localStorage.setItem('login', false);
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <NavLink className="navbar-brand" to="/home">Navbar</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">

                    {
                        login ?
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <NavLink className="nav-link" aria-current="page" to="/home" activeClassName="active" >Home</NavLink >
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" aria-current="page" to="/recetas" activeClassName="active" >Recetas</NavLink >
                                </li>
                                <li className="nav-item">
                                    <button className="btn btn-warning nav-link " onClick={()=>salir()} >Salir</button >
                                </li>
                            </ul>
                            :
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
