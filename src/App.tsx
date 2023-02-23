import React from 'react';
import './App.css';
import './components/components.css'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import LandingComponent from './components/LandingComponent';
import Blog from './components/Blog';
function App() {
  return (
    <div className='container'>
       <Navbar/>
       <Routes>
        <Route path='/' element={<LandingComponent/>}></Route>
        <Route path='/article' element={<Blog/>}></Route>
       </Routes>
       <Footer/>
    </div>
  );
}

export default App;
