'use client';

import Link from 'next/link';
import React from 'react';
import {
    MdArrowOutward,
    MdSportsSoccer,
    MdSportsCricket,
    MdSportsBasketball,
    MdPool,
} from 'react-icons/md';

const tournaments = [
    {
        title: 'Weekend Football League',
        location: 'Dhaka Arena',
        date: 'Every Friday',
        icon: <MdSportsSoccer size={28} />,
        image:
            'https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=1200&auto=format&fit=crop',
    },
    {
        title: 'Corporate Cricket Cup',
        location: 'Mirpur Stadium',
        date: '24 Teams Joined',
        icon: <MdSportsCricket size={28} />,
        image:
            'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=1200&auto=format&fit=crop',
    },
    {
        title: 'Basketball Night Clash',
        location: 'Banani Court',
        date: 'Saturday 8PM',
        icon: <MdSportsBasketball size={28} />,
        image:
            'https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=1200&auto=format&fit=crop',
    },
    {
        title: 'Swimming Championship',
        location: 'Elite Sports Club',
        date: 'Registration Open',
        icon: <MdPool size={28} />,
        image:
            'https://images.unsplash.com/photo-1519315901367-f34ff9154487?q=80&w=1200&auto=format&fit=crop',
    },
];

const UpcomingEvents = () => {
    return (
        <section className="py-20 bg-[#F5FBF9]">
            <div className="container mx-auto px-6">

                {/* Header */}
                <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">

                    <div>
                        <p className="text-sm uppercase tracking-[0.25em] text-[#2FA084] font-bold mb-3">
                            Upcoming Events
                        </p>

                        <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
                            Join Sports
                            <span className="text-[#2FA084]"> Tournaments</span>
                        </h2>

                        <p className="mt-5 text-gray-600 max-w-2xl leading-8">
                            Explore exciting matches, leagues, and community
                            sports events happening near you.
                        </p>
                    </div>

                    <Link
                        href="/events"
                        className="
                            inline-flex
                            items-center
                            gap-2
                            text-[#2FA084]
                            font-bold
                            hover:gap-3
                            transition-all
                        "
                    >
                        View All Events
                        <MdArrowOutward />
                    </Link>

                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-7">

                    {tournaments.map((event, index) => (
                        <div
                            key={index}
                            className="
                                group
                                bg-white
                                rounded-[28px]
                                overflow-hidden
                                shadow-sm
                                hover:shadow-2xl
                                transition-all
                                duration-300
                                hover:-translate-y-2
                            "
                        >

                            {/* Image */}
                            <div className="relative overflow-hidden">
                                <img
                                    src={event.image}
                                    alt={event.title}
                                    className="
                                        h-56
                                        w-full
                                        object-cover
                                        group-hover:scale-110
                                        transition-transform
                                        duration-500
                                    "
                                />

                                <div
                                    className="
                                        absolute
                                        top-4
                                        left-4
                                        w-12
                                        h-12
                                        rounded-2xl
                                        bg-white/90
                                        backdrop-blur-md
                                        flex
                                        items-center
                                        justify-center
                                        text-[#2FA084]
                                    "
                                >
                                    {event.icon}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6">

                                <div className="inline-flex px-3 py-1 rounded-full bg-[#2FA084]/10 text-[#2FA084] text-xs font-bold mb-4">
                                    LIVE EVENT
                                </div>

                                <h3 className="text-xl font-black text-gray-900 mb-3 leading-snug">
                                    {event.title}
                                </h3>

                                <div className="space-y-2 text-sm text-gray-600">
                                    <p>{event.location}</p>
                                    <p>{event.date}</p>
                                </div>

                                <button
                                    className="
                                        mt-6
                                        w-full
                                        py-3
                                        rounded-2xl
                                        bg-[#2FA084]
                                        text-white
                                        font-semibold
                                        hover:bg-[#257c67]
                                        transition-all
                                    "
                                >
                                    Join Event
                                </button>

                            </div>

                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
};

export default UpcomingEvents;