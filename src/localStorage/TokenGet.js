export default class TokenGet {
    static tryGetToken = () => {
        const token = localStorage.getItem('token');

        if (token) {
            return token;
        };
    };
};