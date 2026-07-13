import { RequestHandler } from "express";

export const notFound: RequestHandler = (req, res) => {
  res.status(404).json({
    success: false,
    message: `${req.originalUrl} not found.`,

    errorMessages: [
      {
        path: req.originalUrl,
        message: "API endpoint not found.",
      },
    ],
  });
};
