export interface RegisterPayload {
    firstName: string
    lastName: string
    email: string
    password: string
    phoneNumber: string
    address: string
}

export interface LoginPayload {
    email: string
    password: string
}

export interface User {
    id: string
    firstName: string
    lastName: string
    email: string
    phoneNumber: string
    address: string
}
