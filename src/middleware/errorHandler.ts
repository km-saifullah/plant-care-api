import { ErrorRequestHandler } from "express";
import mongoose from "mongoose";
import { ZodError } from "zod";

import HttpStatus from "../constants/httpStatus";
import AppError from "../utils/AppError";

import handleCastError from "../errors/handleCastError";
import handleDuplicateError from "../errors/handleDuplicateError";
import handleValidationError from "../errors/handleValidationError";
import handleZodError from "../errors/handleZodError";
import handleGenericError from "../errors/handleGenericError";

export const errorHandler: ErrorRequestHandler = (error, req, res, next) => {
  let statusCode = HttpStatus.INTERNAL_SERVER_ERROR;

  let message = "Something went wrong.";

  let errorMessages = [
    {
      path: "",
      message,
    },
  ];

  if (error instanceof AppError) {
    statusCode = error.statusCode;

    message = error.message;

    errorMessages = [
      {
        path: "",
        message,
      },
    ];
  } else if (error instanceof ZodError) {
    const simplified = handleZodError(error);

    statusCode = simplified.statusCode;

    message = simplified.message;

    errorMessages = simplified.errorMessages;
  } else if (error instanceof mongoose.Error.CastError) {
    const simplified = handleCastError(error);

    statusCode = simplified.statusCode;

    message = simplified.message;

    errorMessages = simplified.errorMessages;
  } else if (error instanceof mongoose.Error.ValidationError) {
    const simplified = handleValidationError(error);

    statusCode = simplified.statusCode;

    message = simplified.message;

    errorMessages = simplified.errorMessages;
  } else if (error.code === 11000) {
    const simplified = handleDuplicateError(error);

    statusCode = simplified.statusCode;

    message = simplified.message;

    errorMessages = simplified.errorMessages;
  } else if (error instanceof Error) {
    const simplified = handleGenericError(error);

    statusCode = simplified.statusCode;

    message = simplified.message;

    errorMessages = simplified.errorMessages;
  }

  res.status(statusCode).json({
    success: false,

    message,

    errorMessages,

    stack: process.env.NODE_ENV === "development" ? error.stack : undefined,
  });
};
