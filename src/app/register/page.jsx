'use client';

import Link from 'next/link';
import { useState } from 'react';
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
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="min-h-screen w-full bg-[#F5FBF9] py-25 px-4 flex items-center justify-center">

            <div className="w-full max-w-6xl min-h-[720px] grid grid-cols-1 lg:grid-cols-2 rounded-[32px] overflow-hidden shadow-2xl border border-gray-100 bg-white">

                {/* ───────────────── LEFT PANEL ───────────────── */}
                <div className="relative bg-[#0F6E56] p-10 lg:p-14 flex items-center overflow-hidden">

                    {/* Decorative Shapes */}
                    <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-white/5" />
                    <div className="absolute -bottom-24 -left-24 w-60 h-60 rounded-full bg-white/5" />
                    <div className="absolute top-1/2 left-1/2 w-96 h-96 rounded-full border border-white/5 -translate-x-1/2 -translate-y-1/2" />

                    <div className="relative z-10 max-w-md">

                        {/* Logo */}
                        <div className="flex items-center gap-3 mb-12">
                            <div className="w-12 h-12 rounded-2xl bg-white/15 backdrop-blur-md flex items-center justify-center text-white text-2xl shadow-lg">
                                <MdSportsVolleyball />
                            </div>

                            <span className="text-white text-2xl font-black tracking-wide">
                                Sport<span className="font-light">Nest</span>
                            </span>
                        </div>

                        {/* Main Content */}
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
                                manage bookings, and reserve facilities with real-time
                                availability.
                            </p>

                            {/* Stats */}
                            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/15">

                                <div>
                                    <h3 className="text-white text-2xl font-black">
                                        Fast
                                    </h3>
                                    <p className="text-white/50 text-sm mt-1">
                                        Registration
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-white text-2xl font-black">
                                        Secure
                                    </h3>
                                    <p className="text-white/50 text-sm mt-1">
                                        System
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-white text-2xl font-black">
                                        24/7
                                    </h3>
                                    <p className="text-white/50 text-sm mt-1">
                                        Access
                                    </p>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>

                {/* ───────────────── RIGHT PANEL ───────────────── */}
                <div className="bg-white flex items-center justify-center p-6 sm:p-10">

                    <div className="w-full max-w-md">

                        {/* Header */}
                        <div className="text-center mb-8">

                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#E8F7F2] text-[#0F6E56] text-3xl mb-5">
                                <MdHowToReg />
                            </div>

                            <h2 className="text-3xl font-black text-gray-900">
                                Create Account
                            </h2>

                            <p className="text-gray-500 text-sm mt-2">
                                Join SportNest in less than a minute
                            </p>
                        </div>

                        {/* Form Card */}
                        <div className="bg-[#FAFAFA] border border-gray-100 rounded-3xl p-6 sm:p-7 shadow-sm space-y-5">

                            {/* Full Name */}
                            <div>
                                <label className="text-xs font-bold tracking-wide text-gray-500 uppercase">
                                    Full Name
                                </label>

                                <div className="relative mt-2">
                                    <MdPerson className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />

                                    <input
                                        type="text"
                                        placeholder="Enter your full name"
                                        className="w-full h-12 pl-12 pr-4 rounded-2xl border border-gray-200 bg-white text-sm outline-none transition-all focus:border-[#2FA084] focus:ring-4 focus:ring-[#2FA084]/10"
                                    />
                                </div>
                            </div>

                            {/* Email */}
                            <div>
                                <label className="text-xs font-bold tracking-wide text-gray-500 uppercase">
                                    Email Address
                                </label>

                                <div className="relative mt-2">
                                    <MdEmail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />

                                    <input
                                        type="email"
                                        placeholder="you@example.com"
                                        className="w-full h-12 pl-12 pr-4 rounded-2xl border border-gray-200 bg-white text-sm outline-none transition-all focus:border-[#2FA084] focus:ring-4 focus:ring-[#2FA084]/10"
                                    />
                                </div>
                            </div>

                            {/* Photo URL */}
                            <div>
                                <label className="text-xs font-bold tracking-wide text-gray-500 uppercase">
                                    Photo URL
                                </label>

                                <div className="relative mt-2">
                                    <MdImage className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />

                                    <input
                                        type="text"
                                        placeholder="https://example.com/photo.jpg"
                                        className="w-full h-12 pl-12 pr-4 rounded-2xl border border-gray-200 bg-white text-sm outline-none transition-all focus:border-[#2FA084] focus:ring-4 focus:ring-[#2FA084]/10"
                                    />
                                </div>
                            </div>

                            {/* Password */}
                            <div>
                                <label className="text-xs font-bold tracking-wide text-gray-500 uppercase">
                                    Password
                                </label>

                                <div className="relative mt-2">
                                    <MdLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />

                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        placeholder="Create a secure password"
                                        className="w-full h-12 pl-12 pr-14 rounded-2xl border border-gray-200 bg-white text-sm outline-none transition-all focus:border-[#2FA084] focus:ring-4 focus:ring-[#2FA084]/10"
                                    />

                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#0F6E56] transition"
                                    >
                                        {showPassword ? (
                                            <MdVisibilityOff className="text-xl" />
                                        ) : (
                                            <MdVisibility className="text-xl" />
                                        )}
                                    </button>
                                </div>
                            </div>

                        </div>

                        {/* Register Button */}
                        <button className="w-full mt-7 h-13 rounded-2xl bg-[#0F6E56] hover:bg-[#128267] text-white font-bold flex items-center justify-center gap-2 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-[1px]">
                            <MdHowToReg className="text-xl" />
                            Create Account
                        </button>

                        {/* Footer */}
                        <p className="text-center text-sm text-gray-500 mt-7">
                            Already have an account?{' '}
                            <Link
                                href="/login"
                                className="text-[#0F6E56] font-bold hover:underline"
                            >
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