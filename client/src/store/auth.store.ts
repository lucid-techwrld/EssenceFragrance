import { create } from "zustand"
import api from "../api/axios"
import type { RegisterPayload, LoginPayload, User } from "../types/auth.types"

interface AuthState {
    user: User | null
    isAuthenticated: boolean
    isLoading: boolean
    error: string | null

    createAccount: (data: RegisterPayload) => Promise<void>
    login: (data: LoginPayload) => Promise<void>
    fetchUser: () => Promise<void>
    refreshToken: () => Promise<void>
    logout: () => Promise<void>
}

export const useAuthStore = create<AuthState>((set) => ({
    user: null,
    isAuthenticated: false,
    isLoading: false,
    error: null,

    /* ---------------- REGISTER ---------------- */
    createAccount: async (data) => {
        try {
            set({ isLoading: true, error: null })

            const res = await api.post("/auth/register", data)

            set({
                user: res.data.user,
                isAuthenticated: false,
                isLoading: false,
            })
        } catch (err: any) {
            set({
                error: err.response?.data?.message || "Registration failed",
                isLoading: false,
            })
        }
    },

    /* ---------------- LOGIN ---------------- */
    login: async (data) => {
        try {
            set({ isLoading: true, error: null })

            await api.post("/auth/login", data)

            set({
                isAuthenticated: true,
                isLoading: false,
            })
        } catch (err: any) {
            set({
                error: err.response?.data?.message || "Login failed",
                isLoading: false,
            })
        }
    },

    /* ---------------- FETCH USER ---------------- */
    fetchUser: async () => {
        try {
            set({ isLoading: true })

            const res = await api.get("/auth/user")

            set({
                user: res.data.userDetails,
                isAuthenticated: true,
                isLoading: false,
            })
        } catch {
            set({
                user: null,
                isAuthenticated: false,
                isLoading: false,
            })
        }
    },

    /* ---------------- REFRESH TOKEN ---------------- */
    refreshToken: async () => {
        try {
            await api.post("/auth/refresh")

            set({
                isAuthenticated: true,
            })
        } catch {
            set({
                user: null,
                isAuthenticated: false,
            })
        }
    },

    /* ---------------- LOGOUT ---------------- */
    logout: async () => {
        try {
            await api.post("/auth/logout")
        } finally {
            set({
                user: null,
                isAuthenticated: false,
            })
        }
    },
}))
