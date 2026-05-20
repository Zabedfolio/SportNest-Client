'use client';

import FacilityCard from '@/components/Facilitycard';
import { useEffect, useState } from 'react';
import { MdSearch } from 'react-icons/md';

const AllFacilitiesPage = () => {
    const [facilities, setFacilities] = useState([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState('');

    useEffect(() => {
        fetch('http://localhost:5000/facilities')
            .then(res => res.json())
            .then(data => setFacilities(data))
            .finally(() => setLoading(false));
    }, []);

    const filtered = facilities.filter(f =>
        f.name?.toLowerCase().includes(search.toLowerCase()) ||
        f.location?.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="min-h-screen bg-[#F5FBF9]">

            {/* Header */}
            <div className="bg-white border-b border-gray-100 py-10">
                <div className="container mx-auto px-6 text-center space-y-4">
                    <h1 className="text-4xl font-black text-gray-900">
                        All <span className="text-[#2FA084]">Facilities</span>
                    </h1>
                    <p className="text-gray-500 text-sm max-w-md mx-auto">
                        Browse and book from our collection of top-quality sports venues.
                    </p>

                    {/* Search */}
                    <div className="relative max-w-md mx-auto mt-4">
                        <MdSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
                        <input
                            type="text"
                            placeholder="Search by name or location..."
                            value={search}
                            onChange={e => setSearch(e.target.value)}
                            className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 bg-[#F5FBF9] text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2FA084]/30 focus:border-[#2FA084] transition-all"
                        />
                    </div>
                </div>
            </div>

            {/* Grid */}
            <div className="container mx-auto px-6 py-10">
                {loading ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {Array.from({ length: 8 }).map((_, i) => (
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
                ) : filtered.length === 0 ? (
                    <div className="text-center py-20 space-y-3">
                        <p className="text-5xl">🏟️</p>
                        <p className="text-gray-500 font-medium">No facilities found.</p>
                        <button
                            onClick={() => setSearch('')}
                            className="text-sm text-[#2FA084] underline"
                        >
                            Clear search
                        </button>
                    </div>
                ) : (
                    <>
                        <p className="text-sm text-gray-400 mb-5">{filtered.length} facilities found</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            {filtered.map(facility => (
                                <FacilityCard key={facility._id} facility={facility} />
                            ))}
                        </div>
                    </>
                )}
            </div>

        </div>
    );
};

export default AllFacilitiesPage;