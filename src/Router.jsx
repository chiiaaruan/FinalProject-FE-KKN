import React from "react";
import { Routes, Route } from "react-router-dom";
import Inspiration from "./content/Inspiration";
import Landing from "./content/Landing";

 
export default function Router() {
  return (
    <div>
      <Routes>
        <Route path="/" element={< Landing/>} />
        <Route path="/inspirations" element={< Inspiration />} />
      </Routes>
    </div>
  );
}