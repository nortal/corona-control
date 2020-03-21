const axios = require('axios');

interface GetArgs {
    path: string;
    successCallback: (response: any) => void;
    errorCallback: (error: any) => void;
}

interface PostArgs {
    path: string;
    successCallback: (response: any) => void;
    errorCallback: (error: any) => void;
    payload: any;
}

const get = ({path, successCallback, errorCallback} : GetArgs) => {
    axios.get(path).then(successCallback).catch(errorCallback);
};

const post = ({path, payload, successCallback, errorCallback} : PostArgs) => {
    axios.post(path, payload).then(successCallback).catch(errorCallback);
};

export {get, post};