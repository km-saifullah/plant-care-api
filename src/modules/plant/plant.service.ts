import { IPlant } from "./plant.interface";
import { Plant } from "./plant.model";

const createPlant = async (payload: Partial<IPlant>) => {
  return await Plant.create(payload);
};

const getAllPlants = async () => {
  return await Plant.find().sort({ createdAt: -1 });
};

const getSinglePlant = async (id: string) => {
  return await Plant.findById(id);
};

const updatePlant = async (id: string, payload: Partial<IPlant>) => {
  return await Plant.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });
};

const deletePlant = async (id: string) => {
  return await Plant.findByIdAndDelete(id);
};

export const PlantService = {
  createPlant,
  getAllPlants,
  getSinglePlant,
  updatePlant,
  deletePlant,
};
