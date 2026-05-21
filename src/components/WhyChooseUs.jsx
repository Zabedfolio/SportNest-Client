'use client';

import React from 'react';
import {
    MdSportsSoccer,
    MdAccessTime,
    MdVerified,
    MdLocationOn,
} from 'react-icons/md';

const features = [
    {
        icon: <MdSportsSoccer size={34} />,
        title: 'Premium Facilities',
        desc: 'Book high-quality football turf, badminton courts, swimming pools and more.',
    },
    {
        icon: <MdAccessTime size={34} />,
        title: 'Instant Booking',
        desc: 'Reserve your preferred time slot in seconds with real-time availability.',
    },
    {
        icon: <MdVerified size={34} />,
        title: 'Trusted Platform',
        desc: 'Verified facilities with transparent pricing and secure booking experience.',
    },
    {
        icon: <MdLocationOn size={34} />,
        title: 'Nearby Locations',
        desc: 'Find sports venues close to your area quickly and easily.',
    },
];

const WhyChooseUs = () => {
    return (
        <section className="bg-white py-20">
            <div className="container mx-auto px-6">

                <div className="text-center mb-14">
                    <p className="text-sm uppercase tracking-widest text-[#2FA084] font-bold mb-3">
                        Why SportNest
                    </p>

                    <h2 className="text-4xl md:text-5xl font-black text-gray-900">
                        Why Players Love{' '}
                        <span className="text-[#2FA084]">SportNest</span>
                    </h2>

                    <p className="max-w-2xl mx-auto mt-5 text-gray-600 leading-8">
                        We make sports facility booking simple, fast,
                        and reliable for players, teams, and organizers.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="
                                group
                                bg-[#F5FBF9]
                                rounded-3xl
                                p-8
                                hover:-translate-y-2
                                hover:shadow-2xl
                                transition-all
                                duration-300
                                border border-transparent
                                hover:border-[#2FA084]/20
                            "
                        >
                            <div
                                className="
                                    w-16
                                    h-16
                                    rounded-2xl
                                    bg-[#2FA084]/10
                                    text-[#2FA084]
                                    flex
                                    items-center
                                    justify-center
                                    mb-6
                                "
                            >
                                {feature.icon}
                            </div>

                            <h3 className="text-xl font-bold text-gray-900 mb-3">
                                {feature.title}
                            </h3>

                            <p className="text-gray-600 leading-7 text-sm">
                                {feature.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;