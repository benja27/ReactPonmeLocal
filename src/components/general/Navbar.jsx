import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase/FireSetUp";
import { db } from "../../firebase/FireSetUp";
import storage from "../../redux/contador";

function Navbar() {
  const navigate = useNavigate();
  const [status, setStatus] = useState(0);
  const [currentUser, setUser] = useState([]);
  const [aprovado, setAprovado] = useState("");
  const {setSelected} = storage()


  useEffect(() => {
    let email;

    auth.onAuthStateChanged((user) => {
      if (user) {
        setStatus(1)
        console.log("in")
        setStatus(1);
        setUser(user);
        console.log(user);
        email = user.email;
        console.log(user,'user')
        console.log(currentUser,'currentuser')
        // console.log(email,"email")

        db.collection("localitos")
          .doc(email)
          .get()
          .then((result) => {
            if (result) {
              // console.log(result)
              let data = result.data();
              setAprovado(data.aprovado);
            } else {
              console.log("no existe");
            }
          });
      } else {
        console.log("no hay usuario logueado");
        setStatus("out");
        console.log(currentUser)
        console.log(user)
      }
    });
  },[]);

  return (
    <div>
      <div className="bg-dark">
        <div className="container">
          <nav className="navbar navbar-expand-sm navbar-dark bg-dark py-3">
            <a
              onClick={() => {
                navigate("/");
              }}
              className="navbar-brand d-flex"
              href="#"
            >
              Ponme Local
            </a>

            <button
              className="navbar-toggler d-lg-none"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapsibleNavId"
              aria-controls="collapsibleNavId"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              Menu
            </button>

            <div className="collapse navbar-collapse" id="collapsibleNavId">
              <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                <li className="nav-item">
                  <a
                    onClick={() => {
                      navigate("/");
                    }}
                    className="nav-link active"
                    href="#"
                    aria-current="page"
                  >
                    Home <span className="visually-hidden">(current)</span>
                  </a>
                </li>
                  
                  {status === 1 ? (
                    <li className="nav-item">
                    <a
                      onClick={() => {
                        auth.signOut()                        
                      }}
                      className="nav-link"
                      href="#"
                    >
                      Log Out
                    </a>
                  </li>
                  ):(
                    <li className="nav-item">
                  <a
                    onClick={() => {
                      navigate("/login");
                    }}
                    className="nav-link"
                    href="#"
                  >
                    Registrarme
                  </a>
                </li>
                  )}
                  
                  <li className="nav-item">
                  <a
                    onClick={() => {
                      setSelected("sell")
                      navigate("/login");
                    }}
                    className="nav-link"
                    href="#"
                  >
                    Vende con nosotros
                  </a>
                </li>

                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle "
                    href="#"
                    id="dropdownId"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Opciones
                  </a>
                  <div className="dropdown-menu" aria-labelledby="dropdownId">                    
                    <a
                      onClick={() => {
                        navigate("/admin");
                      }}
                      className="dropdown-item"
                      href="#"
                    >
                      Admin
                    </a>
                    <a
                      onClick={() => {
                        navigate("/maps");
                      }}
                      className="dropdown-item"
                      href="#"
                    >
                      Maps
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
      
      {status === 1 ? (
      <div className="bg-light py-1">
        <div className="container">
          <div className="d-flex align-items-center justify-content-between">
            <h6 className="m-0" >
              Welcome <span>{currentUser.displayName}</span>{" "}
            </h6>
            <div>
              <img
                style={{ width: "35px" }}
                className=" rounded rounded-circle mx-auto"
                src={currentUser.photoURL}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      ):(
        ""
      )}

    </div>
  );
}

export default Navbar;
