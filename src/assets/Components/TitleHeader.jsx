import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Comment } from  'react-loader-spinner';

const TitleHeader = (props) => {

    let navigate = useNavigate()
    let [loader, setLoader] = useState(false)

    let backPage = ()=>{
        setLoader(true)
        setTimeout(()=>{
          navigate('/')
        },500)
    }

  return (
    <>
        <div className='w-full h-[70px] md:h-[100px] absolute top-0 left-0 border-b-2 border-pri'>
          <button onClick={backPage} className='absolute top-[50%] left-[10%] translate-y-[-50%]'><i className="text-w text-base md:text-xl fa-solid fa-chevron-left"></i></button>
          <h5 className='text-w text-base md:text-xl font-semibold font-ral text-center leading-[70px] md:leading-[100px]'>{props.title}</h5>
        </div>


        <div className={`${loader == true? 'block' : 'hidden'} absolute top-0 left-0 w-full h-full bg-[#2394C8EB] z-[9]`}>
          <Comment
          visible={ loader ? true : false}
          height="120"
          width="120"
          ariaLabel="comment-loading"
          wrapperStyle={{}}
          color="#2394C8"
          backgroundColor="#fff"
          wrapperClass="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-[9999]"
          />
        </div>
    </>
  )
}

export default TitleHeader