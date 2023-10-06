import React from 'react'
import { Link } from 'react-router-dom'
import logo from "/logo.png";

const Login = () => {
  return (
    <>
      <section className='w-full h-[100vh] bg-b2 flex flex-wrap justify-between items-center relative pt-[50px] md:pt-[100px]'>

        <div className='w-full h-[70px] md:h-[100px] absolute top-0 left-0 border-b-2 border-pri'>
          <Link to={`/`} className='absolute top-[50%] left-[10%] translate-y-[-50%]'><i className="text-w tetx-base md:text-xl fa-solid fa-chevron-left"></i></Link>
          <h5 className='text-w text-base md:text-xl font-semibold font-ral text-center leading-[70px] md:leading-[100px]'>Login</h5>
        </div>

        <div className="max-w-container w-full mx-auto flex flex-wrap justify-between items-center">

          <div className='w-full md:w-5/12 flex justify-center items-center'>
            <img src={logo} alt="Logo" className='max-w-[30%] md:max-w-full' />
          </div>

          <div className='w-full md:w-7/12 flex flex-col justify-center items-center text-center md:text-start mt-5 md:mt-0'>
            <h3 className='text-w text-[25px] md:text-[40px] font-semibold font-ral'>Login with Password</h3>
            <p className='text-w text-xs md:text-base font-ral mt-2 md:mt-5'>Make sure that you already have an <Link to={`/Signin`} className='text-pri hover:underline'>account</Link>!</p>
            
            <div className='mt-10 text-left w-[90%] md:w-[400px] max-w-[400px]'>

              <p className='text-w text-xs md:text-base font-medium font-ral mb-3'>Email or username</p>
              <input type="text" placeholder='Enter Your Email' className='mb-4 md:mb-8 py-3 pl-5 text-xs md:text-base text-w bg-[#28292E] w-full rounded-xl' />

              <p className='text-w text-xs md:text-base font-medium font-ral mb-3'>Password</p>
              <input type="password" placeholder='Password' className='mb-6 md:mb-10 py-3 pl-5 text-xs md:text-base text-w bg-[#28292E] w-full rounded-xl' />
              
              <Link to={`/login`} className='py-3 px-20 bg-pri text-base md:text-lg text-w font-bold font-ral block rounded-xl text-center transition-all duration-500 hover:scale-[.96] hover:bg-w hover:text-pri'>Login</Link>

              <Link to={`/upcomming`} className='text-w text-xs md:text-sm font-medium font-ral text-right block mt-5 hover:underline'>Forgot your password?</Link>

            </div>
          </div>

        </div>

      </section>
    </>
  )
}

export default Login