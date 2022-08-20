import { Request, Response } from 'express';
import { UpdateDeliverymanUseCase } from './updateDeliverymanUseCase';

export class UpdateDeliverymanController {
    async handle(request: Request, response: Response) {
        const updateDeliverymanUseCase = new UpdateDeliverymanUseCase();
        const { id_deliveryman } = request;
        const result = await updateDeliverymanUseCase.execute({
            ...request.body,
            id_deliveryman
        });
        if (!result.has_error) {
            return response.status(200).json(result);
        }
        return response.status(400).json(result);
    }
}