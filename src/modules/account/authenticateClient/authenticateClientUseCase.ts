import { IAuthenticateClient } from "./authenticateClientDTO";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
// database
import { prisma } from "../../database";

export class AuthenticateClientUseCase {
  async execute({ password, username }: IAuthenticateClient) {
    try {
      // verify client
      const client = await prisma.clients.findFirst({
        where: { username: username },
      });
      if (!client) {
        throw new Error("User not found");
      }

      const passwordMatch = await compare(password, client.password);
      if (!passwordMatch) {
        throw new Error("Password mismatch");
      }

      const token = sign({ username }, "a2e63ee01401aaeca78be023dfbb8c59", {
        subject: client.id,
        expiresIn: "1d",
      });

      return { data: token, has_error: false };
    } catch (error) {
        return { data: error, has_error: true };
    }
  }
}
