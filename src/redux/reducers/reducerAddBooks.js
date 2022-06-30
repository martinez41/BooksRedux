import { ADD_BOOKS, DELETE_BOOK, DELETE_BOOKS } from "../constants";
import { v4 as uuidv4 } from 'uuid'


const initState = {
	books:[]
}


const helperAdddata=(action)=>{
	return{
		id:uuidv4(),
		title: action.payload.title,
		author:action.payload.author
	}
}


const removeById =(state,id)=>{
	return state.filter(book=>book.id !== id)
}

const reducerAddBooks= (state = initState.books ,action)=>{

	(localStorage.getItem('booksData'))&& (state = JSON.parse(localStorage.getItem('booksData')))

	switch (action.type) {
		case ADD_BOOKS:
			state = [...state  ,helperAdddata(action)]
			localStorage.setItem('booksData',JSON.stringify(state))
			return state

		case DELETE_BOOK:
			state = removeById(state,action.payload);
			localStorage.setItem('booksData',JSON.stringify(state))
			return state

		case DELETE_BOOKS:
			state = [];
			localStorage.setItem('booksData',JSON.stringify(state))
			return state

	
		default: return state
			
	}
}

export default reducerAddBooks