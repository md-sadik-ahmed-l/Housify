"use client";

import { useEffect, useMemo, useState } from "react";
import toast from "react-hot-toast";

import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Button,
  Chip,
  Spinner,
  Avatar,
} from "@heroui/react";

import { getAllProperties, approveProperty } from "@/lib/api/adminProperties";

import RejectPropertyModal from "./RejectPropertyModal";
import UpdatePropertyModal from "./UpdatePropertyModal";
import DeletePropertyModal from "./DeletePropertyModal";

const columns = [
  { name: "IMAGE", uid: "image" },
  { name: "PROPERTY", uid: "property" },
  { name: "OWNER", uid: "owner" },
  { name: "LOCATION", uid: "location" },
  { name: "TYPE", uid: "type" },
  { name: "RENT", uid: "rent" },
  { name: "STATUS", uid: "status" },
  { name: "ACTION", uid: "action" },
];

const AllPropertiesTable = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  const [selectedProperty, setSelectedProperty] = useState(null);

  const [rejectOpen, setRejectOpen] = useState(false);
  const [updateOpen, setUpdateOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);

  // -------------------------
  // Load Properties
  // -------------------------

  const loadProperties = async () => {
    try {
      setLoading(true);

      const data = await getAllProperties();

      setProperties(data);
    } catch (error) {
      console.error(error);

      toast.error("Failed to load properties");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadProperties();
  }, []);

  // -------------------------
  // Approve Property
  // -------------------------

  const handleApprove = async (id) => {
    try {
      await approveProperty(id);

      toast.success("Property Approved");

      loadProperties();
    } catch (error) {
      console.error(error);

      toast.error("Approval Failed");
    }
  };

  // -------------------------
  // Status Badge
  // -------------------------

  const renderStatus = (status) => {
    switch (status) {
      case "Approved":
        return (
          <Chip color="success" variant="flat">
            Approved
          </Chip>
        );

      case "Rejected":
        return (
          <Chip color="danger" variant="flat">
            Rejected
          </Chip>
        );

      default:
        return (
          <Chip color="warning" variant="flat">
            Pending
          </Chip>
        );
    }
  };

  const rows = useMemo(() => properties, [properties]);

  if (loading) {
    return (
      <div className="flex justify-center py-20">
        <Spinner size="lg" />
      </div>
    );
  } // -------------------------
  // Render Cell
  // -------------------------

  const renderCell = (property, columnKey) => {
    switch (columnKey) {
      case "image":
        return (
          <Avatar src={property.image} radius="md" className="w-14 h-14" />
        );

      case "property":
        return (
          <div className="flex flex-col">
            <p className="font-semibold">{property.title}</p>

            <p className="text-xs text-default-500">{property._id}</p>
          </div>
        );

      case "owner":
        return (
          <div className="flex flex-col">
            <p className="font-medium">{property.ownerName}</p>

            <p className="text-xs text-default-500">{property.ownerEmail}</p>
          </div>
        );

      case "location":
        return property.location;

      case "type":
        return property.propertyType;

      case "rent":
        return `$${property.rent}`;

      case "status":
        return renderStatus(property.status);

      case "action":
        return (
          <div className="flex flex-wrap gap-2">
            {/* Approve */}

            <Button
              size="sm"
              color="success"
              variant="flat"
              isDisabled={property.status === "Approved"}
              onPress={() => handleApprove(property._id)}
            >
              Approve
            </Button>

            {/* Reject */}

            <Button
              size="sm"
              color="warning"
              variant="flat"
              onPress={() => {
                setSelectedProperty(property);
                setRejectOpen(true);
              }}
            >
              Reject
            </Button>

            {/* Update */}

            <Button
              size="sm"
              color="primary"
              variant="flat"
              onPress={() => {
                setSelectedProperty(property);
                setUpdateOpen(true);
              }}
            >
              Update
            </Button>

            {/* Delete */}

            <Button
              size="sm"
              color="danger"
              variant="flat"
              onPress={() => {
                setSelectedProperty(property);
                setDeleteOpen(true);
              }}
            >
              Delete
            </Button>
          </div>
        );

      default:
        return property[columnKey];
    }
  };

  // -------------------------
  // Return
  // -------------------------

  return (
    <>
      <Table aria-label="All Properties Table" removeWrapper>
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn key={column.uid}>{column.name}</TableColumn>
          )}
        </TableHeader>

        <TableBody items={rows} emptyContent="No properties found.">
          {(item) => (
            <TableRow key={item._id}>
              {(columnKey) => (
                <TableCell>{renderCell(item, columnKey)}</TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>{" "}
      {/* Reject Modal */}
      <RejectPropertyModal
        isOpen={rejectOpen}
        onOpenChange={setRejectOpen}
        property={selectedProperty}
        onSuccess={() => {
          setRejectOpen(false);
          loadProperties();
        }}
      />
      {/* Update Modal */}
      <UpdatePropertyModal
        isOpen={updateOpen}
        onOpenChange={setUpdateOpen}
        property={selectedProperty}
        onSuccess={() => {
          setUpdateOpen(false);
          loadProperties();
        }}
      />
      {/* Delete Modal */}
      <DeletePropertyModal
        isOpen={deleteOpen}
        onOpenChange={setDeleteOpen}
        property={selectedProperty}
        onSuccess={() => {
          setDeleteOpen(false);
          loadProperties();
        }}
      />
    </>
  );
};

export default AllPropertiesTable;
