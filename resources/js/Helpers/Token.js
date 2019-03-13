/**
 * Created by jay on 2019-03-12
 */

class Token {
    payload(token) {
        const payload = token.split('.')[1];
        return this.decode(payload);
    }

    decode(payload) {
        return JSON.parse(atob(payload));
    }

    isValid(token) {
        const payload = this.payload(token);
        if(payload) {
            console.log('iss', payload.iss);
            return payload.iss == 'http://localhost:8000/api/auth/login' ||
            'http://localhost:8000/api/auth/signup' ? true : false;
            //console.log('payload valid');
        }

        return false;
    }
}

export default Token = new Token();
