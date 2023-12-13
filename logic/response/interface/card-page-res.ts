export interface CardPageResponse {
    meta: Meta
    content: Content
}

export interface Meta {
    title: string
}

export interface Content {
    page_title: string
    remove: string
    warning_title: string
    warning_message: string
}
