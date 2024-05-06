import { useToast } from '@chakra-ui/react'
import axios from 'axios'
import React, { useState } from 'react'
import {useNavigate}from "react-router-dom"
import { Main } from '../Pages/Main'
export const Login = ({user}) => {
  console.log(user);
    const [email, setEmail]=useState("")
    const [password, setPassword]=useState("")
    const [isLoggedIn, setIsLoggedIn] = useState(false) 
    
    const toast = useToast();
    const navigate= useNavigate()

    const handleSubmit= async(e)=>{
      e.preventDefault()
      try {
        const res = await axios({
          method: "POST",
          url: "https://fiverr-gv4b.onrender.com/user/login",
          headers: {
            "Content-Type": "application/json",
          },
          data: {
            email: email,
            password: password,
          },
        });
        console.log(res.data);
        localStorage.setItem("token",res.data.access_Token)
        toast({
          title: "login successful",
          status: "success",
          duration: 2000,
          isClosable: true,
        });
        navigate(`/main`)
        setIsLoggedIn(true)
      } catch (error) {
        toast({
          title: "wrong information",
          status: "error",
          duration: 2000,
          isClosable: true,
        });
        console.log(error);
      }
    }
  return (
    <>
    {!isLoggedIn ? (

     <div className="py-4 m-auto">
            <form className="">
              
              <label>
                Email:
                <input type="text" name="email" placeholder="name@gmail.com" value={email} onChange={(e)=> setEmail(e.target.value)} />
              </label>
              <label>
                Password:
                <input type="password" name="password" placeholder="example@123" value={password} onChange={(e)=> setPassword(e.target.value)} />
              </label>
              <div className="flex items-center justify-between mt-4">
                <button
                  type="submit"
                  className="px-4 py-1 font-semibold border-2 rounded-md hover:bg-[#22A869] hover:text-white"
                  onClick={handleSubmit}
                >
                  Login
                </button>
              </div>
            </form>
          </div>
    ): (<Main user={user}/>)}
    </>
  )
}
