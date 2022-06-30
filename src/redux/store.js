import { configureStore } from "@reduxjs/toolkit";
import reducerAddBooks from "./reducers/reducerAddBooks";
import thunk from "redux-thunk";


const store = configureStore({
	reducer :{
		library : reducerAddBooks
	},
	middleware:[thunk]
})



export default store