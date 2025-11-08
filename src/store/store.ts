import { configureStore } from "@reduxjs/toolkit";
import AutorizationReducer  from "../slices/autorization";
import FoodReducer from "../slices/foodSlice";
import ElectronicReducer from "../slices/electronicSlice";
import ClothesReducer from "../slices/clothesSlice";
import CartProductReducer from  "../slices/cart";

export const store=configureStore({
    reducer:{
        autorization:AutorizationReducer,
        foodData:FoodReducer,
        electronicData:ElectronicReducer,
        clothesData:ClothesReducer,
        cartReducer:CartProductReducer,
    }
});

export type RootState= ReturnType<typeof store.getState>
export type AppDispatch= typeof store.dispatch
