import { protectedFetch, serverFetch } from "../core/server";




export const getAdminAllProperties = async () => {
    return serverFetch("/api/admin/post-request/properties");
}


export const getAdminAllBookings = async () => {
    return protectedFetch("/api/admin/bookings/properties");
}