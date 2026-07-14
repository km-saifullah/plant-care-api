import { PlantSchema } from "./schemas/plant.schema";
import { PlantPaths } from "./paths/plant.paths";

export const swaggerDocument = {
  openapi: "3.0.3",

  info: {
    title: "Plant Care API",

    version: "1.0.0",

    description: "REST API for managing plant care records.",
  },

  servers: [
    {
      url: "http://localhost:5000",
    },
  ],

  tags: [
    {
      name: "Plants",
    },
  ],

  paths: {
    ...PlantPaths,
  },

  components: {
    schemas: {
      ...PlantSchema,
    },
  },
};
