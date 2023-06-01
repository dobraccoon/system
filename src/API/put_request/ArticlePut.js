import axios from "axios";

export default class ArticlePut {
    static tryPutArticle = async (slug, token, data) => {
        try {
            const res = await axios.put(`https://feed-api.nanoit.dev/api/articles/${slug}`, data, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'accept': 'application/json',
                    'Content-Type': 'application/json', 
                }
            });
            
            return res
        } catch (error) {
            return error;
        };
    };
};