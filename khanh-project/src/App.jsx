import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/Apppp';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import Layout from './components/layout'
import "./App.css";
function App() {
  return (
    <BrowserRouter>
      <Routes>
          {/* Các Route con sẽ được render bên trong Layout */}
          <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
      </Route>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;