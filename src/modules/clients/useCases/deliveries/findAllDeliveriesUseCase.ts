// database
import { prisma } from "../../../database";

export class FindAllDeliveriesUseCase {
  async execute(id_client: string) {
    try {
      const deliveries = await prisma.clients.findMany({
        where: {
            id: id_client,
        },
        // include: {
        //     Deliveries: true
        // },
        select: {
            id: true,
            username: true,
            Deliveries: true
        }
      })
      return { data: deliveries, has_error: false };
    } catch (error) {
      return { data: error, has_error: true };
    }
  }
}
