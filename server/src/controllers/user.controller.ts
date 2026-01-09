import UserService from '../services/user.services'
import {Request,  Response, NextFunction} from "express"
import {createUserSchema, loginSchema} from "../schema/user.dto"
import {SendResponse} from "../utils/response"
import {PaymentMethod} from "../schema/user.dto"
import {SendCookie, SendRefreshCookie} from "../utils/cookies"



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
            const {accessToken, refreshToken} = await UserServices.login(validatedCredentials)
            SendCookie(res,accessToken)
            SendRefreshCookie(res, refreshToken)
            return SendResponse(res, "Login successfully", true, 200)
        } catch(err) {
            next(err)
        }
    }

    async fetchUserDetails(req: Request, res: Response, next: NextFunction){
        try{
            const user = res.locals.user
            const userDetails = await UserServices.fetchUserInfo(user.email)
            return SendResponse(res, "User information fetched successfully", true, 200, userDetails)
        } catch(err){
            next(err)
        }
    }

    async refresh(req:Request, res: Response, next: NextFunction) {
        try{
            const refreshToken = req.cookies?.refreshToken
            const accessToken = await UserServices.refreshToken(refreshToken)
            SendCookie(res, accessToken)
            return SendResponse(res, "Refreshed", true, 202)
        } catch(err) {
            next(err)
        }
    }

    async logOut(req: Request, res: Response, next: NextFunction) {
        try{
            const accessToken = req.cookies?.accessToken
            const refreshToken = req.cookies?.refreshToken
            if(!accessToken && !refreshToken) {
                return SendResponse(res,"No account is currently logged in", false, 400)
            }
            res.clearCookie("accessToken", {
                httpOnly: true,
                secure: process.env.NODE_ENV === "production",
                sameSite: "lax"
            })

            res.clearCookie("refreshToken", {
                httpOnly: true,
                secure: process.env.NODE_ENV === "production",
                sameSite: "lax"
            })
            return SendResponse(res,"Logged out successfully", true, 200)
        } catch(err) {
            next(err)
        }
    }
}

const UserController = new User()
export default UserController;
