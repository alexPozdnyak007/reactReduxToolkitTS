import { createSlice } from "@reduxjs/toolkit";
import {type UnionProduct} from '../types/types'


interface CartState {
    cartProducts: UnionProduct[];  
}

const initialState:CartState={
    cartProducts:[]
}

export const cartProduct= createSlice({
    name:"cartProduct",
    initialState,
    reducers:{
        addProduct:(state,action)=>{
            state.cartProducts.push(action.payload);
        },

        deleteProduct:(state, action)=>{
        state.cartProducts = state.cartProducts.filter((item) => {
            return !(item.id === action.payload.id && item.name === action.payload.name);
        });
        }
       
    }
});

export const {addProduct,deleteProduct} = cartProduct.actions;
export default cartProduct.reducer;