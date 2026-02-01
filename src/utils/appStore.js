import {configureStore} from "@reduxjs/toolkit";

import reducer from "./cartSlice";

const appstore = configureStore({

    reducer: { 
        cart: reducer
    }

});

export default appstore;