import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Comment } from  'react-loader-spinner';
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { ToastContainer, toast } from 'react-toastify';
import TitleHeader from '../assets/Components/TitleHeader';

const ForgetPassword = () => {

    const auth = getAuth();

    let navigate = useNavigate()
    let [loader, setLoader] = useState(false)

    let [forgetMail, setForgetMail] = useState('')
    let [forgetError, setForgetError] = useState(false)

    let forgetMailChange = (e)=>{
        setForgetMail(e.target.value)
        setForgetError('')
    }

    let submitClick = ()=>{
        if(!forgetMail){
            setForgetError('Password Required')
        } else if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(forgetMail)){
            setForgetError('Enter Valid Email')
        } else{
            setLoader(true)
            sendPasswordResetEmail(auth, forgetMail)
            .then(() => {
                setForgetMail('')
                toast.success('Go to Your Mail and Change Your Password!')
                setTimeout(()=>{
                    navigate('/login')
                }, 5000)
            })
            .catch((error) => {
                setLoader(false)
                const errorCode = error.code;
                toast.error('Somethinf Went Wrong! Try Again!')
            });
        }
    }

    let backPage = ()=>{
        setLoader(true)
        setTimeout(()=>{
        navigate('/')
        },500)
    }
    let loginPageBtn = ()=>{
        setLoader(true)
        setTimeout(()=>{
          navigate('/login')
        },500)
    }


  return (
    <>
        <section className='flex flex-col justify-center items-center h-screen bg-b2 pt-[100px] px-[10px] sm:px-0'>

            <TitleHeader title='Forget Password'></TitleHeader>

            <h1 className='text-w text-base sm:text-[22px] md:text-[30px] font-bold font-ral mb-10 sm:mb-16 text-center'>Easily Change your Password by Verification Email</h1>

            <div className='w-[300px] sm:w-[600px] py-[20px] sm:py-[50px] bg-w rounded-xl text-center flex flex-col sm:flex-row justify-evenly items-center'>
                <div className='relative z-[1]'>
                    <input onChange={forgetMailChange} value={forgetMail} type="text" placeholder='Enter your email' className='py-2 px-2 w-[280px] sm:w-[300px] border-[3px] border-pri rounded-lg focus-visible:outline-none placeholder:text-xs sm:placeholder:text-base text-sm sm:text-base' />
                    {
                        forgetError ? <p className='absolute left-0 bottom-[-10px] sm:bottom-[-15px] pt-2 w-full text-center bg-red-500 text-[8px] sm:text-[10px] text-w font-ral rounded-bl-lg rounded-br-lg z-[-1]'>{forgetError}</p> : null
                    }
                </div>

                <button onClick={submitClick} className='py-2 px-10 sm:py-2 sm:px-14 bg-pri text-sm sm:text-base mt-5 sm:mt-0 text-w font-bold font-ral rounded-xl text-center transition-all duration-500 hover:scale-[.96] hover:bg-b hover:text-w'> Get Mail</button>
            </div>

            <div className='mt-20 flex gap-5'>
                <button onClick={loginPageBtn} className='py-2 px-10 sm:py-3 sm:px-20 bg-w text-sm sm:text-base text-pri font-bold font-ral rounded-xl text-center transition-all duration-500 hover:scale-[.96] hover:bg-pri hover:text-w'>Login</button>
                <button onClick={backPage} className='py-2 px-10 sm:py-3 sm:px-20 bg-pri text-sm sm:text-base text-w font-bold font-ral rounded-xl text-center transition-all duration-500 hover:scale-[.96] hover:bg-w hover:text-pri'>Home</button>
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
                wrapperClass="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
                />
            </div>
            <ToastContainer
            position="top-center"
            autoClose={5000}
            newestOnTop={false}
            hideProgressBar={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable={false}
            theme="light"
            />
        </section>
    </>
  )
}

export default ForgetPassword