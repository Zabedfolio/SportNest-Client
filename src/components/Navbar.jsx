import Link from 'next/link';
import React from 'react';
import { MdSportsVolleyball } from 'react-icons/md';

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
                <div className='container mx-auto flex'>
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                            </div>
                            <ul
                                tabIndex="-1"
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                                <li><a>Home</a></li>
                                {/* <li>
                                <a>Parent</a>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </li> */}
                                <li><a>All Facilities</a></li>
                                <li><a>My Bookings</a></li>
                                <li><Link href="/add-facility">Add Facility</Link></li>
                                <li><a>Manage My Facilities</a></li>
                            </ul>
                        </div>
                        <div className='flex items-center gap-2'>
                            <a href="" className='bg-[#2FA084] p-2 rounded-lg text-white text-2xl'><MdSportsVolleyball /></a>
                            <h2 className="text-xl font-bold">
                                <span className="text-[#1F6F5F]">Sport</span>
                                Nest
                            </h2>
                        </div>

                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            <li><a>Home</a></li>
                            {/* <li>
                                <a>Parent</a>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </li> */}
                            <li><a>All Facilities</a></li>
                            <li><a>My Bookings</a></li>
                            <li><Link href="/add-facility">Add Facility</Link></li>
                            <li><a>Manage My Facilities</a></li>
                        </ul>
                    </div>
                    <div className="navbar-end">
                        <a
                            className="
    btn
    border-0
    text-white
    rounded-xl
    px-6
    bg-gradient-to-r
    from-[#1F6F5F]
    via-[#2FA084]
    to-[#4DBB8A]
    shadow-lg
    hover:shadow-xl
    hover:scale-[1.03]
    transition-all
    duration-300
  "
                        >
                            Login
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;