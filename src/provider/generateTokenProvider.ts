import { sign } from "jsonwebtoken";

class GenerateTokenProvider {
  async execute(userId: string) {
    const token = sign({}, "d58b54b0-962b-4d85-8f04-7087b3f3de3a", {
      subject: userId,
      expiresIn: "20s",
    });

    return token;
  }
}

export { GenerateTokenProvider };
