import React, { useEffect, useRef } from 'react'
import { auth  }from '../../firebase/FireSetUp'
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import firebase from 'firebase/compat/app'
import { useNavigate } from 'react-router-dom'
import storage from '../../redux/contador'

function AuthBenja() {
  const navigate = useNavigate()   

  const {setUser, setSelected, selected  } = storage()
  const {user  } = storage()

  console.log(user)
  console.log(selected)
   


  return (
    <div className='flex-grow-1 d-flex align-items-center justify-content-center text-white' >      
      <div  className='conta bg-secondary py-5 px-3 rounded shadow text-center' >
          <h5 className='py-3' >Escoge el Metodo para iniciar sesion</h5>
          <button onClick={()=>{
            const provider = new firebase.auth.GoogleAuthProvider()
            auth.signInWithPopup(provider)
              .then((result)=>{
                if(selected === "sell"){
                  navigate("/newSeller")
                }else{
                  navigate("/")
                }                
              })
              .catch((error)=>{
                console.log("error: ", error)
                navigate("/")
              })
          }}
          className='btn btn-primary' >
            Google
          </button>
      </div>
    </div>
  )
}

export default AuthBenja