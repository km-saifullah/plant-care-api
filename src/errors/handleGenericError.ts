import HttpStatus from "../constants/httpStatus";

import { IErrorResponse } from "../interfaces/errorResponse";

const handleGenericError = (error: Error): IErrorResponse => {
  return {
    statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
    message: error.message || "Something went wrong.",

    errorMessages: [
      {
        path: "",
        message: error.message,
      },
    ],
  };
};

export default handleGenericError;
