import ResourceStatusPayload from "./model/ResourceStatusPayload";
import {post} from "../helpers/http";

const ELASTIC_BASE_URL = "";

const postResourceStatusToElasticSearch = (payload: ResourceStatusPayload,
                                           successCallback: (response: any) => void,
                                           errorCallback: () => void) => {
    post({path: ELASTIC_BASE_URL, payload, successCallback, errorCallback});
};

export {postResourceStatusToElasticSearch};