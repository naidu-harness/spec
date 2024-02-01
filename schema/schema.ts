import { On } from "./on";
import { Pipeline } from "./pipeline";
import { Stage } from "./stages";
import { Template } from "./template";

export interface Schema {

    /**
     * Pipeline defines the pipeline configuration.
     */
    pipeline?: Pipeline;

    /**
     * Template defines re-usable resources.
     */
    template?: Template;

    /**
     * Inputset defines re-usable inputs.
     */
    inputset?: any;

    //
    // GitHub-Specific
    //

    /**
     * Name defines the pipeline name.
     */
    name?: string;

    /**
     * On defines the workflow triggers.
     */
    on?: On;

    /**
     * Jobs defines the parallel workflow jobs.
     */
    jobs?: Record<string, Stage>

    /**
     * Defaults provides default settings that apply
     * to all jobs in the workflow.
     */
    defaults?: Record<string, any>

    /**
     * Envs defines environment variables that are available
     * to all steps in the workflow.
     */
    env?: Record<string, string>


    // TODO permissions - https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#permissions
    // TODO concurrency - https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#concurrency
}
