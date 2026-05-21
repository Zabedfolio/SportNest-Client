'use client'
import { authClient } from '@/lib/auth-client';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import {
    MdSportsVolleyball,
    MdCalendarToday,
    MdAddCircleOutline,
    MdSettings,
    MdLogout,
    MdMenu
} from 'react-icons/md';

const Navbar = () => {
    const router = useRouter();
    const { data: session } = authClient.useSession();
    const user = session?.user;

    const [open, setOpen] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClick = (e) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClick);
        return () => document.removeEventListener('mousedown', handleClick);
    }, []);

    const handleLogout = async () => {
        await authClient.signOut();
        setOpen(false);
        setMobileOpen(false);
    };

    return (
        <nav className="bg-base-100 border-b border-base-200 sticky top-0 z-50">
            <div className='flex items-center justify-between px-6 h-16 container mx-auto'>

                {/* LEFT SIDE: Mobile Hamburger + Logo */}
                <div className="flex items-center gap-2.5">

                    {/* Hamburger (mobile/tablet only) */}
                    <button
                        className="lg:hidden text-2xl text-base-content"
                        onClick={() => setMobileOpen(!mobileOpen)}
                    >
                        <MdMenu />
                    </button>

                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2.5">
                        <div className="w-9 h-9 bg-[#0F6E56] rounded-xl flex items-center justify-center text-white text-lg">
                            <MdSportsVolleyball />
                        </div>
                        <span className="text-[17px] font-semibold">
                            <span className="text-[#0F6E56]">Sport</span>Nest
                        </span>
                    </Link>
                </div>

                {/* Desktop Nav Links */}
                <div className="hidden lg:flex items-center gap-1">
                    <Link href="/" className="text-sm text-base-content/70 hover:text-base-content hover:bg-base-200 px-3 py-1.5 rounded-lg transition-all">Home</Link>
                    <Link href="/all-facilities" className="text-sm text-base-content/70 hover:text-base-content hover:bg-base-200 px-3 py-1.5 rounded-lg transition-all">All Facilities</Link>
                </div>

                {/* Auth */}
                {user ? (
                    <div className="relative" ref={dropdownRef}>
                        <button
                            onClick={() => setOpen(!open)}
                            className="flex items-center gap-2.5 px-2.5 py-1.5 rounded-full border border-base-300 hover:bg-base-200 transition-all"
                        >
                            <div className="w-8 h-8 rounded-full overflow-hidden bg-[#0F6E56] flex items-center justify-center text-white text-sm font-medium flex-shrink-0">
                                {user?.image ? (
                                    <Image
                                        src={user.image}
                                        alt={user.name || 'User'}
                                        width={32}
                                        height={32}
                                        className="w-full h-full object-cover rounded-full"
                                    />
                                ) : (
                                    user.name?.charAt(0).toUpperCase()
                                )}
                            </div>

                            <span className="text-sm font-medium hidden sm:block">
                                {user.name?.split(' ')[0]}
                            </span>

                            <svg className={`w-4 h-4 text-base-content/50 transition-transform ${open ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>

                        {open && (
                            <div className="absolute right-0 top-[calc(100%+10px)] w-52 bg-base-100 border border-base-200 rounded-2xl shadow-lg py-1.5 z-50">
                                <div className="px-4 py-2.5 border-b border-base-200 mb-1">
                                    <p className="text-sm font-semibold text-base-content">{user.name}</p>
                                    <p className="text-xs text-base-content/50 truncate">{user.email}</p>
                                </div>

                                <Link href="/my-bookings" onClick={() => setOpen(false)}
                                    className="flex items-center gap-3 px-4 py-2.5 text-sm text-base-content hover:bg-base-200 transition-all">
                                    <MdCalendarToday className="text-base-content/50" /> My Bookings
                                </Link>

                                <Link href="/add-facility" onClick={() => setOpen(false)}
                                    className="flex items-center gap-3 px-4 py-2.5 text-sm text-base-content hover:bg-base-200 transition-all">
                                    <MdAddCircleOutline className="text-base-content/50" /> Add Facility
                                </Link>

                                <Link href="/manage-facilities" onClick={() => setOpen(false)}
                                    className="flex items-center gap-3 px-4 py-2.5 text-sm text-base-content hover:bg-base-200 transition-all">
                                    <MdSettings className="text-base-content/50" /> Manage Facilities
                                </Link>

                                <div className="border-t border-base-200 mt-1 pt-1">
                                    <button onClick={handleLogout}
                                        className="flex items-center gap-3 px-4 py-2.5 text-sm text-red-500 hover:bg-base-200 transition-all w-full text-left">
                                        <MdLogout /> Logout
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                ) : (
                    <Link
                        href="/login"
                        className="px-5 py-2 rounded-full text-white text-sm font-medium
                        bg-gradient-to-br from-[#2FA084] via-[#1F6F5F] to-[#0B4F43]
                        hover:from-[#38B596] hover:via-[#2FA084] hover:to-[#145C4D]
                        shadow-[0_8px_20px_rgba(31,111,95,0.35)]
                        hover:shadow-[0_10px_25px_rgba(47,160,132,0.45)]
                        transition-all duration-300"
                    >
                        Login
                    </Link>
                )}
            </div>

            {/* MOBILE MENU */}
            {mobileOpen && (
                <div className="lg:hidden border-t border-base-200 bg-base-100 px-6 py-3 space-y-2">
                    <Link
                        href="/"
                        onClick={() => setMobileOpen(false)}
                        className="block text-sm py-2 text-base-content/80 hover:text-base-content"
                    >
                        Home
                    </Link>

                    <Link
                        href="/all-facilities"
                        onClick={() => setMobileOpen(false)}
                        className="block text-sm py-2 text-base-content/80 hover:text-base-content"
                    >
                        All Facilities
                    </Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;