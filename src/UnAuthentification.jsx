import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SignIn from './pages/UnAuth/SignIn/SignIn'
import SignUp from './pages/UnAuth/SignUp/SignUp'

function UnAuthentification({setToken, setSignUpData}) {
  return (
    <Routes>
     <Route path='/' element={<SignIn setToken={setToken}/>}/> 
     <Route path='/sign-up' element={<SignUp setSignUpData={setSignUpData}/>}/> 
    </Routes>
  )
}

export default UnAuthentification