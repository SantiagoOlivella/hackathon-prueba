import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import { useUser } from '../context/UserContext';

export const Login = () => {
    
    const history=useHistory();
    const [email, setEmail] = useState('admin@admin.com');
    const [passWord, setPassWord] = useState('');
    const {setLogin}=useUser();

    const loginUser= (e)=>{
        e.preventDefault();
        if(email==="admin@admin.com" && passWord==="123"){
            localStorage.setItem('login', JSON.stringify(true));
            setLogin(true);
            history.push('/home');
        }else{
            localStorage.setItem('login', JSON.stringify(false));
            setLogin(false)
            alert('Contraseña Errada')
        }
    }


    return (
        <div className="container mt-5">
            <div className="d-flex justify-content-center">
                <div className="col-12 col-lg-8">
                    <div className="card">
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
    )
}
