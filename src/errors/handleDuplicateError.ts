import HttpStatus from "../constants/httpStatus";
import { IErrorResponse } from "../interfaces/errorResponse";

const handleDuplicateError = (error: any): IErrorResponse => {
  const field = Object.keys(error.keyValue)[0];

  return {
    statusCode: HttpStatus.CONFLICT,
    message: "Duplicate value found.",

    errorMessages: [
      {
        path: field,
        message: `${field} already exists.`,
      },
    ],
  };
};

export default handleDuplicateError;
