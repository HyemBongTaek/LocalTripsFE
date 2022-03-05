import React from "react";

import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Map from "./components/map/Map";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Map />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
