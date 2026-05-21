'use client';

import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import {
    MdSportsVolleyball,
    MdPerson,
    MdEmail,
    MdLock,
    MdImage,
    MdVisibility,
    MdVisibilityOff,
    MdHowToReg,
} from 'react-icons/md';

const RegisterPage = () => {
    const router = useRouter();
    const [showPassword, setShowPassword] = useState(false);

    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const user = Object.fromEntries(formData.entries());

        // Password validation
        if (user.password.length < 6) return toast.error('Password must be at least 6 characters');
        if (!/[A-Z]/.test(user.password)) return toast.error('Password must contain an uppercase letter');
        if (!/[a-z]/.test(user.password)) return toast.error('Password must contain a lowercase letter');

        const { data, error } = await authClient.signUp.email({
            name: user.name,
            email: user.email,
            password: user.password,
            image: user.image,
        });

        if (error) return toast.error(error.message);
        if (data) {
            router.push('/');
            router.refresh();
        }
        console.log(data, error)
    };

    const handleGoogleSignUp = async () => {
        const data = await authClient.signIn.social({
            provider: "google",
        });
    };

    return (
        <div className="min-h-screen w-full bg-[#F5FBF9] py-25 px-4 flex items-center justify-center">
            <Toaster position="top-center" />

            <div className="w-full max-w-6xl min-h-[720px] grid grid-cols-1 lg:grid-cols-2 rounded-[32px] overflow-hidden shadow-2xl border border-gray-100 bg-white">

                {/* ───────────────── LEFT PANEL ───────────────── */}
                <div className="relative bg-[#0F6E56] p-10 lg:p-14 flex items-center overflow-hidden">
                    <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-white/5" />
                    <div className="absolute -bottom-24 -left-24 w-60 h-60 rounded-full bg-white/5" />
                    <div className="absolute top-1/2 left-1/2 w-96 h-96 rounded-full border border-white/5 -translate-x-1/2 -translate-y-1/2" />

                    <div className="relative z-10 max-w-md">
                        <div className="flex items-center gap-3 mb-12">
                            <div className="w-12 h-12 rounded-2xl bg-white/15 backdrop-blur-md flex items-center justify-center text-white text-2xl shadow-lg">
                                <MdSportsVolleyball />
                            </div>
                            <span className="text-white text-2xl font-black tracking-wide">
                                Sport<span className="font-light">Nest</span>
                            </span>
                        </div>

                        <div>
                            <p className="text-[#7FE7C8] text-sm font-semibold uppercase tracking-widest mb-4">
                                Sports Facility Booking Platform
                            </p>
                            <h1 className="text-white text-4xl lg:text-5xl font-black leading-tight mb-6">
                                Join the game.
                                <br />
                                Book instantly.
                            </h1>
                            <p className="text-white/70 text-base leading-relaxed mb-10">
                                Create your account to discover premium sports venues,
                                manage bookings, and reserve facilities with real-time availability.
                            </p>

                            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/15">
                                <div>
                                    <h3 className="text-white text-2xl font-black">Fast</h3>
                                    <p className="text-white/50 text-sm mt-1">Registration</p>
                                </div>
                                <div>
                                    <h3 className="text-white text-2xl font-black">Secure</h3>
                                    <p className="text-white/50 text-sm mt-1">System</p>
                                </div>
                                <div>
                                    <h3 className="text-white text-2xl font-black">24/7</h3>
                                    <p className="text-white/50 text-sm mt-1">Access</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ───────────────── RIGHT PANEL ───────────────── */}
                <div className="bg-white flex items-center justify-center p-6 sm:p-10">
                    <div className="w-full max-w-md">

                        <div className="text-center mb-8">
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#E8F7F2] text-[#0F6E56] text-3xl mb-5">
                                <MdHowToReg />
                            </div>
                            <h2 className="text-3xl font-black text-gray-900">Create Account</h2>
                            <p className="text-gray-500 text-sm mt-2">Join SportNest in less than a minute</p>
                        </div>

                        <form onSubmit={onSubmit}>
                            <div className="bg-[#FAFAFA] border border-gray-100 rounded-3xl p-6 sm:p-7 shadow-sm space-y-5">

                                <div>
                                    <label className="text-xs font-bold tracking-wide text-gray-500 uppercase">Full Name</label>
                                    <div className="relative mt-2">
                                        <MdPerson className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
                                        <input
                                            type="text"
                                            name="name"
                                            required
                                            placeholder="Enter your full name"
                                            className="w-full h-12 pl-12 pr-4 rounded-2xl border border-gray-200 bg-white text-sm outline-none transition-all focus:border-[#2FA084] focus:ring-4 focus:ring-[#2FA084]/10"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="text-xs font-bold tracking-wide text-gray-500 uppercase">Email Address</label>
                                    <div className="relative mt-2">
                                        <MdEmail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
                                        <input
                                            type="email"
                                            name="email"
                                            required
                                            placeholder="you@example.com"
                                            className="w-full h-12 pl-12 pr-4 rounded-2xl border border-gray-200 bg-white text-sm outline-none transition-all focus:border-[#2FA084] focus:ring-4 focus:ring-[#2FA084]/10"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="text-xs font-bold tracking-wide text-gray-500 uppercase">Photo URL</label>
                                    <div className="relative mt-2">
                                        <MdImage className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
                                        <input
                                            type="text"
                                            name="image"
                                            placeholder="https://example.com/photo.jpg"
                                            className="w-full h-12 pl-12 pr-4 rounded-2xl border border-gray-200 bg-white text-sm outline-none transition-all focus:border-[#2FA084] focus:ring-4 focus:ring-[#2FA084]/10"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="text-xs font-bold tracking-wide text-gray-500 uppercase">Password</label>
                                    <div className="relative mt-2">
                                        <MdLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
                                        <input
                                            type={showPassword ? 'text' : 'password'}
                                            name="password"
                                            required
                                            placeholder="Create a secure password"
                                            className="w-full h-12 pl-12 pr-14 rounded-2xl border border-gray-200 bg-white text-sm outline-none transition-all focus:border-[#2FA084] focus:ring-4 focus:ring-[#2FA084]/10"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowPassword(!showPassword)}
                                            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#0F6E56] transition"
                                        >
                                            {showPassword ? <MdVisibilityOff className="text-xl" /> : <MdVisibility className="text-xl" />}
                                        </button>
                                    </div>
                                </div>

                            </div>

                            <button
                                type="submit"
                                className="w-full mt-7 h-13 rounded-2xl bg-[#0F6E56] hover:bg-[#128267] text-white font-bold flex items-center justify-center gap-2 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-[1px]"
                            >
                                <MdHowToReg className="text-xl" />
                                Create Account
                            </button>
                        </form>

                        {/* Divider */}
                        <div className="flex items-center gap-3 my-6">
                            <div className="flex-1 h-px bg-gray-100" />
                            <span className="text-xs text-gray-400">or continue with</span>
                            <div className="flex-1 h-px bg-gray-100" />
                        </div>

                        {/* Google Sign Up */}
                        <button
                            type="button"
                            onClick={handleGoogleSignUp}
                            className="w-full h-11 rounded-xl border border-gray-200 bg-white hover:bg-gray-50 text-sm font-medium text-gray-700 flex items-center justify-center gap-3 transition-all duration-200"
                        >
                            <svg width="16" height="16" viewBox="0 0 48 48">
                                <path fill="#FFC107" d="M43.6 20H24v8h11.3C33.6 33.1 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.1 7.9 3l5.7-5.7C34 6.4 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20c11 0 19.6-7.9 19.6-20 0-1.3-.1-2.7-.4-4z" />
                                <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.4 16 18.9 13 24 13c3.1 0 5.8 1.1 7.9 3l5.7-5.7C34 6.4 29.3 4 24 4 16.3 4 9.6 8.3 6.3 14.7z" />
                                <path fill="#4CAF50" d="M24 44c5.2 0 9.9-1.9 13.5-5l-6.2-5.2C29.4 35.5 26.8 36 24 36c-5.3 0-9.7-3-11.3-7.5l-6.5 5C9.7 40 16.4 44 24 44z" />
                                <path fill="#1976D2" d="M43.6 20H24v8h11.3c-.8 2.3-2.3 4.3-4.3 5.8l6.2 5.2C41 35.3 44 30 44 24c0-1.3-.1-2.7-.4-4z" />
                            </svg>

                            Sign up with Google
                        </button>

                        <p className="text-center text-sm text-gray-500 mt-7">
                            Already have an account?{' '}
                            <Link href="/login" className="text-[#0F6E56] font-bold hover:underline">
                                Log In
                            </Link>
                        </p>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default RegisterPage;