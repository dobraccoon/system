import axios from "axios";

export default class UserPost {
    static tryPostUser = async(token, data) => {
        try {
            const res = await axios.post("https://feed-api.nanoit.dev/api/register", data, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                    'accept': '*/*'
                  }
            });

            return res
        } catch (error) {

            return error;
        };
    };
};