'use client';

import React from 'react';

import {
    MdEdit,
    MdImage,
    MdLocationOn,
    MdSportsSoccer,
    MdAttachMoney,
    MdGroups,
    MdEmail,
    MdAccessTime,
    MdDescription,
} from 'react-icons/md';

import {
    Button,
    Input,
    Label,
    Modal,
} from "@heroui/react";

const UpdateFacilities = ({ facility }) => {

    const onSubmit = async (e) => {
        // e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const updatedFacility = Object.fromEntries(formData.entries());

        console.log(updatedFacility);

        try {

            const res = await fetch(
                `http://localhost:5000/facilities/${facility._id}`,
                {
                    method: 'PATCH',
                    headers: {
                        'content-type': 'application/json',
                    },
                    body: JSON.stringify(updatedFacility),
                }
            );

            const data = await res.json();

            console.log(data);

        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Modal>

            <Modal.Trigger>
                <button className="px-5 py-2 rounded-xl text-sm font-semibold text-[#2FA084] border-2 border-[#2FA084] hover:bg-[#2FA084] hover:text-white transition-all duration-200">
                    Update
                </button>
            </Modal.Trigger>

            <Modal.Backdrop className="bg-[#071E1A]/70 backdrop-blur-md">

                <Modal.Container>

                    <Modal.Dialog className="max-w-5xl overflow-hidden rounded-[36px] border border-white/10 bg-white shadow-[0_25px_80px_rgba(0,0,0,0.25)]">

                        <Modal.CloseTrigger className="top-5 right-5 rounded-full border border-white/10 bg-white/10 p-2 text-white backdrop-blur-xl transition-all hover:scale-105 hover:bg-white/20" />

                        <div className="relative overflow-hidden bg-[#1F6F5F] px-8 py-7 rounded-tl-[25px] rounded-tr-[25px]">

                            <div className="absolute inset-0 opacity-20">

                                <div className="absolute -top-20 -right-10 h-60 w-60 rounded-full bg-[#6FCF97] blur-3xl" />

                                <div className="absolute bottom-0 left-20 h-40 w-40 rounded-full bg-white/20 blur-2xl" />

                            </div>

                            <div className="relative flex items-center gap-5">

                                <div className="flex size-16 items-center justify-center rounded-2xl border border-white/10 bg-white/10 backdrop-blur-xl shadow-lg">

                                    <MdEdit className="text-3xl text-white" />

                                </div>

                                <div className="flex-1">

                                    <div className="flex items-center gap-3 flex-wrap">

                                        <h2 className="text-4xl font-black tracking-tight text-white">
                                            Update Facility
                                        </h2>

                                        <span className="rounded-full border border-[#6FCF97]/30 bg-[#6FCF97]/15 px-3 py-1 text-xs font-semibold text-[#CFF7DD] backdrop-blur-md">
                                            Management
                                        </span>

                                    </div>

                                    <p className="mt-2 max-w-xl text-sm leading-6 text-white/75">
                                        Modify venue details, pricing, scheduling, and operational information.
                                    </p>

                                </div>

                            </div>

                        </div>

                        <Modal.Body className="max-h-[78vh] overflow-y-auto p-8">

                            <form
                                onSubmit={onSubmit}
                                className="grid grid-cols-1 md:grid-cols-2 gap-6"
                            >

                                <div>

                                    <Label className="mb-2 block text-sm font-semibold text-gray-700">
                                        Facility Name
                                    </Label>

                                    <div className="relative">

                                        <MdSportsSoccer className="absolute left-4 top-1/2 -translate-y-1/2 text-[#2FA084] text-lg z-10" />

                                        <Input
                                            name="facilityName"
                                            defaultValue={facility?.facilityName}
                                            placeholder="Facility Name"
                                            className="pl-11 h-12 rounded-2xl border border-gray-200 bg-[#F8FCFB]"
                                        />

                                    </div>

                                </div>

                                <div>

                                    <Label className="mb-2 block text-sm font-semibold text-gray-700">
                                        Facility Type
                                    </Label>

                                    <select
                                        name="facilityType"
                                        defaultValue={facility?.facilityType}
                                        className="w-full h-12 rounded-2xl border border-gray-200 bg-[#F8FCFB] px-4 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#2FA084]/30 focus:border-[#2FA084]"
                                    >
                                        <option>Football Turf</option>
                                        <option>Cricket Ground</option>
                                        <option>Badminton Court</option>
                                        <option>Basketball Court</option>
                                        <option>Swimming Pool</option>
                                        <option>Tennis Court</option>
                                    </select>

                                </div>

                                <div className="md:col-span-2">

                                    <Label className="mb-2 block text-sm font-semibold text-gray-700">
                                        Image URL
                                    </Label>

                                    <div className="relative">

                                        <MdImage className="absolute left-4 top-1/2 -translate-y-1/2 text-[#2FA084] text-lg z-10" />

                                        <Input
                                            name="image"
                                            defaultValue={facility?.image}
                                            placeholder="https://example.com/image.jpg"
                                            className="pl-11 h-12 rounded-2xl border border-gray-200 bg-[#F8FCFB]"
                                        />

                                    </div>

                                </div>

                                <div>

                                    <Label className="mb-2 block text-sm font-semibold text-gray-700">
                                        Location
                                    </Label>

                                    <div className="relative">

                                        <MdLocationOn className="absolute left-4 top-1/2 -translate-y-1/2 text-[#2FA084] text-lg z-10" />

                                        <Input
                                            name="location"
                                            defaultValue={facility?.location}
                                            placeholder="Location"
                                            className="pl-11 h-12 rounded-2xl border border-gray-200 bg-[#F8FCFB]"
                                        />

                                    </div>

                                </div>

                                <div>

                                    <Label className="mb-2 block text-sm font-semibold text-gray-700">
                                        Price Per Hour
                                    </Label>

                                    <div className="relative">

                                        <MdAttachMoney className="absolute left-4 top-1/2 -translate-y-1/2 text-[#2FA084] text-lg z-10" />

                                        <Input
                                            name="pricePerHour"
                                            type="number"
                                            defaultValue={facility?.pricePerHour}
                                            placeholder="1200"
                                            className="pl-11 h-12 rounded-2xl border border-gray-200 bg-[#F8FCFB]"
                                        />

                                    </div>

                                </div>

                                <div>

                                    <Label className="mb-2 block text-sm font-semibold text-gray-700">
                                        Capacity
                                    </Label>

                                    <div className="relative">

                                        <MdGroups className="absolute left-4 top-1/2 -translate-y-1/2 text-[#2FA084] text-lg z-10" />

                                        <Input
                                            name="capacity"
                                            type="number"
                                            defaultValue={facility?.capacity}
                                            placeholder="22"
                                            className="pl-11 h-12 rounded-2xl border border-gray-200 bg-[#F8FCFB]"
                                        />

                                    </div>

                                </div>

                                <div>

                                    <Label className="mb-2 block text-sm font-semibold text-gray-700">
                                        Owner Email
                                    </Label>

                                    <div className="relative">

                                        <MdEmail className="absolute left-4 top-1/2 -translate-y-1/2 text-[#2FA084] text-lg z-10" />

                                        <Input
                                            name="ownerEmail"
                                            type="email"
                                            defaultValue={facility?.ownerEmail}
                                            placeholder="owner@gmail.com"
                                            className="pl-11 h-12 rounded-2xl border border-gray-200 bg-[#F8FCFB]"
                                        />

                                    </div>

                                </div>

                                <div className="md:col-span-2">

                                    <Label className="mb-2 block text-sm font-semibold text-gray-700">
                                        Available Time Slots
                                    </Label>

                                    <div className="relative">

                                        <MdAccessTime className="absolute left-4 top-4 text-[#2FA084] text-lg z-10" />

                                        <textarea
                                            name="availableTimeSlots"
                                            defaultValue={facility?.availableTimeSlots}
                                            rows={4}
                                            placeholder="6AM, 8AM, 10AM"
                                            className="w-full rounded-2xl border border-gray-200 bg-[#F8FCFB] pl-11 pr-4 py-3 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#2FA084]/30 focus:border-[#2FA084]"
                                        />

                                    </div>

                                </div>

                                <div className="md:col-span-2">

                                    <Label className="mb-2 block text-sm font-semibold text-gray-700">
                                        Description
                                    </Label>

                                    <div className="relative">

                                        <MdDescription className="absolute left-4 top-4 text-[#2FA084] text-lg z-10" />

                                        <textarea
                                            name="description"
                                            defaultValue={facility?.description}
                                            rows={6}
                                            placeholder="Facility description..."
                                            className="w-full rounded-2xl border border-gray-200 bg-[#F8FCFB] pl-11 pr-4 py-3 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#2FA084]/30 focus:border-[#2FA084]"
                                        />

                                    </div>

                                </div>

                                <div className="md:col-span-2 flex justify-end gap-3 pt-2">

                                    <Button
                                        slot="close"
                                        variant="secondary"
                                        className="h-11 rounded-xl px-6"
                                    >
                                        Cancel
                                    </Button>

                                    <Button
                                        type="submit"
                                        className="h-11 rounded-xl bg-[#2FA084] px-7 font-semibold text-white hover:bg-[#247C68]"
                                    >
                                        Save Changes
                                    </Button>

                                </div>

                            </form>

                        </Modal.Body>

                    </Modal.Dialog>

                </Modal.Container>

            </Modal.Backdrop>

        </Modal>
    );
};

export default UpdateFacilities;