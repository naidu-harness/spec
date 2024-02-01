import { Input } from "./input";
import { On } from "./on";
import { Repository } from "./repository";
import { Stage } from "./stages";

export interface Pipeline {
    id?: string;

    name?: string;

    inputs?: Record<string, Input>;

    env?: Record<string, string>;

    stages?: Stage[];

    repository?: Repository;

    barriers?: string[];

    if?: string;

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
    
    // default?: any;
    // concurrency?: any;
    // permissions?: any;
}
