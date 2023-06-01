import axios from "axios";

export default class ArticlesGet {
    static tryGetArticles = async(token) => {
        try {
            const res = await axios.get('https://feed-api.nanoit.dev/api/articles', {
                headers: {
                    "accept": "*/*",
                    "Authorization": `Bearer ${token}`,
                }
            });

            return res.data.articles;
        } catch (error) {
            return error;
        };
    };
};