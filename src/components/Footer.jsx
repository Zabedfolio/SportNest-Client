import React from 'react';
import {
    MdSportsVolleyball,
    MdEmail,
    MdPhone,
    MdLocationOn
} from 'react-icons/md';

import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaTwitter
} from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-base-100 border-t border-base-300">
            
            <div className="container mx-auto px-6 py-12">

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

                    {/* Brand */}
                    <div className="space-y-4">
                        
                        <div className="flex items-center gap-3">
                            <a
                                href=""
                                className="bg-[#2FA084] p-2 rounded-lg text-white text-2xl"
                            >
                                <MdSportsVolleyball />
                            </a>

                            <h2 className="text-2xl font-bold">
                                <span className="text-[#1F6F5F]">Sport</span>
                                Nest
                            </h2>
                        </div>

                        <p className="text-sm text-gray-500 leading-6 max-w-xs">
                            Book and manage sports facilities easily with
                            SportNest. Your all-in-one platform for modern
                            sports management.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">
                            Quick Links
                        </h3>

                        <ul className="space-y-3 text-sm">
                            <li>
                                <a className="hover:text-[#2FA084] transition">
                                    Home
                                </a>
                            </li>

                            <li>
                                <a className="hover:text-[#2FA084] transition">
                                    All Facilities
                                </a>
                            </li>

                            <li>
                                <a className="hover:text-[#2FA084] transition">
                                    My Bookings
                                </a>
                            </li>

                            <li>
                                <a className="hover:text-[#2FA084] transition">
                                    Add Facility
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">
                            Contact
                        </h3>

                        <div className="space-y-4 text-sm">

                            <div className="flex items-center gap-3">
                                <MdEmail className="text-[#2FA084] text-lg" />
                                <p>support@sportnest.com</p>
                            </div>

                            <div className="flex items-center gap-3">
                                <MdPhone className="text-[#2FA084] text-lg" />
                                <p>+880 1234-567890</p>
                            </div>

                            <div className="flex items-start gap-3">
                                <MdLocationOn className="text-[#2FA084] text-lg mt-1" />
                                <p>Chattogram, Bangladesh</p>
                            </div>

                        </div>
                    </div>

                    {/* Social Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">
                            Follow Us
                        </h3>

                        <div className="flex gap-4">

                            <a className="bg-base-200 hover:bg-[#2FA084] hover:text-white transition p-3 rounded-full text-lg">
                                <FaFacebookF />
                            </a>

                            <a className="bg-base-200 hover:bg-[#2FA084] hover:text-white transition p-3 rounded-full text-lg">
                                <FaInstagram />
                            </a>

                            <a className="bg-base-200 hover:bg-[#2FA084] hover:text-white transition p-3 rounded-full text-lg">
                                <FaTwitter />
                            </a>

                            <a className="bg-base-200 hover:bg-[#2FA084] hover:text-white transition p-3 rounded-full text-lg">
                                <FaLinkedinIn />
                            </a>

                        </div>
                    </div>

                </div>

                {/* Bottom Copyright */}
                <div className="border-t border-base-300 mt-10 pt-6 text-center text-sm text-gray-500">
                    © {new Date().getFullYear()} SportNest. All rights reserved.
                </div>

            </div>
        </footer>
    );
};

export default Footer;