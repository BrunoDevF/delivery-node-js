import { Router } from "express";
const routes = Router();

import { createClientController } from './modules/clients/useCases/createClient';
import { authenticateClientController } from './modules/account/authenticateClient'

routes.post('/authenticate', authenticateClientController.handle)

routes.post('/clients', createClientController.handle)

export default routes