import { configureStore } from "@reduxjs/toolkit";
import Myactions from "./Myactions";
import Mysecondaction from "./Mysecondaction";

export const Mystore = configureStore({
    reducer: {
        counter:Myactions,
        mysecond:Mysecondaction
    },
})

