export const PlantPaths = {
  "/api/v1/plants": {
    post: {
      tags: ["Plants"],

      summary: "Create Plant",

      requestBody: {
        required: true,

        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/Plant",
            },
          },
        },
      },

      responses: {
        201: {
          description: "Plant created successfully.",
        },
      },
    },

    get: {
      tags: ["Plants"],

      summary: "Get All Plants",

      responses: {
        200: {
          description: "List of plants",
        },
      },
    },
  },

  "/api/v1/plants/{id}": {
    get: {
      tags: ["Plants"],

      summary: "Get Single Plant",

      parameters: [
        {
          in: "path",

          name: "id",

          required: true,

          schema: {
            type: "string",
          },
        },
      ],

      responses: {
        200: {
          description: "Plant Details",
        },
      },
    },

    patch: {
      tags: ["Plants"],

      summary: "Update Plant",

      parameters: [
        {
          in: "path",

          name: "id",

          required: true,

          schema: {
            type: "string",
          },
        },
      ],

      responses: {
        200: {
          description: "Plant updated successfully.",
        },
      },
    },

    delete: {
      tags: ["Plants"],

      summary: "Delete Plant",

      parameters: [
        {
          in: "path",

          name: "id",

          required: true,

          schema: {
            type: "string",
          },
        },
      ],

      responses: {
        200: {
          description: "Plant deleted successfully.",
        },
      },
    },
  },
};
