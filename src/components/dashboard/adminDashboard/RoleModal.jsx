"use client";

import { useEffect, useState } from "react";
import { updateUserRole } from "@/lib/api/users";
import { toast } from "react-hot-toast";

const RoleModal = ({ selectedUser }) => {
  const [role, setRole] = useState("");

  if (!selectedUser) return null;

  const handleSubmit = async () => {
    try {
      await updateUserRole(selectedUser._id, role);

      toast.success("Role updated successfully");

      document.getElementById("role_modal").close();

      window.location.reload();
    } catch (err) {
      toast.error("Failed to update role");
    }
  };

//   const [role, setRole] = useState("");

//   useEffect(() => {
//     if (selectedUser) {
//       setRole(selectedUser.role);
//     }
//   }, [selectedUser]);

  return (
    <dialog id="role_modal" className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-xl">Change User Role</h3>

        <div className="mt-5 space-y-5">
          <div>
            <p className="font-semibold">{selectedUser.name}</p>

            <p className="text-sm text-gray-500">{selectedUser.email}</p>
          </div>

          <div>
            <p className="font-medium">Current Role :</p>

            <p className="capitalize">{selectedUser.role}</p>
          </div>

          <div>
            <p className="font-medium mb-2">Select New Role</p>

            <div className="space-y-2">
              <label className="flex gap-2 items-center cursor-pointer">
                <input
                  type="radio"
                  name="role"
                  value="tenant"
                  checked={role === "tenant"}
                  onChange={(e) => setRole(e.target.value)}
                />
                Tenant
              </label>

              <label className="flex gap-2 items-center cursor-pointer">
                <input
                  type="radio"
                  name="role"
                  value="owner"
                  checked={role === "owner"}
                  onChange={(e) => setRole(e.target.value)}
                />
                Owner
              </label>

              <label className="flex gap-2 items-center cursor-pointer">
                <input
                  type="radio"
                  name="role"
                  value="admin"
                  checked={role === "admin"}
                  onChange={(e) => setRole(e.target.value)}
                />
                Admin
              </label>
            </div>
          </div>
        </div>

        <div className="modal-action">
          <form method="dialog">
            <button className="btn">Cancel</button>
          </form>

          <button
            onClick={handleSubmit}
            className="btn btn-primary"
            disabled={!role || role === selectedUser.role}
          >
            Update
          </button>
        </div>
      </div>
    </dialog>
  );
};

export default RoleModal;
