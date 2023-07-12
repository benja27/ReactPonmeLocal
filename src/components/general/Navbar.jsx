import React, { useEffect, useState } from "react";
import { Await, useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase/FireSetUp";
import { db } from "../../firebase/FireSetUp";


function Navbar() {
  const navigate = useNavigate();
  const [status, setStatus] = useState("");
  const [user, setUser] = useState([]);
  const [aprovado, setAprovado] = useState("")

  useEffect(() => {

    let email;

    auth.onAuthStateChanged( (user) => {
      if (user) {      
        // console.log("in")  
        setStatus("in");
        setUser(user);
        email = user.email
        // console.log(email,"email")

        db.collection("localitos").doc(email).get()
          .then( (result)=>{
            
            if(result){
              // console.log(result)
              let data =  result.data()
              setAprovado(data.aprovado)
            }else{
              console.log("no existe")
            }
          })

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
              className="btn btn-danger"
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
            className="btn btn-light"
          > 

             {aprovado === "pending" ? (
                <p className="m-0">Solicitud en proceso..</p>  
             ) : (
               <p className="m-0">Vende con nosotros</p>
             ) } 
            

          </button>

            
            <button onClick={()=>{
              navigate("/admin")
            }} className="btn btn-primary">
              Admin
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
