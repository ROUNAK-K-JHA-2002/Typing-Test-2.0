import React from 'react'
import {Button} from 'react-bootstrap'
function Home(user) {
   const userDetails = JSON.parse(user.user);
  const handleLogout = () =>{
    localStorage.clear();
    window.location.reload();
  }
    
  return (
    <div className='container-fluid'>
    <img src={`${userDetails.userProfilePhoto}`} alt="profilephot" />
    <div className='text-white'>{userDetails.userEmail}</div>
    <Button variant='primary' onClick={handleLogout}>Logout </Button>
    </div>
  )
}

export default Home