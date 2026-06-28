"use client";

import toast from "react-hot-toast";

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@heroui/modal";

import { Button } from "@heroui/button";
import { deleteProperty } from "@/lib/api/adminProperties";
import { useState } from "react";

const DeletePropertyModal = ({
  isOpen,
  onOpenChange,
  property,
  onSuccess,
}) => {
  const [loading, setLoading] = useState(false);

  const handleDelete = async () => {
    try {
      setLoading(true);

      await deleteProperty(property?._id);

      toast.success("Property deleted successfully.");

      onSuccess?.();
    } catch (error) {
      console.error(error);

      toast.error("Failed to delete property.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      placement="center"
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="text-danger">
              Delete Property
            </ModalHeader>

            <ModalBody>
              <div className="space-y-3">
                <h3 className="text-lg font-semibold">
                  {property?.title}
                </h3>

                <p className="text-default-500">
                  {property?.location}
                </p>

                <p className="text-sm text-danger">
                  Are you sure you want to permanently delete this
                  property? This action cannot be undone.
                </p>
              </div>
            </ModalBody>

            <ModalFooter>
              <Button
                variant="light"
                onPress={onClose}
              >
                Cancel
              </Button>

              <Button
                color="danger"
                isLoading={loading}
                onPress={async () => {
                  await handleDelete();
                  onClose();
                }}
              >
                Delete Property
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default DeletePropertyModal;