import React,{ useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addBook } from '../redux/actions/actionAddBooks';
//  toujours importer l'action qu'on faire un dispatch



function AddBooks() {

	const  libraryData = useSelector(state=>state.library)
	const  dispatch = useDispatch()

	console.log(libraryData.length)

	const initialState = {
		title:'',
		author:''
	}

	
	const [newData, setNewData] = useState(initialState);
	

	const handleSubmit=(e)=>{
			e.preventDefault()
			dispatch(addBook(newData))
			// vider le input
			setNewData(initialState)
	}


	const displayData =(libraryData.length>0)? (libraryData.map(data=>{
		return(
			<li key={data.id} className='list-group-item list-group-item-light d-flex justify-content-between'>
				<span><strong>Titre : </strong>{data.title}</span>
				<span><strong>Auteur : </strong>{data.author}</span>
				<span className='btn btn-danger'>x</span>
			</li>
		)
	})):(<p className='text-center'>La liste est vide pour le moment</p>)
	
  return (
	<>
		<main role='main'>
			<div className='' style={{background:'rgba(108,117,125,0.2)'}}>
				<div className='container text-center'>
					<h1 className='display-4'>BOOKS</h1>
					<p>Ajouter un livre a votre bibliotheque</p>

						<form className="row p-4" onSubmit={handleSubmit}  >
						{/* Input pour entrer le titre du livre */}
							<div className='form-group  col-md-4 mt-2' >
								<input
									type='text'
									value={newData.title}
									className='form-control form-control-lg'
									placeholder='Titre'
									required
									onChange={e=>setNewData({...newData,title:e.target.value})}
								/>

								

							</div>
							{/* Input pour entrer l'auter du livre*/}
							<div className='form-group  col-md-4  mt-2'>
								<input
									type='text'
									value={newData.author}
									className='form-control form-control-lg'
									placeholder='Auter'
									required
									onChange={e=>setNewData({...newData,author:e.target.value})}
								/>



							</div>

							<div className='form-group col-md-4 mt-2'>
								<button className='btn btn-outline-dark h-100'>Ajouter un livre</button>
							</div>
						</form>
					</div>
				</div>
				<div className='container mt-5' style={{minHeight:'200px'}}>
					<div className='row'>
						<div className='col-md-12'>
							<ul className='list-group'>
								{displayData}
							</ul>
						<div className='d-flex justify-content-center'>
						{ (libraryData.length>0)&&(<button className='btn btn-danger mt-4 mb-5 ' > Effacer tous les livres</button>)}
						</div>
						</div>
					</div>
				</div>

		</main>
	</>
  )
}

export default AddBooks