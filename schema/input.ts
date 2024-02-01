export interface Input {

    /**
     * Type defines the input type.
     */
    type: "string" | "number" | "boolean" | "array" | "map"

    /**
     * Description defines the input description.
     */
    description?: string

    /**
     * @go-type: interface{}
     */
    default?: any

    /**
     * Required indicates the input is required.
     */
    required?: boolean;

    /**
     * Items defines an array type.
     */
    items?: any[]

    /**
     * Enum defines a list of accepted input values.
     */
    enum?: any[]

    /**
     * Mask indicates the input should be masked.
     */
    mask?: boolean
}
