'use client';

import React from 'react';

const categories = [
    { icon: '⚽', label: 'Football Turf', color: '#1D9E75', bg: '#E1F5EE', tag: null },
    { icon: '🏊', label: 'Swimming Pool', color: '#7F77DD', bg: '#EEEDFE', tag: 'HOT' },
    { icon: '🎾', label: 'Tennis Court', color: '#D85A30', bg: '#FAECE7', tag: null },
    { icon: '🏏', label: 'Cricket Ground', color: '#378ADD', bg: '#E6F1FB', tag: 'NEW' },
    { icon: '🏸', label: 'Badminton Court', color: '#D4537E', bg: '#FBEAF0', tag: null },
    { icon: '🏀', label: 'Basketball Court', color: '#BA7517', bg: '#FAEEDA', tag: 'HOT' },
];

const row2Categories = [
    { icon: '🏀', label: 'Basketball Court', color: '#BA7517', bg: '#FAEEDA', tag: null },
    { icon: '⚽', label: 'Football Turf', color: '#1D9E75', bg: '#E1F5EE', tag: 'HOT' },
    { icon: '🏊', label: 'Swimming Pool', color: '#7F77DD', bg: '#EEEDFE', tag: null },
    { icon: '🏏', label: 'Cricket Ground', color: '#378ADD', bg: '#E6F1FB', tag: null },
    { icon: '🎾', label: 'Tennis Court', color: '#D85A30', bg: '#FAECE7', tag: 'NEW' },
    { icon: '🏸', label: 'Badminton Court', color: '#D4537E', bg: '#FBEAF0', tag: null },
];

const Pill = ({ icon, label, color, bg, tag }) => (
    <div
        className="group inline-flex items-center gap-2 px-5 py-3 rounded-full border border-gray-200 bg-white cursor-default select-none
                   hover:border-gray-300 hover:-translate-y-0.5 hover:shadow-md transition-all duration-200 whitespace-nowrap"
    >
        <span
            className="w-2 h-2 rounded-full flex-shrink-0"
            style={{ backgroundColor: color }}
        />
        <span className="text-xl leading-none">{icon}</span>
        <span className="text-sm font-medium text-gray-800">{label}</span>
        {tag && (
            <span
                className="text-[10px] font-semibold px-2 py-0.5 rounded-full"
                style={{
                    backgroundColor: bg,
                    color: color,
                }}
            >
                {tag}
            </span>
        )}
    </div>
);

const MarqueeRow = ({ items, reverse = false, speed = '28s' }) => {
    const doubled = [...items, ...items];
    return (
        <div
            className="overflow-hidden"
            style={{
                WebkitMaskImage:
                    'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
                maskImage:
                    'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
            }}
        >
            <div
                className="flex gap-3 w-max hover:[animation-play-state:paused]"
                style={{
                    animation: `scroll ${speed} linear infinite`,
                    animationDirection: reverse ? 'reverse' : 'normal',
                }}
            >
                {doubled.map((item, i) => (
                    <Pill key={i} {...item} />
                ))}
            </div>

            <style>{`
                @keyframes scroll {
                    0%   { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
            `}</style>
        </div>
    );
};

const CategoryMarquee = () => {
    return (
        <section className="py-12 bg-[#F5FBF9]">
            {/* Header */}
            <div className="text-center mb-8">
                <p className="text-xs font-semibold tracking-widest text-[#2FA084] uppercase mb-2">
                    Browse Categories
                </p>
                <h2 className="text-3xl md:text-4xl font-black text-gray-900">
                    Find Your{' '}
                    <span className="text-[#2FA084]">Sport</span>
                </h2>
            </div>

            {/* Marquee rows */}
            <div className="flex flex-col gap-3">
                <MarqueeRow items={categories} speed="28s" />
                <MarqueeRow items={row2Categories} reverse speed="22s" />
            </div>
        </section>
    );
};

export default CategoryMarquee;