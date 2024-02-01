export type Output = string | OutputLong;

export interface OutputLong {
    name?: string;
    alias?: string;
    scope?: "pipeline" | "stage";
    mask?: boolean;
}
