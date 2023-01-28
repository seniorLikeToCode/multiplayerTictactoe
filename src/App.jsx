import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Entry from "./pages/entry";
import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home';
import Invite from './pages/Invite';
import Start from './pages/Start';
import "./App.css";

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Entry />} />
            <Route path="/register" exact element={<Register />} />
            <Route path="/login" exact element={<Login />} />
            <Route path="/home" exact element={<Home />} />
            <Route path="/home/invite" exact element={<Invite />} />
            <Route path="/home/start/" exact element={<Start />} />
            <Route Path='*' element={<h1>404 Not Found</h1>} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
