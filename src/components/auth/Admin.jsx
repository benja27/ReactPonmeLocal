import React, { useEffect, useState } from "react";
import storage from "../../redux/contador";
import { db } from "../../firebase/FireSetUp";

const newArray = [];

function Admin() {
  const { results, saveResults } = storage();
  const [status, setStatus] = useState(0);
  const [busqueda, setBusqueda] = useState([])

  useEffect(()=>{
    if(localStorage.getItem("localitos")){
      console.log("local storage detected")
      let data = JSON.parse(localStorage.getItem( "localitos" ))
      // console.log(data)
      saveResults(data)
      console.log("local storaged")
      setStatus(1)
    }
  },[])



  async function fetchDb() {
    await db
      .collection("localitos")
      .get()
      .then((results) => {
        if (!results.empty) {
          // console.log("si hay results");

          results.forEach((doc) => {
            const data = doc.data();
            // console.log("success");
            newArray.push(data);
          });

          // console.log(newArray);
          saveResults(newArray);
          localStorage.setItem("localitos", JSON.stringify(newArray))
        } else {
          console.log("esa collection no existe");
        }
      })
      .catch((error) => {
        console.log("error");
      });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (e.target.user.value === "admin" && e.target.password.value === "123") {
      alert("Welcome");
      fetchDb();
      setStatus(1);      
    } else {
      alert("incorrect");
    }
  }

  function handleSearch(e ){
    e.preventDefault()
    console.log(e)
    let name = e.target.searchIt.value
    console.log(name)
    let filtered = results.filter((ele)=> {
      // console.log(ele.nombre)
      if(ele.nombre === name){
        return true
      }
      return false
      

    })
    console.log(filtered)


  }


  // ================== status 1 ==== logueado

  if (status === 1) {
    return (
      <div className="flex-grow-1">
        <div className="container pt-5">
          <div>
            <div>
              <form onSubmit={(e)=>{
                handleSearch(e)
              }} >
                <div className="d-flex">
                <input                  
                  className="form-control"
                  type="text"
                  name="searchIt"                  
                  placeholder="Buscar"
                />
                <input className="btn btn-dark" type="submit" value="Buscar" />
                <select name="" id="" className="btn btn-dark" >                  
                  <option value="">Nombre</option>
                  <option value="">telefono</option>                  
                </select>

                </div>
              </form>
            </div>

            <h3>total de registros:  </h3>
            <div>
              {results.map((ele) => (
                <div className="bg-dark rounded text-white py-2 px-2 my-2" key={Math.random()} >
                  <h5>id: {ele.id}</h5>
                  <h5>nombre: {ele.nombre}</h5>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }


  // estatus ========== 0 ==== No logueado
  return (
    <div className="flex-grow-1">
      <div className="container pt-4">
        <div className="row">
          <div className="col-10 bg-dark text-white rounded mx-auto">
            <form
              onSubmit={(e) => {
                handleSubmit(e);
              }}
              className="py-5"
            >
              <h2 className="text-center pb-4"> Ingreso de Admin</h2>

              <div className="d-flex flex-column gap-4">
                <input
                  type="text"
                  className="form-control"
                  name="user"                  
                  placeholder="user"
                />

                <input
                  type="password"
                  name="password"
                  className="form-control"                  
                  placeholder="password"
                />

                <input
                  className="btn btn-light"
                  type="submit"
                  value="ingresar"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
  // =================================
}

export default Admin;
