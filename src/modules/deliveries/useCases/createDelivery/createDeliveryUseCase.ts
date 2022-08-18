import { ICreateDelivery } from './createDeliveryDTO'
import { prisma } from '../../../database'

export class CreateDeliveryUseCase {
    async execute({ id_client, item_name }: ICreateDelivery) {
        try {
            const delivery = await prisma.deliveries.create({
                data: {
                    item_name,
                    id_client
                }
            });

            return { data: delivery, has_error: false };
        } catch (error) {
            console.log(error)
          return { data: error, has_error: true };
        }
    }
}