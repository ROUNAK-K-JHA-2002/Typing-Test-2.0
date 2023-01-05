import { Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Login from './Pages/Login/index'
import Home from './Pages/Home/index'
import Loading from "./Components/Loading";



function App() {
	const [loading,setLoading] = useState(true);

  // Checking if User is already Logged In 
  const [user,setuser] = useState('')
useEffect (()=>{
  setuser(localStorage.getItem('userDetails'))
},[])

useEffect(()=>{
  const time =  setTimeout(()=>{
      setLoading(false)
    },3000)
    return (()=>{
      clearInterval(time)
    })
   })

console.log(user)

  return (
    // <div className="App">
    //  <Login/>
    // </div>
    <Routes>
				<Route
					exact
					path="/"
					element={loading ? <Loading /> : user ? <Home user={user} /> : <Navigate to="/login" />}
				/>
				<Route
					exact
					path="/login"
					element={loading ? <Loading /> : user ? <Navigate to="/" /> : <Login />}
				/>
			</Routes>
  )
}

export default App
