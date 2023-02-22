import React from 'react';
import './App.css';
import './components/blog.css'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ArticleDestop from './components/ArticleDestop';
import LandingDesktop from './components/LandingDesktop';
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className='container'>
       <Navbar/>
       <Routes>
        <Route path='/' element={<LandingDesktop/>}></Route>
        <Route path='/article' element={<ArticleDestop/>}></Route>
       </Routes>
       <Footer/>
    </div>
  );
}

export default App;
