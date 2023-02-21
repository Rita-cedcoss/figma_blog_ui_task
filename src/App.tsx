import React from 'react';
import logo from './logo.svg';
import './App.css';
import './Blog_ui/blog.css'
import Navbar from './Blog_ui/Navbar';
import Banner from './Blog_ui/Banner';
import Article from './Blog_ui/Article';
import Footer from './Blog_ui/Footer';
import ArticleDestop from './Blog_ui/ArticleDestop';
import LandingDesktop from './Blog_ui/LandingDesktop';
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
