export interface Enterprise {
    id: number
    name: string
    email: string
    password: string
    address: string
    generalbg: string
    generalcolor: string
    highlightsbg: string
    highlightscolor: string
}

export interface Responses {
    message: { enterprise: Enterprise }
    errorcode: string
    statuscode: number
}