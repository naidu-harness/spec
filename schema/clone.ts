export type Clone = boolean | CloneLong;

export interface CloneLong {
    /**
     * Depth defines the clone depth.
     */
    depth?: number;

    /**
     * Disabled disables the default clone step.
     */
    disabled?: boolean;

    /**
     * Insecure enables cloning without ssl verification.
     */
    insecure?: boolean;

    /**
     * Lfs enables cloning lfs files.
     */
    lfs?: boolean;

    /**
     * Strategy configures the clone strategy.
     */
    strategy?: "source-branch" | "merge";

    /**
     * Submodules enables cloning all submodules;
     */
    submodules?: boolean;

    /**
     * Tags enables cloning all tags;
     */
    tags?: boolean;

    /**
     * Trace enables trace logging.
     */
    trace?: boolean;

    /**
     * Reference defines the clone ref.
     */
    ref?: CloneRef;
}

export type CloneRef = string | CloneRefLong

export interface CloneRefLong {
    /**
     * Name provides the ref name. This can be
     * the branch or tag name. Or this can be
     * the full reference, e.g. refs/heads/main.
     */
    name?: string;

    /**
     * Type provides the ref type. If undefined,
     * the reference name is used to determine the
     * reference type.
     */
    type?: "branch" | "pull-request" | "tag";
    
    /**
     * Sha provides the commit sha.
     */
    sha?: string;
}