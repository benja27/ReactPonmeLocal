import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../../firebase/FireSetUp";

function Searcher() {
  const navigate = useNavigate();
  const [results, setresults] = useState([]);
  const [busqueda, setBusqueda] = useState([])
  const [state, setstate] = useState(0);

  useEffect(() => {
    if ( localStorage.getItem("localitos")) {
      console.log("if")
      if(  (JSON.parse(localStorage.getItem("localitos"))).length > 0 ){
        console.log("if if")
        let data = JSON.parse(localStorage.getItem("localitos"));
        setresults(data);
        console.log("data recovered");
        return;
      }
    }

    console.log('naris')
    let newArray = [];

    db.collection("localitos")
      .get()
      .then((results) => {
        if (!results.empty) {
          console.log("existe");
          results.forEach((ele) => {
            let data = ele.data();
            // console.log(data)
            newArray.push(data);
          });

          console.log(newArray);
          setresults(newArray);
          localStorage.setItem("localitos", JSON.stringify(newArray));

        } else {
          console.log("no existe");
        }
      });
    

    
  }, []);

  function handleSubmit(e) {
    console.log(results[0])
    setstate(1)
    e.preventDefault();
    let toSearch = (e.target.toSearch.value).toLowerCase() 
    console.log(toSearch)

    let filtered = results.filter((ele)=>{

        if(ele.palclaves === undefined){
          // console.log("no hay palabras")
        }else{
          let palClaves = (ele.palclaves).toLowerCase()
          if(palClaves.includes(toSearch)){
            return true
          }
          return false
        }

    })
    if(filtered.length > 0){
      setstate(1)
      setBusqueda(filtered)
    }else{
      if(e.target.value === ""){
        setstate(0)
      }else{
        setstate(2)
      }
    }
    console.log(filtered)
    
  }

  return (
    <div className="pb-3">
      <div className="container">

        <div className="d-flex justify-content-between py-3">
          
          <h3 className="">Ponme Local</h3>
          
          <form
            className="col-8"
            onSubmit={(e) => {
              handleSubmit(e);
            }}
          >
            <input
              type="text"
              name="toSearch"
              className="text-center w-100 form-control"
              placeholder="Busca lo que nesecites"
            />
          </form>

        </div>

        
        {state === 0 ? (
          <div className="d-flex align-items-center justify-content-between gap-5">
          <div>
            <h3>!Las mejores Quesadillas Fritas en Ponme Local!</h3>
            <h3>con o sin queso</h3>
          </div>

          <img className="rounded" src="https://picsum.photos/300" alt="" />
        </div>
          ):("") }


        {/* =================user is buscando */}
        {state === 1 ? (
            <div className="row gx-5 gy-4" >
              {busqueda.map(ele=>(
                <div className="card col-12 col-sm-6 py-5 px-3 col-md-4 bg-dark text-white"  key={Math.random()} >
                  <h6>{ele.nombre}</h6>
                  <h6> {ele.calle} {ele.numedi} {ele.colonia} {ele.ciudad } </h6>
                  <h6>{ele.palclaves}</h6>

                </div>
              ))}
            </div>         
        ):("")}
          
        

          
        



      </div>
    </div>
  );
}

export default Searcher;
