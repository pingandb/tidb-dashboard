/* tslint:disable */
/* eslint-disable */
/**
 * Clinic Example API
 * This is a Clinic server.
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { OrgApiKeyResponse } from '../models';
// @ts-ignore
import { OrgListApiKeyResponse } from '../models';
/**
 * ApiKeyApi - axios parameter creator
 * @export
 */
export const ApiKeyApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * list api key of the user in current organizatioin
         * @summary List api key
         * @param {string} xCsrfToken get value from login.ValidationResp response
         * @param {string} oid organization id
         * @param {number} [limit] the count per page
         * @param {number} [page] the page index
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        orgsOidKeysGet: async (xCsrfToken: string, oid: string, limit?: number, page?: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'xCsrfToken' is not null or undefined
            assertParamExists('orgsOidKeysGet', 'xCsrfToken', xCsrfToken)
            // verify required parameter 'oid' is not null or undefined
            assertParamExists('orgsOidKeysGet', 'oid', oid)
            const localVarPath = `/orgs/{oid}/keys`
                .replace(`{${"oid"}}`, encodeURIComponent(String(oid)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            if (page !== undefined) {
                localVarQueryParameter['page'] = page;
            }

            if (xCsrfToken !== undefined && xCsrfToken !== null) {
                localVarHeaderParameter['x-csrf-token'] = String(xCsrfToken);
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * create api key
         * @summary Delete api key
         * @param {string} xCsrfToken get value from login.ValidationResp response
         * @param {string} oid organization id
         * @param {number} id key id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        orgsOidKeysIdDelete: async (xCsrfToken: string, oid: string, id: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'xCsrfToken' is not null or undefined
            assertParamExists('orgsOidKeysIdDelete', 'xCsrfToken', xCsrfToken)
            // verify required parameter 'oid' is not null or undefined
            assertParamExists('orgsOidKeysIdDelete', 'oid', oid)
            // verify required parameter 'id' is not null or undefined
            assertParamExists('orgsOidKeysIdDelete', 'id', id)
            const localVarPath = `/orgs/{oid}/keys/{id}`
                .replace(`{${"oid"}}`, encodeURIComponent(String(oid)))
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (xCsrfToken !== undefined && xCsrfToken !== null) {
                localVarHeaderParameter['x-csrf-token'] = String(xCsrfToken);
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * create api key
         * @summary Create api key
         * @param {string} xCsrfToken get value from login.ValidationResp response
         * @param {string} oid organization id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        orgsOidKeysPost: async (xCsrfToken: string, oid: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'xCsrfToken' is not null or undefined
            assertParamExists('orgsOidKeysPost', 'xCsrfToken', xCsrfToken)
            // verify required parameter 'oid' is not null or undefined
            assertParamExists('orgsOidKeysPost', 'oid', oid)
            const localVarPath = `/orgs/{oid}/keys`
                .replace(`{${"oid"}}`, encodeURIComponent(String(oid)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (xCsrfToken !== undefined && xCsrfToken !== null) {
                localVarHeaderParameter['x-csrf-token'] = String(xCsrfToken);
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * ApiKeyApi - functional programming interface
 * @export
 */
export const ApiKeyApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ApiKeyApiAxiosParamCreator(configuration)
    return {
        /**
         * list api key of the user in current organizatioin
         * @summary List api key
         * @param {string} xCsrfToken get value from login.ValidationResp response
         * @param {string} oid organization id
         * @param {number} [limit] the count per page
         * @param {number} [page] the page index
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async orgsOidKeysGet(xCsrfToken: string, oid: string, limit?: number, page?: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<OrgListApiKeyResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.orgsOidKeysGet(xCsrfToken, oid, limit, page, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * create api key
         * @summary Delete api key
         * @param {string} xCsrfToken get value from login.ValidationResp response
         * @param {string} oid organization id
         * @param {number} id key id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async orgsOidKeysIdDelete(xCsrfToken: string, oid: string, id: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<OrgApiKeyResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.orgsOidKeysIdDelete(xCsrfToken, oid, id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * create api key
         * @summary Create api key
         * @param {string} xCsrfToken get value from login.ValidationResp response
         * @param {string} oid organization id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async orgsOidKeysPost(xCsrfToken: string, oid: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<OrgApiKeyResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.orgsOidKeysPost(xCsrfToken, oid, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * ApiKeyApi - factory interface
 * @export
 */
export const ApiKeyApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ApiKeyApiFp(configuration)
    return {
        /**
         * list api key of the user in current organizatioin
         * @summary List api key
         * @param {string} xCsrfToken get value from login.ValidationResp response
         * @param {string} oid organization id
         * @param {number} [limit] the count per page
         * @param {number} [page] the page index
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        orgsOidKeysGet(xCsrfToken: string, oid: string, limit?: number, page?: number, options?: any): AxiosPromise<OrgListApiKeyResponse> {
            return localVarFp.orgsOidKeysGet(xCsrfToken, oid, limit, page, options).then((request) => request(axios, basePath));
        },
        /**
         * create api key
         * @summary Delete api key
         * @param {string} xCsrfToken get value from login.ValidationResp response
         * @param {string} oid organization id
         * @param {number} id key id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        orgsOidKeysIdDelete(xCsrfToken: string, oid: string, id: number, options?: any): AxiosPromise<OrgApiKeyResponse> {
            return localVarFp.orgsOidKeysIdDelete(xCsrfToken, oid, id, options).then((request) => request(axios, basePath));
        },
        /**
         * create api key
         * @summary Create api key
         * @param {string} xCsrfToken get value from login.ValidationResp response
         * @param {string} oid organization id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        orgsOidKeysPost(xCsrfToken: string, oid: string, options?: any): AxiosPromise<OrgApiKeyResponse> {
            return localVarFp.orgsOidKeysPost(xCsrfToken, oid, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for orgsOidKeysGet operation in ApiKeyApi.
 * @export
 * @interface ApiKeyApiOrgsOidKeysGetRequest
 */
export interface ApiKeyApiOrgsOidKeysGetRequest {
    /**
     * get value from login.ValidationResp response
     * @type {string}
     * @memberof ApiKeyApiOrgsOidKeysGet
     */
    readonly xCsrfToken: string

    /**
     * organization id
     * @type {string}
     * @memberof ApiKeyApiOrgsOidKeysGet
     */
    readonly oid: string

    /**
     * the count per page
     * @type {number}
     * @memberof ApiKeyApiOrgsOidKeysGet
     */
    readonly limit?: number

    /**
     * the page index
     * @type {number}
     * @memberof ApiKeyApiOrgsOidKeysGet
     */
    readonly page?: number
}

/**
 * Request parameters for orgsOidKeysIdDelete operation in ApiKeyApi.
 * @export
 * @interface ApiKeyApiOrgsOidKeysIdDeleteRequest
 */
export interface ApiKeyApiOrgsOidKeysIdDeleteRequest {
    /**
     * get value from login.ValidationResp response
     * @type {string}
     * @memberof ApiKeyApiOrgsOidKeysIdDelete
     */
    readonly xCsrfToken: string

    /**
     * organization id
     * @type {string}
     * @memberof ApiKeyApiOrgsOidKeysIdDelete
     */
    readonly oid: string

    /**
     * key id
     * @type {number}
     * @memberof ApiKeyApiOrgsOidKeysIdDelete
     */
    readonly id: number
}

/**
 * Request parameters for orgsOidKeysPost operation in ApiKeyApi.
 * @export
 * @interface ApiKeyApiOrgsOidKeysPostRequest
 */
export interface ApiKeyApiOrgsOidKeysPostRequest {
    /**
     * get value from login.ValidationResp response
     * @type {string}
     * @memberof ApiKeyApiOrgsOidKeysPost
     */
    readonly xCsrfToken: string

    /**
     * organization id
     * @type {string}
     * @memberof ApiKeyApiOrgsOidKeysPost
     */
    readonly oid: string
}

/**
 * ApiKeyApi - object-oriented interface
 * @export
 * @class ApiKeyApi
 * @extends {BaseAPI}
 */
export class ApiKeyApi extends BaseAPI {
    /**
     * list api key of the user in current organizatioin
     * @summary List api key
     * @param {ApiKeyApiOrgsOidKeysGetRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ApiKeyApi
     */
    public orgsOidKeysGet(requestParameters: ApiKeyApiOrgsOidKeysGetRequest, options?: AxiosRequestConfig) {
        return ApiKeyApiFp(this.configuration).orgsOidKeysGet(requestParameters.xCsrfToken, requestParameters.oid, requestParameters.limit, requestParameters.page, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * create api key
     * @summary Delete api key
     * @param {ApiKeyApiOrgsOidKeysIdDeleteRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ApiKeyApi
     */
    public orgsOidKeysIdDelete(requestParameters: ApiKeyApiOrgsOidKeysIdDeleteRequest, options?: AxiosRequestConfig) {
        return ApiKeyApiFp(this.configuration).orgsOidKeysIdDelete(requestParameters.xCsrfToken, requestParameters.oid, requestParameters.id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * create api key
     * @summary Create api key
     * @param {ApiKeyApiOrgsOidKeysPostRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ApiKeyApi
     */
    public orgsOidKeysPost(requestParameters: ApiKeyApiOrgsOidKeysPostRequest, options?: AxiosRequestConfig) {
        return ApiKeyApiFp(this.configuration).orgsOidKeysPost(requestParameters.xCsrfToken, requestParameters.oid, options).then((request) => request(this.axios, this.basePath));
    }
}
