import { IAuthenticateDeliveryman } from "./authenticateDeliverymanDTO";
import { compare, hash } from "bcrypt";
// database
import { prisma } from "../../database";
import { sign } from "jsonwebtoken";

export class AuthenticateDeliveymanUseCase {
  async execute({ username, password }: IAuthenticateDeliveryman) {
    try {
      // validate client already exists
      const deliveryman = await prisma.deliveryman.findFirst({
        where: { username: username },
      });

      if (!deliveryman) {
        throw new Error("username or password invalid!");
      }
      // verificar se senha corresponde ao username
      const passwordMatch = await compare(password, deliveryman.password);
      if(!passwordMatch) {
        throw new Error("username or password invalid!");
      }
      const token = sign({ username }, "a2e63ee01401aaeca78be023dfbb8c59", {
        subject: deliveryman.id,
        expiresIn: "1d",
      });
      
      return { data: token, has_error: false };
    } catch (error) {
      return { data: error, has_error: true };
    }
  }
}
