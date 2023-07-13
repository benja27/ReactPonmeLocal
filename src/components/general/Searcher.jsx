import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../../firebase/FireSetUp";
import VanillaTilt from "vanilla-tilt";
import ItemSearch from "./ItemSearch";
import Test from "./test";

function Searcher() {
  const tilref = useRef()
  const navigate = useNavigate();
  const [results, setresults] = useState([]);
  const [busqueda, setBusqueda] = useState([]);
  const [state, setstate] = useState(0);
  const [ubi, setUbi] = useState([]);
  let filtered;

  // useEffect(()=>{
  //   VanillaTilt.init(tilref.current)
  // },[state])


  // if(state === 0){
  //   return(
  //     <Test></Test>
  //   )
  // }



  useEffect(() => {    
    if (localStorage.getItem("localitos")) {
      console.log("if");
      if (JSON.parse(localStorage.getItem("localitos")).length > 0) {
        console.log("if if");
        let data = JSON.parse(localStorage.getItem("localitos"));
        setresults(data);
        console.log("data recovered");
        return;
      }
    }

    

    console.log("naris");
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


  function successCallback(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;

    setUbi([latitude, longitude])
    

    console.log("Latitud: " + latitude);
    console.log("Longitud: " + longitude);
  }
  
  function errorCallback(error) {
    alert("no se usara la ubicacion")
    console.log("Error al obtener la ubicación: " + error.message);
  }


    if(ubi.length === 0){
      console.log("ubicacion no encontrada")
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
      } else {
        console.log("La geolocalización no está disponible en este navegador.");
      }
    }else{
      console.log("ubicacion ya encontrada")
      // console.log(ubi)
    }      

  // })

  function handleSubmit(e) {

    e.preventDefault();
    // let radio =   (document.getElementById("radio").value) 
    // console.log(radio,"radio")


    // console.log(results[0]);
    setstate(1);
    // console.log(e.target)
    if (e.target.toSearch.value === "") {
      console.log("e target esta vacio");
      setstate(0);
    } else {
      console.log("entrado else");
      let toSearch = e.target.toSearch.value.toLowerCase();
      console.log(toSearch);

      filtered = results.filter((ele) => {
        if (ele.palclaves === undefined) {
          return false;
        } else {
          let palClaves = ele.palclaves.toLowerCase();
          if (palClaves.includes(toSearch)) {
            return true;
          }
          return false;
        }
      });
      if (filtered.length > 0) {
        console.log("filteres tiene mas dd 1 elemento");
        setstate(1);

       if(ubi.length === 0){
        setBusqueda(filtered)
        setstate(1)
       }else(
         filterDistance(filtered)
       )





      } else {
        if (e.target.value === "") {
          console.log("e value esta vacio");
          setstate(0);
        } else {
          console.log("mandando el estado 2");
          setstate(2);
        }
      }
      // console.log(filtered);
    }
  }
 


  function filterDistance(filtered){
    
    let withINdistance = []


    let userlat = ubi[0]
    let userlng = ubi[1]      
    
    console.log(ubi[0], ubi[1])     
    
    let radio = parseInt(document.getElementById("radio").value) 
    console.log(radio,'radio')

    let filteredDistance = filtered.filter((ele)=>{
      let Elelat  = ele.lat 
      let Elelng = ele.lng 
      
      
      const distance = parseInt( (calcularDistancia( userlat, userlng, Elelat, Elelng)).toFixed(1) )
      console.log(distance)
      ele.distance = distance
      
      if (ele.distance < radio){
        // console.log(ele)
        withINdistance.push(ele)
        console.log("dentro del area")
        // console.log("todos pasan")
        return true
      }else{
        return false
      }

      
    })
    
    // console.log(filteredDistance, "dentro del area")
    // withINdistance.push(filterDistance)
    console.log(withINdistance,'with in distance')


    
    if(withINdistance.length > 0){
      console.log("es mayor q 0")
      setstate( 1 )
      setBusqueda(withINdistance)
    }else{
      console.log("no results")
      setstate(3)
    }


    // let input = document.getElementById("item").value
    
    // setBusqueda(filterDistance)
    // console.log(busqueda)
    // if(filterDistance.length > 0){
    //   setBusqueda(filterDistance)
    //   setstate(1)
    // }else{
    //   return (
    //     <div>
    //       <h2>no hay resultados</h2>
    //     </div>
    //   )
    // }


  } 


  function calcularDistancia(lat1, lon1, lat2, lon2) {
    const radioTierra = 6371; // Radio de la Tierra en kilómetros
    const dLat = degToRad(lat2 - lat1);
    const dLon = degToRad(lon2 - lon1);
  
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(degToRad(lat1)) * Math.cos(degToRad(lat2)) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
  
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distancia = radioTierra * c;
    
    // console.log(distancia.toFixed(1))
    return distancia;
  }
  
  function degToRad(deg) {
    return deg * (Math.PI / 180);
  }  

  return (
    <div className="pb-3">
      <div className="container ">
        <div className="d-flex justify-content-between py-3 align-items-center ">
          <h6 className="d-flex">Ponme Local</h6>

          <form
            className="col-9 d-flex "
            onSubmit={(e) => {
              handleSubmit(e);
            }}
          >
            <input
              type="text"
              id="item"
              name="toSearch"
              className="text-center form-control flex-grow-1"
              placeholder="Busca lo que nesecites"
            />
            <select name="" id="radio" className="btn btn-light" style={{width:"140px"}} defaultValue={"1000"} >
              <option value="1000">Distancia</option>
              <option value="3">3 KM</option>
              <option value="5">5 KM</option>
              <option value="10">10 KM</option>
              <option value="25">25 KM</option>
              <option value="1000">Todos</option>
            </select>
          </form>
        </div>

        {console.log("entrado estado 0")}
        {state === 0 ? (
          <div className="d-flex align-items-center justify-content-between flex-wrap">

            <div className="col-12 col-sm-6 text-center" >
              <h3>!Las mejores Quesadillas Fritas en Ponme Local!</h3>
              <h3>con o sin queso</h3>
            </div>

            <div className="col-12 col-sm-6 d-flex py-2" >
              <img className="rounded mx-auto" src="https://picsum.photos/300" alt="" style={{maxWidth:"230px"}} />
            </div>

          </div>
        ) : ( "" )}



          {console.log("entrando estado 1")}
        {state === 1 ? (
            <div  className="row rounded px-3 py-3 d-flex justify-content-center">

            {busqueda.map((ele) => (

                <ItemSearch key={Math.random()} ele={ele} ></ItemSearch>
              // <div key={Math.random()}  className="px-2 py-2 mb-3    col-10 col-sm-6 col-md-4 d-flex">
              //   <div className="card py-3 w-100 bg-dar d-flex text-center bg-dark text-white">
              //     <h6 className="flex-grow-1 d-flex align-items-center justify-content-center" >{ele.nombre}</h6>
              //     <h6 className="" >A   <span className="bg-primary rounded px-1"> {ele.distance}</span>  KM de tu Ubicacion</h6>
              //     <h6> <a title="Send a Whatsapp msg" href={`https://api.whatsapp.com/send?phone=${ (ele.telefono).replaceAll(" ","")  }`}> {ele.telefono}</a>   </h6>
              //     <h6 className="flex-grow-1 d-flex align-items-center justify-content-center" >
              //       {" "}
              //       {ele.calle} {ele.numedi} {ele.colonia} {ele.ciudad}{" "} 
              //     </h6>
              //     <h6 className="flex-grow-1 d-flex align-items-center justify-content-center" >{ele.palclaves}</h6>
              //   </div>
              // </div>

            ))}

          </div>
        ) : (
          ""
        )}


        
        {state === 3 ? (
          <div>
            <h2>no results</h2>
          </div>
        ) : ("")}



      </div>
    </div>
  );
}

export default Searcher;
