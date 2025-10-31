import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import {type ElectronicType} from "../types/types";

export const fetchElectonic=createAsyncThunk(
    'electronic/fetchElectronic',
    async function(_,{rejectWithValue}){
        try {
           const response=await fetch('http://localhost:3000/electonic');
           if(!response.ok){
             throw new Error("Не удалось загрузить данные");
           }
           const data=await response.json();
           return data;

        } catch (error) {
             const errorMessage = error instanceof Error
            ?error.message 
            :'Произошла неизвестная ошибка';
            return rejectWithValue(errorMessage);
        }
    }
);
type initStateElectronic={
    electronic: ElectronicType[],
    status: null|string,
    error:null|string
}
const initStateElectronic:initStateElectronic={
   electronic:[],
   status:null,
   error:null
}
const ElectronicSlice = createSlice({
    name:"electronic",
    initialState:initStateElectronic,
    reducers:{

    },
    extraReducers:(builder)=> {
        builder
        .addCase(fetchElectonic.pending,(state)=>{
            state.status="loading";
            state.error=null;
        })

        .addCase(fetchElectonic.fulfilled,(state,action)=>{
            state.status="resolved";
            state.electronic= action.payload;
            state.error = null;
        })
       .addCase(fetchElectonic.rejected,(state,action)=>{
            state.status = "rejected";
            state.error = action.payload as string;
        })
    }
});
export default ElectronicSlice.reducer;