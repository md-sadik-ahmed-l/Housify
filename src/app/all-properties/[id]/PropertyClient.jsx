"use client";

import BookingModal from "@/components/detailsPage/BookingModal";
import FavoriteButton from "@/components/detailsPage/FavoriteButton";
import ReviewSection from "@/components/detailsPage/ReviewSection";
import { useState } from "react";
import { LocationArrowFill } from "@gravity-ui/icons";

const PropertyClient = ({ property, user }) => {
  const [open, setOpen] = useState(false);

  //   console.log(user?.role)

  const userRole = user?.role;

  console.log(userRole);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      {/* Hero Image */}
      <div className="overflow-hidden rounded-3xl shadow-lg">
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-[500px] object-cover"
        />
      </div>

      {/* Header */}
      <div className="mt-8 flex flex-col lg:flex-row justify-between gap-6">
        <div>
          <span className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
            {property.propertyType}
          </span>

          <h1 className="text-4xl font-bold mt-3 text-gray-900">
            {property.title}
          </h1>

          <p className="flex items-center gap-1 text-gray-600 mt-2 text-lg">
            <LocationArrowFill /> {property.location}
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-2xl p-6 min-w-[300px]">
          <p className="text-gray-500 text-sm">Yearly Rent</p>

          <h2 className="text-4xl font-bold text-blue-600 mt-1">
            ${property.price.toLocaleString()}
          </h2>

          {user?.role === "tenant" && (
            <div className="flex gap-3 mt-5">
              <FavoriteButton propertyId={property._id} />

              <button
                onClick={() => setOpen(true)}
                className="flex-1 bg-blue-600 hover:bg-blue-700 transition text-white py-3 rounded-xl font-semibold"
              >
                Book Property
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Property Stats */}
      <div className="grid md:grid-cols-4 gap-4 mt-10">
        <div className="bg-white shadow rounded-2xl p-5 text-center">
          <h3 className="text-2xl font-bold">{property.bedrooms}</h3>
          <p className="text-gray-500">Bedrooms</p>
        </div>

        <div className="bg-white shadow rounded-2xl p-5 text-center">
          <h3 className="text-2xl font-bold">{property.bathrooms}</h3>
          <p className="text-gray-500">Bathrooms</p>
        </div>

        <div className="bg-white shadow rounded-2xl p-5 text-center">
          <h3 className="text-2xl font-bold">{property.area}</h3>
          <p className="text-gray-500">Sq Ft</p>
        </div>

        <div className="bg-white shadow rounded-2xl p-5 text-center">
          <h3 className="text-2xl font-bold capitalize">
            {property.availability}
          </h3>
          <p className="text-gray-500">Status</p>
        </div>
      </div>

      {/* Description & Amenities */}
      <div className="grid lg:grid-cols-3 gap-8 mt-12">
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-white shadow rounded-2xl p-6">
            <h2 className="text-2xl font-bold mb-4">Property Description</h2>

            <p className="text-gray-700 leading-8">{property.description}</p>
          </div>

          <div className="bg-white shadow rounded-2xl p-6">
            <h2 className="text-2xl font-bold mb-4">Amenities</h2>

            <div className="grid md:grid-cols-2 gap-3">
              {property.amenities?.map((item, index) => (
                <div key={index} className="bg-gray-100 rounded-lg px-4 py-3">
                  ✓ {item}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white shadow rounded-2xl p-6">
            <h2 className="text-2xl font-bold mb-4">House Rules</h2>

            <p className="text-gray-700">{property.rules}</p>
          </div>
        </div>

        {/* Sidebar */}
        <div>
          <div className="bg-white shadow rounded-2xl p-6 sticky top-24">
            <h3 className="text-xl font-bold mb-4">Property Information</h3>

            <div className="space-y-3 text-gray-700">
              <div className="flex justify-between">
                <span>Type</span>
                <span>{property.propertyType}</span>
              </div>

              <div className="flex justify-between">
                <span>Location</span>
                <span>{property.location}</span>
              </div>

              <div className="flex justify-between">
                <span>Status</span>
                <span className="capitalize">{property.status}</span>
              </div>

              <div className="flex justify-between">
                <span>Availability</span>
                <span className="capitalize">{property.availability}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Reviews */}
      <div className="mt-12">
        <ReviewSection propertyId={property._id} />
      </div>

      {/* Booking Modal */}
      <BookingModal
        open={open}
        onClose={() => setOpen(false)}
        property={property}
        user={user}
      />
    </div>
  );
};

export default PropertyClient;
