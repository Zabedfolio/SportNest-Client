'use client';

import React from 'react';
import { MdDeleteForever } from 'react-icons/md';
import { AlertDialog, Button } from "@heroui/react";

const DeleteAlert = ({ facility }) => {
    const {_id,facilityName} = facility;


    const handleDelete = async()=>{
        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/facilities/${_id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
            },      
        });
        const data = await res.json();
        console.log(data);
        if (res.ok) {
        window.location.reload();
    }
    }
    return (
        <AlertDialog>

            <AlertDialog.Trigger>
                <button className="px-5 py-2 rounded-xl text-sm font-semibold text-red-500 border-2 border-red-400 hover:bg-red-500 hover:text-white transition-all duration-200">
                    Delete
                </button>
            </AlertDialog.Trigger>

            <AlertDialog.Backdrop className="bg-black/40 backdrop-blur-sm">

                <AlertDialog.Container>

                    <AlertDialog.Dialog className="max-w-md overflow-hidden rounded-[32px] border border-white/20 bg-white shadow-2xl">

                        <div className="p-8 text-center">

                            <div className="mx-auto size-20 rounded-full bg-red-100 flex items-center justify-center">
                                <MdDeleteForever className="text-5xl text-red-500" />
                            </div>

                            <h2 className="mt-6 text-2xl font-black text-gray-900">
                                Delete Facility?
                            </h2>

                            <p className="mt-3 text-sm leading-6 text-gray-500">
                                This action will permanently remove <span className='font-bold text-black'>{facilityName}</span> and all associated booking data.
                                This cannot be undone.
                            </p>

                            <div className="mt-8 flex items-center justify-center gap-3">

                                <Button
                                    slot="close"
                                    variant="secondary"
                                    className="h-11 rounded-xl px-6"
                                >
                                    Cancel
                                </Button>

                                <Button onClick={handleDelete}
                                    slot="close"
                                    variant="danger"
                                    className="h-11 rounded-xl px-6 font-semibold"
                                >
                                    Delete Now
                                </Button>

                            </div>

                        </div>

                    </AlertDialog.Dialog>

                </AlertDialog.Container>

            </AlertDialog.Backdrop>

        </AlertDialog>
    );
};

export default DeleteAlert;