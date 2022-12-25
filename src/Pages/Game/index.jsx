import React , {useEffect, useState} from 'react'
import {collection , getDocs} from 'firebase/firestore'
import db from '../../Services/Firebase'
import './game.css'
import './PreviousStats'
import PreviousStats from './PreviousStats'

function GameComponent(userDetails) {
  const [text , setText] = useState({})
   const user =  userDetails.user.uid;
   const getText = async() =>{
     const querySnapshot = await getDocs(collection(db, "Typing_Paragraphs"));
     const num = Math.floor((Math.random() * querySnapshot.size) + 1);
     querySnapshot.forEach((doc) => {
    if(doc.id == `Paragraph ${num}`){
   document.getElementById('GameText').innerText = doc.data().Text;
    }

});
   }

   useEffect(()=>{
    getText();
   },[])

   console.log("Array " + text)
  return (
    <div className="Game-Wrapper row">
      <div className='input text-white'>Hello</div>
      <div className='Show-Previous-Stats col-3'> <PreviousStats /></div>
      <div id='GameText' className='Show-Text text-white col-6'></div>
      <div className='Show-Current-Stats col-3'></div>
    </div>
  )
}

export default GameComponent