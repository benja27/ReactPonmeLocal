import React from 'react'
import Body from '../components/general/Body'
import Footer from '../components/general/Footer'
import Searcher from '../components/general/Searcher'
import storage from '../redux/contador'
import  data from "../assets/localito.json"
import { mapLoader } from '../maps/mapsCofig'


let geocoder;
let address = { address: "calle palma chimalhuacan" }
let nuevo = []

function Home() {  

  
  // let tratado = data[0]

  // for (let i = 0; i < 2; i++) {
  //   const tratado = data[i];
    
  //   const address = `${tratado.calle} ${tratado.numedi} ${tratado.colonia} ${tratado.copos}`
  //   console.log(address)
 
    
  // }



  // console.log(nuevo)


  mapLoader.load()
    .then(()=>{
      geocoder = new google.maps.Geocoder();
      

      for (let i = 0; i < 12; i++) {
        const tratado = data[i];
        
        const address = { address : `${tratado.calle} ${tratado.numedi} ${tratado.colonia} ${tratado.copos}`}
        console.log(address)
        
        geocoder.geocode(address)
          .then(result=>{

            const {results} = result

            if(results){
              console.log(results[0])
            }else{
              console.log('no hay resultados')
            }
          })
        
      }


      

    })


   

  return (
    <div className='flex-grow-1' >
      <Searcher></Searcher>
      <Body></Body>      
    </div>
  )
}

export default Home