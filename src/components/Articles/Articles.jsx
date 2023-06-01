import React, { useEffect, useState } from 'react';
import DataTape from '../module/DataTape/DataTape';
import ArticlesGet from '../../API/get_request/ArticlesGet';
import TokenGet from '../../localStorage/TokenGet';
import CardArticles from '../module/card_articles/CardArticles';

const Articles = () => {
    const [articles, setArticles] = useState(false);

    const getArticles = async () => {
        const token = TokenGet.tryGetToken();
        const res = await ArticlesGet.tryGetArticles(token);

        if (res) {
            setArticles(res);
        };
    };

    useEffect(() => {
        getArticles();
    }, []);

    return articles.length !== 0 ?
    ( 
        <DataTape getArticles={getArticles} name="News feed" type="articles">
            {
                articles ?
                    articles.map((item, index) => 
                            <CardArticles getArticles={getArticles} article={item} key={index} />
                    )
                : 'Loading...'
            }
        </DataTape>
     )
     :
     <DataTape name="News feed">
        Loading...
     </DataTape>
    ;
}
 
export default Articles;