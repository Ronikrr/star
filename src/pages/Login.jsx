import React from 'react'
import { Link } from 'react-router-dom'
import bgImage3 from '../assets/image/vector-bg-3.a112de0b.svg'
const Login = () => {
  return (
      <div className="pt-[173px] md:pt-[150px]">
          <div className="max-w-[1398px] w-full px-4 m-auto overflow-hidden">
              <div className="flex flex-col justify-center items-center py-[63px] max-w-[473px] m-auto relative">
                  <div className="mb-[30px] relative w-full">
                      <h1 className="text-2xl font-bold leading-7 text-center uppercase font-libre-barskerville">
                          Login
                      </h1>
                      <p className="font-poppins font-normal text-base leading-6 mt-[11px] max-w-[473px] text-center text-primary/85">
                          Welcome back! Log in to your account to access exclusive wholesale
                          diamond deals. Enter your email and password below to continue
                      </p>
                      <img
                          src={bgImage3}
                          alt=""
                          className="absolute top-[-19px] left-[-320px]"
                      />
                  </div>
                  <div className="w-full">
                      <form className="" >
                          <div className="flex flex-col mb-[30px]">
                              <label
                                  htmlFor="inp-email"
                                  className="ml-3 text-14 leading-[1.25rem] font-semibold text-primary "
                              >
                                  Email
                              </label>
                              <input
                                  className="rounded-[1rem] border border-primary/20 px-[1.5rem] py-[1.25rem] outline-2 outline-transparent "
                                  type="email"
                                  name="email"
                                  placeholder="Enter Your Email "
                              />
                          </div>
                          <div className="flex flex-col">
                              <label
                                  htmlFor="password"
                                  className="ml-3 text-14 leading-[1.25rem] font-semibold text-primary "
                              >
                                  Password
                              </label>
                              <input
                                  className="rounded-[1rem] border border-primary/20 px-[1.5rem] py-[1.25rem] "
                                  type="password"
                                  name="password"
                                  placeholder="Enter Your Password"
                               
                              />
                          </div>
                          <div className="text-end mb-[30px]">
                              <Link
                                  href="/forgot-password"
                                  className="text-sm leading-4 font-poppins text-primary/50 "
                              >
                                  Forgot Password?
                              </Link>
                          </div>
                          <div className="flex flex-col items-center">
                              <button className=" bg-tertiary px-8 rounded-full uppercase text-white py-2.5 flex  items-center gap-2 border   transform transition duration-500 ease-in-out hover:scale-110 mb-[30px] ">Login</button>
                              <span className="text-base leading-6 font-poppins">
                                  Don’t have account?
                                  <Link
                                      to="/signup"
                                      className="text-tertiary font-poppins text-base leading-6 ml-[2px]"
                                  >
                                      Signup
                                  </Link>
                              </span>
                          </div>
                      </form>
                  </div>
                  <img
                      src={bgImage3}
                      alt=""
                      className="absolute bottom-[120px] right-[-250px] rotate-90"
                  />
              </div>
          </div>
      </div>
  )
}

export default Login