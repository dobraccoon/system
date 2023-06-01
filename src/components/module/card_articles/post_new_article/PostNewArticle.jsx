import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import TokenGet from '../../../../localStorage/TokenGet';
import ArticlePost from '../../../../API/post_request/ArticlesPost';

const PostNewArticle = ({getArticles}) => {
    const [titleArticle, setTitle] = useState(null);
    const [bodyArticle, setBody] = useState(null);
    const [descriptionArticle, setDescription] = useState(null);
    const [tagListArticle, setTagList] = useState(null);

    const postNewArticle = async() => {
        const articleForPost = {
            "body": bodyArticle,
            "description": descriptionArticle,
            "title": titleArticle,
            "tagList": tagListArticle,
        };

        const token = TokenGet.tryGetToken();
        await ArticlePost.tryPostArticle(token, articleForPost);
        getArticles();
    };

    return ( 
        <div className='add_post'>
            <TextField
                sx={{mb: 1}}
                id="outlined-basic" 
                label="Title" 
                variant="outlined"
                defaultValue={titleArticle}
                onChange={(e) => setTitle(e.target.value)}
            />
            <TextField
                sx={{mb: 1}}
                id="outlined-basic" 
                label="Description" 
                variant="outlined"
                defaultValue={descriptionArticle}
                onChange={(e) => setDescription(e.target.value)}
            />
            <TextField
                sx={{mb: 1}}
                id="outlined-multiline-flexible"
                label="Body" 
                variant="outlined"
                multiline
                maxRows={4}
                defaultValue={bodyArticle}
                onChange={(e) => setBody(e.target.value)}
            />
            <TextField
                sx={{mb: 1}}
                id="outlined-basic" 
                label="Tags" 
                variant="outlined"
                defaultValue={tagListArticle}
                onChange={(e) => setTagList(e.target.value)}
            />
            <Button onClick={postNewArticle}>Post</Button>
        </div>
     );
}
 
export default PostNewArticle;