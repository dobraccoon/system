import React from 'react';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Accordion from '@mui/material/Accordion';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import DeleteUser from '../../../API/delete_request/DeleteUser';
import TokenGet from '../../../localStorage/TokenGet';
import { Link } from 'react-router-dom';

const UsersCard = ({data, getUsers}) => {
    const [expanded, setExpanded] = React.useState(false);
    const createdAt = new Date(data.createdAt);
    const date = `${createdAt.getFullYear()}/${createdAt.getMonth()}/${createdAt.getDay()}`;

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const handleDeleteClick = async() => {
        const token = TokenGet.tryGetToken();

        await DeleteUser.tryDeleteUser(token, data.username);
        getUsers();
    };
    
    const checkWhatInsideAvatar = () => {
        if (data.image === null) {
            return (
                <Avatar>
                    {data.username.slice(0, 1)}
                </Avatar>
            )
        } else {
            return (
                <Avatar src={data.image}>
                </Avatar>
            );
        }
    };

    return ( 
        <Accordion expanded={expanded === 'panel'} onChange={handleChange('panel')}>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3bh-content"
            id="panel3bh-header"
            >
                <Typography sx={{ width: '33%', flexShrink: 0 }}>
                    {data.username}
                </Typography>
                <Typography className='short_bio' sx={{ color: 'text.secondary' }}>
                    {
                    data.bio ? data.bio : 'Open to see more info'
                    }
                </Typography>
                </AccordionSummary>
                <AccordionDetails>
                {
                    checkWhatInsideAvatar()
                }
                <Typography sx={{mt: 1.5}}>
                    E-mail: {data.email}
                </Typography>
                <Typography>
                    Bio: {data.bio}
                </Typography>
                <Typography>
                    Created at: {date}
                </Typography>
                <Typography sx={{mt: 2.5}}>
                    <Button variant="contained" onDoubleClick={() => handleDeleteClick()} sx={{background: "#e63946"}}>Remove</Button>
                        <Link className='btn__user-edit' to={`/users/${data.username}`} state={data}>
                            <Button variant="contained">
                                Edit
                            </Button>
                        </Link>
                </Typography>
            </AccordionDetails>
        </Accordion>
     );
}
 
export default UsersCard;
