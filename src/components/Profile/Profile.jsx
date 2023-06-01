import React, { useEffect, useState } from 'react';
import DataTape from '../module/DataTape/DataTape';
import { Typography, Avatar, Paper } from '@mui/material';
import MyProfile from '../../API/get_request/MyProfile';
import TokenGet from '../../localStorage/TokenGet';
import './Profile.css';

const Profile = () => {
    const [profileData, setProfileData] = useState('');

    const infoAboutMyProfile = async() => {
        const token = TokenGet.tryGetToken();
        const res = await MyProfile.tryGetMyProfile(token);
        
        if (res) {
            setProfileData(res.data);
        }
    };

    useEffect(() => {
        infoAboutMyProfile();
    }, []);

    const checkWhatInsideAvatar = () => {
        if (profileData.image === null) {
            return (
                <Avatar sx={{width: 125, height: 125}}>
                    {profileData.username.slice(0, 1)}
                </Avatar>
            )
        } else {
            return (
                <Avatar sx={{width: 125, height: 125}} src={profileData.image}>
                </Avatar>
            );
        }
    };

    return profileData ? ( 
        <DataTape name="My profile">
            <Paper elevation={2} sx={{p: 2, mt: 2}} className='profile__info'>
                <div className="profile__info-header">
                    {checkWhatInsideAvatar()}
                    <div className='profile__info-header__about'>
                    <Typography sx={{mt: 2}} sx={{ color: 'text.secondary' }} variant="h6">
                        Username: 
                    </Typography>
                    <Typography variant="h5">
                        {profileData.username}
                    </Typography> 
                    <Typography sx={{mt: 2, color: 'text.secondary'}} variant="h6">
                        Email: 
                    </Typography>
                    <Typography variant="h5">
                        {profileData.email}
                    </Typography>
                </div>
                </div>
                <Typography sx={{mt: 5}} variant="h5">
                    Bio: {profileData.bio ? profileData.bio : 'Add information about you'} 
                </Typography>
            </Paper>
        </DataTape>
     ) : 
        <DataTape>
            Loading...
        </DataTape>
     ;
}
 
export default Profile;