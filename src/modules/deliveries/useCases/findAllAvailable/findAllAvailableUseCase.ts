import { prisma } from '../../../database'

export class FindAllAvailableUseCase {
    async execute() {
        try {
            const delivery = await prisma.deliveries.findMany({
                where: { end_at:  null, id_deliveryman: null }
            });

            return { data: delivery, has_error: false };
        } catch (error) {
            console.log(error)
          return { data: error, has_error: true };
        }
    }
}