'use server'

import { serverMutation } from "../core/server";




export const createBookingsData = async (newBookingData) => {
    return serverMutation('/api/property', newBookingData);
}