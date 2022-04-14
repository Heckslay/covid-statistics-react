import React, {useState} from 'react';
import API from "../services/API";
import Cookies from 'js-cookie';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = (props) => {
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    const submitLogin = async () => {
        API.login({email: email, password: password}).then((res) => {
            if (res.status === 200 && res.data.token) {
                Cookies.set('token', res.data.token);
                Cookies.set('max-age', '604800');
                props.setStatus(true);
            } else {
                toast("Invalid Credentials.");
            }
        }).catch((err) => {
            toast("Invalid Credentials.");
        });

    };

    return <div className="container">
        <div id="login">
            <div className="row">
                <div className="col-12">
                    <input type="text" className="form-control login-input" placeholder="Email"
                           onChange={(e) => setEmail(e.target.value)}/>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-12">
                    <input type="password" className="form-control login-input" placeholder="Password"
                           onChange={(e) => setPassword(e.target.value)}/>
                </div>
            </div>
            <div className="row" id="loginButtonBlock">
                <div className="col-12">
                    <button className="btn btn-primary login-btn" onClick={() => submitLogin()}>
                        Login
                    </button>
                </div>
            </div>
        </div>
        <ToastContainer/>
    </div>
};

export default Login;
