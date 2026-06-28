import axiosInstance from "../core/axios";
import { serverFetch } from "../core/server";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;


export const getAllUsersProfile = async () => {
    return serverFetch("/api/total/users");
}


export const getAllUsers = async () => {
  const { data } = await axiosInstance.get("/api/users");
  return data;
};

export const updateUserRole = async (id, role) => {
  const { data } = await axiosInstance.patch(`/api/users/${id}/role`, {
    role,
  });

  return data;
};

