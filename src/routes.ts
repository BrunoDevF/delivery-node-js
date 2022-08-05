import { Router } from "express";
const routes = Router();

import { createClientController } from './modules/clients/useCases/createClient'

routes.post('/clients', createClientController.handle)

export default routes