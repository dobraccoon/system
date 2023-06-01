import React, { useState } from 'react';
import Login from '../../API/post_request/Login';
import './Auth.css'
import { Link, useNavigate, useOutletContext } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Auth = () => {
    const [mail, setMail] = useState(null);
    const [password, setPassword] = useState(null);
    const [errorLogin, setErrorLogin] = useState(false);
    const { setLogged, setRegister } = useOutletContext();
    const navigate = useNavigate();

    const loginUser = async () => {
        const user = {
            "email": mail,
            "password": password,
        };

            const res = await Login.tryLogin(user);

            if (res.name !== 'AxiosError') {
                navigate('/articles');
                setLogged(true);
                localStorage.setItem('token', res.data.token);
            } else {
                setErrorLogin(true);
            };   
    };

    return ( 
        <div className='auth'>
            <div className='auth__title'>
                <span>Sign in</span>
            </div>
            <div className='auth__body'>
                <TextField error={errorLogin} id="outlined-basic" onChange={(e) => setMail(e.target.value)} label="E-mail" type='email' variant="outlined" />
                <br />
                <TextField error={errorLogin} id="outlined-basic" label="Password" onChange={(e) => setPassword(e.target.value)} type='password' variant="outlined" />
                <br />
            </div>
            <div className='auth__footer'>
                <Link to={'/register'}>
                    <span onClick={() => setRegister(true)} className='auth_footer-register'>Create account</span>
                </Link>
                <Button variant="contained" onClick={loginUser}>Sign in</Button>
            </div>
        </div>
     );
}
 
export default Auth;