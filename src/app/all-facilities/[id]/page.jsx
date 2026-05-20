import React from 'react';
import {
    MdLocationOn,
    MdPeople,
    MdSportsSoccer,
    MdAccessTime,
    MdCalendarMonth,
    MdArrowBack,
} from 'react-icons/md';
import Link from 'next/link';
import BookingForm from '@/components/BookingForm';
import UpdateFacilities from '@/components/UpdateFacilities';
import DeleteAlert from '@/components/DeleteAlert';

const FacilityDetailsPage = async ({ params }) => {
    const { id } = await params;

    const res = await fetch(`http://localhost:5000/facilities/${id}`, {
        cache: 'no-store',
    });
    const data = await res.json();

    const slots = data.availableTimeSlots?.split(',').map(s => s.trim()) || [];

    return (
        <div className="min-h-screen bg-[#F5FBF9]">

            <div className="bg-white border-b border-gray-100">
                <div className="container mx-auto px-6 py-4 flex items-center justify-between">
                    <Link
                        href="/all-facilities"
                        className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-[#2FA084] transition-colors"
                    >
                        <MdArrowBack className="text-base" />
                        Back to Facilities
                    </Link>

                    <div className="flex items-center gap-3">
                        <UpdateFacilities facility={data}></UpdateFacilities>
                        <DeleteAlert facility={data}></DeleteAlert>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-6 py-10">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">

                    <div className="lg:col-span-2 space-y-6">

                        <div className="relative overflow-hidden rounded-3xl shadow-md h-[420px]">
                            <img
                                src={data.image}
                                alt={data.facilityName}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                            <span className="absolute top-5 left-5 bg-[#2FA084] text-white px-4 py-1.5 rounded-full text-xs font-semibold">
                                {data.facilityType}
                            </span>

                            <div className="absolute bottom-6 left-6 right-6">
                                <h1 className="text-3xl font-black text-white leading-tight drop-shadow">
                                    {data.facilityName}
                                </h1>
                                <div className="flex flex-wrap items-center gap-4 mt-2 text-white/80 text-sm">
                                    <span className="flex items-center gap-1">
                                        <MdLocationOn className="text-[#6FCF97]" />
                                        {data.location}
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <MdPeople className="text-[#6FCF97]" />
                                        Up to {data.capacity} players
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-3 gap-4">
                            <div className="bg-white rounded-2xl p-5 border border-gray-100 text-center space-y-1">
                                <MdSportsSoccer className="text-[#2FA084] text-2xl mx-auto" />
                                <p className="text-xs text-gray-400">Type</p>
                                <p className="text-sm font-bold text-gray-800">{data.facilityType}</p>
                            </div>
                            <div className="bg-white rounded-2xl p-5 border border-gray-100 text-center space-y-1">
                                <MdPeople className="text-[#2FA084] text-2xl mx-auto" />
                                <p className="text-xs text-gray-400">Capacity</p>
                                <p className="text-sm font-bold text-gray-800">{data.capacity} people</p>
                            </div>
                            <div className="bg-white rounded-2xl p-5 border border-gray-100 text-center space-y-1">
                                <MdAccessTime className="text-[#2FA084] text-2xl mx-auto" />
                                <p className="text-xs text-gray-400">Slots</p>
                                <p className="text-sm font-bold text-gray-800">{slots.length} available</p>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl p-6 border border-gray-100 space-y-3">
                            <h2 className="text-xl font-black text-gray-900">About this Facility</h2>
                            <p className="text-gray-600 text-sm leading-7">{data.description}</p>
                        </div>

                        <div className="bg-white rounded-2xl p-6 border border-gray-100 space-y-4">
                            <h2 className="text-xl font-black text-gray-900">Available Time Slots</h2>
                            <div className="flex flex-wrap gap-2">
                                {slots.map(slot => (
                                    <span
                                        key={slot}
                                        className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#F5FBF9] text-[#1F6F5F] text-sm font-semibold border border-[#2FA084]/20"
                                    >
                                        <MdAccessTime className="text-[#2FA084]" />
                                        {slot}
                                    </span>
                                ))}
                            </div>
                        </div>

                    </div>

                    <div className="sticky top-24">
                        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">

                            <div className="bg-[#2FA084] px-8 py-6">
                                <p className="text-white/70 text-sm">Price per hour</p>
                                <p className="text-4xl font-black text-white mt-1">
                                    ৳{data.pricePerHour}
                                    <span className="text-base font-medium text-white/70"> /hr</span>
                                </p>
                            </div>

                            <div className="p-7 space-y-5">
                                <div>
                                    <h2 className="text-xl font-black text-gray-900">Book Now</h2>
                                    <p className="text-gray-400 text-sm mt-1">Reserve your slot quickly and securely.</p>
                                </div>

                                <BookingForm
                                    facilityName={data.facilityName}
                                    slots={slots}
                                    pricePerHour={data.pricePerHour}
                                />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default FacilityDetailsPage;