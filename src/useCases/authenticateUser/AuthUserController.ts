import { Request, Response } from "express";
import { AuthUserUseCase } from "./AuthUserUseCase";

class AuthUserController {
  async handle(request: Request, response: Response) {
    const { username, password } = request.body;

    const authUserUseCase = new AuthUserUseCase();

    const token = await authUserUseCase.execute({
      username,
      password,
    });

    return response.json({
        "token": token,
    })
  }
}

export { AuthUserController };
