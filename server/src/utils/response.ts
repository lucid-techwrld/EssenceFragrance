import {Response} from "express"

interface ApiResponse<T> {
    message: string;
    success: boolean;
    statusCode: boolean;
    data?: T
}

export function SendResponse<T>(
    res: Response,
    message: string,
    success: boolean,
    statCode: number,
    data?: T
) {
    const response:ApiResponse<T> = {
        statusCode: statCode < 400,
        message,
        success,
        data
    }
    return res.status(statCode).json(response)
}
