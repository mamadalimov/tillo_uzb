import { configureStore } from "@reduxjs/toolkit"
import heartSlice from "./heart"
import cartSlide from "./cart"
import  proReload  from "./proReload"


export const store = configureStore({
    reducer:{
        heart: heartSlice,
        cart: cartSlide,
        proReload
    }
})