import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {

	
  return (
	<>
		<header>
			<div className='d-flex flex-column flex-md-row p-3 border-bottom bg-secondary text-white'>
			<div className=''>
				<h4 className='mr-md-auto'>
					<a href='/' className='text-decoration-none text-white'>BOOKS</a>
				</h4>
			</div>
				<nav className='btn-group'>
					<Link to="/" className='btn btn-light'>Home</Link>
					<Link to="/search" className='btn btn-light'>Search</Link>
				</nav>
			</div>
			{/* Menu */}

			
		</header>
	</>
  )
}

export default NavBar