import { configureStore } from "@reduxjs/toolkit";
import partnerWithUsReducer from "./slices/partnerFormSlice"
import contactFormReducer from "./slices/contactFormSlice"

const appStore=configureStore(
    {
        reducer:{
            partnerWithUs:partnerWithUsReducer,
            contactForm:contactFormReducer
        }
    }
)

export default appStore