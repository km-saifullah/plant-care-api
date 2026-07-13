import { Response } from "express";

import { IApiResponse } from "../interfaces/apiResponse";

export const sendResponse = <T>(res: Response, payload: IApiResponse<T>) => {
  res.status(payload.statusCode).json({
    success: payload.success,

    message: payload.message,

    meta: payload.meta,

    data: payload.data,
  });
};
