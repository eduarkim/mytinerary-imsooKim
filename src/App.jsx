import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import Cities from './components/Cities';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="w-screen h-screen overflow-x-hidden flex flex-col">
        <Header />
        <div className="flex flex-1">
          <Sidebar />
          <main className="min-h-screen flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="./cities" element={<div>Cities Page</div>} />
            </Routes>
          </main>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;