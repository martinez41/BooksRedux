import { FETCH_BOOKS_ERROR, FETCH_BOOKS_LOADING, FETCH_BOOKS_SUCCESS } from "../constants";

const fetchBooksLoading =()=>{
	return{
		type:FETCH_BOOKS_LOADING
	}
}
const fetchBooksSuccess =(data)=>{
	return{
		type:FETCH_BOOKS_SUCCESS,
		payload:data
	}
}
const fetchBooksError =(error)=>{
	return{
		type:FETCH_BOOKS_LOADING,
		payload:error
	}
}