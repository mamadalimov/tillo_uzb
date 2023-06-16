import { configureStore } from "@reduxjs/toolkit"
import heartSlice from "./heart"
import cartSlide from "./cart"

export const store = configureStore({
    reducer:{
        heart: heartSlice,
        cart: cartSlide
    }
})