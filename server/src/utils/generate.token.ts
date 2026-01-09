import jwt from "jsonwebtoken";

export type TokenPayload = {
  userId: string;
  email: string;
};

const JWT_SECRET = process.env.JWT_SECRET!;
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || "1d";

if (!JWT_SECRET) {
  throw new Error("JWT_SECRET is not defined");
}

export function generateToken(payload: TokenPayload) {
  return jwt.sign(payload, JWT_SECRET, {
    expiresIn: '1d',
  });
}

export function verifyToken(token: string): TokenPayload {
  return jwt.verify(token, JWT_SECRET) as TokenPayload;
}
