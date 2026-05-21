'use client';

import { authClient } from '@/lib/auth-client';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { MdCalendarMonth, MdAccessTime } from 'react-icons/md';

const BookingForm = ({ facilityName, slots, pricePerHour }) => {

    const { data: session } = authClient.useSession();
    const user = session?.user;

    const onSubmit = async (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        const bookingFormData = new FormData(form);
        const booking = Object.fromEntries(bookingFormData.entries());
        // console.log('Booking Data:', booking);
        const allBookingInfo = {
            ...booking,
            userId: user?.id,
            username: user?.name || user?.username,
            userImage: user?.image,
        };

        const res = await fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(allBookingInfo),
        });
        const data = await res.json();
        // console.log('Server Response:', data);
        form.reset();
        toast.success('Successfully Booked!');

        // console.log('Full Payload:', allBookingInfo);
    };

    const [hours, setHours] = useState('');

    const total = hours ? Number(pricePerHour) * Number(hours) : 0;

    return (
        <form onSubmit={onSubmit} className="space-y-4">

            <div className="space-y-1.5">
                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Facility</label>
                <input
                    type="text"
                    name="facilityName"
                    value={facilityName}
                    readOnly
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-sm text-gray-600 outline-none"
                />
            </div>

            <div className="space-y-1.5">
                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Date</label>
                <div className="relative">
                    <MdCalendarMonth className="absolute left-4 top-1/2 -translate-y-1/2 text-[#2FA084] text-lg" />
                    <input
                        type="date"
                        name="date"
                        className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 focus:border-[#2FA084] focus:ring-2 focus:ring-[#2FA084]/20 outline-none text-sm text-gray-700 transition-all"
                    />
                </div>
            </div>

            <div className="space-y-1.5">
                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Time Slot</label>
                <div className="relative">
                    <MdAccessTime className="absolute left-4 top-1/2 -translate-y-1/2 text-[#2FA084] text-lg" />
                    <select
                        name="slot"
                        className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 focus:border-[#2FA084] focus:ring-2 focus:ring-[#2FA084]/20 outline-none text-sm text-gray-700 appearance-none transition-all cursor-pointer"
                        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%236b7280' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 12px center' }}
                    >
                        <option disabled selected>Select a slot</option>
                        {slots.map(slot => (
                            <option key={slot} value={slot}>{slot}</option>
                        ))}
                    </select>
                </div>
            </div>

            <div className="space-y-1.5">
                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Hours</label>
                <input
                    type="number"
                    name="hours"
                    min="1"
                    placeholder="e.g. 2"
                    value={hours}
                    onChange={e => setHours(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#2FA084] focus:ring-2 focus:ring-[#2FA084]/20 outline-none text-sm text-gray-700 transition-all"
                />
            </div>

            <div className="bg-[#F5FBF9] rounded-2xl p-4 border border-[#2FA084]/10 flex items-center justify-between">
                <div>
                    <p className="text-xs text-gray-400">Total Price</p>
                    <p className="text-2xl font-black text-[#2FA084]">৳{total.toLocaleString()}</p>
                    <input type="hidden" name="totalPrice" value={total} />
                </div>
                {hours && (
                    <p className="text-xs text-gray-400 text-right">
                        ৳{pricePerHour} × {hours}hr
                    </p>
                )}
            </div>

            <button
                type="submit"
                className="w-full py-4 rounded-2xl bg-[#2FA084] hover:bg-[#278a72] text-white font-bold text-sm transition-all duration-200 shadow-md hover:shadow-lg"
            >
                Confirm Booking
            </button>

        </form>
    );
};

export default BookingForm;