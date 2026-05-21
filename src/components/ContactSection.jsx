'use client';

import React from 'react';
import {
    MdEmail,
    MdPhone,
    MdLocationOn,
    MdAccessTime,
} from 'react-icons/md';

const ContactSection = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-6">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

                    {/* Left Content */}
                    <div>

                        <p className="text-sm uppercase tracking-[0.25em] text-[#2FA084] font-bold mb-3">
                            Contact Us
                        </p>

                        <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
                            Let’s Talk About Your
                            <span className="block text-[#2FA084]">
                                Next Game
                            </span>
                        </h2>

                        <p className="mt-6 text-gray-600 leading-8 max-w-xl">
                            Have questions about bookings, facilities, or
                            partnerships? Our team is here to help you anytime.
                        </p>

                        {/* Contact Info */}
                        <div className="mt-10 space-y-5">

                            <div className="flex items-start gap-4">
                                <div className="w-14 h-14 rounded-2xl bg-[#2FA084]/10 text-[#2FA084] flex items-center justify-center">
                                    <MdEmail size={28} />
                                </div>

                                <div>
                                    <h4 className="font-bold text-gray-900 text-lg">
                                        Email Address
                                    </h4>
                                    <p className="text-gray-600">
                                        support@sportnest.com
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-14 h-14 rounded-2xl bg-[#2FA084]/10 text-[#2FA084] flex items-center justify-center">
                                    <MdPhone size={28} />
                                </div>

                                <div>
                                    <h4 className="font-bold text-gray-900 text-lg">
                                        Phone Number
                                    </h4>
                                    <p className="text-gray-600">
                                        +880 1234-567890
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-14 h-14 rounded-2xl bg-[#2FA084]/10 text-[#2FA084] flex items-center justify-center">
                                    <MdLocationOn size={28} />
                                </div>

                                <div>
                                    <h4 className="font-bold text-gray-900 text-lg">
                                        Office Location
                                    </h4>
                                    <p className="text-gray-600">
                                        Dhaka, Bangladesh
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-14 h-14 rounded-2xl bg-[#2FA084]/10 text-[#2FA084] flex items-center justify-center">
                                    <MdAccessTime size={28} />
                                </div>

                                <div>
                                    <h4 className="font-bold text-gray-900 text-lg">
                                        Support Hours
                                    </h4>
                                    <p className="text-gray-600">
                                        Sat - Thu : 9AM - 10PM
                                    </p>
                                </div>
                            </div>

                        </div>

                    </div>

                    {/* Contact Form */}
                    <div
                        className="
                            bg-[#F5FBF9]
                            rounded-[32px]
                            p-8
                            md:p-10
                            shadow-sm
                        "
                    >

                        <h3 className="text-3xl font-black text-gray-900 mb-8">
                            Send Message
                        </h3>

                        <form className="space-y-5">

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Full Name
                                </label>

                                <input
                                    type="text"
                                    placeholder="Enter your name"
                                    className="
                                        w-full
                                        px-5
                                        py-4
                                        rounded-2xl
                                        border
                                        border-gray-200
                                        bg-white
                                        focus:outline-none
                                        focus:ring-2
                                        focus:ring-[#2FA084]/30
                                    "
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Email Address
                                </label>

                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="
                                        w-full
                                        px-5
                                        py-4
                                        rounded-2xl
                                        border
                                        border-gray-200
                                        bg-white
                                        focus:outline-none
                                        focus:ring-2
                                        focus:ring-[#2FA084]/30
                                    "
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Message
                                </label>

                                <textarea
                                    rows="5"
                                    placeholder="Write your message..."
                                    className="
                                        w-full
                                        px-5
                                        py-4
                                        rounded-2xl
                                        border
                                        border-gray-200
                                        bg-white
                                        resize-none
                                        focus:outline-none
                                        focus:ring-2
                                        focus:ring-[#2FA084]/30
                                    "
                                />
                            </div>

                            <button
                                type="submit"
                                className="
                                    w-full
                                    py-4
                                    rounded-2xl
                                    bg-[#2FA084]
                                    text-white
                                    font-bold
                                    hover:bg-[#257c67]
                                    transition-all
                                    duration-300
                                    shadow-lg
                                    hover:shadow-xl
                                "
                            >
                                Send Message
                            </button>

                        </form>

                    </div>

                </div>

            </div>
        </section>
    );
};

export default ContactSection;