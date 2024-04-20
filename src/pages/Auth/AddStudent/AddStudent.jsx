import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom'

function AddStudent({ student, setStudents }) {
  const date = new Date()
  const navigate = useNavigate()
  const nowDate = date.getDate().toString().padStart(2, 0) + "-" + (date.getMonth() + 1).toString().padStart(2, 0) + "-" + date.getFullYear();
  const [imgUrl, setImgUrl] = useState(null)
  const chooseImgChange = (e) => {
    setImgUrl(URL.createObjectURL(e.target.files(0)))
  }
  const handleSubmitStudent = (e) => {
    e.preventDefault()
    const data = {
      id:student.length ? student[student.length - 1].id + 1 : 1,
      avatarImg: imgUrl,
      name:e.target.name.value,
      email:e.target.email.value,
      phoneNumber:e.target.phoneNumber.value,
      enrollNumber:e.target.enrollNumber.value,
      createdAt: nowDate
    }
    if (imgUrl == null) {
      toast.error("Rasm tanlash shart!")
    }
    else {
      setStudents([...student, data])
      toast.success("Saqlandi!")
      setTimeout(() => {
        navigate("/")
      }, 1000)
    }
  }
  return (
    <form onSubmit={handleSubmitStudent} className='flex justify-between w-[700px] p-2 bg-yellow-200 rounded-md m-5'>
      <Toaster position='top-center' reverseOrder={false} />
      <div className='w-[48%]'>
        <label className='flex flex-col mb-3'>
          <span>Name</span>
          <input required name='name' type="text" className='p-1.5 outline-none rounded-md w-full' placeholder='Enter name' />
        </label>
        <label className='flex flex-col mb-3'>
          <span>Email</span>
          <input required name='email' type="email" className='p-1.5 outline-none rounded-md w-full' placeholder='Enter email' />
        </label>
        <label className='flex flex-col mb-3'>
          <span>Phone Number</span>
          <input required name='phoneNumber' type="tel" className='p-1.5 outline-none rounded-md w-full' maxLength={13} defaultValue={"+998"} placeholder='Enter your number' />
        </label>
      </div>
      <div className='w-[48%]'>
        <label className='flex flex-col mb-3'>
          <span>Enroll Number</span>
          <input required name='enrollNumber' type="number" className='p-1.5 outline-none rounded-md w-full' placeholder='Enter enroll number' />
        </label>
    
        <label className='flex flex-col mb-3'>
          <span>Choose file</span>
          <input onChange={chooseImgChange} required type="file" className='scale-0 opacity-0 p-1.5 outline-none rounded-md' />
          {imgUrl ?
            <img src={imgUrl} alt="Choose Img" width={60} height={60} />
            : ""
          }
        </label>
        <button className='f-full bg-green-500 text-white p-1.5 mt-4 font-semibold rounded-md' type='Submit'>Submit</button>
      </div>
    </form>
  )
}

export default AddStudent