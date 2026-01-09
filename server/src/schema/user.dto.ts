import { z } from "zod";

export enum PaymentMethod {
  CreditCard = "Credit Card/Debit Card",
  Transfer = "Transfer via Bank",
  Cash = "Cash on delivery",
}

export const createUserSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  phoneNumber: z.string().optional(),
  alternatePhone: z.string().optional(),
  email: z.string().email("Invalid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  address: z.string().optional(),
  paymentMethod: z.nativeEnum(PaymentMethod).optional(),
});

export const loginSchema = z.object({
  email: z.string().email("Invalid email"),
  password: z.string().min(6, "Password must be at least 6 characters")
})

export type CreateUserDTO = z.infer<typeof createUserSchema>;
export type LoginDTO = z.infer<typeof loginSchema>
