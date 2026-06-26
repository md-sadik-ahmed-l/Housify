const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export const getOwnerBookingProperties = async (ownerId) => {
  const res = await fetch(
    `${baseUrl}/api/owner-booking/properties?ownerId=${ownerId}`,
  );

  return res.json();
};



export const getTenantBookingProperties = async (userId) => {
  const res = await fetch(
    `${baseUrl}/api/tenant-booking/properties?userId=${userId}`,
  );

  return res.json();
};
