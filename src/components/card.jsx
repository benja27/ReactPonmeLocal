import React from "react";

function Card() {
  return (
    <div className="card-container">
      <div className="card">
        <h3 className="text-center">Card</h3>
        
        <div className="card-body text-center">
          <div className="test-container">
            <img src="https://picsum.photos/200" className="test" alt="" />
          </div>
        </div>
        <h3 className="text-center">dance?</h3>
      </div>
    </div>
  );
}

export default Card;
