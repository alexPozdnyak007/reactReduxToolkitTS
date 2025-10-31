import { configureStore } from "@reduxjs/toolkit";
import AutorizationReducer  from "../slices/autorization";
import FoodReducer from "../slices/foodSlice";
import ElectronicReducer from "../slices/electronicSlice";
import ClothesReducer from "../slices/clothesSlice";

export const store=configureStore({
    reducer:{
        autorization:AutorizationReducer,
        foodData:FoodReducer,
        electronicData:ElectronicReducer,
        clothesData:ClothesReducer
    }
});

export type RootState= ReturnType<typeof store.getState>
export type AppDispatch= typeof store.dispatch
