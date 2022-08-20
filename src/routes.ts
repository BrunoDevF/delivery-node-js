import { Router } from "express";
const routes = Router();

import { createClientController } from "./modules/clients/useCases/createClient";
import { authenticateClientController } from "./modules/account/authenticateClient";
import { createDeliverymanController } from "./modules/deliveryman/useCases/createDeliveryman";
import { authenticateDeliverymanController } from "./modules/account/authenticateDeliveryman";
import { createDeliveryController } from "./modules/deliveries/useCases/createDelivery";
import { findAllAvailableController } from "./modules/deliveries/useCases/findAllAvailable";
import { updateDeliverymanController } from "./modules/deliveries/useCases/updateDeliveryman/useCases";
import { findAllDeliveriesController } from "./modules/deliveryman/useCases/findAllDeliveries";
// middlewares
import { ensureAuthenticateClient } from "./middlewares/ensureAuthenticateClient";
import { ensureAuthenticateDeliveryman } from "./middlewares/ensureAuthenticateDeliveryman";

routes.post("/client/authenticate", authenticateClientController.handle);
routes.post(
  "/deliveryman/authenticate",
  authenticateDeliverymanController.handle
);

routes.post("/clients", createClientController.handle);

routes.post("/deliveryman", createDeliverymanController.handle);
routes.post(
  "/delivery",
  ensureAuthenticateClient,
  createDeliveryController.handle
);

routes.get(
  "/delivery/available",
  ensureAuthenticateDeliveryman,
  findAllAvailableController.handle
);

routes.put(
  "/delivery/updateDeliveryman",
  ensureAuthenticateDeliveryman,
  updateDeliverymanController.handle
);

routes.get(
  "/client/deliveries",
  ensureAuthenticateClient,
  findAllDeliveriesController.handle
);

routes.get(
    "/deliveryman/deliveries",
    ensureAuthenticateDeliveryman,
    findAllDeliveriesController.handle
  );

export default routes;
