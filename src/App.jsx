// import Compo from "./components/Compo";
import Maps from "./components/formulario/Maps";
import Navbar from "./components/general/Navbar";
import Form2 from "./components/formulario/Form2";

import Footer from "./components/general/Footer";

import AuthBenja from "./components/auth/AuthBenja";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./conjuntos/Home";
import FormSellWithus from "./components/formulario/FormSellWithus";
import Admin from "./components/auth/Admin";

import "./App.css";

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="maps" element={<Maps></Maps>}></Route>
          <Route path="/login" element={<AuthBenja></AuthBenja>}></Route>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/admin" element={ <Admin></Admin> }></Route>
          <Route
            path="/newSeller"
            element={
              <div className="flex-grow-1" >
                {" "}
                <Form2></Form2>
              </div>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
      <Footer></Footer>
    </div>
  );
}

export default App;
