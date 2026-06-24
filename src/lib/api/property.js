import { serverFetch } from "../core/server";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;


export const getProperties = async () =>{

    return serverFetch('/api/all-properties');

}


export const getPropertyById = async (propertyId) => {
    return serverFetch(`/api/property/${propertyId}`);
}



export const getOwnerProperties = async (userId) => {

    const res = await fetch(`${baseUrl}/api/properties?userId=${userId}`);

    return res.json();
    
}



