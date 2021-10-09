
import { useUser } from '../context/UserContext';

export const ValidarLogin = () => {

    // Me traigo la constante login del estado Global y la valido para que me retorne el booleano

    const { login } = useUser();

    if (login) {
        return true;
    } else {
        return false;
    }

}
