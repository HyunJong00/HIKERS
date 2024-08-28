// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Join from './pages/Join.js';
import Start from './pages/start.js'
import './assets/styles/App.css'; // 글로벌 스타일


function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Join />} />
                <Route path="/start" element={<Start />} /> 
            </Routes>
        </Router>
    );
}

export default App;
