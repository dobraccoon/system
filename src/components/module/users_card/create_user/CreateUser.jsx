import React, { useState, useEffect } from 'react';
import DataTape from '../../DataTape/DataTape';
import { TextField, Button } from '@mui/material';
import TokenGet from '../../../../localStorage/TokenGet';
import UserPost from '../../../../API/post_request/UserPost';
import { useNavigate } from 'react-router-dom';

const CreateUser = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [bio, setBio] = useState('');
    const [image, setImage] = useState('');
    const [password, setPassword] = useState(null);
    const [confirmPassword, setConfirmPassword] = useState(null);
    const [confirmPasswordError, setConfirmPasswordError] = useState(false);
    const [confirmPasswordMessage, setConfirmPasswordMessage] = useState(null);
    const [passwordError, setPasswordError] = useState(false);
    const [passwordErrorMessage, setPasswordMessageError] = useState(null);
    const navigate = useNavigate();

    const createNewUser = async() => {
        const newUser = {
            "username": name,
            "email": email,
            "password": password,
            "passwordConfirmation": confirmPassword,
            "bio": bio,
            "image": image,
        };

        const token = TokenGet.tryGetToken();
        const res = await UserPost.tryPostUser(token, newUser);
        
        if(res.name !== "AxiosError") {
            navigate('/users');
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
        <DataTape name="Create new user">
            <div className='datatape__edit_user-line'>
                <span>Name:</span>
                <br />
                <TextField 
                    onChange={(e) => setName(e.target.value)} 
                    sx={{width: 400, mt: 2}} 
                    id="outlined-basic" 
                    label='Username' 
                    variant="outlined" 
                    />
            </div>
            <div className='datatape__edit_user-line'>
                <span>E-mail:</span>
                <br />
                <TextField 
                    onChange={(e) => setEmail(e.target.value)} 
                    sx={{width: 400, mt: 2}} 
                    id="outlined-basic" 
                    type='e-mail'
                    label='E-mail' 
                    variant="outlined" 
                    />
            </div>
            <div className='datatape__edit_user-line'>
                <span>Avatar:</span>
                <br />
                <TextField 
                    onChange={(e) => setImage(e.target.value)} 
                    sx={{width: 400, mt: 2}} 
                    id="outlined-basic" 
                    label='Avatar' 
                    placeholder='https://example.com/avatar.jpg' 
                    variant="outlined" 
                    />
            </div>
            <div className='datatape__edit_user-line'>
                <span>Password:</span>
                <br />
                <TextField 
                    onChange={(e) => setPassword(e.target.value)} 
                    error={passwordError}
                    helperText={passwordError && confirmPasswordMessage} 
                    sx={{width: 550, mt: 2}} 
                    id="outlined-password-input" 
                    type="password" 
                    label='Password' 
                    variant="outlined" 
                    />
                <TextField 
                    onChange={(e) => setConfirmPassword(e.target.value)} 
                    error={confirmPasswordError}
                    helperText={confirmPasswordError && passwordErrorMessage}
                    sx={{width: 550, mt: 2, ml: 6}} 
                    id="outlined-password-input" 
                    type="password" 
                    label='Confirm password' 
                    variant="outlined" 
                    />
            </div>
            <div className='datatape__edit_user-line'>
                <span>Bio:</span>
                <br />
                <TextField 
                    onChange={(e) => setBio(e.target.value)} 
                    sx={{width: 1150, mt: 2}} 
                    rows={3} 
                    id="outlined-multiline-static" 
                    label='Bio' 
                    variant="outlined" 
                    multiline
                    />
            </div>
            <div className='datatape__edit_user-line'>
                <Button onClick={createNewUser} variant='contained'>Create new user</Button>
            </div>
        </DataTape>
     );
}
 
export default CreateUser;