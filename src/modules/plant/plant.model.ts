import { Schema, model } from "mongoose";
import { IPlant } from "./plant.interface";
import { PLANT_HEALTH, SUNLIGHT_TYPES } from "./plant.constants";

const plantSchema = new Schema<IPlant>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    species: {
      type: String,
      required: true,
      trim: true,
    },

    nickname: {
      type: String,
      trim: true,
    },

    room: {
      type: String,
      required: true,
      trim: true,
    },

    sunlight: {
      type: String,
      enum: SUNLIGHT_TYPES,
      required: true,
    },

    wateringFrequency: {
      type: Number,
      required: true,
      min: 1,
    },

    lastWatered: {
      type: Date,
      default: Date.now,
    },

    fertilizerFrequency: {
      type: Number,
      default: 30,
    },

    lastFertilized: {
      type: Date,
      default: Date.now,
    },

    health: {
      type: String,
      enum: PLANT_HEALTH,
      default: "Healthy",
    },

    height: {
      type: Number,
      default: 0,
    },

    purchaseDate: {
      type: Date,
    },

    image: {
      type: String,
    },

    notes: {
      type: String,
    },
  },
  {
    timestamps: true,
  },
);

export const Plant = model<IPlant>("Plant", plantSchema);
