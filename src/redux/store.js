import { configureStore } from "@reduxjs/toolkit";
import reducerAddBooks from "./reducers/reducerAddBooks";

const store = configureStore({
	reducer :{
		library : reducerAddBooks
	}
})

export default store