import React, { useEffect, useState } from 'react';
import './Register.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import RegisterUser from '../../API/post_request/RegisterUser';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { useNavigate, useOutletContext } from 'react-router-dom';

const Register = () => {
    const [username, setUsername] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [confirmPassword, setConfirmPassword] = useState(null);
    const { setLogged, setRegister } = useOutletContext();

    const [confirmPasswordError, setConfirmPasswordError] = useState(false);
    const [confirmPasswordMessage, setConfirmPasswordMessage] = useState(null);
    const [passwordError, setPasswordError] = useState(false);
    const [passwordErrorMessage, setPasswordMessageError] = useState(null);

    const navigate = useNavigate();

    const registerUser = async () => {
            const res = await RegisterUser.tryRegister({
                "username": username,
                "email": email,
                "password": password,
                "passwordConfirmation": confirmPassword,
            });

            if (res.name !== 'AxiosError') {
                setLogged(true);
                setRegister(false);
                localStorage.setItem('token', res.data.token);
                navigate('/articles');
            };
    };

    useEffect(() => {
        if (password !== confirmPassword) {
            setConfirmPasswordError(true);
            setConfirmPasswordMessage('Write password from 8 char');
        } else {
            setConfirmPasswordError(false);
        };

        if ( password < 8 ) {
            setPasswordError(true);
            setPasswordMessageError('Password doesn`t match');
        } else {
            setPasswordError(false);
        };
    }, [password, confirmPassword]);

    return ( 
        <div className='register'>
            <div className='register__title'>
                <span>Sign up</span>
                <ArrowBackIosNewIcon 
                    className='register__title-back'
                    onClick={() => {navigate('/login'); setRegister(false)}}    
                ></ArrowBackIosNewIcon>
            </div>
            <div className='register__body'>
                <TextField 
                    id="outlined-basic" 
                    label="Username" 
                    onChange={(e) => setUsername(e.target.value)} 
                    variant="outlined" 
                /> 
                <br />
                <TextField 
                    id="outlined-basic" 
                    label="E-mail" 
                    type='email' 
                    onChange={(e) => setEmail(e.target.value)}  
                    variant="outlined" 
                />
                <br />
                <TextField 
                    id="outlined-basic" 
                    label="Password" 
                    type='password' 
                    onChange={(e) => setPassword(e.target.value)} 
                    error={passwordError}
                    helperText={passwordError && confirmPasswordMessage}
                    variant="outlined" 
                />
                <br />
                <TextField 
                    id="outlined-basic" 
                    label="Confirm password" 
                    type='password' 
                    onChange={(e) => setConfirmPassword(e.target.value)} 
                    error={confirmPasswordError}
                    helperText={confirmPasswordError && passwordErrorMessage}
                    variant="outlined" 
                />   
                <br />
            </div>
            <div className='register__footer'>
                <Button variant="contained" onClick={registerUser}>Sign up</Button>
            </div>
        </div>
     );
}
 
export default Register;