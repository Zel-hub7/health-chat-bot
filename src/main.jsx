import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import SignIn from './signIn'
import SignUp from './signUp'
import Home from './Home'
import NavBar from './navBar'
import { BrowserRouter, Routes, Route } from "react-router-dom"
ReactDOM.createRoot(document.getElementById('root')).render(

    <BrowserRouter>
      <Routes>
        <Route path="/" exact  element={<App />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />  
      </Routes>
    </BrowserRouter>

)
