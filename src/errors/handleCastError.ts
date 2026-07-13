import mongoose from "mongoose";

import HttpStatus from "../constants/httpStatus";
import { IErrorResponse } from "../interfaces/errorResponse";

const handleCastError = (error: mongoose.Error.CastError): IErrorResponse => {
  return {
    statusCode: HttpStatus.BAD_REQUEST,
    message: "Invalid MongoDB ObjectId.",

    errorMessages: [
      {
        path: error.path,
        message: `${error.value} is not a valid ObjectId.`,
      },
    ],
  };
};

export default handleCastError;
