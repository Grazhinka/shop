import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Main from './main';
import Shop from './shopMain';
import Contact from './contact';





function App() {
  return (
    <div>
      <Router>
        <nav className='centerDivColumn'>
          <div className='nav'>
          <Link className='link' to='/'>Главная</Link>
          <Link className='link' to='/shop'>Каталог</Link>
          <Link className='link' to='/contact'>Контакты</Link>
          </div>
          <h1>Бренд одежды "Р&W"</h1>
        </nav>
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/shop' element={<Shop/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
