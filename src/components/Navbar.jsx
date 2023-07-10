import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/FireSetUp";

function Navbar() {
  const navigate = useNavigate();
  const [status, setStatus] = useState("");
  const [user, setUser] = useState([]);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        console.log(user, "on aut");
        setStatus("in");
        setUser(user);
      } else {
        console.log("no hay usuario logueado");
        setStatus("out");
      }
    });
  });

  return (
    <div className="navbar bg-dark text-white py-2">
      <div className="container">
        <div className="d-flex gap-4 align-items-center">
          {status === "in" ? (
            <button
              onClick={() => {
                setUser([]);
                auth.signOut();
              }}
              className="btn btn-primary"
            >
              Log out
            </button>
          ) : (
            <button
              onClick={() => {
                navigate("/login");
              }}
              className="btn btn-primary"
            >
              <p className="m-0"> Sign In</p>
            </button>
          )}

          <button
            onClick={() => {
              navigate("/newSeller");
            }}
            className="btn btn-primary"
          >
            <p className="m-0">Vende con nosotros</p>
          </button>
        </div>

        <div className="d-flex gap-2 align-items-center">
          {status === "in" ? (
            <div className="">
              <p className="m-0"> {user.email}</p>
            </div>
          ) : (
            <div className="">
              <h6> {}</h6>
            </div>
          )}

          <a href="/">
            {status === "in" ? (
              <img
                src={user.photoURL || "https://picsum.photos/50"}
                className="rounded rounded-circle"
                style={{ width: "50px" }}
                alt=""
              />
            ) : (
              <img
                src="https://picsum.photos/50"
                className="rounded rounded-circle"
                alt=""
              />
            )}
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
