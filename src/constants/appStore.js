import { configureStore } from "@reduxjs/toolkit";
import partnerWithUsReducer from "./slices/partnerFormSlice"
import contactFormReducer from "./slices/contactFormSlice"
import serviceReducer from "./slices/serviceSlice";
import eventReducer from "./slices/eventsSlice"

const appStore=configureStore(
    {
        reducer:{
            partnerWithUs:partnerWithUsReducer,
            contactForm:contactFormReducer,
            service:serviceReducer,
            events:eventReducer
        }
    }
)

export default appStore