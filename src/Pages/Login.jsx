import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from "/logo.png";
import googleLogo from '../assets/Images/google-logo.png'
import facebookLogo from '../assets/Images/facebook.png'
import { BsEyeFill, BsEyeSlashFill } from 'react-icons/bs';
import { Comment } from  'react-loader-spinner';
import { ToastContainer, toast } from 'react-toastify';
import { getAuth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import TitleHeader from '../assets/Components/TitleHeader';

const Login = () => {

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  let navigate = useNavigate()

  let [eye, setEye] = useState(false)
  let [loader, setLoader] = useState(false)

  let [email, setEmail] = useState('')
  let [password, setPassword] = useState('')
  let [emailErr, setEmailErr] = useState('')
  let [passwordErr, setPasswordErr] = useState('')

  let eyeHideShow = ()=>{
    setEye(!eye)
  }

  let backPage = ()=>{
    setLoader(true)
    setTimeout(()=>{
      navigate('/')
    },500)
  }
  let forgotPage = ()=>{
    setLoader(true)
    setTimeout(()=>{
      navigate('/forget-password')
    },500)
  }
  let signInPage = ()=>{
    setLoader(true)
    setTimeout(()=>{
      navigate('/signin')
    },500)
  }


  let emailChange = (e)=>{
    setEmail(e.target.value)
    setEmailErr('')
  }
  let passwordChange = (e)=>{
    setPassword(e.target.value)
    setPasswordErr('')
  }

  let loginBtn = ()=>{
    (()=>{
      if(!email){
        setEmailErr('Email Required')
      } else if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(email)){
        setEmailErr('Enter Valid Email')
      }
    })();
    (()=>{
      if(!password){
        setPasswordErr('Password Required')
      }
    })();
    (()=>{
      if(password && password && /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(email)){
        setLoader(true)
        signInWithEmailAndPassword(auth, email, password)
          .then(() => {
            toast.success('Login Successful!')
            setTimeout(()=>{
              navigate('/success')
            }, 2000)
          })
          .catch((error) => {
            setLoader(false)
            const errorCode = error.code;
            console.log(errorCode);
            if(errorCode.includes('auth/invalid-login-credentials')){
              toast.error('Wrong Email & Password')
              setEmailErr('Make sure this Email is valid')
              setPasswordErr('Give a Correct Password')
            }
          });
      }
    })();
  }

  let googleClick = ()=>{
    setLoader(true)
    setTimeout((()=>{
      setLoader(false)
      signInWithPopup(auth, googleProvider)
      .then(() => {
        toast.success('Login Successful! Rederecting to Home Page!')
        setLoader(true)
        setTimeout((()=>{
          navigate('/success')
        }),2000)
        console.log('Successfull');
      }).catch((error) => {
        setLoader(false)
        const errorCode = error.code;
        console.log(errorCode);
        toast.error('Something Went Wrong! Try Again')
      });
    }),1500)
  }




  return (
    <>
      <section className='w-full h-[100vh] bg-b2 flex flex-wrap justify-between items-center relative pt-[50px] md:pt-[100px]'>

      <TitleHeader title='Login'></TitleHeader>

        <div className="max-w-container w-full mx-auto flex flex-wrap justify-between items-center">

          <div className='w-full md:w-5/12 flex md:flex-col justify-center items-center mb-5 md:mb-0'>
            <img src={logo} alt="Logo" className='max-w-[30%] md:max-w-full hidden md:block' />
            <div className='mt-5 text-center flex flex-col justify-center items-center'>
              <p className='text-w text-[10px] md:text-lg font-semibold font-ral mb-2 md:mb-5'>You can also Login with</p>
              <div className='flex gap-2'>
                <button onClick={googleClick} className='py-2 px-3 max-w-fit bg-w rounded-lg flex items-center group hover:scale-[0.90] transition-all duration-500'>
                  <img src={googleLogo} alt="Google Logo" className='w-[10px] h-[10px]' />
                  <p className='text-b text-xs md:text-base font-semibold font-ral ml-3'>Google</p>
                </button>
                <button className='py-2 px-3 max-w-fit bg-w rounded-lg flex items-center group hover:scale-[0.90] transition-all duration-500'>
                  <img src={facebookLogo} alt="Google Logo" className='w-[10px] h-[10px]' />
                  <p className='text-b text-xs md:text-base font-semibold font-ral ml-3'>Facebook</p>
                </button>
              </div>
            </div>
          </div>

          <div className='w-full md:w-7/12 flex flex-col justify-center items-center text-center md:text-start mt-5 md:mt-0'>
            <h3 className='text-w text-[25px] md:text-[40px] font-semibold font-ral'>Login with Password</h3>
            <p className='text-w text-xs md:text-base font-ral mt-2 md:mt-5'>Make sure that you already have an <button onClick={signInPage} className='text-pri hover:underline'>account</button>!</p>
            
            <div className='mt-10 text-left w-[90%] md:w-[400px] max-w-[400px]'>

              <div className='relative'>
                <p className='text-w text-xs md:text-base font-medium font-ral mb-3'>Email or username</p>
                <div className='mb-4 md:mb-8 relative'>
                  <input onChange={emailChange} value={email} type="text" placeholder='Enter Your Email' className='py-3 pl-5 text-xs md:text-base text-w bg-[#28292E] w-full rounded-xl' />
                </div>
                <span className='absolute top-0 right-0 text-xs text-red-500 font-bold font-ral underline'>{emailErr}</span>
              </div>

              <div className='relative'>
                <p className='text-w text-xs md:text-base font-medium font-ral mb-3'>Password</p>
                <div className='mb-6 md:mb-10 relative'>
                  <input onChange={passwordChange} value={password} type={`${eye? 'text' : 'password'}`} placeholder='Password' className='py-3 pl-5 pr-[50px] text-xs md:text-base text-w bg-[#28292E] w-full rounded-xl' />
                  {eye ? <BsEyeFill onClick={eyeHideShow} className='absolute top-[50%] right-[20px] translate-y-[-50%] text-w text-xl cursor-pointer' />:<BsEyeSlashFill onClick={eyeHideShow} className='absolute top-[50%] right-[20px] translate-y-[-50%] text-w text-xl cursor-pointer' />}
                </div>
                <span className='absolute top-0 right-0 text-xs text-red-500 font-bold font-ral underline'>{passwordErr}</span>
              </div>
              
              <button onClick={loginBtn} className='w-full py-3 px-20 bg-pri text-base md:text-lg text-w font-bold font-ral block rounded-xl text-center transition-all duration-500 hover:scale-[.96] hover:bg-w hover:text-pri'>Login</button>

              <div>
                <button onClick={forgotPage} className='w-full text-w text-xs md:text-sm font-medium font-ral text-right mt-5 hover:underline'>Forgot your password?</button>
              </div>

            </div>
          </div>

        </div>



        <ToastContainer
        position="top-center"
        autoClose={2000}
        newestOnTop={false}
        hideProgressBar={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable={false}
        theme="light"
        />

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

export default Login