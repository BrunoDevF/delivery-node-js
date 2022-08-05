import { ICreateClient } from "./createClientDTO";
import { hash } from "bcrypt";
// database
import { prisma } from "../../../database";

export class CreateClientUseCase {
  async execute({ username, password }: ICreateClient) {
    try {
      // validate client already exists
      const clientExists = await prisma.clients.findFirst({
        where: { username: { mode: "insensitive", equals: username } },
      });
      if (clientExists) {
        throw new Error("Client already exists");
      }
      // crypt password
      const hashPassword = await hash(password, 10);
      // save client
      const clientSaved = await prisma.clients.create({
        data: {
          username,
          password: hashPassword,
        },
      });
      return { data: clientSaved, has_error: false };
    } catch (error) {
      return { data: error, has_error: true };
    }
  }
}
