import { client } from "../../prisma/client";
import { hash } from "bcryptjs";

interface IAuthUserRequest {
  name: string;
  password: string;
  username: string;
}

class CreateUserUseCase {
  async execute({ name, username, password }: IAuthUserRequest) {
    //Verificar se o usuário existe

    const userAlreadyExists = await client.user.findFirst({
      where: {
        username
      }
    });

    if (userAlreadyExists) {
      throw new Error("User already exists");
    }

    //Cadastro do usuário

    const passwordHash = await hash(password, 8);

    const user = await client.user.create({
        data: {
            name,
            username,
            password: passwordHash
        }
    })

    return user;
  }
}

export { CreateUserUseCase };
