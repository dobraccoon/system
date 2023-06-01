import React from 'react';
import { Container } from '@mui/material';
import Button from '@mui/material/Button';
import AddCommentOutlinedIcon from '@mui/icons-material/AddCommentOutlined';
import './DataTape.css';
import PostNewArticle from '../card_articles/post_new_article/PostNewArticle';
import Popup from '../Popup_menu/Popup';
import { Link, useNavigate } from 'react-router-dom';

const DataTape = ({name, type, children, getArticles}) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [open, setOpen] = React.useState(false);
    const [placement, setPlacement] = React.useState();
    const navigate = useNavigate();

    const handleClick = (newPlacement) => (event) => {
        setAnchorEl(event.currentTarget);
        setOpen((prev) => placement !== newPlacement || !prev);
        setPlacement(newPlacement);
    };

    return ( 
        <Container className='datatape'>
            <h1 className='datatape_title'>
                <div className='datatape_title-left'>
                    <span>
                        {name}
                    </span>
                    {
                        type === "articles" ? 
                            <AddCommentOutlinedIcon className='AddCommentOutlinedIcon' onClick={handleClick('bottom-start')} />
                            : type === "users" ?
                            <Button variant="contained" onClick={() => navigate('create')}>create new user</Button>
                                : null
                    }
                    <Popup anchorEl={anchorEl} open={open} placement={placement} handleClick={handleClick}>
                        <PostNewArticle getArticles={getArticles}></PostNewArticle>
                    </Popup>
                </div>
                <div>
                    <Link to="/articles">
                        <Button variant="outlined" sx={{mr: 1}}>
                            Articles
                        </Button>
                    </Link>
                    <Link to="/users">
                        <Button variant="outlined" sx={{mr: 1}}>
                            Users
                        </Button>
                    </Link>
                    <Link to="/myProfile">
                        <Button variant="outlined" sx={{mr: 1}}>
                            My profile
                        </Button>
                    </Link>
                </div>
            </h1>
            <div className='datatape__content'>
                {children}
            </div>
        </Container>
     );
}
 
export default DataTape;