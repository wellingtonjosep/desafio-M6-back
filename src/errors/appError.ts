import { Response } from "express";

export class AppError extends Error {
  statusCode?;

  constructor(statusCode: number, message: string) {
    super();
    this.statusCode = statusCode;
    this.message = message;
  }
}

export const handleError = (err: AppError, res: Response) => {
  const { statusCode, message } = err;

  return res.status(400).json({
    status: "error",
    statusCode,
    message,
  })
};