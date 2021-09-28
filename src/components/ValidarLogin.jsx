
import { useUser } from '../context/UserContext';

export const ValidarLogin = () => {

    const { login } = useUser();


    if (login) {
        return true;
    } else {
        return false;
    }

}
