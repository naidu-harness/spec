import { Cache } from "./cache";
import { Clone } from "./clone";
import { Container } from "./container";
import { Environment } from "./environment";
import { FailureStrategy } from "./failure";
import { Platform } from "./platform";
import { Runtime } from "./runtime";
import { Service } from "./service";
import { Step } from "./steps";
import { Strategy } from "./strategy";
import { Volume } from "./volumes";

export interface Stage {
    /**
     * Id defines the pipeline id.
     */
    id?: string;

    /**
     * Name defines the pipeline name.
     */
    name?: string;

    /**
     * Clone overrides the default clone settings.
     */
    clone?: Clone;

    /**
     * Strategy defines the matrix or looping strategy.
     */
    strategy?: Strategy;

    /**
     * Service defines the deployment target.
     */
    service?: Service;

    /**
     * Environment defines the deployment environment (production, staging).
     */
    environment?: Environment;

    /**
     * Runtime defines the execution runtime.
     */
    runtime?: Runtime;

    /**
     * Platform defines the target platform.
     */
    platform?: Platform;

    /**
     * Cache defines the cache configuration.
     */
    cache?: Cache;

    /**
     * Delegage defines the delegate that should
     * handle stage execution. This is optional.
     */
    delegate?: string;

    /**
     * Group defines a group of steps.
     */
    group?: StageGroup

    /**
     * Parallel defines a parallel of stages.
     */
    parallel?: StageGroup

    /**
     * Template defines a stage template.
     */
    template?: StageTemplate

    /**
     * Steps defines a list of steps.
     */
    steps?: Step[];

    /**
     * If defines conditional execution logic.
     */
    if?: string;

    "failure-strategy"?: FailureStrategy;

    volumes?: Volume[];


    //
    // GitHub Specific
    //

    /**
     * RunsOn defines the type of machine to run the job.
     * 
     * This property is available solely for the purpose of
     * backward compatibility with GitHub Actions.
     * 
     * @github
     * @deprecated
     */
    "runs-on"?: string;

    /**
     * Services defines background service containers.
     * 
     * This property is available solely for the purpose of
     * backward compatibility with GitHub Actions.
     * 
     * @github
     * @deprecated
     */
    services?: Record<string, Container>;
}

export interface StageGroup {
    /**
     * Parallel defines the maximum number of stages that
     * can run in parallel. If unset or zero, the stages
     * run sequentially.
     * @deprecated
     */
    parallel?: number;

    /**
     * Stages defines a list of stages.
     */
    stages?: Stage[];
}

export interface StageTemplate {
    uses?: string;
    with?: Record<string, any>;
}
