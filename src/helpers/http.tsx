const axios = require('axios');

export interface HttpCallbacks {
    successCallback: (response: any) => void;
    errorCallback?: (error: any) => void;
}

interface GetArgs extends HttpCallbacks {
    path: string;
    auth?: AuthOptions;
}

interface PostArgs extends HttpCallbacks {
    path: string;
    payload: any;
    auth?: AuthOptions;
}

interface AuthOptions {
    username: string;
    password: string;
}

const get = ({path, successCallback, errorCallback, auth} : GetArgs) => {
    axios.get(path, getRequestConfig(auth)).then(successCallback).catch(getErrorCallback(errorCallback));
};

const post = ({path, payload, successCallback, errorCallback, auth} : PostArgs) => {
    axios.post(path, payload, getRequestConfig(auth)).then(successCallback).catch(getErrorCallback(errorCallback));
};

const getErrorCallback = (callback? : (error: any) => void) => {
    return callback ? callback : () => {};
};

const getRequestConfig = (auth?: AuthOptions) => {
    return auth ? {auth: {username: auth.username, password: auth.password}, headers: {'Content-Type': 'application/json', 'X-Requested-With': 'Corona-Control'}} : {headers: {'Content-Type': 'application/json', 'X-Requested-With': 'Corona-Control'}};
};

export {get, post};
