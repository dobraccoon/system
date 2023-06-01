import axios from "axios";

export default class DeleteUser {
    static tryDeleteUser = async(token, user) => {
        try {
            const res = await axios.delete(`https://feed-api.nanoit.dev/api/users/${user}`, {
                headers: {
                    "accept": "*/*",
                    "Authorization": `Bearer ${token}`,
                }
            });

            return res;
        } catch (error) {
            return error;
        };
    };
};