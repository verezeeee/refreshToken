import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";	

export function EnsureAuthenticated(request: Request, response: Response, next: NextFunction) {
    const authToken = request.headers.authorization;

    if (!authToken) {
        return response.status(401).json({
            message: "Token is missing"
        })
    }

    //verificar se o token é valido
    const [, token] = authToken.split(" ");

    try {
        verify(token, 'd58b54b0-962b-4d85-8f04-7087b3f3de3a')

        return next();
    } catch (error) {
        return response.status(401).json({
            message: "Token invalid"
        })
    }
}