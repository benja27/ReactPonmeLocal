import React from "react";

function Searcher() {
  return (
    <div className="pb-3" >
      <div className="container">
        <div className="d-flex justify-content-between py-3">

          <h3 className="" >Ponme Local</h3>
          <input
            type="text"
            name=""
            className="col-8 text-center"
            placeholder="Busca lo que nesecites"
          />

        </div>

        <div className="d-flex align-items-center justify-content-between gap-5">
           <div>
          <h3>!Las mejores Quesadillas Fritas en Ponme Local!</h3>
          <h3>con o sin queso</h3>
            </div> 
          
          <img src="https://picsum.photos/300" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Searcher;
