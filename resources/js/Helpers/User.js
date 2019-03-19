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
                console.log(error.response.data.error);
                //this.message = 'Error: please check your login information and try again...';
            });
    }

    responseAfterLogin(res) {
        const token = res.data.access_token;
        const username = res.data.user;
        if (Token.isValid(token)) {
            AppStorage.store(username, token);
            window.location = '/dashboard/questions';
        }
    }

    hasToken() {
        const storedToken = AppStorage.getToken();
        console.log('token', storedToken);
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
        window.location = '/dashboard/login';
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
