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


import { ComputeEngineReport } from './compute-engine-report';

/**
 * 
 * @export
 * @interface ReportHealthData
 */
export interface ReportHealthData {
    /**
     * 
     * @type {number}
     * @memberof ReportHealthData
     */
    'createdAt'?: number;
    /**
     * 
     * @type {ComputeEngineReport}
     * @memberof ReportHealthData
     */
    'data'?: ComputeEngineReport;
    /**
     * 
     * @type {number}
     * @memberof ReportHealthData
     */
    'updatedAt'?: number;
}

