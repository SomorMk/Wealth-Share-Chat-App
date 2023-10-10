import React, { useState } from 'react'
import logo from '/logo.png'
import { Link, useNavigate } from 'react-router-dom'
import { Comment } from  'react-loader-spinner';

const Welcome = () => {

  let navigate = useNavigate()
  let [loader, setLoader] = useState(false)

  let loginBtn = ()=>{
    setLoader(true)
    setTimeout(()=>{
      navigate('/login')
    },500)
  }

  let signBtn = ()=>{
    setLoader(true)
    setTimeout(()=>{
      navigate('/signin')
    },500)
  }


  return (
    <>
        <section className='w-full h-[100vh] bg-b2 px-5 md:px-0'>
            <div className="max-w-container mx-auto h-full flex flex-wrap items-center justify-center">
                <div className='w-full h-[40%] md:h-1/2 pb-10 flex flex-wrap justify-center items-end'>
                    <img src={logo} alt="Welcome Logo" className='max-w-[50%] md:max-w-full hover:scale-[.9] transition-all duration-1000' />
                </div>
                <div className='w-full h-[60%] md:h-1/2 pt-10 flex flex-wrap justify-center items-start'>
                    <div className='text-center'>
                      <h1 className='text-w text-2xl md:text-[40px] font-semibold font-ral'>Welcome to Celebrity Wealth Share!</h1>
                      <p className='text-w text-xs md:text-lg font-ral mt-5'>Elevate Your Favourites, Multiply Your Wealth with Celebrity Wealth Share!</p>
                      <button onClick={loginBtn} className='py-3 md:py-4 px-20 bg-pri text-base md:text-lg text-w font-bold font-ral inline-block rounded-xl mt-10 transition-all duration-500 hover:scale-[.96] hover:bg-w hover:text-pri'>Login</button>
                      <p className='text-pri text-xs md:text-lg font-ral mt-5'>New Here? 
                      <button onClick={signBtn} className='text-w transition-all hover:underline ml-1'> Sign In</button></p>
                    </div>
                </div>
            </div>

            <div className={`${loader == true? 'block' : 'hidden'} absolute top-0 left-0 w-full h-full bg-[#2394C8EB]`}>
                <Comment
                visible={ loader ? true : false}
                height="120"
                width="120"
                ariaLabel="comment-loading"
                wrapperStyle={{}}
                color="#2394C8"
                backgroundColor="#fff"
                wrapperClass="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
                />
            </div>
        </section>
    </>
  )
}

export default Welcome