import { ZodError } from "zod";

import HttpStatus from "../constants/httpStatus";
import { IErrorResponse } from "../interfaces/errorResponse";

const handleZodError = (error: ZodError): IErrorResponse => {
  const errorMessages = error.issues.map((issue) => ({
    path: issue.path.join("."),
    message: issue.message,
  }));

  return {
    statusCode: HttpStatus.BAD_REQUEST,
    message: "Validation Error.",
    errorMessages,
  };
};

export default handleZodError;
