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
import { ComputeEngineComparisonReport } from '../models';
// @ts-ignore
import { ReportComparisonReportResp } from '../models';
// @ts-ignore
import { ReportFeedbackArgs } from '../models';
// @ts-ignore
import { ReportRealtimeReportContent } from '../models';
// @ts-ignore
import { ReportReportResp } from '../models';
// @ts-ignore
import { ReportTouchComparisonReportReq } from '../models';
/**
 * ReportApi - axios parameter creator
 * @export
 */
export const ReportApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * list comparison report
         * @summary list comparison report
         * @param {string} xCsrfToken get value from login.ValidationResp response
         * @param {string} oid organization id
         * @param {string} cid cluster id
         * @param {number} [limit] the count per page
         * @param {number} [page] the page index
         * @param {boolean} [brief] if need data
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        computeEngineOidCidComparisonGet: async (xCsrfToken: string, oid: string, cid: string, limit?: number, page?: number, brief?: boolean, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'xCsrfToken' is not null or undefined
            assertParamExists('computeEngineOidCidComparisonGet', 'xCsrfToken', xCsrfToken)
            // verify required parameter 'oid' is not null or undefined
            assertParamExists('computeEngineOidCidComparisonGet', 'oid', oid)
            // verify required parameter 'cid' is not null or undefined
            assertParamExists('computeEngineOidCidComparisonGet', 'cid', cid)
            const localVarPath = `/compute-engine/{oid}/{cid}/comparison`
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

            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            if (page !== undefined) {
                localVarQueryParameter['page'] = page;
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
         * touch report in on cluster
         * @summary Touch New Comparison Report Job
         * @param {string} xCsrfToken get value from login.ValidationResp response
         * @param {string} oid organization id
         * @param {string} cid cluster id
         * @param {ReportTouchComparisonReportReq} reportParam comparison report param
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        computeEngineOidCidComparisonPost: async (xCsrfToken: string, oid: string, cid: string, reportParam: ReportTouchComparisonReportReq, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'xCsrfToken' is not null or undefined
            assertParamExists('computeEngineOidCidComparisonPost', 'xCsrfToken', xCsrfToken)
            // verify required parameter 'oid' is not null or undefined
            assertParamExists('computeEngineOidCidComparisonPost', 'oid', oid)
            // verify required parameter 'cid' is not null or undefined
            assertParamExists('computeEngineOidCidComparisonPost', 'cid', cid)
            // verify required parameter 'reportParam' is not null or undefined
            assertParamExists('computeEngineOidCidComparisonPost', 'reportParam', reportParam)
            const localVarPath = `/compute-engine/{oid}/{cid}/comparison`
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
            localVarRequestOptions.data = serializeDataIfNeeded(reportParam, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * list comparison report
         * @summary list comparison report
         * @param {string} xCsrfToken get value from login.ValidationResp response
         * @param {string} oid organization id
         * @param {string} cid cluster id
         * @param {string} rid report id
         * @param {boolean} [brief] if need data
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        computeEngineOidCidComparisonRidGet: async (xCsrfToken: string, oid: string, cid: string, rid: string, brief?: boolean, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'xCsrfToken' is not null or undefined
            assertParamExists('computeEngineOidCidComparisonRidGet', 'xCsrfToken', xCsrfToken)
            // verify required parameter 'oid' is not null or undefined
            assertParamExists('computeEngineOidCidComparisonRidGet', 'oid', oid)
            // verify required parameter 'cid' is not null or undefined
            assertParamExists('computeEngineOidCidComparisonRidGet', 'cid', cid)
            // verify required parameter 'rid' is not null or undefined
            assertParamExists('computeEngineOidCidComparisonRidGet', 'rid', rid)
            const localVarPath = `/compute-engine/{oid}/{cid}/comparison/{rid}`
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
        /**
         * Feedback realtime report
         * @summary Feedback realtime report
         * @param {string} xCsrfToken get value from login.ValidationResp response
         * @param {string} oid organization id
         * @param {string} cid cluster id
         * @param {ReportFeedbackArgs} reportParams realtime report Feedback param
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        computeEngineOidCidRealtimeFeedbackPost: async (xCsrfToken: string, oid: string, cid: string, reportParams: ReportFeedbackArgs, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'xCsrfToken' is not null or undefined
            assertParamExists('computeEngineOidCidRealtimeFeedbackPost', 'xCsrfToken', xCsrfToken)
            // verify required parameter 'oid' is not null or undefined
            assertParamExists('computeEngineOidCidRealtimeFeedbackPost', 'oid', oid)
            // verify required parameter 'cid' is not null or undefined
            assertParamExists('computeEngineOidCidRealtimeFeedbackPost', 'cid', cid)
            // verify required parameter 'reportParams' is not null or undefined
            assertParamExists('computeEngineOidCidRealtimeFeedbackPost', 'reportParams', reportParams)
            const localVarPath = `/compute-engine/{oid}/{cid}/realtime/feedback`
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
         * list realtime report
         * @summary list realtime report
         * @param {string} xCsrfToken get value from login.ValidationResp response
         * @param {string} oid organization id
         * @param {string} cid cluster id
         * @param {number} startTime start time
         * @param {number} endTime end time
         * @param {string} [status] report status
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        computeEngineOidCidRealtimeGet: async (xCsrfToken: string, oid: string, cid: string, startTime: number, endTime: number, status?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'xCsrfToken' is not null or undefined
            assertParamExists('computeEngineOidCidRealtimeGet', 'xCsrfToken', xCsrfToken)
            // verify required parameter 'oid' is not null or undefined
            assertParamExists('computeEngineOidCidRealtimeGet', 'oid', oid)
            // verify required parameter 'cid' is not null or undefined
            assertParamExists('computeEngineOidCidRealtimeGet', 'cid', cid)
            // verify required parameter 'startTime' is not null or undefined
            assertParamExists('computeEngineOidCidRealtimeGet', 'startTime', startTime)
            // verify required parameter 'endTime' is not null or undefined
            assertParamExists('computeEngineOidCidRealtimeGet', 'endTime', endTime)
            const localVarPath = `/compute-engine/{oid}/{cid}/realtime`
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
                localVarQueryParameter['start-time'] = startTime;
            }

            if (endTime !== undefined) {
                localVarQueryParameter['end-time'] = endTime;
            }

            if (status !== undefined) {
                localVarQueryParameter['status'] = status;
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
 * ReportApi - functional programming interface
 * @export
 */
export const ReportApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ReportApiAxiosParamCreator(configuration)
    return {
        /**
         * list comparison report
         * @summary list comparison report
         * @param {string} xCsrfToken get value from login.ValidationResp response
         * @param {string} oid organization id
         * @param {string} cid cluster id
         * @param {number} [limit] the count per page
         * @param {number} [page] the page index
         * @param {boolean} [brief] if need data
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async computeEngineOidCidComparisonGet(xCsrfToken: string, oid: string, cid: string, limit?: number, page?: number, brief?: boolean, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ReportComparisonReportResp>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.computeEngineOidCidComparisonGet(xCsrfToken, oid, cid, limit, page, brief, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * touch report in on cluster
         * @summary Touch New Comparison Report Job
         * @param {string} xCsrfToken get value from login.ValidationResp response
         * @param {string} oid organization id
         * @param {string} cid cluster id
         * @param {ReportTouchComparisonReportReq} reportParam comparison report param
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async computeEngineOidCidComparisonPost(xCsrfToken: string, oid: string, cid: string, reportParam: ReportTouchComparisonReportReq, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ReportReportResp>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.computeEngineOidCidComparisonPost(xCsrfToken, oid, cid, reportParam, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * list comparison report
         * @summary list comparison report
         * @param {string} xCsrfToken get value from login.ValidationResp response
         * @param {string} oid organization id
         * @param {string} cid cluster id
         * @param {string} rid report id
         * @param {boolean} [brief] if need data
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async computeEngineOidCidComparisonRidGet(xCsrfToken: string, oid: string, cid: string, rid: string, brief?: boolean, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ComputeEngineComparisonReport>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.computeEngineOidCidComparisonRidGet(xCsrfToken, oid, cid, rid, brief, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Feedback realtime report
         * @summary Feedback realtime report
         * @param {string} xCsrfToken get value from login.ValidationResp response
         * @param {string} oid organization id
         * @param {string} cid cluster id
         * @param {ReportFeedbackArgs} reportParams realtime report Feedback param
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async computeEngineOidCidRealtimeFeedbackPost(xCsrfToken: string, oid: string, cid: string, reportParams: ReportFeedbackArgs, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.computeEngineOidCidRealtimeFeedbackPost(xCsrfToken, oid, cid, reportParams, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * list realtime report
         * @summary list realtime report
         * @param {string} xCsrfToken get value from login.ValidationResp response
         * @param {string} oid organization id
         * @param {string} cid cluster id
         * @param {number} startTime start time
         * @param {number} endTime end time
         * @param {string} [status] report status
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async computeEngineOidCidRealtimeGet(xCsrfToken: string, oid: string, cid: string, startTime: number, endTime: number, status?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ReportRealtimeReportContent>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.computeEngineOidCidRealtimeGet(xCsrfToken, oid, cid, startTime, endTime, status, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * ReportApi - factory interface
 * @export
 */
export const ReportApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ReportApiFp(configuration)
    return {
        /**
         * list comparison report
         * @summary list comparison report
         * @param {string} xCsrfToken get value from login.ValidationResp response
         * @param {string} oid organization id
         * @param {string} cid cluster id
         * @param {number} [limit] the count per page
         * @param {number} [page] the page index
         * @param {boolean} [brief] if need data
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        computeEngineOidCidComparisonGet(xCsrfToken: string, oid: string, cid: string, limit?: number, page?: number, brief?: boolean, options?: any): AxiosPromise<ReportComparisonReportResp> {
            return localVarFp.computeEngineOidCidComparisonGet(xCsrfToken, oid, cid, limit, page, brief, options).then((request) => request(axios, basePath));
        },
        /**
         * touch report in on cluster
         * @summary Touch New Comparison Report Job
         * @param {string} xCsrfToken get value from login.ValidationResp response
         * @param {string} oid organization id
         * @param {string} cid cluster id
         * @param {ReportTouchComparisonReportReq} reportParam comparison report param
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        computeEngineOidCidComparisonPost(xCsrfToken: string, oid: string, cid: string, reportParam: ReportTouchComparisonReportReq, options?: any): AxiosPromise<ReportReportResp> {
            return localVarFp.computeEngineOidCidComparisonPost(xCsrfToken, oid, cid, reportParam, options).then((request) => request(axios, basePath));
        },
        /**
         * list comparison report
         * @summary list comparison report
         * @param {string} xCsrfToken get value from login.ValidationResp response
         * @param {string} oid organization id
         * @param {string} cid cluster id
         * @param {string} rid report id
         * @param {boolean} [brief] if need data
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        computeEngineOidCidComparisonRidGet(xCsrfToken: string, oid: string, cid: string, rid: string, brief?: boolean, options?: any): AxiosPromise<ComputeEngineComparisonReport> {
            return localVarFp.computeEngineOidCidComparisonRidGet(xCsrfToken, oid, cid, rid, brief, options).then((request) => request(axios, basePath));
        },
        /**
         * Feedback realtime report
         * @summary Feedback realtime report
         * @param {string} xCsrfToken get value from login.ValidationResp response
         * @param {string} oid organization id
         * @param {string} cid cluster id
         * @param {ReportFeedbackArgs} reportParams realtime report Feedback param
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        computeEngineOidCidRealtimeFeedbackPost(xCsrfToken: string, oid: string, cid: string, reportParams: ReportFeedbackArgs, options?: any): AxiosPromise<string> {
            return localVarFp.computeEngineOidCidRealtimeFeedbackPost(xCsrfToken, oid, cid, reportParams, options).then((request) => request(axios, basePath));
        },
        /**
         * list realtime report
         * @summary list realtime report
         * @param {string} xCsrfToken get value from login.ValidationResp response
         * @param {string} oid organization id
         * @param {string} cid cluster id
         * @param {number} startTime start time
         * @param {number} endTime end time
         * @param {string} [status] report status
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        computeEngineOidCidRealtimeGet(xCsrfToken: string, oid: string, cid: string, startTime: number, endTime: number, status?: string, options?: any): AxiosPromise<Array<ReportRealtimeReportContent>> {
            return localVarFp.computeEngineOidCidRealtimeGet(xCsrfToken, oid, cid, startTime, endTime, status, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for computeEngineOidCidComparisonGet operation in ReportApi.
 * @export
 * @interface ReportApiComputeEngineOidCidComparisonGetRequest
 */
export interface ReportApiComputeEngineOidCidComparisonGetRequest {
    /**
     * get value from login.ValidationResp response
     * @type {string}
     * @memberof ReportApiComputeEngineOidCidComparisonGet
     */
    readonly xCsrfToken: string

    /**
     * organization id
     * @type {string}
     * @memberof ReportApiComputeEngineOidCidComparisonGet
     */
    readonly oid: string

    /**
     * cluster id
     * @type {string}
     * @memberof ReportApiComputeEngineOidCidComparisonGet
     */
    readonly cid: string

    /**
     * the count per page
     * @type {number}
     * @memberof ReportApiComputeEngineOidCidComparisonGet
     */
    readonly limit?: number

    /**
     * the page index
     * @type {number}
     * @memberof ReportApiComputeEngineOidCidComparisonGet
     */
    readonly page?: number

    /**
     * if need data
     * @type {boolean}
     * @memberof ReportApiComputeEngineOidCidComparisonGet
     */
    readonly brief?: boolean
}

/**
 * Request parameters for computeEngineOidCidComparisonPost operation in ReportApi.
 * @export
 * @interface ReportApiComputeEngineOidCidComparisonPostRequest
 */
export interface ReportApiComputeEngineOidCidComparisonPostRequest {
    /**
     * get value from login.ValidationResp response
     * @type {string}
     * @memberof ReportApiComputeEngineOidCidComparisonPost
     */
    readonly xCsrfToken: string

    /**
     * organization id
     * @type {string}
     * @memberof ReportApiComputeEngineOidCidComparisonPost
     */
    readonly oid: string

    /**
     * cluster id
     * @type {string}
     * @memberof ReportApiComputeEngineOidCidComparisonPost
     */
    readonly cid: string

    /**
     * comparison report param
     * @type {ReportTouchComparisonReportReq}
     * @memberof ReportApiComputeEngineOidCidComparisonPost
     */
    readonly reportParam: ReportTouchComparisonReportReq
}

/**
 * Request parameters for computeEngineOidCidComparisonRidGet operation in ReportApi.
 * @export
 * @interface ReportApiComputeEngineOidCidComparisonRidGetRequest
 */
export interface ReportApiComputeEngineOidCidComparisonRidGetRequest {
    /**
     * get value from login.ValidationResp response
     * @type {string}
     * @memberof ReportApiComputeEngineOidCidComparisonRidGet
     */
    readonly xCsrfToken: string

    /**
     * organization id
     * @type {string}
     * @memberof ReportApiComputeEngineOidCidComparisonRidGet
     */
    readonly oid: string

    /**
     * cluster id
     * @type {string}
     * @memberof ReportApiComputeEngineOidCidComparisonRidGet
     */
    readonly cid: string

    /**
     * report id
     * @type {string}
     * @memberof ReportApiComputeEngineOidCidComparisonRidGet
     */
    readonly rid: string

    /**
     * if need data
     * @type {boolean}
     * @memberof ReportApiComputeEngineOidCidComparisonRidGet
     */
    readonly brief?: boolean
}

/**
 * Request parameters for computeEngineOidCidRealtimeFeedbackPost operation in ReportApi.
 * @export
 * @interface ReportApiComputeEngineOidCidRealtimeFeedbackPostRequest
 */
export interface ReportApiComputeEngineOidCidRealtimeFeedbackPostRequest {
    /**
     * get value from login.ValidationResp response
     * @type {string}
     * @memberof ReportApiComputeEngineOidCidRealtimeFeedbackPost
     */
    readonly xCsrfToken: string

    /**
     * organization id
     * @type {string}
     * @memberof ReportApiComputeEngineOidCidRealtimeFeedbackPost
     */
    readonly oid: string

    /**
     * cluster id
     * @type {string}
     * @memberof ReportApiComputeEngineOidCidRealtimeFeedbackPost
     */
    readonly cid: string

    /**
     * realtime report Feedback param
     * @type {ReportFeedbackArgs}
     * @memberof ReportApiComputeEngineOidCidRealtimeFeedbackPost
     */
    readonly reportParams: ReportFeedbackArgs
}

/**
 * Request parameters for computeEngineOidCidRealtimeGet operation in ReportApi.
 * @export
 * @interface ReportApiComputeEngineOidCidRealtimeGetRequest
 */
export interface ReportApiComputeEngineOidCidRealtimeGetRequest {
    /**
     * get value from login.ValidationResp response
     * @type {string}
     * @memberof ReportApiComputeEngineOidCidRealtimeGet
     */
    readonly xCsrfToken: string

    /**
     * organization id
     * @type {string}
     * @memberof ReportApiComputeEngineOidCidRealtimeGet
     */
    readonly oid: string

    /**
     * cluster id
     * @type {string}
     * @memberof ReportApiComputeEngineOidCidRealtimeGet
     */
    readonly cid: string

    /**
     * start time
     * @type {number}
     * @memberof ReportApiComputeEngineOidCidRealtimeGet
     */
    readonly startTime: number

    /**
     * end time
     * @type {number}
     * @memberof ReportApiComputeEngineOidCidRealtimeGet
     */
    readonly endTime: number

    /**
     * report status
     * @type {string}
     * @memberof ReportApiComputeEngineOidCidRealtimeGet
     */
    readonly status?: string
}

/**
 * ReportApi - object-oriented interface
 * @export
 * @class ReportApi
 * @extends {BaseAPI}
 */
export class ReportApi extends BaseAPI {
    /**
     * list comparison report
     * @summary list comparison report
     * @param {ReportApiComputeEngineOidCidComparisonGetRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ReportApi
     */
    public computeEngineOidCidComparisonGet(requestParameters: ReportApiComputeEngineOidCidComparisonGetRequest, options?: AxiosRequestConfig) {
        return ReportApiFp(this.configuration).computeEngineOidCidComparisonGet(requestParameters.xCsrfToken, requestParameters.oid, requestParameters.cid, requestParameters.limit, requestParameters.page, requestParameters.brief, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * touch report in on cluster
     * @summary Touch New Comparison Report Job
     * @param {ReportApiComputeEngineOidCidComparisonPostRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ReportApi
     */
    public computeEngineOidCidComparisonPost(requestParameters: ReportApiComputeEngineOidCidComparisonPostRequest, options?: AxiosRequestConfig) {
        return ReportApiFp(this.configuration).computeEngineOidCidComparisonPost(requestParameters.xCsrfToken, requestParameters.oid, requestParameters.cid, requestParameters.reportParam, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * list comparison report
     * @summary list comparison report
     * @param {ReportApiComputeEngineOidCidComparisonRidGetRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ReportApi
     */
    public computeEngineOidCidComparisonRidGet(requestParameters: ReportApiComputeEngineOidCidComparisonRidGetRequest, options?: AxiosRequestConfig) {
        return ReportApiFp(this.configuration).computeEngineOidCidComparisonRidGet(requestParameters.xCsrfToken, requestParameters.oid, requestParameters.cid, requestParameters.rid, requestParameters.brief, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Feedback realtime report
     * @summary Feedback realtime report
     * @param {ReportApiComputeEngineOidCidRealtimeFeedbackPostRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ReportApi
     */
    public computeEngineOidCidRealtimeFeedbackPost(requestParameters: ReportApiComputeEngineOidCidRealtimeFeedbackPostRequest, options?: AxiosRequestConfig) {
        return ReportApiFp(this.configuration).computeEngineOidCidRealtimeFeedbackPost(requestParameters.xCsrfToken, requestParameters.oid, requestParameters.cid, requestParameters.reportParams, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * list realtime report
     * @summary list realtime report
     * @param {ReportApiComputeEngineOidCidRealtimeGetRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ReportApi
     */
    public computeEngineOidCidRealtimeGet(requestParameters: ReportApiComputeEngineOidCidRealtimeGetRequest, options?: AxiosRequestConfig) {
        return ReportApiFp(this.configuration).computeEngineOidCidRealtimeGet(requestParameters.xCsrfToken, requestParameters.oid, requestParameters.cid, requestParameters.startTime, requestParameters.endTime, requestParameters.status, options).then((request) => request(this.axios, this.basePath));
    }
}
