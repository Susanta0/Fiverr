import React, { useState } from "react";
import sign from "../assets/sign.png";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { TiSocialFacebook } from "react-icons/ti";
import { RxCross2 } from "react-icons/rx";

import axios from "axios";
import { useToast } from "@chakra-ui/react";
import { Login } from "./Login";

export const Register = (props) => {
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showLogin, setShowLogin] = useState(false); // state to manage login component visibility
  const [showRegister, setShowRegister] = useState(true); // state to manage register form visibility
  const toast = useToast();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await axios({
        method: "POST",
        url: "https://fiverr-orkg.onrender.com/user/register",
        headers: {
          "Content-Type": "application/json",
        },
        data: {
          name: name,
          userName: userName,
          email: email,
          password: password,
        },
      });
      console.log(res.data);
      toast({
        title: "Registration successful",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
      setShowLogin(true);
      setShowRegister(false);
    } catch (error) {
      toast({
        title: "Registration failed",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
      console.log(error);
    }
  };

  return (
    <div className="popup rounded-md">
      <div className="popup-inner w-fit rounded-md">
        <div className="w-[437px] h-[645px] ">
          <div className="success flex flex-col gap-5 ">
            <h1 className="text-4xl font-semibold text-white">
              Success starts here
            </h1>
            <p className="text-white font-medium text-lg">
              ✓ Over 600 categories
            </p>
            <p className="text-white font-medium text-lg">
              ✓ Pay per project, not per hour
            </p>
            <p className="text-white font-medium text-lg w-[300px]">
              ✓ Access to talent and businesses across the globe
            </p>
          </div>
          <img src={sign} alt="image" className="rounded-l-md" />
        </div>

        <div className=" flex flex-col w-[437px] h-[645px]">
          <div className="text-center mt-6 flex flex-col gap-2">
            <h1 className="font-bold text-2xl">Sign in to your account</h1>
            <button
              onClick={props.toggle}
              className="px-1 py-1 border-2 rounded-full hover:bg-zinc-500 hover:text-white absolute right-[2%] top-2"
            >
              <RxCross2 />
            </button>
            {showRegister && !showLogin && (
              <p className="font-semibold">
                Already have an account?{" "}
                <span>
                  <button
                    onClick={() => setShowLogin(true)}
                    className="underline text-blue-600"
                  >
                    Sign in
                  </button>
                </span>
              </p>
            )}
          </div>

          <div className="flex flex-col gap-2 mt-4">
            <div className="border flex items-center py-1 w-[300px] m-auto justify-around hover:bg-[#F5F5F5] rounded-md ">
              <FcGoogle className="w-8 h-8" />
              <p className="font-bold text-lg">Continue with Google</p>
            </div>
            <p className="text-center text-[#B5B6BA] font-bold text-xs">OR</p>
            <div className="flex justify-around">
              <div className="border flex items-center py-1 w-[150px] justify-around hover:bg-[#F5F5F5] rounded-md">
                <FaApple className="w-6 h-6" />
                <p className="font-bold">Apple</p>
              </div>
              <div className="border flex items-center py-1 w-[150px] justify-around hover:bg-[#F5F5F5] rounded-md">
                <TiSocialFacebook className="w-6 h-6 text-[#1877F2]" />
                <p className="font-bold">Facebook</p>
              </div>
            </div>
          </div>

          {showRegister && !showLogin && (
            <div className="py-4 m-auto">
              <form className="">
                <label>
                  Name:
                  <input
                    required
                    type="text"
                    name="name"
                    placeholder="Showman"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </label>
                <label>
                  User Name:
                  <input
                    required
                    type="text"
                    name="username"
                    placeholder="User28"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                  />
                </label>
                <label>
                  Email:
                  <input
                    required
                    type="text"
                    name="email"
                    placeholder="name@gmail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </label>
                <label>
                  Password:
                  <input
                    required
                    type="password"
                    name="password"
                    placeholder="example@123"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </label>
                <div className="flex items-center justify-between mt-4">
                  <button
                    type="submit"
                    className="px-4 py-1 font-semibold border-2 rounded-md hover:bg-[#22A869] hover:text-white show"
                    onClick={handleRegister}
                  >
                    Signup
                  </button>
                </div>
              </form>
            </div>
          )}
{/* idhar dekhna parega */}
          {showLogin && <Login user={name} />}
        </div>
      </div>
    </div>
  );
};
