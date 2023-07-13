import React, { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";

function ItemSearch({ ele }) {
  const refe = useRef();

  useEffect(() => {
    VanillaTilt.init(refe.current);
  }, []);

  return (
    <div
      key={Math.random()}
      ref={refe}
      className="px-2 py-2 mb-3    col-10 col-sm-6 col-md-4 d-flex"
    >
      <div className="card py-3 w-100 bg-dar d-flex text-center bg-dark text-white">
        <h6 className="flex-grow-1 d-flex align-items-center justify-content-center">
          {ele.nombre}
        </h6>

        {ele.distance > 0 ? (
          <h6 className="">
            A <span className="bg-primary rounded px-1"> {ele.distance}</span>{" "}
            KM de tu Ubicacion
          </h6>
        ) : (
          ""
        )}

        <h6>
          {" "}
          <a
            title="Send a Whatsapp msg"
            href={`https://api.whatsapp.com/send?phone=${ele.telefono.replaceAll(
              " ",
              ""
            )}`}
          >
            {" "}
            {ele.telefono}
          </a>{" "}
        </h6>
        <h6 className="flex-grow-1 d-flex align-items-center justify-content-center">
          {" "}
          {ele.calle} {ele.numedi} {ele.colonia} {ele.ciudad}{" "}
        </h6>
        <h6 className="flex-grow-1 d-flex align-items-center justify-content-center">
          {ele.palclaves}
        </h6>
      </div>
    </div>
  );
}

export default ItemSearch;
