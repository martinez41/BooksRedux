import React,{ useState } from 'react'

function SearchBooks() {
	const [title, setTitle] = useState('');
	const handleSubmit=(e)=>{
		e.preventDefault()
		console.log(title)
	}

	return (
		<>
			<main role='main'>
				<div className='' style={{ background: 'rgba(108,117,125,0.2)' }}>
					<div className='container text-center'>
						<h1 className='display-4'>BOOKS</h1>
						<p>Indiquez le sujet du livre a rechercher sur Google API</p>
						<form className="row p-4" onSubmit={handleSubmit} >
							{/* Input pour rechercher un sujet de livre */}
							<div className='form-group  col-md-8 mt-2' >
								<input
									type='text'
									className='form-control form-control-lg'
									placeholder='Quoi rechercher'
									required
									value={title}
									onChange={(e)=> setTitle(e.target.value)}
								/>
							</div>

							<div className='form-group col-md-4 mt-2'>
								<button className='btn btn-outline-dark h-100' >Rechercher</button>
							</div>
						</form>
					</div>
				</div>
				<div className='container mt-5' style={{ minHeight: '200px' }}>
					<div className='accordion'>
						<div className='card mb-2'>
							<div className='card-header'>

							</div>
							<div className='collapse' data-parent="accordion">
								<div className='card-body'>

								</div>
							</div>
						</div>
					</div>
				</div>

			</main>
		</>
	)
}

export default SearchBooks