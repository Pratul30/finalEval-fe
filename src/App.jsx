import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ContentPage from './pages/ContentPage';
import Login from './pages/LoginPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/content-page' element={<ContentPage />} />
      </Routes>
    </BrowserRouter>
  );
}