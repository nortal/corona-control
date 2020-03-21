const axios = require('axios');

const get = ({path, successCallback, errorCallback}) => {
    axios.get(path).then(successCallback).catch(errorCallback);
};

const post = ({path, payload, successCallback, errorCallback}) => {
    axios.post(path, payload).then(successCallback).catch(errorCallback);
};

export {get, post};