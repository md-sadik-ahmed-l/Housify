import { serverFetch } from "../core/server";




export const getAdminAllProperties = async () => {
    return serverFetch("/api/admin/post-request/properties");
}