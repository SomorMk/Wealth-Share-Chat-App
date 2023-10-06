import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from "/logo.png";

const Signup = () => {

  let [fullName, setFullName] = useState('')
  let [email, setEmail] = useState('')
  let [password, setPassword] = useState('')

  let fullNameChange = (e)=>{
    setFullName(e.target.value)
    setNameErr(<i className="text-pri text-base fa-regular fa-circle-check"></i>)
  }
  let emailChange = (e)=>{
    setEmail(e.target.value)
    setEmailErr(<i className="text-pri text-base fa-regular fa-circle-check"></i>)
  }
  let passwordChange = (e)=>{
    setPassword(e.target.value)
    setPasswordErr(<i className="text-pri text-base fa-regular fa-circle-check"></i>)
  }

  let [nameErr, setNameErr] = useState('')
  let [emailErr, setEmailErr] = useState('')
  let [passwordErr, setPasswordErr] = useState('')


  let signClick = ()=>{

    (()=>{

      (()=>{
        if(fullName == ''){
          setNameErr('Full Name Required')
        }
      })();

      (()=>{
        if(email == ''){
          setEmailErr('Email Required')
        }
      })();

      (()=>{
        if(password == ''){
          setPasswordErr('Password Required')
        }
      })();




      }
    )()

  }




  return (
    <>
      <section className='w-full h-[100vh] bg-b2 flex flex-wrap justify-between items-center relative pt-[50px] md:pt-[100px]'>

        <div className='w-full h-[70px] md:h-[100px] absolute top-0 left-0 border-b-2 border-pri'>
          <Link to={`/`} className='absolute top-[50%] left-[10%] translate-y-[-50%]'><i className="text-w text-base md:text-xl fa-solid fa-chevron-left"></i></Link>
          <h5 className='text-w text-base md:text-xl font-semibold font-ral text-center leading-[70px] md:leading-[100px]'>Signup</h5>
        </div>

        <div className="max-w-container w-full mx-auto flex flex-wrap justify-between items-center">

          <div className='w-full md:w-7/12 flex flex-col justify-center items-center order-2 md:order-1'>
            <h3 className='text-w text-[25px] md:text-[40px] font-semibold font-ral mt-5 md:mt-0'>Quick Signup</h3>
            
            <div className='mt-5 md:mt-10 text-left w-[90%] md:w-[400px] max-w-[400px]'>

              <div className='relative'>
                <p className='text-w text-xs md:text-base font-medium font-ral mb-3'>Full Name</p>
                <input onChange={fullNameChange} value={fullName} type="text" placeholder='Enter Your Full Name' className='mb-4 md:mb-8 py-3 pl-5 bg-[#28292E] w-full rounded-xl text-w text-xs md:text-base' />
                <span className='absolute top-0 right-0 text-xs text-red-500 underline'>{nameErr}</span>
              </div>

              <div className='relative'>
                <p className='text-w text-xs md:text-base font-medium font-ral mb-3'>Email</p>
                <input onChange={emailChange} value={email} type="email" placeholder='Enter Your Email' className='mb-4 md:mb-8 py-3 pl-5 bg-[#28292E] w-full rounded-xl text-w text-xs md:text-base' />
                <span className='absolute top-0 right-0 text-xs text-red-500 underline'>{emailErr}</span>
              </div>

              <div className='relative'>
                <p className='text-w text-xs md:text-base font-medium font-ral mb-3'>Password</p>
                <input onChange={passwordChange} value={password} type="password" placeholder='Password' className='mb-5 md:mb-10 py-3 pl-5 bg-[#28292E] w-full rounded-xl text-w text-xs md:text-base' />
                <span className='absolute top-0 right-0 text-xs text-red-500 underline'>{passwordErr}</span>
              </div>
              
              <Link onClick={signClick} className='py-3 px-20 bg-pri text-base md:text-lg text-w font-bold font-ral block rounded-xl text-center transition-all duration-500 hover:scale-[.96] hover:bg-w hover:text-pri'>Sign Up</Link>

              <Link to={`/login`} className='text-w text-xs md:text-sm font-medium font-ral text-right block mt-5 hover:underline'>Already have account? Login</Link>

            </div>
          </div>

          <div className='w-full md:w-5/12 flex justify-center items-center order-1 md:order-2'>
            <img src={logo} alt="LOGO" className='max-w-[30%]' />
          </div>

        </div>

      </section>
    </>
  )
}

export default Signup