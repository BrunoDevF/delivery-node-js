// database
import { prisma } from "../../../database";

export class FindAllDeliveriesUseCase {
  async execute(id_deliveryman: string) {
    console.log(id_deliveryman);
    try {
      const deliveries = await prisma.deliveryman.findMany({
        where: {
            id: id_deliveryman,
        },
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
