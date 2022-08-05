import { Request, Response } from 'express';
import { AuthenticateClientUseCase } from './authenticateClientUseCase';


export class AuthenticateClientController {
    async handle(request: Request, response: Response) {
        const authenticateClientUseCase = new AuthenticateClientUseCase();
        const result = await authenticateClientUseCase.execute(request.body);
        if(result.has_error) {
            return response.status(400).json(result);
        }
        return response.status(200).json(result);
    }
}