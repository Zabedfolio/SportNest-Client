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
        <div className="min-h-screen bg-[#F5FBF9] flex items-center justify-center p-4">

            <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-2 rounded-[28px] overflow-hidden shadow-2xl border border-gray-100">

                {/* ── Left Panel (Same branding, slightly simplified) ── */}
                <div className="relative bg-[#0F6E56] p-10 flex flex-col justify-between overflow-hidden">

                    <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-white/5" />
                    <div className="absolute -bottom-24 -left-24 w-60 h-60 rounded-full bg-white/5" />

                    {/* Logo */}
                    <div className="flex items-center gap-3 relative z-10">
                        <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center text-white text-xl">
                            <MdSportsVolleyball />
                        </div>
                        <span className="text-white text-xl font-black">
                            Sport<span className="font-light">Nest</span>
                        </span>
                    </div>

                    {/* Brand message */}
                    <div className="relative z-10">
                        <h2 className="text-white text-3xl font-black leading-snug mb-3">
                            Join the game.<br />Book instantly.
                        </h2>

                        <p className="text-white/60 text-sm leading-relaxed mb-6">
                            Create your account to explore and reserve top sports facilities
                            with real-time availability.
                        </p>

                        <div className="flex gap-6 pt-4 border-t border-white/15">
                            <div>
                                <p className="text-white text-lg font-black">Fast</p>
                                <p className="text-white/50 text-xs">Registration</p>
                            </div>
                            <div>
                                <p className="text-white text-lg font-black">Secure</p>
                                <p className="text-white/50 text-xs">System</p>
                            </div>
                            <div>
                                <p className="text-white text-lg font-black">24/7</p>
                                <p className="text-white/50 text-xs">Access</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ── Right Panel (New card-based form design) ── */}
                <div className="bg-white flex items-center justify-center p-10">

                    <div className="w-full max-w-md">

                        <div className="text-center mb-8">
                            <h1 className="text-2xl font-black text-gray-900">
                                Create Account
                            </h1>
                            <p className="text-sm text-gray-500 mt-1">
                                Join SportNest in less than a minute
                            </p>
                        </div>

                        {/* Card Form */}
                        <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 space-y-5 shadow-sm">

                            {/* Name */}
                            <div>
                                <label className="text-xs font-semibold text-gray-500 uppercase">
                                    Full Name
                                </label>
                                <div className="relative mt-2">
                                    <MdPerson className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                                    <input
                                        type="text"
                                        placeholder="Your name"
                                        className="w-full h-11 pl-11 pr-4 rounded-xl border border-gray-200 bg-white text-sm outline-none focus:border-[#2FA084]"
                                    />
                                </div>
                            </div>

                            {/* Email */}
                            <div>
                                <label className="text-xs font-semibold text-gray-500 uppercase">
                                    Email
                                </label>
                                <div className="relative mt-2">
                                    <MdEmail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                                    <input
                                        type="email"
                                        placeholder="you@example.com"
                                        className="w-full h-11 pl-11 pr-4 rounded-xl border border-gray-200 bg-white text-sm outline-none focus:border-[#2FA084]"
                                    />
                                </div>
                            </div>

                            {/* Photo URL */}
                            <div>
                                <label className="text-xs font-semibold text-gray-500 uppercase">
                                    Photo URL
                                </label>
                                <div className="relative mt-2">
                                    <MdImage className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                                    <input
                                        type="text"
                                        placeholder="https://..."
                                        className="w-full h-11 pl-11 pr-4 rounded-xl border border-gray-200 bg-white text-sm outline-none focus:border-[#2FA084]"
                                    />
                                </div>
                            </div>

                            {/* Password */}
                            <div>
                                <label className="text-xs font-semibold text-gray-500 uppercase">
                                    Password
                                </label>
                                <div className="relative mt-2">
                                    <MdLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        placeholder="Create password"
                                        className="w-full h-11 pl-11 pr-12 rounded-xl border border-gray-200 bg-white text-sm outline-none focus:border-[#2FA084]"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
                                    >
                                        {showPassword ? <MdVisibilityOff /> : <MdVisibility />}
                                    </button>
                                </div>
                            </div>

                        </div>

                        {/* Register Button */}
                        <button className="w-full mt-6 h-12 bg-[#0F6E56] hover:bg-[#2FA084] text-white font-bold rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg">
                            <MdHowToReg />
                            Create Account
                        </button>

                        {/* Footer */}
                        <p className="text-center text-sm text-gray-500 mt-6">
                            Already have an account?{' '}
                            <Link href="/login" className="text-[#2FA084] font-semibold hover:underline">
                                Sign in
                            </Link>
                        </p>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default RegisterPage;