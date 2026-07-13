import mongoose from "mongoose";

import HttpStatus from "../constants/httpStatus";
import { IErrorResponse } from "../interfaces/errorResponse";

const handleValidationError = (
  error: mongoose.Error.ValidationError,
): IErrorResponse => {
  const errorMessages = Object.values(error.errors).map((item) => ({
    path: item.path,
    message: item.message,
  }));

  return {
    statusCode: HttpStatus.BAD_REQUEST,
    message: "Validation Error.",
    errorMessages,
  };
};

export default handleValidationError;
