'use client';

import FacilityCard from '@/components/Facilitycard';
import { useEffect, useState } from 'react';
import { MdSearch } from 'react-icons/md';

const FACILITY_TYPES = ['All', 'Football Turf', 'Cricket Ground', 'Badminton Court', 'Basketball Court', 'Swimming Pool', 'Tennis Court'];

const AllFacilitiesPage = () => {
    const [facilities, setFacilities] = useState([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState('');
    const [selectedType, setSelectedType] = useState('All');
    const [sortBy, setSortBy] = useState('default');

    const fetchFacilities = async (searchVal, typeVal) => {
        setLoading(true);
        const params = new URLSearchParams();
        if (searchVal) params.set('search', searchVal);
        if (typeVal && typeVal !== 'All') params.set('type', typeVal);

        const res = await fetch(`http://localhost:5000/facilities?${params.toString()}`);
        const data = await res.json();
        setFacilities(data);
        setLoading(false);
    };

    useEffect(() => {
        fetchFacilities('', 'All');
    }, []);

    useEffect(() => {
        fetchFacilities(search, selectedType);
    }, [selectedType]);

    useEffect(() => {
        const timer = setTimeout(() => {
            fetchFacilities(search, selectedType);
        }, 400);
        return () => clearTimeout(timer);
    }, [search]);

    const sorted = [...facilities].sort((a, b) => {
        if (sortBy === 'price-asc') return Number(a.pricePerHour) - Number(b.pricePerHour);
        if (sortBy === 'price-desc') return Number(b.pricePerHour) - Number(a.pricePerHour);
        if (sortBy === 'name') return a.facilityName.localeCompare(b.facilityName);
        return 0;
    });

    return (
        <div className="min-h-screen bg-[#F5FBF9]">

            <div className="bg-white border-b border-gray-100 py-10">
                <div className="container mx-auto px-6 text-center space-y-4">
                    <h1 className="text-4xl font-black text-gray-900">
                        All <span className="text-[#2FA084]">Facilities</span>
                    </h1>
                    <p className="text-gray-500 text-sm max-w-md mx-auto">
                        Browse and book from our collection of top-quality sports venues.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-3 max-w-2xl mx-auto mt-4">
                        <div className="relative flex-1">
                            <MdSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
                            <input
                                type="text"
                                placeholder="Search by facility name..."
                                value={search}
                                onChange={e => setSearch(e.target.value)}
                                className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 bg-[#F5FBF9] text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2FA084]/30 focus:border-[#2FA084] transition-all"
                            />
                        </div>
                        <select
                            value={sortBy}
                            onChange={e => setSortBy(e.target.value)}
                            className="px-4 py-3 rounded-xl border border-gray-200 bg-[#F5FBF9] text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#2FA084]/30 focus:border-[#2FA084] transition-all cursor-pointer appearance-none pr-10"
                            style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%236b7280' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 12px center' }}
                        >
                            <option value="default">Sort: Default</option>
                            <option value="price-asc">Price: Low to High</option>
                            <option value="price-desc">Price: High to Low</option>
                            <option value="name">Name: A–Z</option>
                        </select>
                    </div>

                    <div className="flex flex-wrap justify-center gap-2 mt-2">
                        {FACILITY_TYPES.map(type => (
                            <button
                                key={type}
                                onClick={() => setSelectedType(type)}
                                className={`px-4 py-1.5 rounded-full text-xs font-semibold border transition-all duration-200
                                    ${selectedType === type
                                        ? 'bg-[#2FA084] text-white border-[#2FA084]'
                                        : 'bg-white text-gray-600 border-gray-200 hover:border-[#2FA084] hover:text-[#2FA084]'
                                    }`}
                            >
                                {type}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

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
                ) : sorted.length === 0 ? (
                    <div className="text-center py-20 space-y-3">
                        <p className="text-5xl">🏟️</p>
                        <p className="text-gray-500 font-medium">No facilities found.</p>
                        <button
                            onClick={() => { setSearch(''); setSelectedType('All'); }}
                            className="text-sm text-[#2FA084] underline"
                        >
                            Clear filters
                        </button>
                    </div>
                ) : (
                    <>
                        <p className="text-sm text-gray-400 mb-5">{sorted.length} facilities found</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            {sorted.map(facility => (
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