import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { type FoodType } from "../types/types";

export const fetchFood=createAsyncThunk(
    'food/fetchFood',
    async function(_,{rejectWithValue}) {
        try {
           const response=await fetch('http://localhost:3000/food');
           if(!response.ok){
             throw new Error("Не удалось загрузить данные");
           }
           const data = await response.json();
           return data;
           
        } catch (error) {
            const errorMessage = error instanceof Error
            ?error.message 
            :'Произошла неизвестная ошибка';
            return rejectWithValue(errorMessage);
        }
       
    }
);
type initStateFood={
    food: FoodType[],
    status: null|string,
    error:null|string
}

const initialStateFood:initStateFood={
   food:[],
   status:null,
   error:null
}
const foodSlice = createSlice({
    name:"food",
    initialState:initialStateFood,
    reducers:{

    },
    extraReducers:(builder)=> {
        builder
        .addCase(fetchFood.pending,(state)=>{
            state.status="loading";
            state.error=null;
        })

        .addCase(fetchFood.fulfilled,(state,action)=>{
            state.status="resolved";
            state.food= action.payload;
            state.error = null;
        })
       .addCase(fetchFood.rejected,(state,action)=>{
            state.status = "rejected";
            state.error = action.payload as string;
        })
    }
});

export default foodSlice.reducer;