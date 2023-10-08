import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Comment } from  'react-loader-spinner';

const Upcomming = () => {

  let navigate = useNavigate()

  let [loader, setLoader] = useState(false)

  let homePage = ()=>{
    setLoader(true)
    setTimeout(()=>{
      navigate('/')
    },500)
  }


  return (
    <>
        <section className='w-full h-[100vh] bg-b2 flex justify-center items-center flex-col'>
            <h1 className='text-w text-2xl md:text-[40px] font-semibold font-ral'>This Page is Not Ready Yet!</h1>
            <p className='text-w text-xs md:text-lg font-ral mt-5'>Thank you!</p>
            <Link onClick={homePage} className='mt-10 py-3 px-20 bg-pri text-base md:text-lg text-w font-bold font-ral block rounded-xl text-center transition-all duration-500 hover:scale-[.96] hover:bg-w hover:text-pri'>Go to Home Page</Link>


            <Comment
            visible={ loader ? true : false}
            height="120"
            width="120"
            ariaLabel="comment-loading"
            wrapperStyle={{}}
            color="#000"
            backgroundColor="#fff"
            wrapperClass="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
            />
        </section>
    </>
  )
}

export default Upcomming