import { Router } from 'express';
import { CreateUserController } from './useCases/createUser/CreateUserController';
import { AuthUserController } from './useCases/authenticateUser/AuthUserController';
import { EnsureAuthenticated } from './middlewares/ensureAuthenticator';
import { RefreshTokenUserController } from './useCases/refreshTokenUser/RefreshTokenUserController';

const router = Router();

const createUserController = new CreateUserController();
const authUserController = new AuthUserController();
const refreshTokenUserController = new RefreshTokenUserController();

router.post("/users", createUserController.handle)
router.post("/auth", authUserController.handle)
router.post("/refresh-token", refreshTokenUserController.handle)

router.get("/courses", EnsureAuthenticated, (request, response) => {
    return response.json([
        { id: 1, name: "NodeJS" },
        { id: 2, name: "ReactJS" },
        { id: 3, name: "React Native" },
        { id: 4, name: "TypeScript"}
    ])
})

export { router };