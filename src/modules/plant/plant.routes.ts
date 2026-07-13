import { Router } from "express";
import * as PlantController from "./plant.controller";
import { validateRequest } from "../../middleware/validateRequest";
import { createPlantSchema, updatePlantSchema } from "./plant.validation";

const router = Router();

router.post(
  "/",
  validateRequest(createPlantSchema),
  PlantController.createPlant,
);

router.get("/", PlantController.getAllPlants);

router.get("/:id", PlantController.getSinglePlant);

router.patch(
  "/:id",
  validateRequest(updatePlantSchema),
  PlantController.updatePlant,
);

router.delete("/:id", PlantController.deletePlant);

export default router;
