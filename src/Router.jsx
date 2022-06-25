import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import About from "./content/About";
import Inspiration from "./content/Inspiration";
import Landing from "./content/Landing";
import AddForm from "./content/Form";
import Login from "./content/Login";
import Dashboard from "./content/Dashboard";
import Funiture from "./content/Funiture";


// proteksi untuk halaman login
// kalo udah login dan redirect ke dashboard
// di halaman dashboard ga bisa ke halaman login ({{url}}/login) sebelum di logout
function not_logged() {
  let token = window.localStorage.getItem('token');
  if (token===null || token.length===0) {
    return < Login />;
  }
  else {
    return <Navigate to="/dashboard" />
  }
}

// proteksi untuk halaman dashboard, 
// di halaman login ga bisa ke halaman dashboard ({{url}}/dashboard) sebelum login
function is_logged() {
  let token = window.localStorage.getItem('token');
  if (token!==null && token.length>0) {
    return < Dashboard />;
  }
  else {
    return <Navigate to="/login" />
  }
}
 
export default function Router() {
  return (
    <div>
      <Routes>
        <Route path="/" element={< Landing/>} />
        <Route path="/about" element={< About />} />
        <Route path="/dashboard" element={is_logged()} />
        <Route path="/form" element={< AddForm />} />
        <Route path="/funiture/:id" element={< Funiture />} />
        <Route path="/inspirations" element={< Inspiration />} />
        <Route path="/login" element={not_logged()} />
      </Routes>
    </div>
  );
}