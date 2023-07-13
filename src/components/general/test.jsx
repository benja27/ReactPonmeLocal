import React, { useEffect, useRef } from 'react'
import VanillaTilt from 'vanilla-tilt'

function Test() {

  const miref = useRef()

  useEffect(()=>{
    VanillaTilt.init(miref.current)
    navigator.geolocation.getCurrentPosition((ele)=>{
      console.log("quieres activar la geocalizacion?")
      
    })
  },[])

  return (
    <div ref={miref} className='text-white bg-dark' >
      <h2>test</h2>
    </div>
  )
}

export default Test