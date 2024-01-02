import { createSlice } from "@reduxjs/toolkit";

const contactFormSlice =createSlice({
    name:"contactForm",
    initialState:{
        reasonForm:true,
        inquiryFor:false,
        informationForm:false,
        reason:null,
        subject:null,
        fullName:null,
        company:null,
        contactNo:null,
        EmailId:null
    },
    reducers:{
        changeActiveForm:(state,action)=>{
            return action.payload
        },
        setData:(state,action)=>{
            state.fullName=action.payload
        }
    }
})

export const {changeActiveForm,setData} =contactFormSlice.actions
export default contactFormSlice.reducer