import HttpStatus from "../../constants/httpStatus";

import AppError from "../../utils/AppError";

import { IPlant } from "./plant.interface";
import { Plant } from "./plant.model";
import { PlantMessages } from "./plant.messages";

const createPlant = async (payload: Partial<IPlant>) => {
  const plant = await Plant.create(payload);

  return plant;
};

const getAllPlants = async () => {
  const plants = await Plant.find().sort({
    createdAt: -1,
  });

  return plants;
};

const getSinglePlant = async (id: string) => {
  const plant = await Plant.findById(id);

  if (!plant) {
    throw new AppError(HttpStatus.NOT_FOUND, PlantMessages.NOT_FOUND);
  }

  return plant;
};

const updatePlant = async (id: string, payload: Partial<IPlant>) => {
  const plant = await Plant.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });

  if (!plant) {
    throw new AppError(HttpStatus.NOT_FOUND, PlantMessages.NOT_FOUND);
  }

  return plant;
};

const deletePlant = async (id: string) => {
  const plant = await Plant.findByIdAndDelete(id);

  if (!plant) {
    throw new AppError(HttpStatus.NOT_FOUND, PlantMessages.NOT_FOUND);
  }

  return plant;
};

export const PlantService = {
  createPlant,
  getAllPlants,
  getSinglePlant,
  updatePlant,
  deletePlant,
};
