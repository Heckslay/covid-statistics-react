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
    fetchSummary() {
        this.setJwtConfig();
        return axios.get('http://127.0.0.1:8000/api/v1/get-summary', this.jwtConfig);
    },
    fetchCountryStatistics() {
        this.setJwtConfig();
        return axios.get('http://127.0.0.1:8000/api/v1/get-countries', this.jwtConfig);
    }
};

export default API;
