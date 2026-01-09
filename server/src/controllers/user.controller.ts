import UserService from '../services/user.services'
import {Request,  Response, NextFunction} from "express"
import {createUserSchema, loginSchema} from "../schema/user.dto"
import {SendResponse} from "../utils/response"
import {PaymentMethod} from "../schema/user.dto"
import SendCookie from "../utils/cookies"



const UserServices = new UserService


interface UserRequest extends Request {
    body: {
        firstName: string;
        lastName: string;
        phoneNumber?: string;
        alternatePhone?: string;
        email: string;
        password: string;
        address?: string;
        paymentMethod?: PaymentMethod
    }
}

interface LoginRequest extends Request {
    body: {
        email: string;
        password: string;
    }
}


class User {

    async createUser(req: UserRequest, res: Response, next: NextFunction) {
        try{
            const validatedData = createUserSchema.parse(req.body)
            const user = await UserServices.create(validatedData)
            return SendResponse(res, "User created successfully", true, 201, user)
        } catch(err) {
           next(err)
        }
    }


    async login(req: LoginRequest, res: Response, next: NextFunction){
        try {
            const validatedCredentials = loginSchema.parse(req.body)
            const token = await UserServices.login(validatedCredentials)
            SendCookie(res,token)
            return SendResponse(res, "Login successfully", true, 200)
        } catch(err) {
            next(err)
        }
    }

    async logOut(req: Request, res: Response, next: NextFunction) {
        try{
            res.clearCookie("token", {
                httpOnly: true,
                secure: process.env.NODE_ENV === "production",
                sameSite: "lax"
            })
        } catch(err) {
            next(err)
        }
    }
}

const UserController = new User()
export default UserController;
