// import React, { useEffect } from 'react'
// import * as firebaseui from 'firebaseui'
// import firebase from "firebase/compat/app"

// import "firebaseui/dist/firebaseui.css"

// function GoogleAuth() {

//   useEffect(()=>{
//     const ui = firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI()

//     ui.start("firebase-auth-container",{
//       signInOptions : [
//         {
//           provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,          
//         },
//       ]
//     })

//   },[])



//   return (
//       <div> 
//         <div>GoogleAuth</div>
//         <div className='firebase-auth-container' ></div>
//       </div>

//   )
// }

// export default GoogleAuth