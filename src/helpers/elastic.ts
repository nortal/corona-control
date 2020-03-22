import { get, post, HttpCallbacks } from './http';
import ResourceStatusPayload from "../api/model/ResourceStatusPayload";
import Hospital from "../api/model/Hospital";

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
            path: ES_URL + (ES_INDEX ? "/" + ES_INDEX : "") + "/_search",
            auth: { username: ES_USERNAME, password: ES_PASSWORD },
            successCallback, errorCallback
        }
    );
};

type CreateOrUpdatePayload = ResourceStatusPayload | Hospital;

export const createOrUpdateDoc = (id: string, doc: CreateOrUpdatePayload, {successCallback, errorCallback}: HttpCallbacks) => {
    return post(
        {
            path: ES_URL + (ES_INDEX ? "/" + ES_INDEX : "") + "/_doc/" + id,
            payload: doc,
            auth: { username: ES_USERNAME, password: ES_PASSWORD },
            successCallback, errorCallback
        }
    )
};

