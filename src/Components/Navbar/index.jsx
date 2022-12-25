import React from 'react'
import {Button} from 'react-bootstrap'
import './navbar.css'
import {  NavLink } from 'react-router-dom'

function Navbar(userDetails) {
   const handleLogout = () =>{
    localStorage.clear();
    window.location.reload();
  }
  const IconStyle = {
    "font-size" : "2.1em",
    "right" : "0"
}
const NavStyle ={
 "backdropFilter": "blur(10px)"
}
  const user =  userDetails.user;
  var viewport_width = window. innerWidth;
console.log(viewport_width)

 // SIDE EFFECT IN  SIDENAV

    function OpenNavbar() {
        document.getElementById("side_nav").style.width = "100%"; // MAKE WIDTH 100% WHEN SIDENAV IS NEEDED 
    }

    function CloseNavbar() {
        document.getElementById("side_nav").style.width = "0"; //MAKE WIDTH 0 WHEN SIDENAV IS NOT NEEDED
    }
  return (
     <>
     {/* NAVBAR FOR SMALL SCREEN */}

    <div class="d-flex flex-column d-md-none" id="side_nav">
       <div onClick={CloseNavbar} className="openNavIcon text-white d-inline-block position-absolute m-1 pr-5" style={IconStyle} ><i class="fa fa-close" aria-hidden="true"></i> </div>
        <div className="NavlinkContainer Home_Container justify-content-between">
         <div className='text-white h5  my-3'>Your Highest Score : 0</div>
          <div className="profileInfo d-flex  justify-content-center">
             <img src={`${user.userProfilePhoto}`} id="profile-pic"  referrerPolicy="no-referrer" alt="profilephot" />
             <div className='text-white h5 mx-4 my-3'>{user.userName}</div>
          </div>
        <div className="logoutBtn py-3">
          <Button variant='outline-primary'  onClick={handleLogout}>Logout </Button>
        </div>
        </div>
     </div>
  


    <div className="d-block d-md-none d-flex justify-content-between px-1 py-1">
      <div onClick={OpenNavbar} className="openNavIcon text-white d-inline-block" style={IconStyle} ><i class="fa fa-bars" aria-hidden="true"></i> </div>
       <img src={`${user.userProfilePhoto}`} id="profile-pic" onClick={handleLogout}  referrerPolicy="no-referrer" alt="profilephot" />
    </div>


        {/* NAVBAR FOR LARGE SCREEN */}


      <div className="Navbar d-none d-md-block  d-flex justify-content-center py-2 px-3" style={NavStyle}>
          <div className="NavlinkContainer   d-inline-block d-flex justify-content-between">
            <div className='text-white h5  my-3'>Your Highest Score : 0</div>
            <div className="profileInfo d-flex  justify-content-center">
                <img src={`${user.userProfilePhoto}`} id="profile-pic"  referrerPolicy="no-referrer" alt="profilephot" />
                <div className='text-white h5 mx-4 my-3'>{user.userName}</div>
            </div>
          <div className="logoutBtn py-3">
            <Button variant='outline-primary'  onClick={handleLogout}>Logout </Button>
          </div>
         </div>
      </div>
    </>

    
  )
}

export default Navbar