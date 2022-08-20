import { Request, Response } from 'express';
import { CreateDeliveryUseCase } from './createDeliveryUseCase';

export class CreateDeliveryController {
    async handle(request: Request, response: Response) {
        const { item_name } = request.body;
        const { id_client } = request;
        const createDelivery = new CreateDeliveryUseCase();
        const result = await createDelivery.execute({
            id_client, item_name
        });
        if (!result.has_error) {
            return response.status(200).json(result);
        }
        return response.status(400).json(result);
    }
}