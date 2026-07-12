import { Router } from "express";

import plantRoutes from "../modules/plant/plant.routes";

const router = Router();

router.use("/plants", plantRoutes);

export default router;
