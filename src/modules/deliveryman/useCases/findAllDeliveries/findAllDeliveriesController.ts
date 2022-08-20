import { Request, Response } from "express";
import { FindAllDeliveriesUseCase } from "./findAllDeliveriesUseCase";


export class FindAllDeliveriesController {
    async handle (request: Request, response: Response) {
        const { id_deliveryman } = request
        const findAllDeliveriesUseCase = new FindAllDeliveriesUseCase();
        const deliveries = await findAllDeliveriesUseCase.execute(id_deliveryman);
        
        if(deliveries.has_error) {
            return response.status(400).json(deliveries);
        }
        return response.status(200).json(deliveries);
    }
}