const swaggerDefinition = {
  openapi: "3.0.0",

  info: {
    title: "Plant Care API",
    version: "1.0.0",
    description: "REST API for managing indoor and outdoor plants.",
  },

  servers: [
    {
      url: "http://localhost:5000",
      description: "Local Development",
    },
  ],

  tags: [
    {
      name: "Plant",
      description: "Plant Management APIs",
    },
  ],
};

export default swaggerDefinition;
