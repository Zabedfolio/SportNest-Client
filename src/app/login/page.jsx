'use client';

import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { MdSportsVolleyball } from 'react-icons/md';
import {
    MdSportsSoccer,
    MdSportsTennis,
    MdPool,
    MdDirectionsRun,
    MdEmail,
    MdLock,
    MdVisibility,
    MdVisibilityOff,
    MdLogin,
    MdVerified,
} from 'react-icons/md';

const LoginPage = () => {
    const router = useRouter();
    const [showPassword, setShowPassword] = useState(false);

    const sports = [
        { icon: <MdSportsSoccer />, label: 'Football Turf' },
        { icon: <MdSportsTennis />, label: 'Tennis Court' },
        { icon: <MdPool />, label: 'Swimming Pool' },
        { icon: <MdDirectionsRun />, label: 'Athletics' },
    ];

    const stats = [
        { value: '500+', label: 'Facilities' },
        { value: '12K+', label: 'Bookings' },
        { value: '4.9★', label: 'Rating' },
    ];

    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const user = Object.fromEntries(formData.entries());

        const { data, error } = await authClient.signIn.email({
            email: user.email,
            password: user.password,
        });

        if (error) return toast.error(error.message);
        if (data){
            router.push('/');
            router.refresh();
        } 
        console.log({data, error})
    };

    const handleGoogleSignUp = async () => {
        const data = await authClient.signIn.social({
            provider: "google",
        });
    };

    return (
        <div className="min-h-screen bg-[#F5FBF9] flex items-center justify-center p-4">
            <Toaster position="top-center" />

            <div className="w-full max-w-4xl grid grid-cols-1 lg:grid-cols-2 rounded-[28px] overflow-hidden shadow-2xl border border-gray-100">

                {/* ── Left Panel ── */}
                <div className="relative bg-[#0F6E56] p-10 flex flex-col justify-between overflow-hidden">

                    <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-white/5" />
                    <div className="absolute -bottom-16 -left-16 w-52 h-52 rounded-full bg-white/5" />

                    <div className="flex items-center gap-3 relative z-10">
                        <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center text-white text-xl">
                            <MdSportsVolleyball />
                        </div>
                        <span className="text-white text-xl font-black tracking-tight">
                            Sport<span className="font-light">Nest</span>
                        </span>
                    </div>

                    <div className="grid grid-cols-2 gap-3 relative z-10 py-8">
                        {sports.map((s, i) => (
                            <div key={i} className="bg-white/10 border border-white/15 rounded-2xl p-4 text-center">
                                <div className="text-white/90 text-3xl flex justify-center mb-2">{s.icon}</div>
                                <span className="text-white/60 text-xs font-medium tracking-wide">{s.label}</span>
                            </div>
                        ))}
                    </div>

                    <div className="relative z-10">
                        <h2 className="text-white text-2xl font-black leading-snug mb-2">
                            Your arena.<br />Your schedule.
                        </h2>
                        <p className="text-white/60 text-sm leading-relaxed mb-4">
                            Book top-quality sports facilities<br />
                            anytime, anywhere — in seconds.
                        </p>

                        <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-3 py-1.5 text-white/80 text-xs font-medium mb-5">
                            <MdVerified className="text-sm" />
                            Instant Confirmation
                        </div>

                        <div className="flex gap-6 pt-4 border-t border-white/15">
                            {stats.map((s, i) => (
                                <div key={i}>
                                    <p className="text-white text-lg font-black">{s.value}</p>
                                    <p className="text-white/50 text-[11px]">{s.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* ── Right Panel ── */}
                <div className="bg-white px-10 py-12 flex flex-col justify-center">

                    <h1 className="text-2xl font-black text-gray-900 mb-1 tracking-tight">Welcome back</h1>
                    <p className="text-sm text-gray-500 mb-8">Sign in to manage your bookings and facilities.</p>

                    <form onSubmit={onSubmit} className="space-y-5">

                        {/* Email */}
                        <div>
                            <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                                Email address <span className="text-[#2FA084]">*</span>
                            </label>
                            <div className="relative">
                                <MdEmail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    placeholder="you@example.com"
                                    className="w-full h-12 pl-11 pr-4 rounded-xl border border-gray-200 bg-gray-50 text-sm text-gray-800 placeholder-gray-400 outline-none focus:border-[#2FA084] focus:bg-white transition-all"
                                />
                            </div>
                        </div>

                        {/* Password */}
                        <div>
                            <div className="flex items-center justify-between mb-2">
                                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                    Password <span className="text-[#2FA084]">*</span>
                                </label>
                                <a href="#" className="text-xs text-[#2FA084] font-medium hover:underline">Forgot password?</a>
                            </div>
                            <div className="relative">
                                <MdLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    name="password"
                                    required
                                    placeholder="Your password"
                                    className="w-full h-12 pl-11 pr-12 rounded-xl border border-gray-200 bg-gray-50 text-sm text-gray-800 placeholder-gray-400 outline-none focus:border-[#2FA084] focus:bg-white transition-all"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 text-xl"
                                >
                                    {showPassword ? <MdVisibilityOff /> : <MdVisibility />}
                                </button>
                            </div>
                        </div>

                        {/* Login button */}
                        <button
                            type="submit"
                            className="w-full h-12 rounded-xl bg-[#0F6E56] hover:bg-[#2FA084] text-white font-bold text-sm flex items-center justify-center gap-2 transition-all duration-300 shadow-[0_8px_24px_rgba(15,110,86,0.3)] hover:shadow-[0_12px_28px_rgba(47,160,132,0.4)] hover:-translate-y-0.5"
                        >
                            <MdLogin className="text-lg" />
                            Login
                        </button>

                    </form>

                    {/* Divider */}
                    <div className="flex items-center gap-3 my-6">
                        <div className="flex-1 h-px bg-gray-100" />
                        <span className="text-xs text-gray-400">or continue with</span>
                        <div className="flex-1 h-px bg-gray-100" />
                    </div>

                    {/* Google */}
                    <button onClick={handleGoogleSignUp}
                     className="w-full h-11 rounded-xl border border-gray-200 bg-white hover:bg-gray-50 text-sm font-medium text-gray-700 flex items-center justify-center gap-3 transition-all duration-200 mb-6">
                        <svg width="16" height="16" viewBox="0 0 48 48">
                            <path fill="#FFC107" d="M43.6 20H24v8h11.3C33.6 33.1 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.1 7.9 3l5.7-5.7C34 6.4 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20c11 0 19.6-7.9 19.6-20 0-1.3-.1-2.7-.4-4z"/>
                            <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.4 16 18.9 13 24 13c3.1 0 5.8 1.1 7.9 3l5.7-5.7C34 6.4 29.3 4 24 4 16.3 4 9.6 8.3 6.3 14.7z"/>
                            <path fill="#4CAF50" d="M24 44c5.2 0 9.9-1.9 13.5-5l-6.2-5.2C29.4 35.5 26.8 36 24 36c-5.3 0-9.7-3-11.3-7.5l-6.5 5C9.7 40 16.4 44 24 44z"/>
                            <path fill="#1976D2" d="M43.6 20H24v8h11.3c-.8 2.3-2.3 4.3-4.3 5.8l6.2 5.2C41 35.3 44 30 44 24c0-1.3-.1-2.7-.4-4z"/>
                        </svg>
                        Sign in with Google
                    </button>

                    <p className="text-center text-sm text-gray-500">
                        New to SportNest?{' '}
                        <Link href="/register" className="text-[#2FA084] font-semibold hover:underline">
                            Register now
                        </Link>
                    </p>

                </div>
            </div>
        </div>
    );
};

export default LoginPage;