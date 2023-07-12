import React from "react";
import imagen from "../../assets/400x400.jpg"

function Body() {
  return (
    <div className="flex-grow-1" >
      <div className="container main-section flex-grow-1">


        {/* PRIMER PARTE */}
        <div className="d-flex text-center ">
          <figure className="" >
            <img src={imagen} alt="" />
            <figcaption>Comida</figcaption>
          </figure>

          <figure>
            <img src={imagen} alt="" />
            <figcaption>Comida</figcaption>
          </figure>
          <figure>
            <img src={imagen} alt="" />
            <figcaption>Comida</figcaption>
          </figure>
        </div>



        {/* SEGUNDA PARTE */}


        <div>
            <h3>Nuestra Seleccion</h3>

            <div className="d-flex text-center ">
          <figure className="" >
            <img src={imagen} alt="" />
            <figcaption>Comida</figcaption>
          </figure>

          <figure>
            <img src={imagen} alt="" />
            <figcaption>Comida</figcaption>
          </figure>
          <figure>
            <img src={imagen} alt="" />
            <figcaption>Comida</figcaption>
          </figure>
          <figure>
            <img src={imagen} alt="" />
            <figcaption>Comida</figcaption>
          </figure>
          <figure>
            <img src={imagen} alt="" />
            <figcaption>Comida</figcaption>
          </figure>
        </div>

        </div>


        {/* TERCERA PARTE */}



        <div>
            <h3>Nuestra Seleccion</h3>

            <div className="d-flex text-center row">
          <figure className="" >
            <img src={imagen} alt="" />
            <figcaption>Comida</figcaption>
          </figure>

          <figure>
            <img src={imagen} alt="" />
            <figcaption>Comida</figcaption>
          </figure>
          <figure>
            <img src={imagen} alt="" />
            <figcaption>Comida</figcaption>
          </figure>
          <figure>
            <img src={imagen} alt="" />
            <figcaption>Comida</figcaption>
          </figure>
          <figure>
            <img src={imagen} alt="" />
            <figcaption>Comida</figcaption>
          </figure>
          <figure>
            <img src={imagen} alt="" />
            <figcaption>Comida</figcaption>
          </figure>
          <figure>
            <img src={imagen} alt="" />
            <figcaption>Comida</figcaption>
          </figure>
          <figure>
            <img src={imagen} alt="" />
            <figcaption>Comida</figcaption>
          </figure>
          <figure>
            <img src={imagen} alt="" />
            <figcaption>Comida</figcaption>
          </figure>
          <figure>
            <img src={imagen} alt="" />
            <figcaption>Comida</figcaption>
          </figure>
        </div>

        </div>








      </div>
    </div>
  );
}

export default Body;
