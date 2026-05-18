'use client';

import React from 'react';
import toast from 'react-hot-toast';

const AddFacilityPage = () => {

    const onSubmit = async (e) => {
        // e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const facility = Object.fromEntries(formData.entries());

        // console.log(facility);


        const res = await fetch('http://localhost:5000/facilities', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(facility)
        })
        const data = await res.json();
        // console.log(data);
        toast.success('Successfully added!')
    };

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

                    <form onSubmit={onSubmit} className="space-y-8">

                        {/* Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                            {/* Facility Name */}
                            <div>
                                <label className="block mb-3 font-semibold text-gray-700">
                                    Facility Name
                                </label>

                                <input
                                    type="text"
                                    name="facilityName"
                                    placeholder="Enter facility name"
                                    className="input input-bordered w-full rounded-xl h-14 focus:outline-none focus:border-[#2FA084]"
                                    required
                                />
                            </div>

                            {/* Facility Type */}
                            <div>
                                <label className="block mb-3 font-semibold text-gray-700">
                                    Facility Type
                                </label>

                                <select
                                    name="facilityType"
                                    defaultValue=""
                                    className="select select-bordered w-full rounded-xl h-14 focus:outline-none focus:border-[#2FA084]"
                                    required
                                >
                                    <option value="" disabled>
                                        Select facility type
                                    </option>

                                    <option value="Football Turf">Football Turf</option>
                                    <option value="Cricket Ground">Cricket Ground</option>
                                    <option value="Badminton Court">Badminton Court</option>
                                    <option value="Basketball Court">Basketball Court</option>
                                    <option value="Swimming Pool">Swimming Pool</option>
                                    <option value="Tennis Court">Tennis Court</option>
                                </select>
                            </div>

                            {/* Image Upload */}
                            <div>
                                <label className="block mb-3 font-semibold text-gray-700">
                                    Image Upload URL
                                </label>

                                <input
                                    type="text"
                                    name="image"
                                    placeholder="Paste imgbb/postimage URL"
                                    className="input input-bordered w-full rounded-xl h-14 focus:outline-none focus:border-[#2FA084]"
                                    required
                                />
                            </div>

                            {/* Location */}
                            <div>
                                <label className="block mb-3 font-semibold text-gray-700">
                                    Location
                                </label>

                                <input
                                    type="text"
                                    name="location"
                                    placeholder="Enter location"
                                    className="input input-bordered w-full rounded-xl h-14 focus:outline-none focus:border-[#2FA084]"
                                    required
                                />
                            </div>

                            {/* Price */}
                            <div>
                                <label className="block mb-3 font-semibold text-gray-700">
                                    Price Per Hour
                                </label>

                                <input
                                    type="number"
                                    name="pricePerHour"
                                    placeholder="$50"
                                    className="input input-bordered w-full rounded-xl h-14 focus:outline-none focus:border-[#2FA084]"
                                    required
                                />
                            </div>

                            {/* Capacity */}
                            <div>
                                <label className="block mb-3 font-semibold text-gray-700">
                                    Capacity
                                </label>

                                <input
                                    type="number"
                                    name="capacity"
                                    placeholder="Maximum players"
                                    className="input input-bordered w-full rounded-xl h-14 focus:outline-none focus:border-[#2FA084]"
                                    required
                                />
                            </div>

                            {/* Available Slots */}
                            <div className="md:col-span-2">
                                <label className="block mb-3 font-semibold text-gray-700">
                                    Available Time Slots
                                </label>

                                <input
                                    type="text"
                                    name="availableTimeSlots"
                                    placeholder="Example: 8AM - 10AM, 2PM - 5PM"
                                    className="input input-bordered w-full rounded-xl h-14 focus:outline-none focus:border-[#2FA084]"
                                    required
                                />
                            </div>

                            {/* Owner Email */}
                            <div className="md:col-span-2">
                                <label className="block mb-3 font-semibold text-gray-700">
                                    Owner Email
                                </label>

                                <input
                                    type="email"
                                    name="ownerEmail"
                                    placeholder="Enter owner email"
                                    className="input input-bordered w-full rounded-xl h-14 focus:outline-none focus:border-[#2FA084]"
                                    required
                                />
                            </div>

                            {/* Description */}
                            <div className="md:col-span-2">
                                <label className="block mb-3 font-semibold text-gray-700">
                                    Description
                                </label>

                                <textarea
                                    rows="6"
                                    name="description"
                                    placeholder="Write facility details..."
                                    className="textarea textarea-bordered w-full rounded-2xl focus:outline-none focus:border-[#2FA084]"
                                    required
                                ></textarea>
                            </div>

                        </div>

                        {/* Button */}
                        <div className="pt-4">

                            <button
                                type="submit"
                                className="w-full md:w-auto px-10 py-4 rounded-2xl text-white font-semibold bg-[#2FA084] hover:bg-[#278a72] shadow-[0_10px_30px_rgba(47,160,132,0.35)] hover:shadow-[0_14px_35px_rgba(47,160,132,0.45)] hover:-translate-y-[2px] transition-all duration-300"
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