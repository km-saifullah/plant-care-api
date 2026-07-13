import { NextFunction, Request, Response } from "express";
import { ZodError } from "zod";
import mongoose from "mongoose";
import { AppError } from "../utils/AppError";

export const errorHandler = (
  error: any,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  let statusCode = 500;

  let message = "Something went wrong.";

  let errors: any[] = [];

  // Custom Error
  if (error instanceof AppError) {
    statusCode = error.statusCode;
    message = error.message;
  }

  // Zod Error
  else if (error instanceof ZodError) {
    statusCode = 400;

    message = "Validation Error";

    errors = error.issues.map((issue) => ({
      field: issue.path.join("."),
      message: issue.message,
    }));
  }

  // Invalid Mongo ObjectId
  else if (error instanceof mongoose.Error.CastError) {
    statusCode = 400;

    message = "Invalid ID";
  }

  // Mongo Validation
  else if (error instanceof mongoose.Error.ValidationError) {
    statusCode = 400;

    message = "Database Validation Error";

    errors = Object.values(error.errors).map((err) => ({
      field: err.path,
      message: err.message,
    }));
  }

  res.status(statusCode).json({
    success: false,
    message,
    errors,
    stack: process.env.NODE_ENV === "development" ? error.stack : undefined,
  });
};
