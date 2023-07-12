import React, { useEffect, useState } from "react";
import storage from "../../redux/contador";
import { db } from "../../firebase/FireSetUp";

const newArray = [];

function Admin() {
  const { results, saveResults } = storage();
  const [status, setStatus] = useState(0);
  const [busqueda, setBusqueda] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("localitos")) {
      console.log("local storage detected");
      let data = JSON.parse(localStorage.getItem("localitos"));
      // console.log(data)
      saveResults(data);
      // console.log("local storaged");
      setStatus(1);
    }
  }, []);

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
          localStorage.setItem("localitos", JSON.stringify(newArray));
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

  function handleSearch(e) {
    setStatus(2);
    console.log("starting handle search");
    
    //  e.target.value === ""
    
    if (e.target.value === "") {
      setStatus(1);
    }

    let filtered;

    // ================ input es un numero
    if (parseInt(e.target.value)) {

      
      console.log("number");
      let num = parseInt(e.target.value) ;
      
      filtered = results.filter((ele) => {
        

        if(ele.telefono === undefined){
          console.log("no hay telefono")
        }else{
          let target = (ele.telefono).replaceAll(" ","")
          console.log(typeof target2)
          
          console.log(ele);
          if ( target.includes(num) ) {
            return true;
          }
          return false;
        }

      });
    } else {        // input es un string
      let name = e.target.value;

      if (e.target.value === "") {
        setStatus(1);
      }

      console.log(name);

      // =======
      filtered = results.filter((ele) => {
        // console.log(ele);
        if (
          ele.nombre &&
          name &&
          ele.nombre.toLowerCase().includes(name.toLowerCase())
        ) {
          return true;
        }

        return false;
      });
    }

    // =========

    if (filtered.length > 0) {
      setBusqueda(filtered);
      setStatus(2);
    } else {
      console.log(e.target.value)
      if (e.target.value === "") {
        setStatus(1);
      }else{
        console.log("else")
        setBusqueda([]);
        setStatus(2);
      }


    }
  }

  // ================== status 2 ==== buscando

  if (status === 2) {
    console.log("entrando status 2");
    return (
      <div className="flex-grow-1">
        <div className="container pt-5">
          <div>
            <div>
              <form
              // onSubmit={(e)=>{
              //   handleSearch(e)
              // }}
              >
                <div className="d-flex">
                  <input
                    onChange={(e) => {
                      handleSearch(e);
                    }}
                    className="form-control"
                    type="text"
                    name="searchIt"
                    placeholder="Buscar"
                  />
                  <input
                    className="btn btn-dark"
                    type="submit"
                    value="Buscar"
                  />
                  <select name="filtro" id="filtro" className="btn btn-dark">
                    <option value="nombre">Nombre</option>
                    <option value="telefono">telefono</option>
                  </select>
                </div>
              </form>
            </div>

            <h3>total de resultados: {busqueda.length} </h3>
            <div>
              {busqueda.length > 0 ? (
                busqueda.map((ele) => (
                  <div
                    className="bg-dark rounded text-white py-2 px-2 my-2"
                    key={Math.random()}
                  >
                    <h5>id: {ele.id}</h5>
                    <h5>nombre: {ele.nombre}</h5>
                  </div>
                ))
              ) : (
                <div
                  className="bg-dark rounded text-white py-2 px-2 my-2"
                  key={Math.random()}
                >
                  <h5>Sin resultados {busqueda.length} </h5>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ================== status 1 ==== logueado

  if (status === 1) {
    console.log("entrado status 1");
    return (
      <div className="flex-grow-1">
        <div className="container pt-5">
          <div>
            <div className="">
              <form
                onSubmit={(e) => {
                  handleSearch(e);
                }}
              >
                <div className="d-flex">
                  <input
                    onChange={(e) => {
                      handleSearch(e);
                    }}
                    className="form-control"
                    type="text"
                    name="searchIt"
                    placeholder="Buscar"
                  />
                  <input
                    className="btn btn-dark"
                    type="submit"
                    value="Buscar"
                  />
                  <select name="" id="" className="btn btn-dark">
                    <option value="">Nombre</option>
                    <option value="">telefono</option>
                  </select>
                </div>
              </form>
            </div>

            <h3>total de registros: {results.length} </h3>
            <div>
              {results.map((ele) => (
                <div
                  className="bg-dark rounded text-white py-2 px-2 my-2"
                  key={Math.random()}
                >
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
  console.log("entrado status 0");
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
