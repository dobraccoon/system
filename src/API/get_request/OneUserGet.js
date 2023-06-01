import axios from "axios";
export default class OneUserGet {
    static tryGetOneUser = async(token, username) => {
        try {
            const res = await axios.get(`https://feed-api.nanoit.dev/api/users/${username}`, {
                headers: {
                    "accept": "*/*",
                    "Authorization": `Bearer ${token}`,
                }
            });

            return res;
        } catch (error) {

            return error
        };
    };
};
 
