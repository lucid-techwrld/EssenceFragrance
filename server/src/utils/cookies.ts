import { Response } from "express";
import AppError from "../middlewares/errors/error";

export default function sendCookie(res: Response, token: string) {
  if (!token) {
    throw new AppError("Token is missing", 500);
  }

  res.cookie("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 24 * 60 * 60 * 1000,
  });
}
