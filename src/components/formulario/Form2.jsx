import React, { useEffect } from "react";
import { useState } from "react";
import { auth, db } from "../../firebase/FireSetUp";
import { useNavigate } from "react-router-dom";
import storage from "../../redux/contador";
import Maps from "./Maps";




function FormSellWithus() {



  useEffect(()=>{
    auth.onAuthStateChanged((user)=>{
      if(user){
        console.log("hay un user logueado")
      }else{
        navigate("/login")  
      }
    })
  },[])
  

  const [form, setForm] = useState({aprovado: "pending"})
  const navigate = useNavigate()
  const {setSelected} = storage()

  function handleChange(e){
    setForm({
      ...form,
      [e.target.name] : e.target.value
    })
    console.log(form)
  }
  function handleChecked(e){
    setForm({
      ...form,
      [e.target.name] : e.target.checked
    })
    console.log(form)
  }

  function handleSubmit(e){
    e.preventDefault()
    let email = auth.currentUser.email

    db.collection("localitos").doc(email).set(form)
    .then(()=>{
      console.log("addded success")
      navigate("/maps")
          setSelected(form)
    })


    // db.collection("localitos").add(form)
    //   .then((results)=>{
    //     console.log("added sucessfully")

    //   })
    //   .catch(error=>{
    //     console.log(error)
    //   })
    
  }




  return (
    <div className="flex-grow-1">

      <div className="container pt-3">

        <h2 className="text-">New Seller INFO</h2>

        <form onSubmit={(e)=>{
          handleSubmit(e)
        }} className="d-flex flex-column gap-3" >
          <div className="">
            <label className="form-label">Nombre del Local</label>
            <input
              type="text"
              className="form-control"
              name="nombre"
              required
              
              placeholder=""
              // value=""
              onChange={(e)=>{
                 handleChange(e)
              }}
            />
          </div>

          <div className="">
            {/* <label className="form-label">Tipo de Local</label> */}
            <select required onChange={(e)=>{
              handleChange(e)
            }} className="form-select form-select-lg" name="classy" id="" defaultChecked>
              <option>Tipo de Local</option>
              <option value="local">Local</option>
              <option value="puesto">Puesto</option>
              <option value="digital-kitchen">Digital Kitchen</option>
              <option value="restaurante">Restaurante</option>
              <option value="fondita">Fondita</option>
              <option value="servicio">Servicio</option>
              <option value="food-truck">Food Truck</option>
              <option value="mercado">Mercado</option>
            </select>
          </div>

          <div className="">
            <select required onChange={(e)=>{
              handleChange(e)
            }}
             className="form-select form-select-lg" name="envio" id="">
              <option>Envio Comida</option>
              <option value="si">Si</option>
              <option value="no">No</option>
            </select>
          </div>

          <div>
            <h5 className="text-center" >Que dias abres</h5>

            <div className=" d-flex gap-4 justify-content-center">
              <label className="list-group-item">
                <input onChange={(e)=>{
                   handleChecked(e) 
                }}
                  className="form-check-input me-1"
                  type="checkbox"
                  value=""
                  
                  name="lunes"
                />
                Lunes
              </label>
              <label className="list-group-item">
                <input
                onChange={(e)=>{
                  handleChecked(e) 
               }}
                  className="form-check-input me-1"
                  type="checkbox"
                  value=""
                  
                  name="martes"
                />
                Martes
              </label>
              <label className="list-group-item">
                <input onChange={(e)=>{
                   handleChecked(e) 
                }}
                  className="form-check-input me-1"
                  type="checkbox"
                  value=""
                  
                  name="miercoles"
                />
                Miercoles
              </label>
              <label className="list-group-item">
                <input onChange={(e)=>{
                   handleChecked(e) 
                }}
                  className="form-check-input me-1"
                  type="checkbox"
                  value=""
                  
                  name="jueves"
                />
                Jueves
              </label>
              <label className="list-group-item">
                <input onChange={(e)=>{
                   handleChecked(e) 
                }}
                  className="form-check-input me-1"
                  type="checkbox"
                  value=""
                  
                  name="viernes"
                />
                Viernes
              </label>
              <label className="list-group-item">
                <input onChange={(e)=>{
                   handleChecked(e) 
                }}
                  className="form-check-input me-1"
                  type="checkbox"
                  value=""
                  
                  name="sabado"
                />
                Sabado
              </label>
              <label className="list-group-item">
                <input onChange={(e)=>{
                   handleChecked(e) 
                }}
                  className="form-check-input me-1"
                  type="checkbox"
                  value=""
                  
                  name="domingo"
                />
                Domingo
              </label>
            </div>
          </div>

          <div className="d-flex justify-content-around pt-3">
            <div className="d-flex flex-column col-3 gap-2">
              <label htmlFor="" className="fs-5">
                Abro a las ...
              </label>
              <input onChange={(e)=>{
                  handleChange(e)
              }}
                type="time"
                id=""
                required
                name="abierto"
              />
            </div>
            <div className="d-flex flex-column col-3 gap-2">
              <label htmlFor="" className="fs-5">
                Cierro a las ...
              </label>
              <input onChange={(e)=>{
                handleChange(e)
              }}
                type="time"
                id=""
                required
                name="cerrado"
              />
            </div>
          </div>


              <h5 className="text-center" >Direccion</h5>
          <div className="d-flex flex-wrap justify-content-center">
            <input required onChange={(e)=>{
              handleChange(e)
            }} type="text" name="ciudad" id="" placeholder="Ciudad" />
            <input required onChange={(e)=>{
              handleChange(e)
            }} type="text" name="delegacion" id="" placeholder="Delegacion" />
            <input required onChange={(e)=>{
              handleChange(e)
            }} type="text" name="colonia" id="" placeholder="Colonia" />
            <input required onChange={(e)=>{
              handleChange(e)
            }} type="text" name="calle" id="" placeholder="Calle" />
            <input required onChange={(e)=>{
              handleChange(e)
            }} type="text" name="numero" id="" placeholder="Numero" />
            <input required onChange={(e)=>{
              handleChange(e)
            }} type="text" name="telefono" id="" placeholder="Telefono" />
            <input required onChange={(e)=>{
              handleChange(e)
            }} type="text" name="whatsapp" id="" placeholder="Whatsapp" />
            <input required onChange={(e)=>{
              handleChange(e)
            }} type="text" name="copos" id="" placeholder="Codigo Postal" />
          </div>

          <div className="d-flex align-items-center gap-3 justify-content-center">
            <input required type="checkbox" name="" id="" />
            <label htmlFor="">
              Acepto Los terminos y Condiciones de PonmeLocal para el uso de los
              datos que he proporcionado
            </label>
          </div>

          <div className="d-flex">
            <textarea required className="mx-auto"  onChange={(e)=>{
              handleChange(e)
            }} name="palabrasClaves" id="" cols="50" rows="10" placeholder="Ingresa las palabras claves separadas por una coma"></textarea>
          </div>




          <div className="d-flex pt-3">
            <input onClick={()=>{
              
            }}
              type="submit"
              value="Siguente"
              className="btn btn-primary mx-auto"
            />
          </div>



              








        </form>
      </div>
    </div>
  );
}

export default FormSellWithus;
