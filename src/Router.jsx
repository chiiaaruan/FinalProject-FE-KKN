import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "./content/About";
import Inspiration from "./content/Inspiration";
import Landing from "./content/Landing";
import AddForm from "./content/Form";
import Login from "./content/Login";
import Dashboard from "./content/Dashboard";

 
export default function Router() {
  return (
    <div>
      <Routes>
        <Route path="/" element={< Landing/>} />
        <Route path="/inspirations" element={< Inspiration />} />
        <Route path="/about" element={< About />} />
        <Route path="/login" element={< Login />} />
        <Route path="/form" element={< AddForm />} />
        <Route path="/dashboard" element={< Dashboard />} />
      </Routes>
    </div>
  );
}