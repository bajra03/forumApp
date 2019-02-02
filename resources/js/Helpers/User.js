import Token from './Token'
import AppStorage from './AppStorage'

class User {
    login(data) {
        // checking there is an error or not
        axios.post('/api/auth/login', data)
            .then(res => this.responseAfterLogin(res))
            .catch(error => console.log(error.response.data));
    }

    responseAfterLogin(res) {
        const access_token = res.data.access_token;
        const username = res.data.user;
        if (Token.isValid(access_token)) {
            // console.log(access_token)
            AppStorage.store(access_token, username);
            window.location = '/forum'
        }
    }

    hasToken() {
        const storedToken = AppStorage.getToken();
        // console.log(storedToken);
        if (storedToken) {
            return Token.isValid(storedToken) ? true : false;
        }
        return false;
    }

    loggedIn() {
        return this.hasToken();
    }

    logout() {
        AppStorage.clear();
        window.location = '/forum'
    }

    userName() {
        if (this.loggedIn()) {
            return AppStorage.getUser();
        }
    }

    userId() {
        if (this.loggedIn()) {
            const payload = Token.payload(AppStorage.getToken());
            return payload.sub;
        }
    }
}

export default User = new User();
