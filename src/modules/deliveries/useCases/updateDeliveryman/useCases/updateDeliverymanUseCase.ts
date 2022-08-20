import { IUpdateDeliveryman } from './updateDeliverymanDTO'
import { prisma } from '../../../../database'

export class UpdateDeliverymanUseCase {
    async execute({ id_deliveryman, end_at, id_delivery }: IUpdateDeliveryman) {
        try {
            const result = await prisma.deliveries.update({
                where: {
                    id: id_delivery
                },
                data: {
                    end_at: end_at,
                    id_deliveryman: id_deliveryman
                }
            });
            return { data: result, has_error: false };
        } catch (error) {
            console.log(error)
            return { data: error, has_error: true };
        }
    }
}