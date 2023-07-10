import React, { useEffect, useRef } from 'react'
import { auth , ui }from '../firebase/FireSetUp'
import * as firebaseui from 'firebaseui'
import firebase from 'firebase/compat/app'
import "firebaseui/dist/firebaseui.css"
import { useNavigate } from 'react-router-dom'
import storage from '../redux/contador'

function AuthBenja() {
  const navigate = useNavigate() 
  const conta = useRef()

  const {setUser  } = storage()
  const {user  } = storage()
  console.log(user)

  useEffect(()=>{
    ui.start( ".conta" ,{
      signInOptions : [
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
        firebase.auth.GoogleAuthProvider.PROVIDER_ID
      ],
      callbacks : {
        signInSuccessWithAuthResult : (result, redirectURL) =>{
          console.log("inicio de sesion exitoso: ", result)
          setUser(result.user)
          console.log("este se el user ", result.user)
          navigate("/")
        },
        signInFailure : (error) =>{
          console.log("inicio de sesion fallido: ", error)
        }
      }
    })
  })



  return (
    <div className='flex-grow-1 d-flex align-items-center justify-content-center text-white' >      
      <div ref={conta} className='conta bg-secondary py-5 px-3 rounded shadow' >
          <h5 className='py-3' >Escoge el Metodo para iniciar sesion</h5>
      </div>
    </div>
  )
}

export default AuthBenja