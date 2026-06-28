'use server'

import { serverMutation, serverPatch } from "../core/server";




export const createBookingsData = async (newBookingData) => {
    return serverMutation('/api/property', newBookingData);
}


export const patchStatusReject = async (id) => {
    return serverPatch(`/api/bookings/${id}/reject` );
}
export const patchStatusApprove = async (id) => {
    return serverPatch(`/api/bookings/${id}/approve` );
}

