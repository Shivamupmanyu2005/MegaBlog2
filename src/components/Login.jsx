import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { login as authLogin } from '../store/authSlice';
<<<<<<< HEAD
import { Button, Input, Logo } from "./index";
import { useDispatch } from "react-redux";
import authService from "../appwrite/auth";
import { useForm } from "react-hook-form";

function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { register, handleSubmit } = useForm();
    const [error, setError] = useState("");

    const login = async (data) => {
        setError("");
        try {
            const session = await authService.login(data);
            if (session) {
                const userData = await authService.getCurrentUser();
                if (userData) dispatch(authLogin(userData));
                navigate("/");
            }
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div className="flex items-center justify-center w-full min-h-screen bg-gradient-to-br from-teal-900 via-indigo-900 to-gray-900">
            <div className="mx-auto w-full max-w-lg bg-gray-800/90 backdrop-blur-md rounded-xl p-10 
                          border border-teal-500/20 shadow-[0_10px_40px_rgba(0,100,100,0.3)]
                          transform transition-all duration-500 hover:scale-105 mt-5 mb-5">
                {/* Logo with animation */}
                <div className="mb-4 flex justify-center">
                    <span className="inline-block w-full max-w-[100px] relative group">
                        <Logo width="100%" />
                        <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-amber-400 
                                      blur-md opacity-0 group-hover:opacity-70 transition-opacity duration-300 
                                      rounded-full animate-spin-slow"></div>
                    </span>
                </div>

                {/* Heading with 3D effect */}
                <h2 className="text-center text-3xl font-extrabold font-[Poppins] text-white
                             bg-gradient-to-r from-teal-400 via-amber-400 to-indigo-400 bg-clip-text text-transparent
                             drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
                    Sign in to Your Account
                </h2>

                {/* Signup Link */}
                <p className="mt-3 text-center text-base text-teal-200/80">
                    Don’t have an account?{' '}
                    <Link
                        to="/signup"
                        className="font-medium text-amber-400 transition-all duration-300 
                                 hover:text-amber-300 hover:underline"
                    >
                        Sign Up
                    </Link>
                </p>

                {/* Error Message */}
                {error && (
                    <p className="text-red-500 mt-6 text-center font-medium animate-pulse">
                        {error}
                    </p>
                )}

                {/* Form */}
                <form onSubmit={handleSubmit(login)} className="mt-8 space-y-6">
                    <Input
                        label="Email: "
                        placeholder="Enter your email"
                        type="email"
                        className="bg-gray-700/50 text-white border-teal-500/30 focus:border-teal-400 
                                 transition-all duration-300 hover:shadow-[0_0_10px_rgba(45,212,191,0.5)]"
                        {...register("email", {
                            required: true,
                            validate: {
                                matchPatern: (value) =>
                                    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                                    "Email address must be a valid address",
                            },
                        })}
                    />
                    <Input
                        label="Password: "
                        type="password"
                        placeholder="Enter your password"
                        className="bg-gray-700/50 text-white border-teal-500/30 focus:border-teal-400 
                                 transition-all duration-300 hover:shadow-[0_0_10px_rgba(45,212,191,0.5)]"
                        {...register("password", {
                            required: true,
                        })}
                    />
                    <Button
                        type="submit"
                        className="w-full bg-gradient-to-r from-teal-500 to-indigo-500 text-white font-bold
                                 py-3 rounded-lg transition-all duration-300
                                 hover:bg-gradient-to-r hover:from-teal-600 hover:to-indigo-600
                                 hover:shadow-[0_0_20px_rgba(45,212,191,0.7)]
                                 active:scale-95"
                    >
                        Sign In
                    </Button>
                </form>
            </div>
        </div>
    );
=======
import { Button, Input, Logo } from './index';
import { useDispatch } from 'react-redux';
import authService from '../appwrite/auth';
import { useForm } from 'react-hook-form';

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState('');

  const login = async (data) => {
    setError('');
    try {
      const session = await authService.login(data);
      if (session) {
        const userData = await authService.getCurrentUser();
        if (userData) dispatch(authLogin(userData));
        navigate('/');
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="relative bg-white w-[390px] h-[844px] mx-auto">
      {/* Logo Container (assuming it’s the empty div at top-[65px]) */}
      <div className="absolute left-[25px] top-[65px] w-[310px] h-[187px] flex justify-center items-center">
        <span className="inline-block w-full max-w-[100px]">
          <Logo width="100%" />
        </span>
      </div>

      {/* Login Details Heading */}
      <p className="absolute left-[29px] top-[288px] text-2xl font-medium text-gray-800">
        Login Details
      </p>

      {/* Form */}
      <form onSubmit={handleSubmit(login)} className="absolute top-[336px] left-[29px] w-[330px]">
        {/* Email Input */}
        <div className="relative mb-[71px]">
          <Input
            label="Email: "
            placeholder="Enter your email"
            type="email"
            className="w-[330px] h-[60px] border border-[#887e7e] rounded-[5px] text-base font-medium text-[#635c5c]"
            {...register('email', {
              required: true,
              validate: {
                matchPatern: (value) =>
                  /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                  'Email address must be a valid address',
              },
            })}
          />
        </div>

        {/* Password Input */}
        <div className="relative mb-[120px]">
          <Input
            label="Password: "
            type="password"
            placeholder="Enter your password"
            className="w-[330px] h-[60px] border border-[#887e7e] rounded-[5px] text-base font-medium text-[#635c5c]"
            {...register('password', {
              required: true,
            })}
          />
        </div>

        {/* Login Button */}
        <Button
          type="submit"
          className="w-[330px] h-[60px] bg-[#0b6efe] text-white text-2xl font-bold rounded-[5px] border border-[#0b6efe] hover:bg-blue-800 transition duration-200"
        >
          Login
        </Button>
      </form>

      {/* Gradient Lines (Decorative) */}
      <div className="absolute left-[6px] top-[627px] w-[132px] h-[3px] bg-gradient-to-l from-[#0b6efe] to-[#c4c4c4]"></div>
      <div className="absolute left-[252px] top-[627px] w-[132px] h-[3px] bg-gradient-to-r from-[#0b6efe] to-[#c4c4c4]"></div>

      {/* Error Message */}
      {error && (
        <p className="absolute top-[700px] left-[29px] w-[330px] text-red-600 text-center">
          {error}
        </p>
      )}

      {/* Sign Up Link (adjusted to fit design) */}
      <p className="absolute top-[660px] left-[29px] w-[330px] text-center text-base text-black/60">
        Don&apos;t have an account?{' '}
        <Link
          to="/signup"
          className="font-medium text-[#0b6efe] hover:underline transition duration-200"
        >
          Sign Up
        </Link>
      </p>
    </div>
  );
>>>>>>> ab289f9 (Updated login components)
}

export default Login;