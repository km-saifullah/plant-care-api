import { Request, Response } from "express";

import HttpStatus from "../../constants/httpStatus";

import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";

import { PlantService } from "./plant.service";
import { PlantMessages } from "./plant.messages";

const createPlant = catchAsync(async (req: Request, res: Response) => {
  const result = await PlantService.createPlant(req.body);

  sendResponse(res, {
    statusCode: HttpStatus.CREATED,
    success: true,
    message: PlantMessages.CREATED,
    data: result,
  });
});

const getAllPlants = catchAsync(async (req: Request, res: Response) => {
  const result = await PlantService.getAllPlants();

  sendResponse(res, {
    statusCode: HttpStatus.OK,
    success: true,
    message: PlantMessages.FETCHED_ALL,
    data: result,
  });
});

const getSinglePlant = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;

  const result = await PlantService.getSinglePlant(id);

  sendResponse(res, {
    statusCode: HttpStatus.OK,
    success: true,
    message: PlantMessages.FETCHED_ONE,
    data: result,
  });
});

const updatePlant = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;

  const result = await PlantService.updatePlant(id, req.body);

  sendResponse(res, {
    statusCode: HttpStatus.OK,
    success: true,
    message: PlantMessages.UPDATED,
    data: result,
  });
});

const deletePlant = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;

  await PlantService.deletePlant(id);

  sendResponse(res, {
    statusCode: HttpStatus.OK,
    success: true,
    message: PlantMessages.DELETED,
    data: null,
  });
});

export const PlantController = {
  createPlant,
  getAllPlants,
  getSinglePlant,
  updatePlant,
  deletePlant,
};
