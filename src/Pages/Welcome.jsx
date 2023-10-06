import React from 'react'
import logo from '/logo.png'
import { Link } from 'react-router-dom'

const Welcome = () => {
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
                      <Link to={`/login`} className='py-3 md:py-4 px-20 bg-pri text-base md:text-lg text-w font-bold font-ral inline-block rounded-xl mt-10 transition-all duration-500 hover:scale-[.96] hover:bg-w hover:text-pri'>Login</Link>
                      <p className='text-pri text-xs md:text-lg font-ral mt-5'>New Here? <Link to={`/signin`} className='text-w transition-all hover:underline'>Sign In</Link></p>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Welcome