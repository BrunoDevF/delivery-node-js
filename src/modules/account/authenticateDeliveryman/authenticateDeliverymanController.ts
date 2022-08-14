import { Request, Response } from 'express';
import { AuthenticateDeliveymanUseCase } from './authenticateDeliverymanUseCase';

export class AuthenticateDeliverymanController {
    async handle(request: Request, response: Response) {
        const authenticateDeliveymanUseCase = new AuthenticateDeliveymanUseCase();
        const result = await authenticateDeliveymanUseCase.execute(request.body);
        if(result.has_error) {
            return response.status(400).json(result);
        }
        return response.status(200).json(result);
    }
}