import { createSlice } from "@reduxjs/toolkit";

const contactFormSlice =createSlice({
    name:"contactForm",
    initialState:{
        setActiveForm:"reasonActive",
        reason:null,
        subject:null,
        fullName:null,
        company:null,
        contactNo:null,
        EmailId:null
    },
    reducers:{
        changeActiveForm:(state,action)=>{
            state.setActiveForm=action.payload
        },
        setData:(state,action)=>{
            state.fullName=action.payload
        }
    }
})

export const {changeActiveForm,setData} =contactFormSlice.actions
export default contactFormSlice.reducer