import Link from 'next/link';
import React from 'react';

const Banner = () => {
    return (
        <section className="relative overflow-hidden bg-[#F5FBF9]">
            
            <div className="absolute top-0 left-0 w-72 h-72 bg-[#6FCF97]/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#2FA084]/20 rounded-full blur-3xl"></div>

            <div className="container mx-auto px-6 py-20 lg:py-28">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    <div className="space-y-8 relative z-10">

                        <div className="inline-block px-4 py-2 rounded-full bg-[#2FA084]/10 text-[#1F6F5F] text-sm font-semibold">
                            #1 Sports Facility Booking Platform
                        </div>

                        <h1 className="text-5xl lg:text-7xl font-black leading-tight text-gray-900">
                            Book Your
                            <span className="block text-[#2FA084]">
                                Perfect Sports Arena
                            </span>
                        </h1>

                        <p className="text-lg text-gray-600 leading-8 max-w-xl">
                            Discover and book top-quality sports facilities
                            anytime, anywhere. From football turf to indoor
                            badminton courts — SportNest makes booking fast,
                            simple, and reliable.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">

                            <Link
                                href="/all-facilities"
                                className="
                                    inline-flex
                                    items-center
                                    justify-center
                                    px-8
                                    py-4
                                    rounded-2xl
                                    text-white
                                    font-semibold
                                    bg-[#2FA084]
                                    hover:bg-[#278a72]
                                    shadow-[0_10px_30px_rgba(47,160,132,0.35)]
                                    hover:shadow-[0_14px_35px_rgba(47,160,132,0.45)]
                                    hover:-translate-y-[2px]
                                    transition-all
                                    duration-300
                                "
                            >
                                Explore Facilities
                            </Link>

                        </div>

                    </div>

                    <div className="relative">

                        <div className="relative z-10">

                            <img
                                src="https://i.ibb.co.com/b5DGCFS1/Chat-GPT-Image-May-21-2026-01-22-09-PM.png"
                                alt="Sports Banner"
                                className="
                                    w-full
                                    h-[500px]
                                    object-cover
                                    rounded-[32px]
                                    shadow-2xl
                                "
                            />

                            <div className="
                                absolute
                                -bottom-6
                                left-6
                                bg-white
                                p-5
                                rounded-2xl
                                shadow-xl
                                border
                                border-gray-100
                            ">
                                <h3 className="text-2xl font-bold text-[#2FA084]">
                                    500+
                                </h3>

                                <p className="text-gray-600 text-sm">
                                    Active Sports Facilities
                                </p>
                            </div>

                        </div>

                        <div className="
                            absolute
                            -top-8
                            -right-8
                            w-40
                            h-40
                            bg-[#2FA084]/10
                            rounded-full
                            blur-2xl
                        "></div>

                    </div>

                </div>

            </div>
        </section>
    );
};

export default Banner;