import axios from 'axios';
import Cookies from 'js-cookie';
const API = {
    /* @todo: Improve this. */
    setJwtConfig() {
        this.jwtConfig = {
            headers: {
                Authorization: 'Bearer ' + (Cookies.get('token') ? Cookies.get('token') : null)
            }
        }
    },
    login(credentials) {
        this.setJwtConfig();
        return axios.post('http://127.0.0.1:8000/api/auth/login', credentials);
    },
    async checkToken(jwt) {
        this.setJwtConfig();
        this.jwtConfig.headers.Authorization = 'Bearer ' + jwt;
        return await axios.post('http://127.0.0.1:8000/api/auth/check', {}, this.jwtConfig);
    }
};

export default API;
