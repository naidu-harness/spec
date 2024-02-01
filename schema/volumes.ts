export type Mount = string | MountLong;

export interface MountLong {
    source: string;
    target: string;
}

export interface Volume {
    name: string;
    uses: "bind" | "claim" | "config" | "temp"
    with?: VolumeBind | VolumeClaim | VolumeConfigMap | VolumeTemp; // TODO use discriminator? needs strong typing.
}

export interface VolumeBind {
    path?: string;
}

export interface VolumeClaim {
    name?: string;
}

export interface VolumeConfigMap {
    name?: string;
    mode?: string;
    optional?: boolean;
}

export interface VolumeTemp {
    medium?: "memory";
    limit?: string | number;
}
