import { Clone } from "./clone";
import { Input } from "./input";
import { On } from "./on";
import { Repository } from "./repository";
import { Stage } from "./stages";

export interface Pipeline {
    /**
     * Id provides a unique pipeline identifer.
     * @deprecated
     */
    id?: string;

    /**
     * Name provides a pipeline name.
     * @deprecated
     */
    name?: string;

    /**
     * Inputs provides pipeline input variables.
     */
    inputs?: Record<string, Input>;

    /**
     * Env provides global environment variables that
     * propagate to all pipeline steps.
     */
    env?: Record<string, string>;

    /**
     * Stages provides a list of stages. Each pipeline
     * is made up of one or more stages that executes
     * sequentially.
     */
    stages?: Stage[];

    /**
     * Repo overrides the default repository.
     */
    repo?: Repository;

    /**
     * Clone overrides the default clone behavior.
     */
    clone?: Clone;

    /**
     * Barriers provides optional pipeline barriers.
     */
    barriers?: string[];

    /**
     * If provides conditional pipeline execution logic.
     * If the condition resolves to false, the pipeline
     * is skipped.
     */
    if?: string;

    /**
     * On provides condition pipeline execution logic
     * based on trigger event and action mapping. If
     * the conditional logic resolves to folse, the
     * pipeline is skipped.
     */
    on?: On;

    //
    // GitHub-Specific
    //

    /**
     * Jobs defines jobs (stages) in the pipeline.
     * 
     * This property is available solely for the purpose of
     * backward compatibility with GitHub Actions.
     * 
     * @github
     * @deprecated
     */
    jobs?: Record<string, Stage>;
    
    /**
     * @github
     * @deprecated
     */
    default?: any;

    /**
     * @github
     * @deprecated
     */
    concurrency?: any;

    /**
     * @github
     * @deprecated
     */
    permissions?: any;
}
