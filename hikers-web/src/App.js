// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Join01 from './pages/Join01.js';
import Start from './pages/Start.js'
import Join02 from './pages/Join02.js'
import Join03 from './pages/Join03.js'
import './assets/styles/App.css'; // 글로벌 스타일


function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Start />} />
                <Route path="/Join01" element={<Join01 />} /> 
                <Route path="/Join02" element={<Join02 />} /> 
                <Route path="/Join03" element={<Join03 />} /> 
            </Routes>
        </Router>
    );
}

export default App;
