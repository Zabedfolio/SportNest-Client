'use client';
import React from 'react';


const AddFacilityPage = () => {
    return (
        <section className="bg-[#F5FBF9] py-16 px-4">
            <div className="max-w-5xl mx-auto">

                {/* Heading */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-black text-gray-900">
                        Add New
                        <span className="text-[#2FA084]"> Facility</span>
                    </h1>

                    <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                        Create and manage your sports facility easily with
                        complete details, pricing, location, and booking slots.
                    </p>
                </div>

                {/* Form Card */}
                <div className="bg-white rounded-[32px] shadow-xl p-6 md:p-10">

                    <form className="space-y-8">

                        {/* Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                            {/* Facility Name */}
                            <div>
                                <label className="block mb-3 font-semibold text-gray-700">
                                    Facility Name
                                </label>

                                <input
                                    type="text"
                                    placeholder="Enter facility name"
                                    className="input input-bordered w-full rounded-xl h-14 focus:outline-none focus:border-[#2FA084]"
                                />
                            </div>

                            {/* Facility Type */}
                            <div>
                                <label className="block mb-3 font-semibold text-gray-700">
                                    Facility Type
                                </label>

                                <select className="select select-bordered w-full rounded-xl h-14 focus:outline-none focus:border-[#2FA084]">
                                    <option disabled selected>
                                        Select facility type
                                    </option>

                                    <option>Football Turf</option>
                                    <option>Cricket Ground</option>
                                    <option>Badminton Court</option>
                                    <option>Basketball Court</option>
                                    <option>Swimming Pool</option>
                                    <option>Tennis Court</option>
                                </select>
                            </div>

                            {/* Image Upload */}
                            <div>
                                <label className="block mb-3 font-semibold text-gray-700">
                                    Image Upload URL
                                </label>

                                <input
                                    type="text"
                                    placeholder="Paste imgbb/postimage URL"
                                    className="input input-bordered w-full rounded-xl h-14 focus:outline-none focus:border-[#2FA084]"
                                />
                            </div>

                            {/* Location */}
                            <div>
                                <label className="block mb-3 font-semibold text-gray-700">
                                    Location
                                </label>

                                <input
                                    type="text"
                                    placeholder="Enter location"
                                    className="input input-bordered w-full rounded-xl h-14 focus:outline-none focus:border-[#2FA084]"
                                />
                            </div>

                            {/* Price */}
                            <div>
                                <label className="block mb-3 font-semibold text-gray-700">
                                    Price Per Hour
                                </label>

                                <input
                                    type="number"
                                    placeholder="$50"
                                    className="input input-bordered w-full rounded-xl h-14 focus:outline-none focus:border-[#2FA084]"
                                />
                            </div>

                            {/* Capacity */}
                            <div>
                                <label className="block mb-3 font-semibold text-gray-700">
                                    Capacity
                                </label>

                                <input
                                    type="number"
                                    placeholder="Maximum players"
                                    className="input input-bordered w-full rounded-xl h-14 focus:outline-none focus:border-[#2FA084]"
                                />
                            </div>

                            {/* Available Slots */}
                            <div className="md:col-span-2">
                                <label className="block mb-3 font-semibold text-gray-700">
                                    Available Time Slots
                                </label>

                                <input
                                    type="text"
                                    placeholder="Example: 8AM - 10AM, 2PM - 5PM"
                                    className="input input-bordered w-full rounded-xl h-14 focus:outline-none focus:border-[#2FA084]"
                                />
                            </div>

                            {/* Owner Email */}
                            <div className="md:col-span-2">
                                <label className="block mb-3 font-semibold text-gray-700">
                                    Owner Email
                                </label>

                                <input
                                    type="email"
                                    value="owner@sportnest.com"
                                    readOnly
                                    className="input input-bordered w-full rounded-xl h-14 bg-gray-100 cursor-not-allowed"
                                />
                            </div>

                            {/* Description */}
                            <div className="md:col-span-2">
                                <label className="block mb-3 font-semibold text-gray-700">
                                    Description
                                </label>

                                <textarea
                                    rows="6"
                                    placeholder="Write facility details..."
                                    className="textarea textarea-bordered w-full rounded-2xl focus:outline-none focus:border-[#2FA084]"
                                ></textarea>
                            </div>

                        </div>

                        {/* Button */}
                        <div className="pt-4">

                            <button
                                type="submit"
                                className="
                                    w-full
                                    md:w-auto
                                    px-10
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
                                Add Facility
                            </button>

                        </div>

                    </form>

                </div>
            </div>
        </section>
    );
};

export default AddFacilityPage;