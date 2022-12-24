import React from 'react'

import Navbar from '../../Components/Navbar/index'
import './home.css'
function Home() {
   const userDetails = JSON.parse(localStorage.getItem('userDetails'));
 
    
  return (
    <Navbar user={userDetails}/>
  )
}

export default Home