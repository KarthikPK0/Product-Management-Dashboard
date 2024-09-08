import { createSlice } from "@reduxjs/toolkit";
import { productList } from "../Data";
import UpdateProduct from "../components/UpdateProduct";


//const storedProducts = JSON.parse(localStorage.getItem('products')) || productList;


const productSlice = createSlice({

    name: "products", 
    initialState: productList,
    reducers:{
        //add
        addProduct:(state, action) => {
          state.push(action.payload)
          console.log(action);
          
        },

        //update
        updateProduct: (state, action) => {
            const { id, name, price, quantity, amount } = action.payload

            const product = state.find(product => product.id == id)
            if(product){
                product.name = name
                product.price = price
                product.quantity = quantity
                product.amount = amount
            }
        },

        //delete
       deleteProduct: (state, action) => {
            const { id } = action.payload;
            const newState = state.filter(product => product.id !== id);
            localStorage.setItem('products', JSON.stringify(newState)); 
            return newState;
        }
    }
})


export const { deleteProduct, addProduct, updateProduct } = productSlice.actions
export const ProductReducer = productSlice.reducer;

