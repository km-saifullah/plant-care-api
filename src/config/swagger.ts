import { Express } from "express";

import swaggerUI from "swagger-ui-express";

import { swaggerDocument } from "../docs/docs";

export const swaggerDocs = (app: Express) => {
  app.use(
    "/api-docs",

    swaggerUI.serve,

    swaggerUI.setup(swaggerDocument),
  );
};
