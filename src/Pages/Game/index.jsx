import React , {useEffect, useState} from 'react'
import {collection , getDocs} from 'firebase/firestore'
import db from '../../Services/Firebase'
import './game.css'
import './PreviousStats'
import PreviousStats from './PreviousStats'
import Header from '../../Components/Header/index'
import {Button}  from 'react-bootstrap'

const userInputField = document.getElementById('input-Field')
const TextWrapper = document.getElementById('GameText')
function GameComponent(userDetails) {

  
  const user =  userDetails.user.uid;
  const initializeGame =()=>{
  const para = sessionStorage.getItem('para');
  const TextWrapper = document.getElementById('GameText')
     para.split('').forEach((span)=>{
       let spanTag = `<span>${span}</span>`
       TextWrapper.innerHTML += spanTag 
      })
      // document.addEventListener('keydown',()=>{userInputField.focus()})
  }
  
  
  
  
  
  
  
  const initTyping = ()=>{
    // const TextWrapper = document.getElementById('GameText')
    // const userInputField = document.getElementById('input-Field')
    // const characters = TextWrapper.querySelectorAll("span")
    // let typedChars = userInputField.ariaValueMax.split('');
    // console.log(typedChars)
    // console.log(characters)
  }
  console.log(document.readyState)
  // if( document.readyState === 'complete'){
    //   useEffect(()=>{
      //     initTyping();
      //   })
      // }
      window.onload = initTyping;
      
   useEffect(()=>{
    initializeGame();
   
   })
  
  
  

  return (
    <>
    <Header/>
    <div className="Game-Wrapper row">
      <div className='input text-white'>
        <input type="text" id='input-Field'/>
      </div>
      <div className='Show-Previous-Stats col-3'> <PreviousStats /></div>
      <div id='GameText' className='Show-Text text-white col-6'>
        
      </div>
      

      <div className='Show-Current-Stats col-3 text-white d-flex flex-column justify-content-center'>
      <div className='display-6 text-white'>CURRENT STATS</div>
    {/* <div className="Button">
          <Button variant='warning' onClick={initTyping}>start </Button>
       </div> */}
       <div className="TimeStats">
          <p><span> Time Left : </span> <span>60</span>s</p>
       </div>
       <div className="MistakeStats">
          <p><span>Mistakes  : </span><span>0</span></p>
       </div>
       
       <div className="CPMStats">
          <p><span> Counts per Minute : </span> <span>0</span></p>
       </div>
       <div className="Button">
          <Button variant='warning'>Try Again </Button>
       </div>
      </div>
    </div>
    </>
    
    )
      }

export default GameComponent