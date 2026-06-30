"use client";

import Link from "next/link";
import { Trash2, Pencil, MapPin, Building2 } from "lucide-react";

const MyPropertyTable = ({ properties = [] }) => {
  const getStatusBadge = (status) => {
    const base = "text-xs sm:text-sm font-medium px-3 py-1.5 rounded-full";

    switch (status?.toLowerCase()) {
      case "approved":
        return (
          <span className={`${base} bg-green-50 text-green-700`}>
            Approved
          </span>
        );

      case "rejected":
        return (
          <span className={`${base} bg-red-50 text-red-700`}>
            Rejected
          </span>
        );

      default:
        return (
          <span className={`${base} bg-amber-50 text-amber-700`}>
            Pending
          </span>
        );
    }
  };

  return (
    <div className="rounded-2xl border border-base-300 bg-base-100 overflow-hidden">
      {/* Header */}
      <div className="px-4 sm:px-6 py-5 border-b border-base-300 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-lg sm:text-xl font-medium">
            Listed Properties
          </h2>
          <p className="text-sm text-gray-400">
            Manage and track your active listings
          </p>
        </div>

        <span className="w-fit text-sm font-medium bg-blue-50 text-blue-800 px-3 py-2 rounded-xl">
          {properties.length} Properties
        </span>
      </div>

      {/* ================= Mobile & Tablet ================= */}
      <div className="lg:hidden p-4 space-y-4">
        {properties.length ? (
          properties.map((property) => (
            <div
              key={property._id}
              className="rounded-2xl border border-base-300 p-4 shadow-sm"
            >
              {/* Top */}
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
                  <Building2 className="text-blue-600" size={24} />
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-base truncate">
                    {property.title}
                  </h3>

                  <p className="text-xs text-gray-400 font-mono">
                    #{property._id.slice(-6)}
                  </p>
                </div>

                {getStatusBadge(property.status)}
              </div>

              {/* Info */}
              <div className="grid grid-cols-2 gap-4 mt-5 text-sm">
                <div>
                  <p className="text-gray-400 mb-1">Type</p>
                  <p>{property.propertyType}</p>
                </div>

                <div>
                  <p className="text-gray-400 mb-1">Price</p>
                  <p className="font-semibold text-[#dba736]">
                    ${property.price?.toLocaleString()}
                  </p>
                </div>

                <div className="col-span-2">
                  <p className="text-gray-400 mb-1">Location</p>

                  <div className="flex items-center gap-2">
                    <MapPin size={15} />
                    <span>{property.location}</span>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="grid grid-cols-2 gap-3 mt-5">
                <Link
                  href={`/dashboard/owner/properties/update/${property._id}`}
                  className="flex justify-center items-center gap-2 rounded-xl border border-blue-200 text-blue-600 py-3 hover:bg-blue-50 transition"
                >
                  <Pencil size={18} />
                  Edit
                </Link>

                <button className="flex justify-center items-center gap-2 rounded-xl border border-red-200 text-red-600 py-3 hover:bg-red-50 transition">
                  <Trash2 size={18} />
                  Delete
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="py-20 text-center">
            <Building2
              size={40}
              className="mx-auto text-gray-300 mb-3"
            />
            <p className="font-medium text-gray-500">
              No properties listed yet
            </p>
            <p className="text-xs text-gray-400 mt-1">
              Add your first property to get started.
            </p>
          </div>
        )}
      </div>

      {/* ================= Desktop Table ================= */}
      <div className="hidden lg:block overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-base-200 border-b border-base-300">
              {[
                "Property",
                "Type",
                "Location",
                "Price",
                "Status",
                "Actions",
              ].map((item, index) => (
                <th
                  key={item}
                  className={`px-5 py-4 text-left uppercase text-xs font-semibold tracking-wider text-gray-400 ${
                    index === 5 ? "text-center" : ""
                  }`}
                >
                  {item}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {properties.length ? (
              properties.map((property) => (
                <tr
                  key={property._id}
                  className="border-b border-base-200 hover:bg-base-50 transition last:border-0"
                >
                  {/* Property */}
                  <td className="px-5 py-5">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center">
                        <Building2
                          className="text-blue-600"
                          size={26}
                        />
                      </div>

                      <div>
                        <p className="font-medium text-lg">
                          {property.title}
                        </p>

                        <p className="text-xs text-gray-400 font-mono">
                          #{property._id.slice(-6)}
                        </p>
                      </div>
                    </div>
                  </td>

                  {/* Type */}
                  <td className="px-5 py-5">
                    <span className="border border-base-300 rounded-full px-3 py-2 text-sm">
                      {property.propertyType}
                    </span>
                  </td>

                  {/* Location */}
                  <td className="px-5 py-5">
                    <div className="flex items-center gap-2 text-gray-500">
                      <MapPin size={17} />
                      <span>{property.location}</span>
                    </div>
                  </td>

                  {/* Price */}
                  <td className="px-5 py-5">
                    <span className="font-semibold text-xl text-[#dba736]">
                      ${property.price?.toLocaleString()}
                    </span>
                  </td>

                  {/* Status */}
                  <td className="px-5 py-5">
                    {getStatusBadge(property.status)}
                  </td>

                  {/* Actions */}
                  <td className="px-5 py-5">
                    <div className="flex justify-center gap-3">
                      <Link
                        href={`/dashboard/owner/properties/update/${property._id}`}
                        className="p-3 rounded-xl border border-blue-200 text-blue-600 hover:bg-blue-50 transition"
                      >
                        <Pencil size={20} />
                      </Link>

                      <button className="p-3 rounded-xl border border-red-200 text-red-600 hover:bg-red-50 transition">
                        <Trash2 size={20} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={6}
                  className="py-24 text-center"
                >
                  <Building2
                    size={42}
                    className="mx-auto text-gray-300 mb-3"
                  />
                  <p className="font-medium text-gray-500">
                    No properties listed yet
                  </p>
                  <p className="text-sm text-gray-400 mt-1">
                    Add your first property to get started.
                  </p>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyPropertyTable;