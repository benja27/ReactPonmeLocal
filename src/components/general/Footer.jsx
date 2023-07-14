import React, { useRef } from "react";

function Footer() {
  const chat = useRef();
  const openchatbtn = useRef();
  const closebtn = useRef()

  return (
    <div className="bg-dark text-white py-3" style={{position:"relative"}} >
      <div className="container  ">

        <div className="" style={{position:"absolute",right:"0",bottom:"0"}} >
          <div className="chatbox bg-dark " style={{position:"relative"}} >
            {" "}
            <iframe
              style={{ position: "relativ", display: "none" }}
              ref={chat}
              title="f"
              width="350"
              height="430"
              allow="microphone;"
              src="https://console.dialogflow.com/api-client/demo/embedded/4b32c0bd-2535-46b6-ac0c-364602e65ac4"
            />
            <button
              className="close-btn btn btn-danger"
              ref={closebtn}
              style={{position:"absolute", top:"15px",right:"15px",display:"none"} }
              onClick={() => {
                chat.current.style.display = "none";
                openchatbtn.current.style.display = "block";
                closebtn.current.style.display = "none"
              }}
            >
              X
            </button>
          </div>

          <button
            ref={openchatbtn}            
            onClick={() => {
              chat.current.style.display = "block";
              openchatbtn.current.style.display = "none";
              closebtn.current.style.display = "block"
            }}
            className="chatbox btn btn-primary"
          >
            {" "}
            OPEN A NEW CHAT
          </button>
        </div>

        <div className="d-flex gap-3 justify-content-around">
          <h6>Terminos y condiciones</h6>
          <h6>Contactamos</h6>

          <div className="d-flex gap-3">
            <h6>face</h6>
            <h6>insta</h6>
          </div>

          <h6>Ponme Local 2023. Todos los derechos reservados</h6>
        </div>
      </div>
    </div>
  );
}

export default Footer;
