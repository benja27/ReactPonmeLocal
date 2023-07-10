import React from 'react'
import Body from '../components/Body'
import Footer from '../components/Footer'
import Searcher from '../components/Searcher'
import storage from '../redux/contador'

function Home() {

  const {user} = storage()

  console.log(user.uid)



  return (
    <div>
      <Searcher></Searcher>
      <Body></Body>      
    </div>
  )
}

export default Home