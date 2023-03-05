import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginUser, logoutUser } from '../store/Actions/LoginAction';

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
        <div className="container">
            <div>
                <label>Username</label>
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
                <label>Password</label>
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
            <button onClick={doLogin}>Login</button>
        </div>
    );
}

export default Login;
