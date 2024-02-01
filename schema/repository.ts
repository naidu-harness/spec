/**
 * Repository defines a remote git repository.
 */
export interface Repository {

    /**
     * Name provides the repository name.
     */
    name?: string;

    /**
     * Connector provides the repository connector.
     */
    connector?: string;
}
