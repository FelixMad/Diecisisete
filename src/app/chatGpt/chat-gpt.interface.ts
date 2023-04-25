export interface Models {
    object: string;
    data:   Datum[];
}

export interface Datum {
    id:         string;
    object:     DatumObject;
    created:    number;
    owned_by:   OwnedBy;
    permission: Permission[];
    root:       string;
    parent:     null;
}

export enum DatumObject {
    Model = "model",
}

export enum OwnedBy {
    Openai = "openai",
    OpenaiDev = "openai-dev",
    OpenaiInternal = "openai-internal",
    System = "system",
}

export interface Permission {
    id:                   string;
    object:               PermissionObject;
    created:              number;
    allow_create_engine:  boolean;
    allow_sampling:       boolean;
    allow_logprobs:       boolean;
    allow_search_indices: boolean;
    allow_view:           boolean;
    allow_fine_tuning:    boolean;
    organization:         Organization;
    group:                null;
    is_blocking:          boolean;
}

export enum PermissionObject {
    ModelPermission = "model_permission",
}

export enum Organization {
    Empty = "*",
}

export interface Chat {
    id:      string;
    object:  string;
    created: number;
    model:   string;
    usage:   Usage;
    choices: Choice[];
}

export interface Choice {
    message:       Message;
    finish_reason: string;
    index:         number;
}

export interface Message {
    role:    string;
    content: string;
}

export interface Usage {
    prompt_tokens:     number;
    completion_tokens: number;
    total_tokens:      number;
}

export interface Completion {
    id:      string;
    object:  string;
    created: number;
    model:   string;
    choices: Choice[];
    usage:   Usage;
}

export interface Choice {
    text:          string;
    index:         number;
    logprobs:      null;
    finish_reason: string;
}

export interface Usage {
    prompt_tokens:     number;
    completion_tokens: number;
    total_tokens:      number;
}

export interface Image {
    created: number;
    data:    ImageDatum[];
}

export interface ImageDatum {
    url: string;
}


