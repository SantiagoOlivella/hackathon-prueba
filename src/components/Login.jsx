import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useUser } from '../context/UserContext';
import { LoginPage } from '../pages/LoginPage';

export const Login = () => {
    
    const history=useHistory();
    const [email, setEmail] = useState('admin@admin.com');
    const [passWord, setPassWord] = useState('');
    const {setLogin}=useUser();

    // inicia creación de funcion para el login y cuando nos loguemos guardamos el logueo en el localStorage
    const loginUser= (e)=>{
        e.preventDefault();
        if(email==="admin@admin.com" && passWord==="123"){
            localStorage.setItem('login', JSON.stringify(true));
            setLogin(true);
            history.push('/home');
        }else{
            localStorage.setItem('login', JSON.stringify(false));
            setLogin(false)
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Contraseña errada!',
                footer: 'Si no tienes la contraseña comunicate con el administrador'
              })
        }
    }
    // Finaliza creación de función login

    return (
        <div className="container mt-5">
            {/* Importamos la página de logueo */}
            <LoginPage/>
            {/* Creamos el formulario para el logueo */}
            <div className="d-flex justify-content-center">
                <div className="col-12 col-lg-4 m-3">
                    <div className="card" id="cardLogin">
                        <div className="card-body">
                            <form onSubmit={loginUser} >
                                <div className="mb-3">
                                    <input type="email" placeholder="Usuario" value={email} autoFocus className="form-control" onChange={e => setEmail(e.target.value)} />
                                </div>
                                <div className="mb-3">
                                    <input type="password" placeholder="Contraseña" className="form-control" onChange={e => setPassWord(e.target.value)} />
                                </div>
                                <button className="btn btn-primary form-control" type="submit">Ingresar</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        // Finaliza creación del formulario
    )
}
