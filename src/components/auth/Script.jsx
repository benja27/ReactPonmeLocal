import React from "react";
import data from "../../assets/localito.json";
import { mapLoader } from "../../maps/mapsCofig";
import newData from "../../assets/localito2.json"
import { db } from "../../firebase/FireSetUp";

let geocoder;

function Script() {

  function addUbicacion() {
    let nuevo = [];
    mapLoader.load().then(async () => {
      geocoder = new google.maps.Geocoder();

      for (let i = 0; i < data.length; i++) {
        console.log(i);
        const tratado = data[i];
        console.log(tratado, "tratado");

        const address = {
          address: `${tratado.calle} ${tratado.numedi} ${tratado.colonia} ${tratado.copos}`,
        };

        console.log(address);

        try {
          const result = await geocoder.geocode(address);
          const { results } = result;

          if (results) {
            console.log(results);

            console.log(results, "results");
            console.log(results[0].geometry.location.lat());
            console.log(results[0].geometry.location.lng());

            // nuevo.push(123)
            let lat = results[0].geometry.location.lat();
            let lng = results[0].geometry.location.lng();

            tratado.lat = lat;
            tratado.lng = lng;

            // console.log(tratado[i]);
            nuevo.push(tratado);
            // console.log(nuevo);
          } else {
            nuevo.push(tratado);
          }
        } catch (error) {
          console.log("error");
        }
      }

      console.log(nuevo);
    });
  }

  async function LoadInfoToDb(){
    // newData.forEach( async (ele)=>{

      for (let i = 0; i < newData.length ; i++) {
        const ele = newData[i]
        let id = ele.id 
      console.log(id)

      let docref = db.collection('localitos').doc(id)

      await docref.set(ele)
        .then(()=>{
          console.log("added sucessfulyy")
        })
        .catch(error=>{
          console.log("error")
        })  
        
      }
      

    // })
  }

  // LoadInfoToDb()


  return (
    <div>
      <h2>script</h2>
    </div>
  );
}



export default Script;
