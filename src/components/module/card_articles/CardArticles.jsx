import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './CardArticles.css';
import EditArticle from './edit_article/EditArticle';
import Popup from '../Popup_menu/Popup';

const CardArticles = ({article, getArticles}) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [open, setOpen] = React.useState(false);
    const [placement, setPlacement] = React.useState();

    const handleClick = (newPlacement) => (event) => {
        setAnchorEl(event.currentTarget);
        setOpen((prev) => placement !== newPlacement || !prev);
        setPlacement(newPlacement);
    };

    return ( 
        <Card sx={{ minWidth: 275, mt: 1.5, mb: 1.5 }}>
            <CardContent>
            <Typography variant="h4" component="div">
                {article.title}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {article.author.username}
            </Typography>
            <Typography variant="body3">
                {article.description}
            </Typography>
            <Typography variant="body2" sx={{ mt: 1.5 }}>
                {article.body}
            </Typography>
            </CardContent>
            <CardActions className='card__footer'>
                <Button onClick={handleClick('bottom-start')} size="small">Edit article</Button>
                <Popup anchorEl={anchorEl} open={open} placement={placement}>
                    <EditArticle getArticles={getArticles} article={article}/>
                </Popup>
            </CardActions>
      </Card>
     );
}
 
export default CardArticles;