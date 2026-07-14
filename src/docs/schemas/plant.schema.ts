export const PlantSchema = {
  Plant: {
    type: "object",

    properties: {
      _id: {
        type: "string",
      },

      name: {
        type: "string",
        example: "Snake Plant",
      },

      species: {
        type: "string",
        example: "Dracaena trifasciata",
      },

      nickname: {
        type: "string",
        example: "Green Boy",
      },

      room: {
        type: "string",
        example: "Living Room",
      },

      sunlight: {
        type: "string",
        enum: [
          "Full Sun",
          "Partial Sun",
          "Partial Shade",
          "Shade",
          "Low Light",
        ],
      },

      wateringFrequency: {
        type: "number",
        example: 7,
      },

      lastWatered: {
        type: "string",
        format: "date-time",
      },

      fertilizerFrequency: {
        type: "number",
        example: 30,
      },

      lastFertilized: {
        type: "string",
        format: "date-time",
      },

      health: {
        type: "string",
        enum: ["Healthy", "Needs Attention", "Diseased", "Dead"],
      },

      height: {
        type: "number",
        example: 35,
      },

      purchaseDate: {
        type: "string",
        format: "date-time",
      },

      image: {
        type: "string",
      },

      notes: {
        type: "string",
      },

      createdAt: {
        type: "string",
        format: "date-time",
      },

      updatedAt: {
        type: "string",
        format: "date-time",
      },
    },
  },
};
