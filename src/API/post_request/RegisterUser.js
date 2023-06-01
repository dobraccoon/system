import axios from "axios";

export default class RegisterUser {
    static tryRegister = async(registerData) => {
        try {
            const res = await axios.post("https://feed-api.nanoit.dev/api/register", registerData);

            return res
        } catch (error) {

            return error;
        };
    };
};