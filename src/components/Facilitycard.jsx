import Link from 'next/link';
import { MdLocationOn, MdPeople, MdAccessTime } from 'react-icons/md';

const FacilityCard = ({ facility }) => {
    const slots = facility.availableTimeSlots?.split(',').map(s => s.trim()) || [];

    return (
        <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">

            {/* Image */}
            <div className="relative h-48 overflow-hidden">
                <img
                    src={facility.image}
                    alt={facility.facilityName}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 bg-[#2FA084] text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {facility.facilityType}
                </span>
                <span className="absolute top-3 right-3 bg-white text-[#1F6F5F] text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                    ৳{facility.pricePerHour}/hr
                </span>
            </div>

            {/* Body */}
            <div className="p-4 space-y-3">

                <h3 className="font-bold text-gray-900 truncate">{facility.facilityName}</h3>

                {/* Location + Capacity */}
                <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                        <MdLocationOn className="text-[#2FA084] flex-shrink-0" />
                        <span className="truncate max-w-[140px]">{facility.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <MdPeople className="text-[#2FA084]" />
                        <span>Up to {facility.capacity}</span>
                    </div>
                </div>

                {/* Time slots */}
                <div>
                    <div className="flex items-center gap-1 text-xs text-gray-400 mb-1.5">
                        <MdAccessTime className="text-[#2FA084]" />
                        <span>Available slots</span>
                    </div>
                    <div className="flex flex-wrap gap-1">
                        {slots.slice(0, 4).map(slot => (
                            <span key={slot} className="text-xs bg-[#F5FBF9] text-[#1F6F5F] border border-[#2FA084]/20 px-2 py-0.5 rounded-lg font-medium">
                                {slot}
                            </span>
                        ))}
                        {slots.length > 4 && (
                            <span className="text-xs text-gray-400 px-1 py-0.5">+{slots.length - 4} more</span>
                        )}
                    </div>
                </div>

                <Link
                    href={`/facilities/${facility._id}`}
                    className="block w-full text-center py-2 rounded-xl text-sm font-semibold text-[#2FA084] border-2 border-[#2FA084] hover:bg-[#2FA084] hover:text-white transition-all duration-200"
                >
                    Book Now
                </Link>

            </div>
        </div>
    );
};

export default FacilityCard;