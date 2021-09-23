import { createContext, useContext, useState } from "react";


const userConterx = createContext();

export const UserProvider = (props) => {
    const [login, setLogin] = useState(false);
    const valor = {
        login,
        setLogin
    };

    return <userConterx.Provider value={valor} {...props}/>
};

export function useUser(){
    const context=useContext(userConterx);
    if(!context){
        throw new Error('useUsuario debe estar dentro del proveedor userProvider')
    }
    return context
}
