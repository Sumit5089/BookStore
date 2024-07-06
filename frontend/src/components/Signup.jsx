import React from 'react';
import { Link } from 'react-router-dom';
import Login from './Login';

const Signup = () => {
  return (
    <>
        <div className='flex h-screen items-center justify-center '>
        <div className='w-[500px]'>
        <div className='modal-box'>
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </Link>
          </form>
          <h3 className="font-bold text-lg">Signup</h3>
          <div className="mt-4 space-y-2">
            <span className="px-3">Username</span>
            <br />
            <input
              type="text"
              placeholder="Enter Username"
              className="w-80 px-3 py-1 border rounded-md outline-none"
            />
          </div>
          <br />
          <div className="mt-4 space-y-2">
            <span className="px-3">Email</span>
            <br />
            <input
              type="email"
              placeholder="Enter Your Email"
              className="w-80 px-3 py-1 border rounded-md outline-none"
            />
          </div>
          <br />
          <div className="mt-4 space-y-2">
            <span className="px-3">Password</span>
            <br />
            <input
              type="password"
              placeholder="Enter Your Password"
              className="w-80 px-3 py-1 border rounded-md outline-none"
            />
          </div>
          <div className="flex justify-around mt-4">
            <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">Signup</button>
            <p className="mt-3">
              Have Account? <button to="/" className="px-5 underline text-blue-500 cursor-pointer" onClick={() => document.getElementById("my_modal_3").showModal()}>Login</button>
              {""}
              <Login/>
            </p>
          </div>
        </div>
      </div>
        </div>
    </>
  )
}

export default Signup