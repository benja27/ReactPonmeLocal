import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import Compo from "./components/Compo";
import Maps from "./components/Maps";
import Navbar from "./components/Navbar";
import Searcher from "./components/Searcher";
import Body from "./components/Body";
import Footer from "./components/Footer";
// import GoogleAuth from "./components/GoogleAuth";
import AuthBenja from "./components/AuthBenja";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./conjuntos/Home";
import FormSellWithus from "./components/FormSellWithus";

import "./App.css";

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <BrowserRouter>
      <Navbar></Navbar>
        <Routes>
          <Route path="/maps" element={<Maps></Maps>}></Route>
          <Route path="/login" element={<AuthBenja></AuthBenja>}></Route>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/newSeller" element={ <FormSellWithus></FormSellWithus> }></Route>
        </Routes>
      </BrowserRouter>
      <Footer></Footer>
    </div>
  );
}

export default App;
