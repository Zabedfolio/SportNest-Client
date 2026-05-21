import MyBookingsClient from '@/components/MyBookingsClient';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';

// Server Component — fetches data, passes to client
const MyBookingsPage = async () => {
    const session = await auth.api.getSession({ headers: await headers() });
    const user = session?.user;

    const res = await fetch(`http://localhost:5000/bookings/${user?.id}`, { cache: 'no-store' });
    const data = await res.json();

    const bookings = data;

    return <MyBookingsClient bookings={bookings} />;
};

export default MyBookingsPage;