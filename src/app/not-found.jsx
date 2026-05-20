import Link from 'next/link';

const NotFound = () => {
    return (
        <div className="min-h-screen bg-[#F5FBF9] flex items-center justify-center px-6">
            <div className="text-center space-y-6 max-w-md">

                {/* Big 404 */}
                <div className="relative">
                    <p className="text-[160px] font-black leading-none text-[#2FA084]/10 select-none">
                        404
                    </p>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-6xl">🏟️</div>
                    </div>
                </div>

                {/* Text */}
                <div className="space-y-2">
                    <h1 className="text-2xl font-black text-gray-900">
                        Out of Bounds!
                    </h1>
                    <p className="text-gray-500 text-sm leading-relaxed">
                        Looks like this page went off the field. The venue you're looking for doesn't exist or has been moved.
                    </p>
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
                    <Link
                        href="/"
                        className="px-6 py-3 rounded-xl bg-[#2FA084] text-white text-sm font-semibold hover:bg-[#278a72] transition-colors duration-200"
                    >
                        Back to Home
                    </Link>
                    <Link
                        href="/all-facilities"
                        className="px-6 py-3 rounded-xl border-2 border-[#2FA084] text-[#2FA084] text-sm font-semibold hover:bg-[#2FA084] hover:text-white transition-all duration-200"
                    >
                        Browse Facilities
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default NotFound;