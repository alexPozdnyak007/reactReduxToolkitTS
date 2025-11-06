import { createSlice } from "@reduxjs/toolkit";
import {type Autorization} from '../types/types'

const initialState:Autorization={
    isAutorization:false
}

export const autorizationUser=createSlice({
    name:"autorization",
    initialState,
    reducers:
    {
     loginIn:(state)=>{state.isAutorization= !state.isAutorization}
    }
});

export const {loginIn} = autorizationUser.actions
export default autorizationUser.reducer

