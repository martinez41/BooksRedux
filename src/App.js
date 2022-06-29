import React from 'react';
import './App.css'
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import AddBooks from './containers/AddBooks';

function App() {
  return (
    <div className='m-5'>
      <NavBar/>
      <AddBooks/>
      <Footer/>
    </div>
  );
}

export default App;
