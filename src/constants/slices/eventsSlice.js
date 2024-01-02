import { createSlice } from "@reduxjs/toolkit";

const eventsSlice = createSlice({
    name:"events",
    initialState:{
        Dropdown:false,
        upcomingEvents:true,
        pastEvents:false,
        news:false,
        webinars:false
    },
    reducers:{
        toggleDropdown:(state)=>{
            state.Dropdown=!state.Dropdown
        },
        updateEvent:(state,action)=>{
            return action.payload
        }
    }
})

export const {toggleDropdown,updateEvent} = eventsSlice.actions

export default eventsSlice.reducer