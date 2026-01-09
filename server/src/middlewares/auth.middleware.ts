import { Request, Response, NextFunction } from "express";
import AppError from "../middlewares/errors/error";
import { verifyToken } from "../utils/generate.token";

export function requireAuth(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const token = req.cookies?.token;
    if (!token) {
      throw new AppError("Unauthorized, please login and try again", 401);
    }
    const decoded = verifyToken(token);
    res.locals.user = decoded;
    next();
  } catch (error) {
    next(error);
  }
}
