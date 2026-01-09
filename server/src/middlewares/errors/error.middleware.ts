import { Request, Response, NextFunction } from "express";
import { ZodError } from "zod";
import AppError from "./error";

export function errorMiddleware(
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) {
  // Zod validation error
  if (err instanceof ZodError) {
    return res.status(400).json({
      success: false,
      message: "Validation failed",
      errors: err.issues.map(e => ({
        field: e.path.join("."),
        message: e.message,
      })),
    });
  }

  // Custom AppError
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      success: false,
      message: err.message,
    });
  }

  // Unknown error
  console.error(err);

  return res.status(500).json({
    success: false,
    message: "Internal server error",
  });
}
