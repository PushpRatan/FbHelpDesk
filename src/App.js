import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import FbConnection from "./components/FbConnection";
import DeleteConnection from "./components/DeleteConnection";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/connect" element={<FbConnection />} />
        <Route path="/delete" element={<DeleteConnection />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
