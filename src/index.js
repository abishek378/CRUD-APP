import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Navbar from './components/Navbar';
import Home from './screens/Home';
import Users from './screens/Users';
import Contact from './screens/Contact';
import Nopage from './screens/Nopage';
import Update from './components/Update';
import reportWebVitals from './reportWebVitals';

import {HashRouter,Routes,Route} from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <HashRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/home" element={<Home />} />
      <Route path="/users" element={<Users />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/update" element={<Update />} />

      <Route path="*" element={<Nopage />} />
    </Routes>
    </HashRouter>
)