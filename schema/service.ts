export type Service = string | ServiceLong;

export interface ServiceLong {
    parallel?: boolean;
    items: string[];
}

// service: petstore

// service:
//   parallel: true
//   items:
//   - petstore1
//   - petstore2
