"use client";

import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { updateUserRole } from "@/lib/api/users";

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@heroui/modal";

import { Button } from "@heroui/button";

import { RadioGroup, Radio } from "@heroui/radio";

const RoleModal = ({
  open,
  onClose,
  selectedUser,
}) => {
  const [role, setRole] = useState("");

  useEffect(() => {
    if (selectedUser) {
      setRole(selectedUser.role);
    }
  }, [selectedUser]);

  const handleSubmit = async () => {
    try {
      await updateUserRole(selectedUser._id, role);

      toast.success("Role updated successfully");

      onClose();

      window.location.reload();
    } catch (err) {
      toast.error("Failed to update role");
    }
  };

  if (!selectedUser) return null;

  return (
    <Modal
      isOpen={open}
      onOpenChange={(isOpen) => {
        if (!isOpen) onClose();
      }}
      placement="center"
    >
      <ModalContent className="text-white border bg-gray-800 rounded-2xl">
        <ModalHeader className="text-2xl">
          Change User Role
        </ModalHeader>

        <ModalBody>
          <div className="space-y-5">
            <div>
              <h3 className="font-semibold text-lg">
                {selectedUser.name}
              </h3>

              <p className="text-sm text-gray-500">
                {selectedUser.email}
              </p>
            </div>

            <div>
              <p className="font-semibold">
                Current Role
              </p>

              <p className="capitalize">
                {selectedUser.role}
              </p>
            </div>

            <RadioGroup
              label="Select New Role"
              value={role}
              onValueChange={setRole}
            >
              <Radio value="tenant" className="text-xl">
                Tenant
              </Radio>

              <Radio value="owner" className="text-xl">
                Owner
              </Radio>
            </RadioGroup>
          </div>
        </ModalBody>

        <ModalFooter>
          <Button
            variant="light"
            onPress={onClose}
            className="border rounded-2xl cursor-pointer hover:bg-gray-500 hover:shadow-2xl"
          >
            Cancel
          </Button>

          <Button
            color="primary"
            onPress={handleSubmit}
            isDisabled={
              !role ||
              role === selectedUser.role
            }
            className="border rounded-2xl cursor-pointer hover:bg-gray-500"
          >
            Update Role
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default RoleModal;