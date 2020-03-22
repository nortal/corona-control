import { get, HttpCallbacks } from './http';

export const isDev = process.env.NODE_ENV === "development";

const ES_URL = (isDev ? "http://localhost:8010/proxy/" : process.env.REACT_APP_ES_URL) || "";
const ES_INDEX = process.env.REACT_APP_ES_INDEX || "";
const ES_USERNAME = process.env.REACT_APP_ES_USERNAME || "";
const ES_PASSWORD = process.env.REACT_APP_ES_PASSWORD || "";

export const getSampleData = ({ successCallback } : HttpCallbacks) => {
    const errorCallback = (error: any) => {
        console.warn("Error: ", error)
    };
    return get(
        {
            path: ES_URL + (ES_INDEX ? ES_INDEX : "") + "/_search",
            auth: { username: ES_USERNAME, password: ES_PASSWORD },
            successCallback: successCallback, errorCallback: errorCallback
        }
    );
};

