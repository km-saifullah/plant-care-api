import { z } from "zod";
import { PLANT_HEALTH, SUNLIGHT_TYPES } from "./plant.constants";

export const createPlantSchema = z.object({
  body: z.object({
    name: z.string().trim().min(2, "Plant name must be at least 2 characters."),

    species: z.string().trim().min(2, "Species is required."),

    nickname: z.string().optional(),

    room: z.string().trim().min(2, "Room is required."),

    sunlight: z.enum(SUNLIGHT_TYPES),

    wateringFrequency: z.number().int().positive(),

    fertilizerFrequency: z.number().int().positive().optional(),

    height: z.number().nonnegative().optional(),

    purchaseDate: z.string().datetime().optional(),

    image: z.string().url().optional(),

    notes: z.string().optional(),

    health: z.enum(PLANT_HEALTH).optional(),
  }),
});

export const updatePlantSchema = z.object({
  body: createPlantSchema.shape.body.partial(),
});
