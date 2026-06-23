import { serverFetch } from "../core/server";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;


export const getProperties = async () =>{

    return serverFetch('/api/all-properties');
    
}


export const getOwnerProperties = async (ownerId) => {

    const res = await fetch(`${baseUrl}/api/properties?ownerId=${ownerId}`);

    return res.json();
    
}