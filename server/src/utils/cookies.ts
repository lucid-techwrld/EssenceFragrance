import { Response } from "express";
import AppError from "../middlewares/errors/error";

export function SendCookie(res: Response, token: string) {
  if (!token) {
    throw new AppError("Token is missing", 500);
  }

  res.cookie("accessToken", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 15 * 60 * 1000,
  });
}

export function SendRefreshCookie(res: Response, token: string) {
  if (!token) {
    throw new AppError("Token is missing", 500);
  }

  res.cookie("refreshToken", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });
}
