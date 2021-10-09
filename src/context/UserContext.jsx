import { createContext, useContext, useEffect, useState } from "react";

// Creamos el estado global para validar si el usuario esta logueado
const userConterx = createContext();

export const UserProvider = (props) => {
    const [login, setLogin] = useState(false);

    // Evaluamos el localStorage a ver como esta el login y con el resultado seteamos la funcion

    useEffect(() => {
        if (localStorage.getItem('login') === "true") {
            setLogin(true);
        } else {
            setLogin(false);
        }
    }, []);

    // Creamos una constante que nos va a guardar el valor del Login y del SetLogin
    const valor = {
        login,
        setLogin
    };
    // Retornamos el userCintex.provider y le mandamos el valor y los props
    return <userConterx.Provider value={valor} {...props} />
};

// Exportamos el estado para que se pueda usar en toda la aplicación
export function useUser() {
    const context = useContext(userConterx);
    if (!context) {
        throw new Error('useUsuario debe estar dentro del proveedor userProvider')
    }
    return context
}
