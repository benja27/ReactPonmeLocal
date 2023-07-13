import React from "react";
import imagen from "../../assets/400x400.jpg";

function Body() {
  return (
    <div className="flex-grow-1">
      <div className="container main-section flex-grow-1">
        {/* PRIMER PARTE */}
        <div className="d-flex text-center flex-wrap">
          <figure className="col-12 col-sm-4">
            <img
              src="https://cadenaser00.epimg.net/ser/imagenes/2019/02/21/radio_murcia/1550744022_268663_1550746902_noticia_normal.jpg"
              alt=""
            />
            <figcaption>Comida</figcaption>
          </figure>

          <figure className="col-12 col-sm-4">
            <img
              src="https://previews.123rf.com/images/dolgachov/dolgachov1602/dolgachov160201044/51847052-belleza-gente-cuidado-de-la-piel-y-el-concepto-de-salud-mujer-joven-rostro-y-las-manos-m%C3%A1s-de.jpg"
              alt=""
            />
            <figcaption>Articulos</figcaption>
          </figure>
          <figure className="col-12 col-sm-4">
            <img
              src="https://th.bing.com/th/id/R.a236f0ae94567541211b955670411251?rik=1wiMhOpGNFPNCA&pid=ImgRaw&r=0"
              alt=""
            />
            <figcaption>Servicios</figcaption>
          </figure>
        </div>

        {/* SEGUNDA PARTE */}

        <div>
          <h3>Nuestra Seleccion</h3>

          <div className="d-flex text-center flex-wrap justify-content-around conti">

            <figure className="col-6 col-sm-3 col-md-2">
              <img
                src="https://th.bing.com/th/id/OIP.stiDu_94VmHdC0aSSfApowHaEu?pid=ImgDet&rs"
                alt=""
              />
              <figcaption>Hamburguesas</figcaption>
            </figure>

            <figure className="col-6 col-sm-3 col-md-2"> 
              <img
                src="https://th.bing.com/th/id/R.4530080ca187ae8fe2347f5eb183f26e?rik=rYFZF7%2f5TBuTfQ&riu=http%3a%2f%2fcdn2.cocinadelirante.com%2fsites%2fdefault%2ffiles%2fimages%2f2016%2f06%2fdonasalhorno.jpg&ehk=cfq2HMEH8jHEplxcVMNfmKMT8LTY%2fpG4DUzHfCUiQk0%3d&risl=&pid=ImgRaw&r=0"
                alt=""
              />
              <figcaption>Donas</figcaption>
            </figure>

            <figure className="col-6 col-sm-3 col-md-2 flex-wrap rounded justify-content-center">
              <img className="flex-grow-1"
                src="https://th.bing.com/th/id/R.d7829fccd1f864958deca2915db3fec9?rik=fy%2bV9Rg%2bG8BQDA&pid=ImgRaw&r=0"
                alt=""
              />
              <figcaption className="" >Tamales</figcaption>
            </figure>

            <figure className="col-6 col-sm-3 col-md-2 d-fle flex-wrap">
              <img
                src="https://th.bing.com/th/id/R.921807e90670d19189e1223ec9836970?rik=Ame%2fKuBTbpMmmA&pid=ImgRaw&r=0"
                alt=""
              />
              <figcaption>Alitas</figcaption>
            </figure>

            <figure className="col-6 col-sm-3 col-md-2">
              <img
                src="https://th.bing.com/th/id/R.2f317b35c814a7b4595e5da39036d9ef?rik=zcPnx29ABff6xA&riu=http%3a%2f%2fmilrecetas.net%2fwp-content%2fuploads%2f2015%2f11%2fRecetas-de-desayunos-2.jpg&ehk=eZItvDyr2PD2YgJrVmKYHeP5ZdpAutbOpmFela7HOSg%3d&risl=&pid=ImgRaw&r=0"
                alt=""
              />
              <figcaption>Desayunos</figcaption>
            </figure>
          </div>
        </div>

        {/* TERCERA PARTE */}

        <div>
          <h3>Populares</h3>

          <div className="text-center row third-section">
            <figure className="">
              
              <img
                src="https://th.bing.com/th/id/R.535ca9c538d607a093d01c294a890d59?rik=3qAUitmM7WaTwA&pid=ImgRaw&r=0"
                alt=""
              />

              
              <figcaption>Comida</figcaption>
            </figure>

            <figure>
              <img
                src="https://sc01.alicdn.com/kf/HTB1yCDBIpXXXXcSXFXXq6xXFXXXZ/Trapeador-industrial-fregona-de-microfibra-fregona-del.jpg"
                alt=""
              />
              <figcaption>Comida</figcaption>
            </figure>
            <figure>
              <img
                src="https://th.bing.com/th/id/OIP.hWvQdOzkTkpejCFDrNOlPQHaHa?pid=ImgDet&rs=1"
                alt=""
              />
              <figcaption>Comida</figcaption>
            </figure>
            <figure>
              <img
                src="https://th.bing.com/th/id/R.17d7567aded8659892d5303896b2c194?rik=rNpSZ4vKfDt2ew&pid=ImgRaw&r=0"
                alt=""
              />
              <figcaption>Comida</figcaption>
            </figure>
            <figure>
              <img
                src="https://th.bing.com/th/id/OIP.smBpWgETKmEVfD2XH2O2EwHaJh?pid=ImgDet&w=3851&h=4953&rs=1"
                alt=""
              />
              <figcaption>Comida</figcaption>
            </figure>
            <figure>
              <img
                src="https://th.bing.com/th/id/R.535ca9c538d607a093d01c294a890d59?rik=3qAUitmM7WaTwA&pid=ImgRaw&r=0"
                alt=""
              />
              <figcaption>Comida</figcaption>
            </figure>
            <figure>
              <img
                src="https://sc01.alicdn.com/kf/HTB1yCDBIpXXXXcSXFXXq6xXFXXXZ/Trapeador-industrial-fregona-de-microfibra-fregona-del.jpg"
                alt=""
              />
              <figcaption>Comida</figcaption>
            </figure>
            <figure>
              <img
                src="https://th.bing.com/th/id/OIP.hWvQdOzkTkpejCFDrNOlPQHaHa?pid=ImgDet&rs=1"
                alt=""
              />
              <figcaption>Comida</figcaption>
            </figure>
            <figure>
              <img
                src="https://th.bing.com/th/id/R.17d7567aded8659892d5303896b2c194?rik=rNpSZ4vKfDt2ew&pid=ImgRaw&r=0"
                alt=""
              />
              <figcaption>Comida</figcaption>
            </figure>
            <figure>
              <img
                src="https://th.bing.com/th/id/OIP.smBpWgETKmEVfD2XH2O2EwHaJh?pid=ImgDet&w=3851&h=4953&rs=1"
                alt=""
              />
              <figcaption>Comida</figcaption>
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;
