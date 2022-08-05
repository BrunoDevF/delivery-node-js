import { Request, Response } from "express";
import { CreateClientUseCase } from "./createClientUseCase";


export class CreateClientController {
    async handle (request: Request, response: Response) {
        const createClientUseCase = new CreateClientUseCase();
        const result = await createClientUseCase.execute(request.body);
        
        if(result.has_error) {
            return response.status(400).json(result);
        }
        return response.status(200).json(result);
    }
}
