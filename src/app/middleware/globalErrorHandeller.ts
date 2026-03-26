import status from "http-status";
import AppError from "../errorHelper/AppError";
import { NextFunction, Request, Response } from "express";
import { Prisma } from "../../generated/prisma/client";
import { TErrorSources } from "../interface/error.interface";
import { sendResponse } from "../shared/sendResponse";

function errorHandler (err: any, req: Request, res: Response, next: NextFunction) {
    let statusCode: number = status.INTERNAL_SERVER_ERROR; // Default 500
    let message: string = 'Internal Server Error';
    let errorSources: TErrorSources[] = [];

    // Prisma Validation Error
    if (err instanceof Prisma.PrismaClientValidationError) {
        statusCode = status.BAD_REQUEST;
        message = "Validation Error";
        errorSources.push({ message: err.message });
    }
    // Timeout (DB or network)
    else if (err?.code === 'ETIMEDOUT' || err?.code === 'PROTOCOL_TIMEOUT') {
        statusCode = status.GATEWAY_TIMEOUT;
        message = 'Database request timed out. Please retry after a short while.';
        errorSources.push({ message });
    }
    
    else if (err instanceof AppError) {
        statusCode = err.statusCode || status.BAD_REQUEST;
        message = err.message;
        errorSources.push({ message: err.message });
    }
    sendResponse(res,{
        success:false,
        message:message,
        httpStatusCode:statusCode,
        data:{errorSources,stack:process.env.NODE_ENV==='development'?err.stack:undefined}
    })
}

export default errorHandler;