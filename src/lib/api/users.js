import { serverFetch } from "../core/server";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;


export const getAllUsersProfile = async () => {
    return serverFetch("/api/total/users");
}
