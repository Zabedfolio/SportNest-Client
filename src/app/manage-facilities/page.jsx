'use client';

import ManageFacilityCard from '@/components/Managefacilitycard';
import { useEffect, useState } from 'react';
import { MdSettings } from 'react-icons/md';

const ManageFacilitiesPage = () => {
    const [facilities, setFacilities] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchFacilities = async () => {
            try {
                const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/facilities`);
                const data = await res.json();
                setFacilities(data);
            } catch (error) {
                console.error('Failed to fetch facilities:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchFacilities();
    }, []);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <span className="loading loading-spinner loading-lg text-[#2FA084]" />
            </div>
        );
    }

    return (
        <div className="container mx-auto px-6 py-10">

            <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 bg-[#0F6E56] rounded-xl flex items-center justify-center text-white text-xl">
                    <MdSettings />
                </div>
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Manage Facilities</h1>
                    <p className="text-sm text-gray-500">{facilities.length} facilit{facilities.length === 1 ? 'y' : 'ies'} listed</p>
                </div>
            </div>

            {facilities.length === 0 ? (
                <div className="text-center py-20 text-gray-400">
                    <p className="text-lg font-medium">No facilities found.</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {facilities.map(facility => (
                        <ManageFacilityCard key={facility._id} facility={facility} />
                    ))}
                </div>
            )}

        </div>
    );
};

export default ManageFacilitiesPage;