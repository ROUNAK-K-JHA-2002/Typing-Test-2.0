import React, {useEffect, useState} from 'react'
import Loading from '../../Components/Loading';

import Navbar from '../../Components/Navbar/index'
import GameComponent from '../Game/index'
import './home.css'
function Home() {
  const [loading,setLoading] = useState(true);
   const userDetails = JSON.parse(localStorage.getItem('userDetails'));
   
   useEffect(()=>{
  const time =  setTimeout(()=>{
      setLoading(false)
    },3000)
    return (()=>{
      clearInterval(time)
    })
   })
    
  return (
   <div className="Home_Container">
     <Navbar user={userDetails}/>
     {
      loading ? <Loading /> :  <GameComponent user={userDetails} />
     }
   </div>
  )
}

export default Home