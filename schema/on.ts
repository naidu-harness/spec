export type On = EventType | Event[] | Event;

export type Event = EventType | EventLong;

export type EventType = "branch_protection_rule"
    | "check_run"
    | "check_suite"
    | "create"
    | "delete"
    | "deployment"
    | "deployment_status"
    | "discussion"
    | "discussion_comment"
    | "fork"
    | "issue_comment"
    | "issues"
    | "label"
    | "member"
    | "merge_group"
    | "milestone"
    | "page_build"
    | "project"
    | "project_card"
    | "project_column"
    | "public"
    | "pull_request"
    | "pull_request_review"
    | "pull_request_review_comment"
    | "pull_request_target"
    | "push"
    | "registry_package"
    | "repository_dispatch"
    | "release"
    | "schedule"
    | "status"
    | "watch"
    | "workflow_call"
    | "workflow_dispatch"
    | "workflow_run"
;

export interface EventLong {
    branch_protection_rule?: EventFilter;
    check_run?: EventFilter;
    check_suite?: EventFilter;
    create?: any;
    delete?: any;
    deployment?: any;
    deployment_status?: any;
    discussion?: EventFilter;
    discussion_comment?: EventFilter;
    fork?: any;
    issue_comment?: EventFilter;
    issues?: EventFilter;
    label?: EventFilter;
    member?: EventFilter;
    merge_group?: EventFilter;
    milestone?: EventFilter;
    page_build?: any;
    project?: EventFilter;
    project_card?: EventFilter;
    project_column?: EventFilter;
    public?: any;
    pull_request?: PullRequestFilter;
    pull_request_review?: Event;
    pull_request_review_comment?: Event;
    pull_request_target?: PullRequestFilter;
    push?: PushFilter;
    registry_package?: EventFilter;
    repository_dispatch?: EventFilter;
    release?: EventFilter;
    schedule?:any;
    status?: any;
    watch?: EventFilter;
    workflow_call?:any;
    workflow_dispatch?:any;
    workflow_run?:any;
}

export interface EventFilter {
    types?: string | string[];
}

export interface PushFilter {
    "branches"?: string | string[];
    "branches-ignore"?: string | string[];
    "paths"?: string | string[];
    "paths-ignore"?: string | string[];
    "tags"?: string | string[];
    "tags-ignore"?: string | string[];
}

export interface PullRequestFilter {
    "branches"?: string | string[];
    "branches-ignore"?: string | string[];
    "paths"?: string | string[];
    "paths-ignore"?: string | string[];
    "tags"?: string | string[];
    "tags-ignore"?: string | string[];
    "types"?: string | string[];
    "review-approved"?: boolean;
    "review-dismissed"?: boolean;
}
