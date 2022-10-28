import { Router } from "express";

import userCreateController from "../controllers/user/userCreate.controller";

import vehicleCaptureController from "../controllers/vehicle/vehicleCapture.controller";
import vehicleCaptureAllController from "../controllers/vehicle/vehicleCaptureAll.controller";
import vehicleCreateController from "../controllers/vehicle/vehicleCreate.controller";

import verifyFieldAndUserMiddleware from "../middlewares/user/verifyFieldAndUser.middleware";
import verifyFieldAndVehicleMiddleware from "../middlewares/vehicle/verifyFieldAndVehicle.middleware";

const router = Router();

router.post("/users", verifyFieldAndUserMiddleware, userCreateController)

router.get("/vehicles", vehicleCaptureAllController)
router.post("/vehicles/:userId", verifyFieldAndVehicleMiddleware, vehicleCreateController)
router.get("/vehicles/users/:userId", vehicleCaptureController)

export default router;
