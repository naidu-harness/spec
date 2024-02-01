export interface FailureStrategy {
    errors?: FailureType | FailureType[];
    action?: Action;
}

export type FailureType = "all"
    | "approval-rejection"
    | "authentication"
    | "authorization"
    | "connectivity"
    | "delegate-provisioning"
    | "delegate-restart"
    | "input-timeout"
    | "policy-evaluation"
    | "timeout"
    | "unknown"
    | "verification"
    | "user-mark-fail";

export type Action = ActionType | ActionLong;

export type ActionType = "abort"
    | "fail"
    | "ignore"
    | "manual-intervention"
    | "pipeline-rollback"
    | "retry"
    | "retry-step-group"
    | "stage-rollback"
    | "success";

export interface ActionLong {
    "abort"?: boolean;
    "fail"?: boolean;
    "ignore"?: boolean;
    "manual-intervention"?: ActionManual;
    "pipeline-rollback"?: boolean;
    "retry"?: ActionRetry;
    "retry-step-group"?: boolean;
    "stage-rollback"?: boolean;
    "success"?: boolean;
}

export interface ActionRetry {
    "attempts"?: number;
    "interval"?: string | string[];
    "failure-action"?: Action;
}

export interface ActionManual {
    "timeout"?: string;
    "timeout-action"?: Action;
}

// Exmaple 1
//   failure-strategy:
//     errors: [ any ]
//     action: abort

// Exmaple 2
//   failure-strategy:
//     errors: [ any ]
//     action: fail

// Exmaple 3
//   failure-strategy:
//     errors: [ any ]
//     action: ignore

// Exmaple 4
//   failure-strategy:
//     errors: [ any ]
//     action:
//       manual-intervention:
//         timeout: 30s
//         timeout-action: fail

// Exmaple 5
//   failure-strategy:
//     errors: [ any ]
//     action:
//       manual-intervention:
//         timeout: 30s
//         timeout-action:
//           retry:
//             attempts: 5
//             failure-action: ignore

// Exmaple 6
//   failure-strategy:
//     errors: [ any ]
//     action: retry

// Exmaple 7
//   failure-strategy:
//     errors: [ any ]
//     action:
//       retry
//         attempts: 10
//         interval: 10s
//         failure-action: fail