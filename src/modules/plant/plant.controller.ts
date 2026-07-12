import { Request, Response } from "express";

import { PlantService } from "./plant.service";

import { catchAsync } from "../../utils/catchAsync";

import { sendResponse } from "../../utils/sendResponse";

export const createPlant = catchAsync(async (req: Request, res: Response) => {
  const result = await PlantService.createPlant(req.body);

  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: "Plant created successfully",
    data: result,
  });
});

export const getAllPlants = catchAsync(async (req: Request, res: Response) => {
  const result = await PlantService.getAllPlants();

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Plants retrieved successfully",
    data: result,
  });
});

export const getSinglePlant = catchAsync(
  async (req: Request, res: Response) => {
    const result = await PlantService.getSinglePlant(req.params.id);

    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Plant retrieved successfully",
      data: result,
    });
  },
);

export const updatePlant = catchAsync(async (req: Request, res: Response) => {
  const result = await PlantService.updatePlant(req.params.id, req.body);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Plant updated successfully",
    data: result,
  });
});

export const deletePlant = catchAsync(async (req: Request, res: Response) => {
  await PlantService.deletePlant(req.params.id);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Plant deleted successfully",
  });
});
