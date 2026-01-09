import { Request, Response, NextFunction } from "express";
import AppError from "../middlewares/errors/error";
import { verifyToken } from "../utils/generate.token";

const JWT_SECRET = process.env.JWT_ACCESS_SECRET!;

export function requireAuth(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const token = req.cookies?.accessToken;
    if (!token) {
      throw new AppError("Unauthorized, please login and try again", 401);
    }
    const decoded = verifyToken(token, JWT_SECRET);
    res.locals.user = decoded;
    next();
  } catch (error) {
    next(error);
  }
}
