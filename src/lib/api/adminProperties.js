// import axiosSecure from "@/lib/core/axiosSecure";

import axiosSecure from "../core/axiosSecure";

// ==============================
// Get All Properties (Admin)
// ==============================
export const getAllProperties = async () => {
  try {
    const { data } = await axiosSecure.get("/admin/properties");
    return data;
  } catch (error) {
    console.error("Get Properties Error:", error);
    throw error;
  }
};

// ==============================
// Approve Property
// ==============================
export const approveProperty = async (id) => {
  try {
    const { data } = await axiosSecure.patch(
      `/admin/properties/${id}/approve`
    );
    return data;
  } catch (error) {
    console.error("Approve Property Error:", error);
    throw error;
  }
};

// ==============================
// Reject Property
// ==============================
export const rejectProperty = async (id, rejectionFeedback) => {
  try {
    const { data } = await axiosSecure.patch(
      `/admin/properties/${id}/reject`,
      {
        rejectionFeedback,
      }
    );

    return data;
  } catch (error) {
    console.error("Reject Property Error:", error);
    throw error;
  }
};

// ==============================
// Update Property
// ==============================
export const updateProperty = async (id, propertyData) => {
  try {
    const { data } = await axiosSecure.put(
      `/admin/properties/${id}`,
      propertyData
    );

    return data;
  } catch (error) {
    console.error("Update Property Error:", error);
    throw error;
  }
};

// ==============================
// Delete Property
// ==============================
export const deleteProperty = async (id) => {
  try {
    const { data } = await axiosSecure.delete(
      `/admin/properties/${id}`
    );

    return data;
  } catch (error) {
    console.error("Delete Property Error:", error);
    throw error;
  }
};