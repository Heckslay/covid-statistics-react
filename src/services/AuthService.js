import Cookies from "js-cookie";

const isAuth = () => {
    if (!Cookies.get('token')) {
        return false;
    }
    return true;
};

export default isAuth;