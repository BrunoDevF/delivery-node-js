import { hash } from "bcrypt";
import { prisma } from "../../../database";
import { ICreateDeliveryman } from "./createDeliverymanDTO";

export class CreateDeliveryman {
  async execute({ password, username }: ICreateDeliveryman) {
    try {
      // validate deliveryman already exists
      const deliverymanExist = await prisma.clients.findFirst({
        where: { username: { mode: "insensitive", equals: username } },
      });
      if (deliverymanExist) {
        throw new Error("Deliveryman already exists");
      }
      // crypt password
      const hashPassword = await hash(password, 10);
      // save deliveryman
      const deliveryman = await prisma.deliveryman.create({
        data: {
          username,
          password: hashPassword,
        },
      });
      return { data: deliveryman, has_error: false };
    } catch (error) {
        console.log(error)
      return { data: error, has_error: true };
    }
  }
}
