import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from "/logo.png";
import googleLogo from '../assets/Images/google-logo.png'
import { BsEyeFill, BsEyeSlashFill } from 'react-icons/bs';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { ToastContainer, toast } from 'react-toastify';
import { Comment } from  'react-loader-spinner';

const Signup = () => {

  const auth = getAuth();
  let navigate = useNavigate()

  let [loader, setLoader] = useState(false)
  let [eye, setEye] = useState(false)

  let eyeHideShow = ()=>{
    setEye(!eye)
  }

  let [fullName, setFullName] = useState('')
  let [email, setEmail] = useState('')
  let [password, setPassword] = useState('')

  let fullNameChange = (e)=>{
    setFullName(e.target.value)
    setNameErr(<i className="text-pri text-base fa-regular fa-circle-check"></i>)
  }
  let emailChange = (e)=>{
    setEmail(e.target.value)
    if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(email)){
      setEmailErr(<i className="text-pri text-base fa-regular fa-circle-check"></i>)
    } else{
      setEmailErr(<i className="text-red-500 text-base fa-regular fa-circle-check"></i>)
    }
    
  }
  let passwordChange = (e)=>{
    setPassword(e.target.value)
    if(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{7,}$/.test(password)){
      setPasswordErr(<i className="text-pri text-base fa-regular fa-circle-check"></i>)
    } else{
      setPasswordErr(<i className="text-red-500 text-base fa-regular fa-circle-check"></i>)
    }
  }

  let [nameErr, setNameErr] = useState('')
  let [emailErr, setEmailErr] = useState('')
  let [passwordErr, setPasswordErr] = useState('')


  let signClick = ()=>{

    (()=>{

      (()=>{
        if(!fullName){
          setNameErr('Full Name Required')
        }
      })();

      (()=>{
        if(!email){
          setEmailErr('Email Required')
        }  else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(email)){
          setEmailErr('Enter Valid Email')
        }
      })();

      (()=>{
        if(!password){
          setPasswordErr('Password Required')
        } else if(!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{7,}$/.test(password)){
          setPasswordErr('Enter Valid Password')
          setPassword('')
        }
      })();

      (()=>{
        if(fullName && email && password && /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(email) && /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{7,}$/.test(password)){
          setLoader(true)
          createUserWithEmailAndPassword(auth, email, password)
          .then(() => {
            toast.success('Registration Successful! Rederecting to Login Page!')
            setFullName('')
            setEmail('')
            setPassword('')
            setTimeout(()=>{
              navigate('/login')
            },2000)
          })
          .catch((error) => {
            setLoader(false)
            const errorCode = error.code;
            console.log(errorCode);
            if(errorCode.includes('auth/email-already-in-use')){
              setEmailErr('This Email Already Used')
            }
          });
        } else{
          console.log('Not Okay');
        }
      })();

      }
    )()

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
      <section className='w-full h-[100vh] bg-b2 flex flex-wrap justify-between items-center relative pt-[50px] md:pt-[100px]'>

        <div className='w-full h-[70px] md:h-[100px] absolute top-0 left-0 border-b-2 border-pri'>
          <Link onClick={backPage} className='absolute top-[50%] left-[10%] translate-y-[-50%]'><i className="text-w text-base md:text-xl fa-solid fa-chevron-left"></i></Link>
          <h5 className='text-w text-base md:text-xl font-semibold font-ral text-center leading-[70px] md:leading-[100px]'>Signup</h5>
        </div>

        <div className="max-w-container w-full mx-auto flex flex-wrap justify-between items-center">

          <div className='w-full md:w-7/12 flex flex-col justify-center items-center order-2 md:order-1'>
            <h3 className='text-w text-[25px] md:text-[40px] font-semibold font-ral mt-5 md:mt-0'>Quick Signup</h3>
            
            <div className='mt-5 md:mt-10 text-left w-[90%] md:w-[400px] max-w-[400px]'>

              <div className='relative'>
                <p className='text-w text-xs md:text-base font-medium font-ral mb-3'>Full Name</p>
                <input onChange={fullNameChange} value={fullName} type="text" placeholder='Enter Your Full Name' className='mb-4 md:mb-8 py-3 pl-5 bg-[#28292E] w-full rounded-xl text-w text-xs md:text-base' />
                <span className='absolute top-0 right-0 text-xs text-red-500 font-bold font-ral underline'>{nameErr}</span>
              </div>

              <div className='relative'>
                <p className='text-w text-xs md:text-base font-medium font-ral mb-3'>Email</p>
                <input onChange={emailChange} value={email} type="email" placeholder='Enter Your Email' className='mb-4 md:mb-8 py-3 pl-5 bg-[#28292E] w-full rounded-xl text-w text-xs md:text-base' />
                <span className='absolute top-0 right-0 text-xs text-red-500 font-bold font-ral underline'>{emailErr}</span>
              </div>

              <div className='relative'>
                <p className='text-w text-xs md:text-base font-medium font-ral mb-3'>Password</p>
                <div className='relative mb-5 md:mb-10'>
                  <input onChange={passwordChange} type={`${eye? 'text' : 'password'}`} value={password} placeholder='Password' className='py-3 pl-5 bg-[#28292E]  w-full rounded-xl text-w text-xs md:text-base' />
                  {eye ? <BsEyeFill onClick={eyeHideShow} className='absolute top-[50%] right-[20px] translate-y-[-50%] text-w text-xl cursor-pointer' />:<BsEyeSlashFill onClick={eyeHideShow} className='absolute top-[50%] right-[20px] translate-y-[-50%] text-w text-xl cursor-pointer' />}
                </div>
                <span className='absolute top-0 right-0 text-xs text-red-500 font-bold font-ral underline'>{passwordErr}</span>
              </div>
              
              <Link onClick={signClick} className='py-3 px-20 bg-pri text-base md:text-lg text-w font-bold font-ral block rounded-xl text-center transition-all duration-500 hover:scale-[.96] hover:bg-w hover:text-pri'>Sign Up</Link>

              <Link onClick={loginPageBtn} className='text-w text-xs md:text-sm font-medium font-ral text-right block mt-5 hover:underline'>Already have account? Login</Link>

            </div>
          </div>

          <div className='w-full md:w-5/12 flex flex-row md:flex-col justify-evenly md:justify-center items-center order-1 md:order-2'>
            <img src={logo} alt="LOGO" className='max-w-[30%] md:max-w-[90%]' />
            <div className='mt-5 text-center flex flex-col justify-center items-center'>
              <p className='text-w text-[10px] md:text-lg font-semibold font-ral mb-2 md:mb-5'>You can also Login with</p>
              <button className='py-2 px-3 max-w-fit bg-w rounded-lg flex items-center group hover:scale-[0.90] transition-all duration-500'>
                <img src={googleLogo} alt="Google Logo" className='w-[10px] h-[10px]' />
                <p className='text-b text-xs md:text-base font-semibold font-ral ml-3'>Google</p>
              </button>
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

export default Signup