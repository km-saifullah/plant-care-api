import { Router } from "express";

import * as PlantController from "./plant.controller";

const router = Router();

router.post("/", PlantController.createPlant);

router.get("/", PlantController.getAllPlants);

router.get("/:id", PlantController.getSinglePlant);

router.patch("/:id", PlantController.updatePlant);

router.delete("/:id", PlantController.deletePlant);

export default router;
