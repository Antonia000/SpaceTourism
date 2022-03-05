import React from 'react';
import './index.css'
import ReactDOM from 'react-dom';
import App from './App';
import Home from './components/Home';
import Destionation from './components/Destionation';
import Crew from './components/Crew';
import Technology from './components/Technology';
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.render(
    <BrowserRouter basename={window.location.pathname || ''}>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/design" element={<App />} />
            <Route path="/destination" element={<Destionation />} />
            <Route path="/crew" element={<Crew />} />
            <Route path="/technology" element={<Technology />} />
        </Routes>
    </BrowserRouter>,
  document.getElementById('root')
);

