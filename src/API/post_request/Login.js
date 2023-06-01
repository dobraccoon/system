import axios from "axios";

export default class Login {
    static tryLogin = async(loginData) => {
        try {
            const res = await axios.post("https://feed-api.nanoit.dev/api/login", loginData);

            return res
        } catch (error) {

            return error;
        };
    };

};