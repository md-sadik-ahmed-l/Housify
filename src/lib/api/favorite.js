

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;





export const getFavoriteProperties = async (tenantUserId) => {

    const res = await fetch(`${baseUrl}/api/favorite/properties?tenantUserId=${tenantUserId}`);

    return res.json();
    
}



