import React, { useState } from 'react';
import authService from '../appwrite/auth';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../store/authSlice';
import { Button, Input, Logo } from './index.js';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';

function Signup() {
    const navigate = useNavigate();
    const [error, setError] = useState("");
    const dispatch = useDispatch();
    const { register, handleSubmit } = useForm();

    const create = async (data) => {
        setError("");
        try {
            const userData = await authService.createAccount(data);
            if (userData) {
                const userData = await authService.getCurrentUser();
                if (userData) dispatch(login(userData));
                navigate("/");
            }
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div className="flex items-center justify-center w-full min-h-screen bg-gradient-to-br from-emerald-900 via-violet-900 to-rose-900">
            <div className="mx-auto w-full max-w-lg bg-gray-800/90 backdrop-blur-md rounded-xl p-10 
                          border border-rose-500/20 shadow-[0_10px_40px_rgba(225,29,72,0.2)]
                          transform transition-all duration-500 hover:scale-105 mt-5 mb-5">
                {/* Logo with animation */}
                <div className="mb-4 flex justify-center">
                    <span className="inline-block w-full max-w-[100px] relative group">
                        <Logo width="100%" />
                        <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-rose-400 
                                      blur-md opacity-0 group-hover:opacity-60 transition-opacity duration-300 
                                      rounded-full animate-bounce-slow"></div>
                    </span>
                </div>

                {/* Heading with 3D effect */}
                <h2 className="text-center text-3xl font-extrabold font-[Poppins] text-white
                             bg-gradient-to-r from-emerald-400 via-rose-400 to-violet-400 bg-clip-text text-transparent
                             drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
                    Sign Up to Create Account
                </h2>

                {/* Login Link */}
                <p className="mt-3 text-center text-base text-rose-200/80">
                    Already have an account?{' '}
                    <Link
                        to="/login"
                        className="font-medium text-emerald-400 transition-all duration-300 
                                 hover:text-emerald-300 hover:underline"
                    >
                        Sign In
                    </Link>
                </p>

                {/* Error Message */}
                {error && (
                    <p className="text-rose-500 mt-6 text-center font-medium animate-pulse">
                        {error}
                    </p>
                )}

                {/* Form */}
                <form onSubmit={handleSubmit(create)} className="mt-8 space-y-6">
                    <Input
                        label="Full Name: "
                        placeholder="Enter your full name"
                        className="bg-gray-700/50 text-white border-rose-500/30 focus:border-rose-400 
                                 transition-all duration-300 hover:shadow-[0_0_10px_rgba(244,63,94,0.5)]"
                        {...register("name", {
                            required: true,
                        })}
                    />
                    <Input
                        label="Email: "
                        placeholder="Enter your email"
                        type="email"
                        className="bg-gray-700/50 text-white border-rose-500/30 focus:border-rose-400 
                                 transition-all duration-300 hover:shadow-[0_0_10px_rgba(244,63,94,0.5)]"
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
                        className="bg-gray-700/50 text-white border-rose-500/30 focus:border-rose-400 
                                 transition-all duration-300 hover:shadow-[0_0_10px_rgba(244,63,94,0.5)]"
                        {...register("password", {
                            required: true,
                        })}
                    />
                    <Button
                        type="submit"
                        className="w-full bg-gradient-to-r from-emerald-500 to-violet-500 text-white font-bold
                                 py-3 rounded-lg transition-all duration-300
                                 hover:bg-gradient-to-r hover:from-emerald-600 hover:to-violet-600
                                 hover:shadow-[0_0_20px_rgba(16,185,129,0.7)]
                                 active:scale-95"
                    >
                        Create Account
                    </Button>
                </form>
            </div>
        </div>
    );
}

export default Signup;