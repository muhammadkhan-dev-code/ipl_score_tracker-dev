import React from 'react';
import './App.css';
import Header from './components/header';
import HomePage from './page/Homepage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
<Router>
  <Header/>
  <div className="flex flex-col min-h-screen">
    <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/test" element={<HomePage />} />
    </Routes>
  </div>
</Router>
  );
}

export default App;
