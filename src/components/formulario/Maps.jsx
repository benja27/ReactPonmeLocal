import React, { useEffect, useRef, useState } from "react";
import { Mapas, mapLoader } from "../../maps/mapsCofig";
import storage from "../../redux/contador";
import { addDoc, collection } from "firebase/firestore";

let mapas = new Mapas();
let geocoder;
let map;
let arraycontainer;
// let markers = []
function Maps() {
  const { saveResults, results, selected, setSelected } = storage();

  const [markers, setMarkers] = useState([]);

  //=============================== WORKING HERE

  useEffect(() => {
    mapLoader.load().then(() => {
      const center = { lat: 19.463953737760185, lng: -99.13256217278048 };
      const zoom = 10;

      map = new google.maps.Map(document.getElementById("map"), {
        center,
        zoom,
      });

      geocoder = new google.maps.Geocoder();

      map.addListener("click", (e) => {
        console.log("u click on map");
        geocode({ location: e.latLng });
      });
    });

    function geocode(request) {
      console.log("enter geo code");
      geocoder
        .geocode(request)
        .then((result) => {
          const { results } = result;
          saveResults(results);
          console.log(results);
          map.setCenter(results[0].geometry.location);

          for (let i = 0; i < 4; i++) {
            let ele = results[i];
            let mark = new google.maps.Marker({
              position: ele.geometry.location,
              map,
              title: `${ele.geometry.location}`,
            });

            mark.addListener("click", (e) => {
              console.log("evento ", e.latLng.lat());
              console.log("resultado ", results[0].geometry.location.lat());

              let resultsFilter = results.filter(
                (result) =>
                  result.geometry.location.lat() === e.latLng.lat() &&
                  result.geometry.location.lng() === e.latLng.lng()
              );
              console.log(resultsFilter);
              saveResults(resultsFilter)
            });
          }
          console.log("results");

          // marker.setPosition(results[0].geometry.location);
          // marker.setMap(map);
          // responseDiv.style.display = "block";
          // response.innerText = JSON.stringify(result, null, 2);

          // console.log(results[0])
          // return results;
        })
        .catch((e) => {
          alert("Geocode was not successful for the following reason: " + e);
        });
    }
  }, [saveResults]);
  // ============================ WORKING HERE

  function handleSubmit(e) {
    console.log("markers", markers);
    // setMarkers( [] )
    console.log("markers", markers);
    e.preventDefault();
    // markers=[]
    console.log("enviando");

    function geolocation() {
      geocoder.geocode({ address: e.target.address.value }).then((result) => {
        const { results } = result;
        console.log("results", results);
        saveResults(results);

        map.setCenter(results[0].geometry.location);

        arraycontainer = [];
        results.map((ele) => {
          const marker = new google.maps.Marker({
            position: ele.geometry.location,
            map,
          });

          marker.addListener("click", () => {
            console.log("click on marcador");
          });

          arraycontainer.push({ marker });
          setMarkers((antes) => [...antes, { marker }]);
        });

        console.log("array container ", arraycontainer);
        setMarkers(arraycontainer);
        console.log("markers", markers);

        // arraycontainer.forEach((ele)=>{
        //   console.log(ele)
        //   ele[0].addListener('click',e=>{
        //     console.log("hola")
        //   })
        // })
      });
    }

    geolocation()

    // async function createmarkers() {
    //   let number = await geolocation();
    //   console.log(number);
    // }

    // createmarkers();
  }

  function handleSelect(ele) {
    console.log(ele);

    saveResults([ele]);

    map.setCenter(ele.geometry.location);

    let marca = new google.maps.Marker({
      position: ele.geometry.location,
      map,
      title: `${ele.formatted_address}`,
    });

    marca.addListener("click", () => {
      console.log("hiciste click en mi");
    });
  }

  function setAddress() {
    console.log(results)
    let confirmar = confirm("estas seguro?")
    if(confirmar){

      firestore.collection( "address" ).add({
        address : results[0].formatted_address
      })
      .then(()=>{
        console.log("did it sucessfully")
      })
      .catch(e=>{
        console.log("error")
      })
      // addDoc( collection(db, "direcciones"), {addres: 'hola' } )
      //   .then(()=>{
      //     console.log("added sucessfully")
      //   })
      //   .catch((e)=>{
      //     console.log(e)
      //   })
    }
  }

  return (
    <div className="">
      <h2 className="text-center py-2">Maps</h2>
      <h3 className="text-center py-3">
        Escribe tu direccion y dale click cuando la encuentres
      </h3>

      <div className="d-flex justify-content-around pb-3">
        <form
          action=""
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <input
            name="address"
            type="text"
            placeholder="Escribe tu direccion"
          />

          <button className="btn btn-primary"> Buscar</button>
        </form>
      </div>

      <div className="check d-flex flex-wrap mx-3 row gx-3">

        {results.length === 1 ? (
          // console.log("solo hay un resultado")
          <button
            onClick={() => {
              setAddress()
            }}
            key={Math.random()}
            className="d-flex justify-content-center align-items-center flex-column p-1 mx-2 my-2 mx-auto btn btn-primary col-12 col-sm-6 col-md-3 "
          >
            <h6 className="m-0 text-center">Esta es tu direccion?</h6>
          </button>
        ) : (
          console.log("hay mas de 1 resultado")
        ) }  

        {results.map((ele, index) => (

          <button
            onClick={() => {
              handleSelect(ele);
            }}
            key={index}
            className="d-flex justify-content-center align-items-center flex-column p-1 mx-2 my-2 mx-auto btn btn-primary col-12 col-sm-6 col-md-3 "
          >
            <h6 className="m-0 text-center">{ele.formatted_address}</h6>
          </button>


        ))}
      </div>

      <div id="map"></div>
    </div>
  );
}

export default Maps;

// =====================
