import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { type ClothesType } from "../types/types";

export const fetchClothes=createAsyncThunk(
    'food/fetchClothes',
    async function(_,{rejectWithValue}) {
        try {
           const response=await fetch('http://localhost:3000/clothes');
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
type initStateClothes={
    clothes: ClothesType[],
    status: null|string,
    error:null|string
}

const initialStateFood:initStateClothes={
   clothes:[],
   status:null,
   error:null
}
const clothesSlice = createSlice({
    name:"clothes",
    initialState:initialStateFood,
    reducers:{

    },
    extraReducers:(builder)=> {
        builder
        .addCase(fetchClothes.pending,(state)=>{
            state.status="loading";
            state.error=null;
        })

        .addCase(fetchClothes.fulfilled,(state,action)=>{
            state.status="resolved";
            state.clothes= action.payload;
            state.error = null;
        })
       .addCase(fetchClothes.rejected,(state,action)=>{
            state.status = "rejected";
            state.error = action.payload as string;
        })
    }
});

export default clothesSlice.reducer;