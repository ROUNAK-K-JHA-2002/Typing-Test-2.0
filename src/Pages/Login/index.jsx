import React, { useEffect, useState} from 'react'
import {Container,Button} from 'react-bootstrap'
import  db ,{auth,provider} from '../../Services/Firebase'
import {signInWithPopup} from 'firebase/auth'

import {setDoc ,doc, onSnapshot, getDoc} from 'firebase/firestore'
import Home from '../Home/index'

const userData = {
  userID : "",
  userName : "",
  userEmail : "",
  userProfilePhoto : ""
}


function Login() {
  const [user,setuser] = useState('')
  
  const handleLogin =()=>{
 signInWithPopup(auth,provider).then( async(data)=>{
       console.log(data)
         userData.userID = data.user.uid,
         userData.userName = data.user.displayName,
         userData.userEmail = data.user.email,
         userData.userProfilePhoto = data.user.photoURL,
          localStorage.setItem('userDetails' , JSON.stringify(userData))

        console.log(userData)
       try {
         await setDoc(doc(db , "Users" , `${data.user.uid}`),userData)
        console.log("User Logged in")
       } catch (error) {
        console.error(error)
       }
        
 })

}

useEffect (()=>{
  setuser(localStorage.getItem('userDetails'))
})
console.log( 'user is ' + user)
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