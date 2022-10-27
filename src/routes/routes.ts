import { Router } from "express";
import userCreateController from "../controllers/user/userCreate.controller";
import vehicleCreateController from "../controllers/vehicle/vehicleCreate.controller";

import verifyFieldAndUserMiddleware from "../middlewares/user/verifyFieldAndUser.middleware";
import verifyFieldAndVehicleMiddleware from "../middlewares/vehicle/verifyFieldAndVehicle.middleware";

const router = Router();

router.post("/users", verifyFieldAndUserMiddleware, userCreateController)

router.get("/vehicles")
router.post("/vehicles/:userId", verifyFieldAndVehicleMiddleware, vehicleCreateController)

export default router;
