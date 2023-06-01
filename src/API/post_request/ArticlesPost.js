import axios from "axios";

export default class ArticlePost {
    static tryPostArticle = async(token, data) => {
        try {
            const res = await axios.post("https://feed-api.nanoit.dev/api/articles", data, {
                headers: {
                    'accept': 'application/json',
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json', 
                }
            });

            return res
        } catch (error) {
            
            return error;
        };
    };
};