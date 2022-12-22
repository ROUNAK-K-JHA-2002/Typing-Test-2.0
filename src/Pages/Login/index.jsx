import React, { useState} from 'react'
import {Container,Button} from 'react-bootstrap'
import {auth,provider} from '../../Services/Firebase'
import {signInWithPopup} from 'firebase/auth'
import {doc , setDoc} from 'firebase/firestore'
import Home from '../Home/index'




function Login() {
  const [user,setuser] = useState(null)
  const handleLogin = async()=>{
 signInWithPopup(auth,provider).then((data)=>{
       console.log(data)
       setuser(data.user)

 })
}
  return (
    <div>
    {user ? <Home user={user}/> : 
    <Container>
    <div className='display-6 text-center'>Login</div>
    <Button varient="primary" onClick={handleLogin}>Login</Button>
   </Container>}
      
    </div>
  )
}

export default Login