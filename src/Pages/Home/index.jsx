import React from 'react'

import Navbar from '../../Components/Navbar/index'
import './home.css'
function Home() {
   const userDetails = JSON.parse(localStorage.getItem('userDetails'));
 
    
  return (
   <div className="Home_Container">
     <Navbar user={userDetails}/>
   </div>
  )
}

export default Home