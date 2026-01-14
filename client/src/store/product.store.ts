import { create } from "zustand"
import api from "../api/axios"
import type { Product } from "../types/product.types"

interface ProductState {
    products: Product[]
    isLoading: boolean
    error: string | null

    fetchProducts: (category?: string) => Promise<void>
}

export const useProductStore = create<ProductState>((set) => ({
    products: [],
    isLoading: false,
    error: null,

    fetchProducts: async () => {
        try {
            set({ isLoading: true, error: null })

            const res = await api.get("/products/all")
            console.log(res.data.data)
            set({ products: res.data.data, isLoading: false })
        } catch (err: any) {
            set({
                error: err.response?.data?.message || "Failed to fetch products",
                isLoading: false,
            })
        }
    },
}))
