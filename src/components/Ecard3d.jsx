import React, { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";

import shoe from "../assets/shoes.png";

function Ecard3d() {
  const tiltref = useRef([]);

  // useEffect(() => {
  //   tiltref.current.forEach((ref)=>{
  //     VanillaTilt.init(ref.current)
  //   })
  // }, []);
  useEffect(() => {
    VanillaTilt.init(tiltref.current)
  }, []);

  return (
    <div className="container">
      
      <div className="box" ref={(el) => (tiltref.current[0] = el)}>
        <div className="name">Product Name</div>
        <a href="#" className="buy">
          buy now
        </a>
        <div className="circle"></div>
        <img className="product" src={shoe} alt="" />
      </div>

           
      <div className="box" ref={(el) => (tiltref.current[1] = el)}>
        <div className="name">Product Name</div>
        <a href="#" className="buy">
          buy now
        </a>
        <div className="circle"></div>
        <img className="product" src={shoe} alt="" />
      </div>
      
      <div className="box" ref={(el) => (tiltref.current[2] = el)}>
        <div className="name">Product Name</div>
        <a href="#" className="buy">
          buy now
        </a>
        <div className="circle"></div>
        <img className="product" src={shoe} alt="" />
      </div>




    </div>
  );
}

export default Ecard3d;
