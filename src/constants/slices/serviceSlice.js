import { createSlice } from "@reduxjs/toolkit";

const serviceSlice = createSlice({
  name: "service",
  initialState: {
    cx: true,
    xm: false,
    da: false,
  },
  reducers: {
   
    setall:(state,action)=>{
        return action.payload
    }
  },
});

export const {setall}=serviceSlice.actions
export default serviceSlice.reducer