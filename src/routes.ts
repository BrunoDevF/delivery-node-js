import { Router } from "express";
const routes = Router();

import { createClientController } from './modules/clients/useCases/createClient';
import { authenticateClientController } from './modules/account/authenticateClient'
import { createDeliverymanController } from './modules/deliveryman/useCases/createDeliveryman'
import { authenticateDeliverymanController } from './modules/account/authenticateDeliveryman'

routes.post('/client/authenticate', authenticateClientController.handle)
routes.post('/deliveryman/authenticate', authenticateDeliverymanController.handle)

routes.post('/clients', createClientController.handle)

routes.post('/deliveryman', createDeliverymanController.handle)

export default routes