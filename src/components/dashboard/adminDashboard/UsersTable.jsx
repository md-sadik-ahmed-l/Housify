"use client";

import { useState } from "react";
import RoleModal from "./RoleModal";

const UsersTable = ({ users }) => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [open, setOpen] = useState(false);

  const handleOpen = (user) => {
    setSelectedUser(user);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedUser(null);
  };

  return (
    <>
      <div className="overflow-x-auto rounded-xl border">
        <table className="table w-full">
          <thead className="bg-gray-700 text-white">
            <tr className="h-15">
              <th>User</th>
              <th>Email</th>
              <th>Role</th>
              <th>Joined</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody className="">
            {users.map((user) => (
              <tr key={user._id}>
                <td className="">
                  <div className="flex items-center gap-3 py-3 ">
                    <div className="avatar ">
                      <div className="w-20 rounded-full">
                        <img
                          src={
                            user.image ||
                            "https://i.ibb.co/4pDNDk1/avatar.png"

                          }
                          alt={user.name}
                          className="w-full"
                        />
                      </div>
                    </div>

                    <div>
                      <p className="font-semibold text-xl">{user.name}</p>
                    </div>
                  </div>
                </td>

                <td>{user.email}</td>

                <td>
                  {user.role === "tenant" && (
                    <span className="badge badge-success px-4 py-2 text-sm">
                      🟢 Tenant
                    </span>
                  )}

                  {user.role === "owner" && (
                    <span className="badge badge-info px-4 py-2 text-sm">
                      🔵 Owner
                    </span>
                  )}

                  {user.role === "admin" && (
                    <span className="badge badge-error px-4 py-2 text-sm">
                      🔴 Admin
                    </span>
                  )}
                </td>

                <td>
                  {new Date(user.createdAt).toLocaleDateString("en-GB")}
                </td>

                <td>
                  <button
                    className="btn btn-primary btn-sm border rounded-full bg-gray-700 hover:bg-gray-500 cursor-pointer px-4 py-2 font-medium"
                    onClick={() => handleOpen(user)}
                  >
                    Change Role
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <RoleModal
        open={open}
        onClose={handleClose}
        selectedUser={selectedUser}
      />
    </>
  );
};

export default UsersTable;