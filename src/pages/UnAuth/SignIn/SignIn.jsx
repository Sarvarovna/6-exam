import React from 'react'
import { toast, Toaster } from 'react-hot-toast'
import { Link } from 'react-router-dom'



function SignIn({ setToken }) {

  const newData = JSON.parse(window.localStorage.getItem("newToken")) || { newLogin: "Arjumandbonu" }

  const signInSubmit = (evt) => {
    evt.preventDefault()
    const data = {
      login: evt.target.login.value,
      password: evt.target.password.value
    }
    if (data.login == newData.newLogin) {
      toast.success("Muvaffaqiyatli o'tdingiz!")
    }
    else {
      toast.error("Ma'lumotlar mos emas!")
    }
    setTimeout(() => {
      setToken(data)
    }, 1000)

    window.localStorage.setItem("token", JSON.stringify(data))
  }

  return (
    <div className='login w-full h-[100vh]  pt-[80px]'>
      <Toaster position="top-center" reverseOrder={false} />
      <form onSubmit={signInSubmit} className='w-[475px] pt-[44px] pb-[52px] px-[30px] rounded-[20px] bg-[white] m-auto'>
        <div className='flex pl-[35px] items-center space-x-[10px] mb-[43px]'>
        <span className='block w-[6px] h-[39px] bg-[#F8D442]'></span>
        <h2 className='font-bold text-[32px] leading-[39px]'>Admin Students</h2>
        </div>
        <p className='text-center font-bold text-[22px] leading-[26.82px] mb-[9px]'>SIGN IN</p>
        <p className='text-[14px] text-[#6C6C6C] leading-[17.07px] text-center'>Enter your credentials to access your account</p>
        <label className='flex flex-col mt-[50px]'>
          <span className='text-[14px] text-[#6C6C6C] leading-[17.07px] block mb-[10px]'>Login</span>
          <input name='login' className=' outline-none w-full text-[#CDCDCD] border-[1px] border-solid border-[#E5E5E5] py-[14px] px-[15px] rounded-[4px] focus:shadow-md focus:shadow-[#FEAF00]' required type="text" placeholder='Enter your login' />
        </label>
        <label className='flex flex-col mt-[27px]'>
          <span className='text-[14px] text-[#6C6C6C] leading-[17.07px] block mb-[10px]'>Password</span>
          <input name='password' className=' outline-none w-full border-[1px] border-solid border-[#E5E5E5] py-[14px] px-[15px] rounded-[4px] focus:shadow-md focus:shadow-[#FEAF00]' required type="password" placeholder='Enter your password' />
        </label>
        <button className='bg-[#FEAF00] w-[415px] p-3 rounded-lg text-[16px] text-white mt-[35px]'>SIGN IN</button>
        <Link className='text-[16px] text-black block text-center mt-[11px]' to={"/sign-up"}>Sign Up</Link>
      </form>
    </div>
  )
}

export default SignIn