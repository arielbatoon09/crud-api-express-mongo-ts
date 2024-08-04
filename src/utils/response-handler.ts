import { Response } from 'express';

export const responseHandler = (response: Response, statusCode: number, message: string, data: any = null) => {
    return response.status(statusCode).json({ status: statusCode, message: message, data: data });
};