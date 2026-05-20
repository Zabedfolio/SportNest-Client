'use client';

import FacilityCard from '@/components/FacilityCard';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const FeaturedFacilities = () => {
    const [facilities, setFacilities] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchFacilities = async () => {
            try {
                const res = await fetch('http://localhost:5000/facilities'); 
                const data = await res.json();
                setFacilities(data);
            } catch (err) {
                console.error('Failed to fetch facilities:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchFacilities();
    }, []);

    return (
        <div className="min-h-screen bg-[#F5FBF9]">
            <div className="container mx-auto px-6 py-10">

                {loading ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {Array.from({ length: 4 }).map((_, i) => (
                            <div key={i} className="bg-white rounded-2xl overflow-hidden animate-pulse">
                                <div className="h-48 bg-gray-200" />
                                <div className="p-4 space-y-2">
                                    <div className="h-4 bg-gray-200 rounded w-3/4" />
                                    <div className="h-3 bg-gray-200 rounded w-1/2" />
                                    <div className="h-9 bg-gray-200 rounded-xl mt-3" />
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {facilities.slice(0, 6).map(facility => (  
                                <FacilityCard key={facility._id} facility={facility} />
                            ))}
                        </div>

                        <div className="flex justify-center mt-10">
                            <Link
                                href="/all-facilities"
                                className="px-8 py-3 rounded-xl bg-[#2FA084] text-white font-semibold hover:bg-[#25856d] transition-all duration-300 shadow-md hover:shadow-lg"
                            >
                                Explore All Facilities
                            </Link>
                        </div>
                    </>
                )}

            </div>
        </div>
    );
};

export default FeaturedFacilities;