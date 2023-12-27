import { createSlice } from "@reduxjs/toolkit";

const partnerFormSlice = createSlice({
    name:"partnerWithUs",
    initialState:{
        userName:null,
        companyName:null,
        emailId:null
    },
    reducers:{
        addName:(state,action)=>{
          state.userName= action.payload
        },
        addCompany:(state,action)=>{
            state.companyName=action.payload
        },
        addEmail:(state,action)=>{
            state.emailId=action.payload
        }
    }
})
export const {addName,addCompany,addEmail} =partnerFormSlice.actions

export default partnerFormSlice.reducer