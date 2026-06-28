"use client";

import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import { updateProperty } from "@/lib/api/adminProperties";


const propertyTypes = [
  "Apartment",
  "House",
  "Villa",
  "Studio",
  "Office",
  "Hostel",
];

const rentTypes = ["Monthly", "Weekly", "Daily"];

const UpdatePropertyModal = ({
  isOpen,
  onOpenChange,
  property,
  onSuccess,
}) => {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    location: "",
    propertyType: "",
    rent: "",
    rentType: "",
    bedrooms: "",
    bathrooms: "",
    propertySize: "",
    amenities: "",
    extraFeatures: "",
    image: "",
  });

  useEffect(() => {
    if (property) {
      setFormData({
        title: property.title || "",
        description: property.description || "",
        location: property.location || "",
        propertyType: property.propertyType || "",
        rent: property.rent || "",
        rentType: property.rentType || "",
        bedrooms: property.bedrooms || "",
        bathrooms: property.bathrooms || "",
        propertySize: property.propertySize || "",
        amenities: Array.isArray(property.amenities)
          ? property.amenities.join(", ")
          : property.amenities || "",
        extraFeatures: property.extraFeatures || "",
        image: property.image || "",
      });
    }
  }, [property]);

  const handleChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleUpdate = async () => {
    try {
      setLoading(true);

      const payload = {
        ...formData,
        rent: Number(formData.rent),
        bedrooms: Number(formData.bedrooms),
        bathrooms: Number(formData.bathrooms),
        propertySize: Number(formData.propertySize),
        amenities: formData.amenities
          .split(",")
          .map((item) => item.trim())
          .filter(Boolean),
      };

      await updateProperty(property?._id, payload);

      toast.success("Property Updated Successfully");

      onSuccess?.();
    } catch (error) {
      console.error(error);

      toast.error("Failed to update property");
    } finally {
      setLoading(false);
    }
  };

  return (
  <dialog
    className={`modal ${isOpen ? "modal-open" : ""}`}
  >
    <div className="modal-box max-w-5xl">

      <h3 className="font-bold text-2xl mb-5">
        Update Property
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

        <div>
          <label className="label">
            <span className="label-text">Property Title</span>
          </label>

          <input
            type="text"
            className="input input-bordered w-full"
            value={formData.title}
            onChange={(e) =>
              handleChange("title", e.target.value)
            }
          />
        </div>

        <div>
          <label className="label">
            <span className="label-text">Location</span>
          </label>

          <input
            type="text"
            className="input input-bordered w-full"
            value={formData.location}
            onChange={(e) =>
              handleChange("location", e.target.value)
            }
          />
        </div>

        <div>
          <label className="label">
            <span className="label-text">
              Property Type
            </span>
          </label>

          <select
            className="select select-bordered w-full"
            value={formData.propertyType}
            onChange={(e) =>
              handleChange(
                "propertyType",
                e.target.value
              )
            }
          >
            <option value="">Select</option>

            {propertyTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="label">
            <span className="label-text">
              Rent
            </span>
          </label>

          <input
            type="number"
            className="input input-bordered w-full"
            value={formData.rent}
            onChange={(e) =>
              handleChange("rent", e.target.value)
            }
          />
        </div>

        <div>
          <label className="label">
            <span className="label-text">
              Rent Type
            </span>
          </label>

          <select
            className="select select-bordered w-full"
            value={formData.rentType}
            onChange={(e) =>
              handleChange(
                "rentType",
                e.target.value
              )
            }
          >
            <option value="">Select</option>

            {rentTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="label">
            <span className="label-text">
              Bedrooms
            </span>
          </label>

          <input
            type="number"
            className="input input-bordered w-full"
            value={formData.bedrooms}
            onChange={(e) =>
              handleChange(
                "bedrooms",
                e.target.value
              )
            }
          />
        </div>

        <div>
          <label className="label">
            <span className="label-text">
              Bathrooms
            </span>
          </label>

          <input
            type="number"
            className="input input-bordered w-full"
            value={formData.bathrooms}
            onChange={(e) =>
              handleChange(
                "bathrooms",
                e.target.value
              )
            }
          />
        </div>

        <div>
          <label className="label">
            <span className="label-text">
              Property Size (sqft)
            </span>
          </label>

          <input
            type="number"
            className="input input-bordered w-full"
            value={formData.propertySize}
            onChange={(e) =>
              handleChange(
                "propertySize",
                e.target.value
              )
            }
          />
        </div>

      </div>

      <div className="mt-4">

        <label className="label">
          <span className="label-text">
            Description
          </span>
        </label>

        <textarea
          className="textarea textarea-bordered w-full"
          rows={4}
          value={formData.description}
          onChange={(e) =>
            handleChange(
              "description",
              e.target.value
            )
          }
        />

      </div>

      <div className="mt-4">

        <label className="label">
          <span className="label-text">
            Amenities
          </span>
        </label>

        <textarea
          className="textarea textarea-bordered w-full"
          rows={3}
          value={formData.amenities}
          onChange={(e) =>
            handleChange(
              "amenities",
              e.target.value
            )
          }
        />

      </div>

      <div className="mt-4">

        <label className="label">
          <span className="label-text">
            Extra Features
          </span>
        </label>

        <textarea
          className="textarea textarea-bordered w-full"
          rows={3}
          value={formData.extraFeatures}
          onChange={(e) =>
            handleChange(
              "extraFeatures",
              e.target.value
            )
          }
        />

      </div>

      <div className="mt-4">

        <label className="label">
          <span className="label-text">
            Image URL
          </span>
        </label>

        <input
          type="text"
          className="input input-bordered w-full"
          value={formData.image}
          onChange={(e) =>
            handleChange(
              "image",
              e.target.value
            )
          }
        />

      </div>

      <div className="modal-action">

        <button
          className="btn"
          onClick={() => onOpenChange(false)}
        >
          Cancel
        </button>

        <button
          className={`btn btn-primary ${
            loading ? "loading" : ""
          }`}
          disabled={loading}
          onClick={async () => {
            await handleUpdate();
            onOpenChange(false);
          }}
        >
          {loading
            ? "Updating..."
            : "Save Changes"}
        </button>

      </div>

    </div>

    <form
      method="dialog"
      className="modal-backdrop"
    >
      <button onClick={() => onOpenChange(false)}>
        close
      </button>
    </form>

  </dialog>
);
};

export default UpdatePropertyModal;