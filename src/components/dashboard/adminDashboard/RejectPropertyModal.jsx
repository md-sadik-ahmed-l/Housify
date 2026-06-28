"use client";

import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@heroui/modal";

import { Button } from "@heroui/button";
import { Textarea } from "@heroui/input";

import { rejectProperty } from "@/lib/api/adminProperties";

const RejectPropertyModal = ({
  isOpen,
  onOpenChange,
  property,
  onSuccess,
}) => {
  const [feedback, setFeedback] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setFeedback(property?.rejectionFeedback || "");
    }
  }, [isOpen, property]);

  const handleReject = async () => {
    if (!feedback.trim()) {
      return toast.error("Please enter rejection feedback.");
    }

    try {
      setLoading(true);

      await rejectProperty(property._id, feedback);

      toast.success("Property rejected successfully.");

      onSuccess?.();
    } catch (error) {
      console.error(error);
      toast.error("Failed to reject property.");
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
            <ModalHeader>
              Reject Property
            </ModalHeader>

            <ModalBody>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold">
                    {property?.title}
                  </h3>

                  <p className="text-sm text-default-500">
                    {property?.location}
                  </p>
                </div>

                <Textarea
                  label="Rejection Feedback"
                  placeholder="Write the reason for rejection..."
                  minRows={5}
                  value={feedback}
                  onValueChange={setFeedback}
                />
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
                  await handleReject();
                  onClose();
                }}
              >
                Reject Property
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default RejectPropertyModal;