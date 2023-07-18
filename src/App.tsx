import React from "react";
import { Routes, Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";

import CountriesApp from "./countries";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<CountriesApp />} />
        <Route path="/home" element={<CountriesApp />} />
      </Routes>
    </div>
  );
}

export default App;
