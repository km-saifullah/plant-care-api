import { Document } from "mongoose";
import { PLANT_HEALTH, SUNLIGHT_TYPES } from "./plant.constants";

export interface IPlant extends Document {
  name: string;

  species: string;

  nickname?: string;

  room: string;

  sunlight: (typeof SUNLIGHT_TYPES)[number];

  wateringFrequency: number;

  lastWatered: Date;

  fertilizerFrequency: number;

  lastFertilized: Date;

  health: (typeof PLANT_HEALTH)[number];

  height: number;

  purchaseDate?: Date;

  image?: string;

  notes?: string;

  createdAt: Date;

  updatedAt: Date;
}
