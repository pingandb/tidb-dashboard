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
import { ComputeEngineReport } from '../models';
// @ts-ignore
import { ReportHealthReportReq } from '../models';
// @ts-ignore
import { ReportHealthReportResp } from '../models';
// @ts-ignore
import { ReportReportResp } from '../models';
/**
 * HealthReportApi - axios parameter creator
 * @export
 */
export const HealthReportApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * list health report
         * @summary list health report
         * @param {string} xCsrfToken get value from login.ValidationResp response
         * @param {string} oid organization id
         * @param {string} cid cluster id
         * @param {number} startTime start time
         * @param {number} endTime end time
         * @param {boolean} [brief] if need data
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        computeEngineOidCidHealthGet: async (xCsrfToken: string, oid: string, cid: string, startTime: number, endTime: number, brief?: boolean, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'xCsrfToken' is not null or undefined
            assertParamExists('computeEngineOidCidHealthGet', 'xCsrfToken', xCsrfToken)
            // verify required parameter 'oid' is not null or undefined
            assertParamExists('computeEngineOidCidHealthGet', 'oid', oid)
            // verify required parameter 'cid' is not null or undefined
            assertParamExists('computeEngineOidCidHealthGet', 'cid', cid)
            // verify required parameter 'startTime' is not null or undefined
            assertParamExists('computeEngineOidCidHealthGet', 'startTime', startTime)
            // verify required parameter 'endTime' is not null or undefined
            assertParamExists('computeEngineOidCidHealthGet', 'endTime', endTime)
            const localVarPath = `/compute-engine/{oid}/{cid}/health`
                .replace(`{${"oid"}}`, encodeURIComponent(String(oid)))
                .replace(`{${"cid"}}`, encodeURIComponent(String(cid)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (startTime !== undefined) {
                localVarQueryParameter['startTime'] = startTime;
            }

            if (endTime !== undefined) {
                localVarQueryParameter['endTime'] = endTime;
            }

            if (brief !== undefined) {
                localVarQueryParameter['brief'] = brief;
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
         * touch Health report in on cluster
         * @summary Touch New Health Report Job
         * @param {string} xCsrfToken get value from login.ValidationResp response
         * @param {string} oid organization id
         * @param {string} cid cluster id
         * @param {ReportHealthReportReq} reportParams health report param
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        computeEngineOidCidHealthPost: async (xCsrfToken: string, oid: string, cid: string, reportParams: ReportHealthReportReq, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'xCsrfToken' is not null or undefined
            assertParamExists('computeEngineOidCidHealthPost', 'xCsrfToken', xCsrfToken)
            // verify required parameter 'oid' is not null or undefined
            assertParamExists('computeEngineOidCidHealthPost', 'oid', oid)
            // verify required parameter 'cid' is not null or undefined
            assertParamExists('computeEngineOidCidHealthPost', 'cid', cid)
            // verify required parameter 'reportParams' is not null or undefined
            assertParamExists('computeEngineOidCidHealthPost', 'reportParams', reportParams)
            const localVarPath = `/compute-engine/{oid}/{cid}/health`
                .replace(`{${"oid"}}`, encodeURIComponent(String(oid)))
                .replace(`{${"cid"}}`, encodeURIComponent(String(cid)));
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


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(reportParams, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * list health report
         * @summary get health report
         * @param {string} xCsrfToken get value from login.ValidationResp response
         * @param {string} oid organization id
         * @param {string} cid cluster id
         * @param {string} rid report id
         * @param {boolean} [brief] if need data
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        computeEngineOidCidHealthRidGet: async (xCsrfToken: string, oid: string, cid: string, rid: string, brief?: boolean, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'xCsrfToken' is not null or undefined
            assertParamExists('computeEngineOidCidHealthRidGet', 'xCsrfToken', xCsrfToken)
            // verify required parameter 'oid' is not null or undefined
            assertParamExists('computeEngineOidCidHealthRidGet', 'oid', oid)
            // verify required parameter 'cid' is not null or undefined
            assertParamExists('computeEngineOidCidHealthRidGet', 'cid', cid)
            // verify required parameter 'rid' is not null or undefined
            assertParamExists('computeEngineOidCidHealthRidGet', 'rid', rid)
            const localVarPath = `/compute-engine/{oid}/{cid}/health/{rid}`
                .replace(`{${"oid"}}`, encodeURIComponent(String(oid)))
                .replace(`{${"cid"}}`, encodeURIComponent(String(cid)))
                .replace(`{${"rid"}}`, encodeURIComponent(String(rid)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (brief !== undefined) {
                localVarQueryParameter['brief'] = brief;
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
    }
};

/**
 * HealthReportApi - functional programming interface
 * @export
 */
export const HealthReportApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = HealthReportApiAxiosParamCreator(configuration)
    return {
        /**
         * list health report
         * @summary list health report
         * @param {string} xCsrfToken get value from login.ValidationResp response
         * @param {string} oid organization id
         * @param {string} cid cluster id
         * @param {number} startTime start time
         * @param {number} endTime end time
         * @param {boolean} [brief] if need data
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async computeEngineOidCidHealthGet(xCsrfToken: string, oid: string, cid: string, startTime: number, endTime: number, brief?: boolean, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ReportHealthReportResp>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.computeEngineOidCidHealthGet(xCsrfToken, oid, cid, startTime, endTime, brief, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * touch Health report in on cluster
         * @summary Touch New Health Report Job
         * @param {string} xCsrfToken get value from login.ValidationResp response
         * @param {string} oid organization id
         * @param {string} cid cluster id
         * @param {ReportHealthReportReq} reportParams health report param
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async computeEngineOidCidHealthPost(xCsrfToken: string, oid: string, cid: string, reportParams: ReportHealthReportReq, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ReportReportResp>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.computeEngineOidCidHealthPost(xCsrfToken, oid, cid, reportParams, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * list health report
         * @summary get health report
         * @param {string} xCsrfToken get value from login.ValidationResp response
         * @param {string} oid organization id
         * @param {string} cid cluster id
         * @param {string} rid report id
         * @param {boolean} [brief] if need data
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async computeEngineOidCidHealthRidGet(xCsrfToken: string, oid: string, cid: string, rid: string, brief?: boolean, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ComputeEngineReport>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.computeEngineOidCidHealthRidGet(xCsrfToken, oid, cid, rid, brief, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * HealthReportApi - factory interface
 * @export
 */
export const HealthReportApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = HealthReportApiFp(configuration)
    return {
        /**
         * list health report
         * @summary list health report
         * @param {string} xCsrfToken get value from login.ValidationResp response
         * @param {string} oid organization id
         * @param {string} cid cluster id
         * @param {number} startTime start time
         * @param {number} endTime end time
         * @param {boolean} [brief] if need data
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        computeEngineOidCidHealthGet(xCsrfToken: string, oid: string, cid: string, startTime: number, endTime: number, brief?: boolean, options?: any): AxiosPromise<ReportHealthReportResp> {
            return localVarFp.computeEngineOidCidHealthGet(xCsrfToken, oid, cid, startTime, endTime, brief, options).then((request) => request(axios, basePath));
        },
        /**
         * touch Health report in on cluster
         * @summary Touch New Health Report Job
         * @param {string} xCsrfToken get value from login.ValidationResp response
         * @param {string} oid organization id
         * @param {string} cid cluster id
         * @param {ReportHealthReportReq} reportParams health report param
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        computeEngineOidCidHealthPost(xCsrfToken: string, oid: string, cid: string, reportParams: ReportHealthReportReq, options?: any): AxiosPromise<ReportReportResp> {
            return localVarFp.computeEngineOidCidHealthPost(xCsrfToken, oid, cid, reportParams, options).then((request) => request(axios, basePath));
        },
        /**
         * list health report
         * @summary get health report
         * @param {string} xCsrfToken get value from login.ValidationResp response
         * @param {string} oid organization id
         * @param {string} cid cluster id
         * @param {string} rid report id
         * @param {boolean} [brief] if need data
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        computeEngineOidCidHealthRidGet(xCsrfToken: string, oid: string, cid: string, rid: string, brief?: boolean, options?: any): AxiosPromise<ComputeEngineReport> {
            return localVarFp.computeEngineOidCidHealthRidGet(xCsrfToken, oid, cid, rid, brief, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for computeEngineOidCidHealthGet operation in HealthReportApi.
 * @export
 * @interface HealthReportApiComputeEngineOidCidHealthGetRequest
 */
export interface HealthReportApiComputeEngineOidCidHealthGetRequest {
    /**
     * get value from login.ValidationResp response
     * @type {string}
     * @memberof HealthReportApiComputeEngineOidCidHealthGet
     */
    readonly xCsrfToken: string

    /**
     * organization id
     * @type {string}
     * @memberof HealthReportApiComputeEngineOidCidHealthGet
     */
    readonly oid: string

    /**
     * cluster id
     * @type {string}
     * @memberof HealthReportApiComputeEngineOidCidHealthGet
     */
    readonly cid: string

    /**
     * start time
     * @type {number}
     * @memberof HealthReportApiComputeEngineOidCidHealthGet
     */
    readonly startTime: number

    /**
     * end time
     * @type {number}
     * @memberof HealthReportApiComputeEngineOidCidHealthGet
     */
    readonly endTime: number

    /**
     * if need data
     * @type {boolean}
     * @memberof HealthReportApiComputeEngineOidCidHealthGet
     */
    readonly brief?: boolean
}

/**
 * Request parameters for computeEngineOidCidHealthPost operation in HealthReportApi.
 * @export
 * @interface HealthReportApiComputeEngineOidCidHealthPostRequest
 */
export interface HealthReportApiComputeEngineOidCidHealthPostRequest {
    /**
     * get value from login.ValidationResp response
     * @type {string}
     * @memberof HealthReportApiComputeEngineOidCidHealthPost
     */
    readonly xCsrfToken: string

    /**
     * organization id
     * @type {string}
     * @memberof HealthReportApiComputeEngineOidCidHealthPost
     */
    readonly oid: string

    /**
     * cluster id
     * @type {string}
     * @memberof HealthReportApiComputeEngineOidCidHealthPost
     */
    readonly cid: string

    /**
     * health report param
     * @type {ReportHealthReportReq}
     * @memberof HealthReportApiComputeEngineOidCidHealthPost
     */
    readonly reportParams: ReportHealthReportReq
}

/**
 * Request parameters for computeEngineOidCidHealthRidGet operation in HealthReportApi.
 * @export
 * @interface HealthReportApiComputeEngineOidCidHealthRidGetRequest
 */
export interface HealthReportApiComputeEngineOidCidHealthRidGetRequest {
    /**
     * get value from login.ValidationResp response
     * @type {string}
     * @memberof HealthReportApiComputeEngineOidCidHealthRidGet
     */
    readonly xCsrfToken: string

    /**
     * organization id
     * @type {string}
     * @memberof HealthReportApiComputeEngineOidCidHealthRidGet
     */
    readonly oid: string

    /**
     * cluster id
     * @type {string}
     * @memberof HealthReportApiComputeEngineOidCidHealthRidGet
     */
    readonly cid: string

    /**
     * report id
     * @type {string}
     * @memberof HealthReportApiComputeEngineOidCidHealthRidGet
     */
    readonly rid: string

    /**
     * if need data
     * @type {boolean}
     * @memberof HealthReportApiComputeEngineOidCidHealthRidGet
     */
    readonly brief?: boolean
}

/**
 * HealthReportApi - object-oriented interface
 * @export
 * @class HealthReportApi
 * @extends {BaseAPI}
 */
export class HealthReportApi extends BaseAPI {
    /**
     * list health report
     * @summary list health report
     * @param {HealthReportApiComputeEngineOidCidHealthGetRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof HealthReportApi
     */
    public computeEngineOidCidHealthGet(requestParameters: HealthReportApiComputeEngineOidCidHealthGetRequest, options?: AxiosRequestConfig) {
        return HealthReportApiFp(this.configuration).computeEngineOidCidHealthGet(requestParameters.xCsrfToken, requestParameters.oid, requestParameters.cid, requestParameters.startTime, requestParameters.endTime, requestParameters.brief, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * touch Health report in on cluster
     * @summary Touch New Health Report Job
     * @param {HealthReportApiComputeEngineOidCidHealthPostRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof HealthReportApi
     */
    public computeEngineOidCidHealthPost(requestParameters: HealthReportApiComputeEngineOidCidHealthPostRequest, options?: AxiosRequestConfig) {
        return HealthReportApiFp(this.configuration).computeEngineOidCidHealthPost(requestParameters.xCsrfToken, requestParameters.oid, requestParameters.cid, requestParameters.reportParams, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * list health report
     * @summary get health report
     * @param {HealthReportApiComputeEngineOidCidHealthRidGetRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof HealthReportApi
     */
    public computeEngineOidCidHealthRidGet(requestParameters: HealthReportApiComputeEngineOidCidHealthRidGetRequest, options?: AxiosRequestConfig) {
        return HealthReportApiFp(this.configuration).computeEngineOidCidHealthRidGet(requestParameters.xCsrfToken, requestParameters.oid, requestParameters.cid, requestParameters.rid, requestParameters.brief, options).then((request) => request(this.axios, this.basePath));
    }
}
