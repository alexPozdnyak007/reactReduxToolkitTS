import { createSlice } from "@reduxjs/toolkit";
import {type autorization} from '../types/types'

const initialState:autorization={
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

