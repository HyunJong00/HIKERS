import './App.css'; 
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SP010000S from './pages/SP010000S';
import LJ010000S from './pages/LJ010000S';
import LJ020100S from './pages/LJ020100S';
import LJ020200S from './pages/LJ020200S';
import LJ020300S from './pages/LJ020300S';
import 가입_인증완료_230216 from './pages/가입_인증완료_230216';
import LJ020401S from './pages/LJ020401S';
import LJ020401S_1 from './pages/LJ020401S_1';
import LJ020402S from './pages/LJ020402S';
import LJ020403S from './pages/LJ020403S';
import LJ020600S from './pages/LJ020600S';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/SP010000S" element={<SP010000S />} />
        <Route path="/LJ010000S" element={<LJ010000S />} />
        <Route path="/LJ020100S" element={<LJ020100S />} />
        <Route path="/LJ020200S" element={<LJ020200S />} />
        <Route path="/LJ020300S" element={<LJ020300S />} />
        <Route path="/가입_인증완료_230216" element={<가입_인증완료_230216 />} />
        <Route path="/LJ020401S" element={<LJ020401S />} />
        <Route path="/LJ020401S_1" element={<LJ020401S_1 />} />
        <Route path="/LJ020402S" element={<LJ020402S />} />
        <Route path="/LJ020403S" element={<LJ020403S />} />
        <Route path="/LJ020600S" element={<LJ020600S />} />
      </Routes>
    </Router>
  );
}


export default App;

