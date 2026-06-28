import { serverFetch } from "../core/server";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;


export const getProperties = async (page = 1, limit = 6, filters = {}) => {
  const { search = "", propertyType = "", sort = "" } = filters;

  const params = new URLSearchParams({
    page,
    limit,
    search,
    propertyType,
    sort,
  });

  return serverFetch(`/api/all-properties?${params.toString()}`);
};


export const getPropertyById = async (propertyId) => {
    return serverFetch(`/api/property/${propertyId}`);
}

export const getPropertiesProfile = async () => {
    return serverFetch("/api/profile/all-properties");
}



export const getOwnerProperties = async (userId) => {

    const res = await fetch(`${baseUrl}/api/properties?userId=${userId}`);

    return res.json();
    
}


export const getFeaturedProperties = async () => {

  return serverFetch(`/api/featured-properties`);

};



