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


import { ComputeEngineHealthLogAdvice } from './compute-engine-health-log-advice';
import { ComputeEngineHealthLogStats } from './compute-engine-health-log-stats';

/**
 * 
 * @export
 * @interface ComputeEngineHealthLogResult
 */
export interface ComputeEngineHealthLogResult {
    /**
     * 
     * @type {Array<ComputeEngineHealthLogAdvice>}
     * @memberof ComputeEngineHealthLogResult
     */
    'advice'?: Array<ComputeEngineHealthLogAdvice>;
    /**
     * 
     * @type {string}
     * @memberof ComputeEngineHealthLogResult
     */
    'source'?: string;
    /**
     * 
     * @type {ComputeEngineHealthLogStats}
     * @memberof ComputeEngineHealthLogResult
     */
    'stats'?: ComputeEngineHealthLogStats;
    /**
     * 
     * @type {number}
     * @memberof ComputeEngineHealthLogResult
     */
    'timestamp'?: number;
}

