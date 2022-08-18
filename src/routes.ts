import { UpdateDeliveryBoyController } from './modules/deliveries/useCases/updateDeliveryBoy/UpdateDeliveryBoyController';
import { FindAllAvailableController } from './modules/deliveries/useCases/findAllAvailable/FindAllAvailableController';
import { CreateDeliveryController } from './modules/deliveries/useCases/createDelivery/CreateDeliveryController';
import { AuthenticateDeliveryBoyController } from './modules/accounts/useCases/authenticateDeliveryBoy/AuthenticateDeliveryBoyController';
import { CreateDeliveryBoyController } from './modules/deliveryBoy/useCases/createDeliveryBoy/CreateDeliveryBoyController';
import { AuthenticateClientController } from './modules/accounts/useCases/authenticateClient/AuthenticateClientController';
import { CreateClientController } from './modules/clients/useCases/createClient/CreateClientController';
import { Router } from "express";
import { handleClientAuthentication } from './middlewares/handleClientAuthentication';
import { handleDeliveryBoyAuthentication } from './middlewares/handleDeliveryBoyAuthentication';

const routes = Router()

routes.post("/client", new CreateClientController().handle)
routes.post("/client/authenticate", new AuthenticateClientController().handle)

routes.post("/deliveryboy", new CreateDeliveryBoyController().handle)
routes.post("/deliveryboy/authenticate", new AuthenticateDeliveryBoyController().handle)

routes.post("/delivery", handleClientAuthentication, new CreateDeliveryController().handle)
routes.get("/delivery/available", handleDeliveryBoyAuthentication, new FindAllAvailableController().handle)
routes.put("/delivery/updateDeliveryBoy/:id", handleDeliveryBoyAuthentication, new UpdateDeliveryBoyController().handle)

export {routes}