import { Loader } from "@googlemaps/js-api-loader";
import storage from "../redux/contador";

const apikey = import.meta.env.VITE_google_api ;

export const mapLoader = new Loader({
  apiKey: apikey,
  version: "weekly",
});


let geocoder
let map


export class Mapas{
  constructor() {
    const mapLoader = new Loader({ apiKey: apikey, version: "weekly", }); 
    
  }
  
  createMap(target, point){    
    mapLoader.load().then(() => {
      const center = point || { lat: 19.463953737760185, lng: -99.13256217278048 };
      const zoom = 10;
      
      map = new google.maps.Map( document.getElementById(`${target}`)  , {
        center,
        zoom,
      });         
  
      // geocoder = new google.maps.Geocoder();

      // map.addListener("click", (e) => {
      //   console.log(e)
      //   geocode({ location: e.latLng });
      // });

    } );

    function geocode(request) {
      console.log("geocode config")
      geocoder
        .geocode(request)
        .then((result) => {
          const { results } = result;
          // console.log(results)
          map.setCenter(results[0].geometry.location);
          
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
    }

  getInfo(request, container){

    mapLoader.load().then(() => {      

      const center = { lat: 19.463953737760185, lng: -99.13256217278048 };
      const zoom = 13;
      
      let map = new google.maps.Map( document.getElementById("map")  , {
        center,
        zoom,
      });      
      
      
      
      let geo = new google.maps.Geocoder();      
      

      geo 
        .geocode(request)
        .then((result)=>{
          const {results} = result 
          // console.log(results)
          return results

          // map.setCenter(results[0].geometry.location)
        })
    
    
    
    
      })}
}
















// export function createMap(target) {
//   mapLoader.load().then(() => {
//     const center = { lat: 19.463953737760185, lng: -99.13256217278048 };
//     const zoom = 10;

//     let map = new google.maps.Map(document.getElementById(`${target}`), {
//       center,
//       zoom,
//     });

//     let infoWindow = new google.maps.InfoWindow({
//       content: "Click the map to get Lat/Lng!",
//       position: center,
//     });

//     infoWindow.open(map);
//     // Configure the click listener.
//     map.addListener("click", (mapsMouseEvent) => {
//       // Close the current InfoWindow.
//       infoWindow.close();
//       // Create a new InfoWindow.
//       infoWindow = new google.maps.InfoWindow({
//         position: mapsMouseEvent.latLng,
//       });
//       infoWindow.setContent(
//         JSON.stringify(mapsMouseEvent.latLng.toJSON(), null, 2)

//         // JSON.stringify(mapsMouseEvent.latLng.toJSON(), null, 2)
//       );
//       infoWindow.open(map);
//     });
//   });
// }

// export default apikey;
