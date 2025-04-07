import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { login as authLogin } from '../store/authSlice';
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

                {/* Heading */}
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
                        {...register('email', {
                            required: true,
                            validate: {
                                matchPatern: (value) =>
                                    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                                    'Email address must be a valid address',
                            },
                        })}
                    />
                    <Input
                        label="Password: "
                        type="password"
                        placeholder="Enter your password"
                        className="bg-gray-700/50 text-white border-teal-500/30 focus:border-teal-400 
                                 transition-all duration-300 hover:shadow-[0_0_10px_rgba(45,212,191,0.5)]"
                        {...register('password', {
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
}

export default Login;
