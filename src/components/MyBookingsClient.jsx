'use client';

import BookingCancelAlert from '@/components/BookingCancelAlert';
import React from 'react';
import { MdCalendarToday, MdAccessTime, MdHourglassEmpty, MdBlock } from 'react-icons/md';

const MyBookingsClient = ({ bookings}) => {
    if (!bookings?.length) {
        return (
            <section className="min-h-screen bg-[#F5FBF9] flex items-center justify-center">
                <div className="text-center text-gray-400">
                    <MdCalendarToday size={48} className="mx-auto mb-4 opacity-30" />
                    <p className="font-black text-xl text-gray-700">No bookings yet</p>
                    <p className="text-sm mt-1">Your reservations will appear here.</p>
                </div>
            </section>
        );
    }

    

    return (
        <section className="min-h-screen bg-[#F5FBF9]">
            <div className="container mx-auto px-6 py-16 max-w-5xl">

                {/* Header */}
                <div className="mb-10">
                    <div className="inline-block px-4 py-2 rounded-full bg-[#2FA084]/10 text-[#1F6F5F] text-sm font-semibold mb-4">
                        My Account
                    </div>
                    <h1 className="text-5xl lg:text-6xl font-black text-gray-900 leading-tight">
                        My Bookings
                    </h1>
                    <p className="text-gray-500 mt-3">Your upcoming sports facility reservations.</p>
                </div>

                {/* Cards */}
                <div className="flex flex-col gap-5">
                    {bookings.map((booking) => (
                        <div
                            key={booking._id}
                            className="bg-white rounded-[28px] border border-gray-100 hover:border-[#2FA084]/30 hover:shadow-[0_8px_30px_rgba(47,160,132,0.08)] overflow-hidden transition-all duration-300"
                        >
                            {/* Facility Image */}
                            {booking.facilityImage && (
                                <div className="relative h-48 w-full overflow-hidden">
                                    <img
                                        src={booking.facilityImage}
                                        alt={booking.facilityName}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                                    <div className="absolute bottom-4 left-6">
                                        <p className="text-white font-black text-xl leading-tight">{booking.facilityName}</p>
                                        <p className="text-white/70 text-sm mt-0.5">{booking.facilityType}</p>
                                    </div>
                                </div>
                            )}

                            <div className="p-6">
                                {/* Title — shown only if no image */}
                                {!booking.facilityImage && (
                                    <div className="mb-5">
                                        <h3 className="font-black text-gray-900 text-xl leading-tight">{booking.facilityName}</h3>
                                        <p className="text-sm text-gray-400 mt-0.5">{booking.facilityType}</p>
                                    </div>
                                )}

                                {/* Info Grid */}
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                                    <div className="bg-[#F5FBF9] rounded-2xl p-4">
                                        <p className="text-[10px] uppercase tracking-widest text-gray-400 mb-2">Date</p>
                                        <div className="flex items-center gap-1.5 text-sm font-semibold text-gray-700">
                                            <MdCalendarToday size={14} className="text-[#2FA084]" />
                                            {new Date(booking.date).toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}
                                        </div>
                                    </div>
                                    <div className="bg-[#F5FBF9] rounded-2xl p-4">
                                        <p className="text-[10px] uppercase tracking-widest text-gray-400 mb-2">Time Slot</p>
                                        <div className="flex items-center gap-1.5 text-sm font-semibold text-gray-700">
                                            <MdAccessTime size={14} className="text-[#2FA084]" />
                                            {booking.slot}
                                        </div>
                                    </div>
                                    <div className="bg-[#F5FBF9] rounded-2xl p-4">
                                        <p className="text-[10px] uppercase tracking-widest text-gray-400 mb-2">Duration</p>
                                        <div className="flex items-center gap-1.5 text-sm font-semibold text-gray-700">
                                            <MdHourglassEmpty size={14} className="text-[#2FA084]" />
                                            {booking.hours} hour{booking.hours > 1 ? 's' : ''}
                                        </div>
                                    </div>
                                    <div className="bg-[#E1F5EE] rounded-2xl p-4">
                                        <p className="text-[10px] uppercase tracking-widest text-[#2FA084]/70 mb-2">Total Price</p>
                                        <p className="text-xl font-black text-[#1D9E75]">৳{booking.totalPrice?.toLocaleString()}</p>
                                    </div>
                                </div>

                                {/* Cancel */}
                                <div className="flex justify-end mt-5">
                                    <BookingCancelAlert bookingId={booking._id}></BookingCancelAlert>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MyBookingsClient;