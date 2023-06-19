import { createSlice } from "@reduxjs/toolkit"

const initialState = {
value: JSON.parse(localStorage.getItem("uzum-cart")) || []

}


const cartSlide = createSlice({
    name: "cart",
    initialState,
    reducers:{
       addToCart:( state, action )=>{
        let index = state.value.findIndex(i => i.id === action.payload.id)
        if (index < 0) {
            state.value = [...state.value, {...action.payload,quantitiy: 1}]
        }else{
            state.value= state.value.map((item,inx) => inx === index ? {...item, quantitiy: item.quantitiy + 1} : item)
        }
        localStorage.setItem("uzum-cart", JSON.stringify(state.value))

       },
       removeFromCart: ( state, action )=>{},
       decrementCart: (state,action)=>{
        let index = state.value.findIndex(i => i.id === action.payload.id)
        state.value= state.value.map((item,inx) => inx === index ? {...item, quantitiy: item.quantitiy - 1} : item)
        localStorage.setItem("uzum-cart", JSON.stringify(state.value))

       },
       removeFromHeart: (state, action)=>{
        state.value = state.value.filter(i => i.id !== action.payload.id)
        localStorage.setItem("uzum-cart", JSON.stringify(state.value))

    }
    }
})


export const {addToCart,removeFromCart,decrementCart,removeFromHeart} = cartSlide.actions
export default cartSlide.reducer