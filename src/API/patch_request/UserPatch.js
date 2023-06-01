import axios from "axios";

export default class UserPatch {
    static tryUserPatch = async(token, data, user) => {
        try {
            const res = await axios.patch(`https://feed-api.nanoit.dev/api/users/${user}`, data, {
                headers: {
                  'Authorization': `Bearer ${token}`,
                  'Content-Type': 'application/json',
                  'accept': '*/*'
                }
            });

            return res;
        } catch (error) {

            return error;
        };
    };
};