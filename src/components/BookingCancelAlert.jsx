import { AlertDialog, Button } from "@heroui/react";
import { MdBlock } from "react-icons/md";

const BookingCancelAlert = ({bookingId}) => {

    const handleCancelBooking= async()=>{
        const res = await fetch(`http://localhost:5000/bookings/${bookingId}`, {
            method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
        });

        const data = await res.json();
        console.log(data);
    }
    return (
        <AlertDialog>
            <AlertDialog.Trigger>
                <button
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-2xl text-sm font-semibold border border-red-200 text-red-500 hover:bg-red-50 hover:border-red-300 transition-all duration-200"
            >
                <MdBlock size={15} />
                Cancel Booking
            </button>
            </AlertDialog.Trigger>
            
            <AlertDialog.Backdrop>
                <AlertDialog.Container>
                    <AlertDialog.Dialog className="sm:max-w-[400px]">
                        <AlertDialog.CloseTrigger />
                        <AlertDialog.Header>
                            <AlertDialog.Icon status="danger" />
                            <AlertDialog.Heading>Delete booking permanently?</AlertDialog.Heading>
                        </AlertDialog.Header>
                        <AlertDialog.Footer>
                            <Button slot="close" variant="tertiary">
                                Cancel
                            </Button>
                            <Button
                            onClick={handleCancelBooking}
                             slot="close" variant="danger">
                                Delete
                            </Button>
                        </AlertDialog.Footer>
                    </AlertDialog.Dialog>
                </AlertDialog.Container>
            </AlertDialog.Backdrop>
        </AlertDialog>
    );
};

export default BookingCancelAlert;