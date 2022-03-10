import React from "react";

import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import BottomNavi from "./components/nav/BottomNavi";
import RightNav from "./components/nav/RightNav";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          {/*<RightNav/>*/}
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
