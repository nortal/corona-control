import { get, post, HttpCallbacks } from './http';
import ResourceStatusPayload from "../api/model/ResourceStatusPayload";
import Hospital from "../api/model/Hospital";

const ES_URL = process.env.REACT_APP_ES_URL || "";
const ES_INDEX = process.env.REACT_APP_ES_INDEX || "";
const ES_USERNAME = process.env.REACT_APP_ES_USERNAME || "";
const ES_PASSWORD = process.env.REACT_APP_ES_PASSWORD || "";

const MAX_RESULTS = 100;

export const getSampleData = ({ successCallback } : HttpCallbacks) => {
    const errorCallback = (error: any) => {
        console.warn("Error: ", error)
    };
    return get(
        {
            path: ES_URL + (ES_INDEX ? ES_INDEX : "") + "/_search?size=" + MAX_RESULTS,
            auth: { username: ES_USERNAME, password: ES_PASSWORD },
            successCallback, errorCallback
        }
    );
};

export const getDocs = ({ successCallback } : HttpCallbacks) => {
    const errorCallback = (error: any) => {
        console.warn("Error: ", error)
    };
    return get(
        {
            path: ES_URL + (ES_INDEX ? ES_INDEX : "") + "/_search?size=" + MAX_RESULTS,
            auth: { username: ES_USERNAME, password: ES_PASSWORD },
            successCallback, errorCallback
        }
    );
};

type CreateOrUpdatePayload = ResourceStatusPayload | Hospital;

export const createOrUpdateDoc = (id: string, doc: CreateOrUpdatePayload, {successCallback, errorCallback}: HttpCallbacks) => {
    return post(
        {
            path: ES_URL + (ES_INDEX ? ES_INDEX : "") + "/_doc/" + id,
            payload: doc,
            auth: { username: ES_USERNAME, password: ES_PASSWORD },
            successCallback, errorCallback
        }
    )
};

