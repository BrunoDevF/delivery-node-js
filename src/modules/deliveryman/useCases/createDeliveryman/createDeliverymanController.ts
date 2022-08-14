import { Request, Response } from 'express';
import { CreateDeliveryman } from './createDeliverymanUseCase';

export class CreateDeliverymanController {
    async handle(request: Request, response: Response) {
        const createDeliveryman = new CreateDeliveryman();
        const result = await createDeliveryman.execute(request.body);
        if(!result.has_error) {
            return response.status(200).json(result);
        }
        return response.status(400).json(result);
    }
}