import axios from "axios";

export default class MyProfile {
    static tryGetMyProfile = async(token) => {
        try {
            const res = await axios.get('https://feed-api.nanoit.dev/api/profiles/me', {
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
