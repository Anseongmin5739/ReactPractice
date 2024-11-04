import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Main from "./page/Main";
import ReactTest from "./page/React";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/react" element={<ReactTest />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
