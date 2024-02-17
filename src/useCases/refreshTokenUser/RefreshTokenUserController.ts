import { Request, Response } from "express";
import { RefreshTokenUserUseCase } from "./RefreshTokenUserUseCase";


class RefreshTokenUserController{

    async handle(request: Request, response: Response){
        const { refreshToken } = request.body;

        const refreshTokenUserUseCase = new RefreshTokenUserUseCase();

        const token = await refreshTokenUserUseCase.execute(refreshToken);

        return response.json(token);
    }
}

export { RefreshTokenUserController }