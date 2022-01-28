import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './App.css';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Card1 from './components/Card1';
import Card2 from './components/Card2';
import { BrowserRouter,Routes,Route } from 'react-router-dom'


ReactDOM.render(
  <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<App/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
      <Route path="/certificate/1" element={<Card1/>}></Route>
      <Route path="/certificate/2" element={<Card2/>}></Route>
    </Routes>
    <Footer/>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
