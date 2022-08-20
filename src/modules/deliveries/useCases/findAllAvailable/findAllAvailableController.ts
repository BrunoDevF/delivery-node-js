import { Request, Response } from 'express';
import { FindAllAvailableUseCase } from './findAllAvailableUseCase';

export class FindAllAvailableController {
    async handle(request: Request, response: Response) {
        const findAllAvailableUseCase = new FindAllAvailableUseCase();
        const result = await findAllAvailableUseCase.execute();
        if (!result.has_error) return response.status(200).json(result); 
        return response.status(400).json(result);
    }
}