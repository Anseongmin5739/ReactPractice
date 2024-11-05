import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Main from "./page/Main";
import ReactTest from "./page/React";
import Header from "./page/Header";
import Footer from "./page/Footer";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Main />}></Route>
            <Route path="/react" element={<ReactTest />}></Route>
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
