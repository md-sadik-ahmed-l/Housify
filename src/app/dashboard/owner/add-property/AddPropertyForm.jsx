"use client";

import React, { useState } from "react";
import {
  Form,
  Fieldset,
  TextField,
  Select,
  Label,
  Input,
  TextArea,
  FieldError,
  Button,
  ListBox,
} from "@heroui/react";

import { createProperty } from "@/lib/actions/property";

export default function AddPropertyForm({ user }) {
  const [errors, setErrors] = useState({});
  const [imageFile, setImageFile] = useState(null);
  const [uploading, setUploading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const uploadToImgBB = async (file) => {
      const apiKey = process.env.NEXT_PUBLIC_IMAGE_UPLOAD_API;

      const formData = new FormData();
      formData.append("image", file);

      const res = await fetch(`https://api.imgbb.com/1/upload?key=${apiKey}`, {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (data.success) {
        return data.data.url;
      } else {
        throw new Error("Upload failed");
      }
    };

    const formData = new FormData(e.currentTarget);

    const data = Object.fromEntries(formData.entries());
    const amenities = formData.getAll("amenities");

    const newErrors = {};

    if (!data.title) newErrors.title = "Property title is required";
    if (!data.propertyType)
      newErrors.propertyType = "Property type is required";
    if (!data.price) newErrors.price = "Price is required";
    if (!data.location) newErrors.location = "Location is required";
    if (!data.description) newErrors.description = "Description is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});

    setUploading(true);

    let imageUrl = "";

    if (imageFile) {
      imageUrl = await uploadToImgBB(imageFile);
    }

    const userId = user?.id;

    const payload = {
      ...data,
      userId: userId,
      bedrooms: Number(data.bedrooms),
      bathrooms: Number(data.bathrooms),
      area: Number(data.area),
      price: Number(data.price),
      image: imageUrl,
      createdAt: new Date(),
      amenities,

      status: "active",
    };

    try {
      const result = await createProperty(payload);

      console.log(result);

      if (result?.success || result?.insertedId) {
        alert("Property Added Successfully!");
        e.target.reset();
      } else {
        alert("Failed to add property");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    } finally {
      setUploading(false);
    }
  };

  const inputClass =
    "w-full bg-[#1c1c1e] border border-zinc-800 rounded-lg h-12 px-3 text-white";

  const textareaClass =
    "w-full bg-[#1c1c1e] border border-zinc-800 rounded-lg p-3 text-white";

  const selectBoxClass = "w-full";

  const triggerClasses =
    "w-full bg-[#1c1c1e] border border-zinc-800 rounded-lg h-12 px-3 text-white flex items-center justify-between";

  const popoverClasses = "bg-[#1c1c1e] border border-zinc-800 rounded-lg p-1";

  const listItemClasses =
    "px-3 py-2 rounded-md text-white cursor-pointer hover:bg-zinc-800";

  return (
    <div className="min-h-screen bg-[#0d0d0e] text-white py-10 px-4">
      <div className="max-w-5xl mx-auto bg-[#121214] border border-zinc-900 rounded-xl p-8 shadow-xl">
        <div className="border-b border-zinc-800 pb-5 mb-8">
          <h1 className="text-3xl font-bold">Add New Property</h1>
          <p className="text-zinc-400 mt-2">
            Fill in the details below to list your property.
          </p>
        </div>

        <Form
          onSubmit={handleSubmit}
          validationErrors={errors}
          className="space-y-8"
        >
          <Fieldset className="space-y-6">
            <legend className="text-xl font-semibold border-b border-zinc-800 pb-2 mb-4">
              Basic Information
            </legend>

            <div className="grid md:grid-cols-2 gap-6">
              <TextField
                name="title"
                isInvalid={!!errors.title}
                className="w-full"
              >
                <Label className="text-white">Property Title</Label>
                <Input
                  placeholder="Luxury Apartment in Dhaka"
                  className={inputClass}
                />
                {errors.title && <FieldError>{errors.title}</FieldError>}
              </TextField>

              <Select
                className={selectBoxClass}
                name="propertyType"
                isInvalid={!!errors.propertyType}
              >
                <Label className="text-zinc-400 font-medium text-sm mb-1 block">
                  Property Type
                </Label>
                <Select.Trigger className={triggerClasses}>
                  <Select.Value />
                  <Select.Indicator />
                </Select.Trigger>
                {errors.propertyType && (
                  <FieldError>{errors.propertyType}</FieldError>
                )}
                <Select.Popover className={popoverClasses}>
                  <ListBox className="outline-none">
                    <ListBox.Item
                      id="Apartment"
                      className={listItemClasses}
                      textValue="Apartment"
                    >
                      Apartment
                    </ListBox.Item>
                    <ListBox.Item
                      id="Duplex"
                      className={listItemClasses}
                      textValue="Duplex"
                    >
                      Duplex
                    </ListBox.Item>
                    <ListBox.Item
                      id="Villa"
                      className={listItemClasses}
                      textValue="Villa"
                    >
                      Villa
                    </ListBox.Item>

                    <ListBox.Item
                      id="Cottage"
                      className={listItemClasses}
                      textValue="Cottage"
                    >
                      Cottage
                    </ListBox.Item>
                    <ListBox.Item
                      id="Penthouse"
                      className={listItemClasses}
                      textValue="Penthouse"
                    >
                      Penthouse
                    </ListBox.Item>
                  </ListBox>
                </Select.Popover>
              </Select>

            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <TextField name="price" isInvalid={!!errors.price}>
                <Label className="text-white">Price Per Year ($)</Label>
                <Input
                  type="number"
                  placeholder="25000"
                  className={inputClass}
                />
                {errors.price && <FieldError>{errors.price}</FieldError>}
              </TextField>

              <TextField name="location" isInvalid={!!errors.location}>
                <Label className="text-white">Location</Label>
                <Input placeholder="Banani, Dhaka" className={inputClass} />
                {errors.location && <FieldError>{errors.location}</FieldError>}
              </TextField>
            </div>
          </Fieldset>

          <Fieldset className="space-y-6">
            <legend className="text-xl font-semibold border-b border-zinc-800 pb-2 mb-4">
              Property Details
            </legend>

            <div className="grid md:grid-cols-3 gap-6">
              <TextField name="bedrooms">
                <Label className="text-white">Bedrooms</Label>
                <Input type="number" placeholder="3" className={inputClass} />
              </TextField>

              <TextField name="bathrooms">
                <Label className="text-white">Bathrooms</Label>
                <Input type="number" placeholder="2" className={inputClass} />
              </TextField>

              <TextField name="area">
                <Label className="text-white">Area (sq ft)</Label>
                <Input
                  type="number"
                  placeholder="1200"
                  className={inputClass}
                />
              </TextField>
            </div>
          </Fieldset>

          <Fieldset>
            <legend className="text-xl font-semibold border-b border-zinc-800 pb-2 mb-4">
              Amenities
            </legend>

            <div className="grid md:grid-cols-3 gap-4">
              {[
                "WiFi",
                "Parking",
                "Swimming Pool",
                "Gym",
                "Elevator",
                "Security",
                "Air Conditioning",
                "Pet Friendly",
                "Generator",
              ].map((item) => (
                <label
                  key={item}
                  className="flex items-center gap-2 text-zinc-300"
                >
                  <input type="checkbox" name="amenities" value={item} />
                  {item}
                </label>
              ))}
            </div>
          </Fieldset>

          <Fieldset>
            <legend className="text-xl font-semibold border-b border-zinc-800 pb-2 mb-4">
              Description
            </legend>

            <TextField name="description" isInvalid={!!errors.description}>
              <Label>Property Description</Label>
              <TextArea
                rows={5}
                placeholder="Describe your property..."
                className={textareaClass}
              />
              {errors.description && (
                <FieldError>{errors.description}</FieldError>
              )}
            </TextField>
          </Fieldset>

          <Fieldset>
            <legend className="text-xl font-semibold border-b border-zinc-800 pb-2 mb-4">
              House Rules
            </legend>

            <TextArea
              name="rules"
              rows={4}
              placeholder="Any special rules for tenants..."
              className={textareaClass}
            />
          </Fieldset>

          <Fieldset>
            <legend className="text-xl font-semibold border-b border-zinc-800 pb-2 mb-4">
              Property Images
            </legend>

            <input
              type="file"
              accept="image/*"
              className="block w-full text-sm text-zinc-400"
              onChange={(e) => setImageFile(e.target.files[0])}
            />
          </Fieldset>

          <Fieldset>
            <legend className="text-xl font-semibold border-b border-zinc-800 pb-2 mb-4">
              Availability
            </legend>

            <select
              name="availability"
              className="w-full bg-[#1c1c1e] border border-zinc-800 rounded-lg h-12 px-3"
            >
              <option value="available">Available</option>
              <option value="booked">Booked</option>
              <option value="maintenance">Maintenance</option>
            </select>
          </Fieldset>

          <div className="flex justify-end gap-4 pt-6 border-t border-zinc-800">
            <Button type="reset" variant="bordered" className="border-zinc-700">
              Reset
            </Button>

            <Button
              type="submit"
              className="bg-white text-black font-semibold"
              isDisabled={uploading}
            >
              {uploading ? "Uploading..." : "Add Property"}
            </Button>

            {/* <Button type="submit" className="bg-white text-black font-semibold">
              Add Property
            </Button> */}
          </div>
        </Form>
      </div>
    </div>
  );
}
