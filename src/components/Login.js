import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginUser, logoutUser } from '../store/Actions/LoginAction';
import "./Login.css";


function Login() {
    const [uname, setUname] = useState('');
    const [pwd, setPwd] = useState('');
    const navigate = useNavigate();
    const [formErrors, setFormErrors] = useState({});

    const dispatch = useDispatch();

    const doLogin = () => {
        let errors = {};
        if (!uname) {
            errors['userNameError'] = 'Username required';
        }
        if (!pwd) {
            errors['passwordError'] = 'Password required';
        }
        setFormErrors(errors);

        if (Object.keys(errors).length === 0) {
            const payload = {
                email: uname,
                password: pwd,
            };
            dispatch(loginUser(payload, navigate));
        }
    };


    const doLogout = () => {
        dispatch(logoutUser());
        localStorage.removeItem('myuser');
    };

    return (
        <div className="login-container-outer">
            <div className='login-container'>
            <h2 style={{textAlign:'center'}}>Login</h2>
                <div>
                    <label className='login-form-label'>Username</label>
                    <input
                        type="email"
                        name="email"
                        value={uname}
                        onChange={(event) => setUname(event.target.value)}
                        placeholder="Enter email"
                    />
                    {formErrors.userNameError && (
                        <div style={{ color: 'red' }}>{formErrors.userNameError}</div>
                    )}
                </div>
                <div>
                    <label className='login-form-label'>Password</label>
                    <input
                        type="password"
                        name="pwd"
                        value={pwd}
                        onChange={(event) => setPwd(event.target.value)}
                    />
                    {formErrors.passwordError && (
                        <div style={{ color: 'red' }}>{formErrors.passwordError}</div>
                    )}
                </div>
                <button className='login-form-button' onClick={doLogin}>Login</button>
            </div>
        </div>
    );
}

export default Login;
