import React, { useEffect, useState} from 'react'
import {Container,Button} from 'react-bootstrap'
import  db ,{auth,provider} from '../../Services/Firebase'
import {signInWithPopup} from 'firebase/auth'
import {setDoc ,doc, collection , getDocs} from 'firebase/firestore'
import Home from '../Home/index'
import  './login.css'
import GoogleSignInImg from '../../assets/googleSignIn.png' 
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
        
       window.location.reload();
 })

}

//Setting Para in Session Storage
const getText = async() =>{
     const querySnapshot = await getDocs(collection(db, "Typing_Paragraphs"));
     const num = Math.floor((Math.random() * querySnapshot.size) + 1);
     querySnapshot.forEach((doc) => {
     if(doc.id == `Paragraph ${num}`){
      sessionStorage.setItem('para',`${doc.data().Text}`)
    }
   });
  }

useEffect (()=>{
  getText();
  setuser(localStorage.getItem('userDetails'))
},[])
console.log( 'user is ' + user)
  return (
    <div className='Login d-flex align-content-center' >
    {user ? <Home user={user}/> : 
    <Container className='Login-Container'>
    <div className='display-6 text-center text-white'>WELCOME TO TYPO_RECTARE</div>
    <div className='display-6 text-center text-white'>Login</div>
    <div className='SigninBtn text-center'>
      <img src={GoogleSignInImg} alt="GoogleSignInImg" onClick={handleLogin} />
    </div>
   </Container>}
      
    </div>
  )
}

export default Login