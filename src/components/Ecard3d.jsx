import React from 'react'

let image = "https://cdn.pixabay.com/photo/2016/10/10/14/13/dog-1728494_1280.png"

function Ecard3d() {
  return (
    <div className='container'>
      <div className="box">
        <div className="name">Product Name</div>
        <a href="#" className='buy'>buy now</a>
        <div className="circle"></div>
        <img className='product' style={{width:"300px"}} src={image} alt="" />
      </div>

    </div>
  )
}

export default Ecard3d