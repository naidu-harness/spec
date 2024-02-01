import {Mount} from "./volumes"

export type Container = string | ContainerLong;

/**
 * ContainerLong defines the container configuration syntax
 * in long form.
 */
export interface ContainerLong {
    /**
     * Image defines the container image.
     */
    image?: string;

    /**
     * Connector provides the Connect used to authenticate
     * to the registry.
     */
    connector?: string;

    /**
     * Credentials provides registry authentication credentials.
     */
    credentials?: Credentials;

    pull?: "always" | "never" | "if-not-exists";

    entrypoint?: string | string[];

    args?: string | string[];

    dns?: string | string[];

    "extra-hosts"?: string | string[];

    network?: string;

    "network-mode"?: string;

    privileged?: boolean;

    workdir?: string;

    ports?: string[];

    volumes?: Mount[];

    user?: string | number;

    group?: string | number;

    cpu?: string | number;

    memory?: string | number;

    "shm-size"?: string | number
}

export interface Credentials {
    /**
     * Username defines registry username.
     */
    username?: string;
    /**
     * Password defines registry password.
     */
    password?: string;

    /**
     * AWS defines registry credentials for amazon web services.
     */
    aws?: CredentialsAWS;
}

export interface CredentialsAWS {
    "access-key"?: string;
    "secret-key"?: string;
}
