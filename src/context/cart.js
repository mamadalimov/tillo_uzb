import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    value: []
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
       },
       removeFromCart: ( state, action )=>{}
    }
})


export const {addToCart,removeFromCart} = cartSlide.actions
export default cartSlide.reducer