import axios from "axios";

export default class UsersGet {
    static tryGetUsers = async(token) => {
        try {
            const res = await axios.get('https://feed-api.nanoit.dev/api/users', {
                headers: {
                    "accept": "*/*",
                    "Authorization": `Bearer ${token}`,
                }
            });

            return res.data
        } catch (error) {
            return error;
        };
    };
};