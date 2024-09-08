import { configureStore } from "@reduxjs/toolkit";
import { ProductReducer } from "../redux/ProductReducer" 

 
const store = configureStore({

    //reducer
    reducer : {
        products:ProductReducer
    }


})

export default store