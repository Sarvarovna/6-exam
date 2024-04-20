import React from 'react'
import { Link } from 'react-router-dom'

function HomePage({student}) {
  return (
    <>
     <div className='justify-between flex p-5 items-center'>
      <h2 className='font-bold text-[22px]'>Students List</h2>
      <Link className='w-[199px] text-center py-[13px] rounded-md bg-yellow-400 text-white text-semibold ' to={"/add"}>
      Add New Student 
      </Link>
      </div> 
      <div className='px-5'>
       <table className='w-full'>
        <thead>
           <tr>
            <th className='bg-slate-300 p-2'>ID</th>
            <th className='bg-slate-300 p-2'>User img</th>
            <th className='bg-slate-300 p-2'>Name</th>
            <th className='bg-slate-300 p-2'>Email</th>
            <th className='bg-slate-300 p-2'>Phone Number</th>
            <th className='bg-slate-300 p-2'>Enroll Number</th>
            <th className='bg-slate-300 p-2'>Created At</th>
            <th className='bg-slate-300 p-2'>Action</th>
           </tr>
        </thead>
        <tbody>
        {student.map(item => (
          <tr className='even:bg-yellow-100' key={item.id}>
           <td className='p-2 text-center'>{item.id}</td>
           <td className='p-2 text-center'>
            <img src={item.avatarImg} alt="Student Image" width={60} height={60} />
           </td>
           <td className='p-2 text-center'>{item.name}</td>
           <td className='p-2 text-center'>{item.email}</td>
           <td className='p-2 text-center'>{item.phoneNumber}</td>
           <td className='p-2 text-center'>{item.enrollNumber}</td>
           <td className='p-2 text-center'>{item.createdAt}</td>
           <td className='p-2 text-center'>
             <button className='bg-red-500 text-[13px] p-2 text-white font-semibold rounded-md'>Delete</button>
           </td>
          </tr>
        ))}
        </tbody>
       </table>
      </div>
    </>
  )
}

export default HomePage