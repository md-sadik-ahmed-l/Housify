'use server'

import { serverDelete, serverPatch } from "../core/server";




// export const patchAdminStatusUpdate = async (id) => {
//     return serverDelete(`/api/admin/post-request/${id}/update` );
// }


export const deleteAdminBookings = async (id) => {
    return serverDelete(`/api/admin/bookings/${id}/delete` );
}




export const deleteAdminStatus = async (id) => {
    return serverDelete(`/api/admin/post-request/${id}/delete` );
}

export const patchAdminStatusReject = async (id) => {
    return serverPatch(`/api/admin/post-request/${id}/reject` );
}


export const patchAdminStatusApprove = async (id) => {
    return serverPatch(`/api/admin/post-request/${id}/approve` );
}

