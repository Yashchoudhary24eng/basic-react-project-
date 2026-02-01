import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({

name: "cart",

initialState: {
    iteams: []
},

reducers: {

    iteamadd: (state,action)=> {
        state.iteams.push(action.payload);
    },

    iteamremove: (state) => {
        state.iteams.pop();
    },
     
    iteamclear: (state) => {
        state.iteams.length = 0;
    }
    
}

});

export const {iteamadd,iteamremove,iteamclear} = cartSlice.actions;
export default cartSlice.reducer;