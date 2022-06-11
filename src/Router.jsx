import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "./content/About";
import Inspiration from "./content/Inspiration";
import Landing from "./content/Landing";
import AddForm from "./content/Form";
import Contact from "./content/Contact";

 
export default function Router() {
  return (
    <div>
      <Routes>
        <Route path="/" element={< Landing/>} />
        <Route path="/inspirations" element={< Inspiration />} />
        <Route path="/about" element={< About />} />
        <Route path="/contact" element={< Contact />} />
        <Route path="/form" element={< AddForm />} />
      </Routes>
    </div>
  );
}