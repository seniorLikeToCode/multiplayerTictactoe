import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Entry from "./pages/entry";
import Register from './pages/Register';
import Login from './pages/Login';
import "./App.css";

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Entry />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
