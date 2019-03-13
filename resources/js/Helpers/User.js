/**
 * Created by jay on 2019-03-12
 */

import Token from './Token';
import AppStorage from './AppStorage';

class User {
    constructor() {
        this.message = '';
    }

    login(data) {
        axios.post('/api/auth/login', data)
            .then(res => this.responseAfterLogin(res))
            .catch(error => {
                console.log(error);
            });
    }

    responseAfterLogin(res) {
        const token = res.data.access_token;
        const username = res.data.user;
        if (Token.isValid(token)) {
            AppStorage.store(username, token);
        }
    }

    hasToken() {
        const storedToken = AppStorage.getToken();
        if (storedToken) {
            return Token.isValid(storedToken) ?
                true : false;
        }
        return false;
    }

    loggedIn() {
        return this.hasToken();
    }

    logout() {
        AppStorage.clear();
        window.location = '/login';
    }

    name() {
        if (this.loggedIn()) {
            return AppStorage.getUser();
        }
    }

    id() {
        if (this.loggedIn()) {
            const payload = Token.payload(AppStorage.getToken());
            console.log('payload', payload.sub);
            return payload.sub;
        }
    }

    own(id) {
        console.log('id', id);
        console.log('userid', this.id);
        return this.id() === id;
    }

    hasMessage() {
        return this.message;
    }
}

export default User = new User;
