"use client";

import { useState } from "react";
import RoleModal from "./RoleModal";

const UsersTable = ({ users }) => {
  const [selectedUser, setSelectedUser] = useState(null);

  const openModal = (user) => {
    setSelectedUser(user);
    document.getElementById("role_modal").showModal();
  };

  return (
    <>
      <div className="overflow-x-auto rounded-xl border">
        <table className="table w-full">
          <thead className=" text-2xl bg-gray-700">
            <tr className="h-15">
              <th>User</th>
              <th>Email</th>
              <th>Role</th>
              <th>Joined</th>
              <th></th>
            </tr>
          </thead>

          <tbody >
            {users.map((user) => (
              <tr key={user._id} >
                <td>
                  <div className="flex items-center gap-3 mt-5">

                    <div className="avatar ml-5 py-5">
                      <div className="w-16 rounded-full">
                        <img
                          src={
                            user.image ||
                            "https://i.ibb.co/4pDNDk1/avatar.png"
                          }
                          alt=""
                        />
                      </div>
                    </div>

                    <div>
                      <p className="font-semibold text-xl">
                        {user.name}
                      </p>
                    </div>

                  </div >
                </td>

                <td>
                    <span className="">
                        {user.email}
                    </span>
                </td>

                <td>
                  {user.role === "tenant" && (
                    <span className="badge badge-success py-2 px-3">
                      🟢 Tenant
                    </span>
                  )}

                  {user.role === "owner" && (
                    <span className="badge badge-info py-2 px-4">
                      🔵 Owner
                    </span>
                  )}

                  {user.role === "admin" && (
                    <span className="badge badge-error py-2 px-4">
                      🔴 Admin
                    </span>
                  )}
                </td>

                <td>
                  {new Date(user.createdAt).toLocaleDateString("en-GB")}
                  
                </td>

                <td>
                  <button
                    onClick={() => openModal(user)}
                    className="btn btn-primary btn-sm"
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
        selectedUser={selectedUser}
      />
    </>
  );
};

export default UsersTable;