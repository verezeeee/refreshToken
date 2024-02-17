import { client } from "../prisma/client"
import dayjs from "dayjs"

class GenerateRefreshToken {
    async execute(userId: string) {

        const expiresIn = dayjs().add(15, "second").unix()
        //gerar token do usuário
        const generateRefreshToken = await client.refreshToken.create({
            data: {
                userId,
                expiresIn
            }
        })

        return generateRefreshToken;
    }
}

export { GenerateRefreshToken }