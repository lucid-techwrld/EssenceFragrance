import PasswordSecurity from "../utils/bcrypt"
import {CreateUserDTO, LoginDTO} from "../schema/user.dto"
import type {TokenPayload} from "../utils/generate.token"
import {generateToken, generateRefreshToken, verifyToken} from "../utils/generate.token"
import AppError from "../middlewares/errors/error"
import User from "../models/user.model"

class UserService {
    async create(userData: CreateUserDTO) {
        if(!userData.email) {
            throw new AppError("Email is required, please enter email and try again", 400)
        }
        const hashedPassword = await PasswordSecurity.encrypt(userData.password)
        const existingUser = await this.findByEmail(userData.email)
        if(existingUser){
            throw new AppError("Failed to create account, User already exists", 400)
        }
        const user = await User.create({...userData, password: hashedPassword})
        const {password, ...newUser} = user.toObject()
        return newUser
    };

    async login(credentials: LoginDTO) {
        if(!credentials.email || !credentials.password) {
            throw new AppError("Please enter email and password to login")
        }
        const user = await this.findByEmail(credentials.email, true)
        const isMatch = await PasswordSecurity.decrypt(user.password, credentials.password)

        if(!isMatch) {
            throw new AppError("Incorrect email or password", 401)
        }
        const payload: TokenPayload = {
            userId: user._id.toString(),
            email: user.email
        }
        const accessToken = generateToken(payload)
        const refreshToken = generateRefreshToken(payload)
        if(!accessToken || accessToken === "undefined" || !refreshToken || refreshToken === "undefined") {
            throw new AppError("Failed to generate token, please try again")
        }
        return {accessToken, refreshToken}
    }

    async fetchUserInfo(email: string){
        const userInfo = await this.findByEmail(email, false)
        return userInfo
    }

    async findByEmail(email: string, showPassword: boolean = false) {
        if(!email) {
            throw new AppError("Please add email address and try again")
        }
        const user = await User.findOne({email}).select(showPassword ? '+password' : '-password');
        if(!user) {
            throw new AppError("User does not exist, please create an account and try agin", 404)
        }
        return user
    }

    async refreshToken(token: string) {
        const JWT_SECRET = process.env.JWT_REFRESH_SECRET!;
         if (!token) {
            throw new AppError("Unauthorized, invalid or expired token", 403);
        }
        const decoded = verifyToken(token, JWT_SECRET)
        if(!decoded){
            throw new AppError("Invalid refresh token", 403)
        }
        const newAccessToken = generateToken({userId: decoded.userId, email: decoded.email})
        return newAccessToken;
    }
}

export default UserService
