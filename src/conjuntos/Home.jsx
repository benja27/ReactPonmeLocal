import React from "react";
import Body from "../components/general/Body";
import Footer from "../components/general/Footer";
import Searcher from "../components/general/Searcher";
import storage from "../redux/contador";



function Home() {
 
  return (
    <div className="flex-grow-1">
      <Searcher></Searcher>
      <Body></Body>      
    </div>
  );
}

export default Home;
