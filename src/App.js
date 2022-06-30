import React from 'react';
import './App.css'
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import AddBooks from './containers/AddBooks';
import {
  Routes,
  Route,
} from "react-router-dom";
import SearchBooks from './containers/SearchBooks';

function App() {
  return (
    <div className='m-5'>
      <NavBar/>
      <Routes>
        <Route path='/' element={<AddBooks/>}/>
        <Route path='search' element={<SearchBooks/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
