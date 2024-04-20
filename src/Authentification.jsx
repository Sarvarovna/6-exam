import React, { useState } from 'react'
import {Routes, Route} from "react-router-dom"
import HomePage from './pages/Auth/HomePage/HomePage'
import SingleStudent from './pages/Auth/SingleStudent/SingleStudent'
import AddStudent from './pages/Auth/AddStudent/AddStudent'
import Arrow from "./assets/img/Arrow.svg"

function Authentification() {
  const [student, setStudents] = useState([
    {
      id:1,
      avatarImg:"",
      email:"Arjumand@gmail.com",
      phoneNumber:"+998908108170",
      enrollNumber:"1234567",
      CreatedAt:"18.04.2024"
    }
  ])
  return (
    <div className='flex'>
      <nav className='w-[22%] p-5 h-[100vh] bg-[#F2EAE1]'>
        <h1 className='font-bold text-[23px]'>Admin Students</h1>
      </nav>
      <div className='w-[78%]'>
        <div className='p-5 flex bg-[#F2EAE1] justify-between'>
          <button>
            <img src={Arrow} alt="Arrow" width={17} height={17} />
          </button>
          <div>
            <input className='w-[250px] p-1.5 rounded-md outline-none' type="text" placeholder='Search...' />
          </div>
        </div>
        <Routes>
          <Route path="/" element={<HomePage student={student}/>}/>
          <Route path="/add" element={<AddStudent/>}/>
          <Route path="/student" element={<SingleStudent/>}/>
        </Routes>
      </div>
    </div>
  )
}

export default Authentification