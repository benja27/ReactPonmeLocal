import React from "react";


function FormSellWithus() {

  





  return (
    <div className="flex-grow-1">
      <div className="container pt-3">
        <h2 className="text-">FormSellWithus</h2>

        <form action="">
          <div className="mb-3">
            <label  className="form-label">
              Nombre del Local
            </label>
            <input
              type="text"
              className="form-control"
              name=""
              placeholder=""
            />
          </div>

          <div className="mb-3">
            <label  className="form-label">
              Tipo de Local
            </label>
            <select className="form-select form-select-lg" name="" id="" >
              <option >Tipo de Local</option>
              <option value="">Local</option>
              <option value="">Puesto</option>
              <option value="">Digital Kitchen</option>
              <option value="">Restaurante</option>
              <option value="">Fondita</option>
              <option value="">Servicio</option>
              <option value="">Food Truck</option>
              <option value="">Mercado</option>
            </select>
          </div>


          
          <div className="mb-3">
            <select className="form-select form-select-lg" name="" id="">
              <option >Envio Comida</option>
              <option value="">Si</option>
              <option value="">No</option>
            </select>
          </div>

          <div>
            <h5>Que dias abres</h5>

            <div className=" d-flex gap-4">
              <label className="list-group-item">
                <input
                  className="form-check-input me-1"
                  type="checkbox"
                  value=""
                />
                Lunes
              </label>
              <label className="list-group-item">
                <input
                  className="form-check-input me-1"
                  type="checkbox"
                  value=""
                />
                Martes
              </label>
              <label className="list-group-item">
                <input
                  className="form-check-input me-1"
                  type="checkbox"
                  value=""
                />
                Miercoles
              </label>
              <label className="list-group-item">
                <input
                  className="form-check-input me-1"
                  type="checkbox"
                  value=""
                />
                Jueves
              </label>
              <label className="list-group-item">
                <input
                  className="form-check-input me-1"
                  type="checkbox"
                  value=""                  
                />
                Viernes
              </label>
              <label className="list-group-item">
                <input
                  className="form-check-input me-1"
                  type="checkbox"
                  value=""
                />
                Sabado
              </label>
              <label className="list-group-item">
                <input
                  className="form-check-input me-1"
                  type="checkbox"
                  value=""
                />
                Domingo
              </label>
            </div>
          </div>

          <div className="d-flex justify-content-between pt-3">
        <div className="d-flex flex-column col-3 gap-2">
          <label htmlFor="" className="fs-5">
            Abro a las ...
          </label>
          <input type="time" id="horaSeleccionada" name="horaSeleccionada" />
        </div>
        <div className="d-flex flex-column col-3 gap-2">
          <label htmlFor="" className="fs-5">
            Cierro a las ...
          </label>
          <input type="time" id="horaSeleccionada" name="horaSeleccionada" />
        </div>
      </div>

      <div className="pt-3">
        <input type="text" name="" id="" placeholder="Ciudad" />
        <input type="text" name="" id="" placeholder="Delegacion" />
        <input type="text" name="" id="" placeholder="Colonia" />
        <input type="text" name="" id="" placeholder="Calle" />
        <input type="text" name="" id="" placeholder="Numero" />
        <input type="text" name="" id="" placeholder="Telefono" />
        <input type="text" name="" id="" placeholder="Whatsapp" />
      </div>

      <div className="d-flex align-items-center gap-3">
        <input type="checkbox" name="" id="" />
        <label htmlFor="">
          Acepto Los terminos y Condiciones de PonmeLocal para el uso de los
          datos que he proporcionado
        </label>
      </div>

      <div className="d-flex pt-3">
        <input
          type="submit"
          value="Enviar"
          className="btn btn-primary mx-auto"
        />
      </div>
           
          

        </form>




          


          

      </div>
    </div>
  );
}

export default FormSellWithus;
