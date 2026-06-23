"use client";

import React, { useMemo, useState } from "react";
import PropertyCard from "./PropertyCard";
import PropertyFilters from "./PropertyFilters";

export default function AllPropertiesContainer({
  initialProperties,
}) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState("all");

  const filteredProperties = useMemo(() => {
    return initialProperties.filter((property) => {
      const matchesSearch =
        property.title
          ?.toLowerCase()
          .includes(searchQuery.toLowerCase()) ||
        property.location
          ?.toLowerCase()
          .includes(searchQuery.toLowerCase());

      const matchesType =
        selectedType === "all" ||
        property.propertyType === selectedType;

      return matchesSearch && matchesType;
    });
  }, [
    searchQuery,
    selectedType,
    initialProperties,
  ]);

  return (
    <>
      <PropertyFilters
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedType={selectedType}
        setSelectedType={setSelectedType}
      />

      <div className="max-w-7xl mx-auto mb-6 text-zinc-400">
        Showing {filteredProperties.length} Properties
      </div>

      {filteredProperties.length > 0 ? (
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {filteredProperties.map((property) => (
            <PropertyCard
              key={property._id}
              property={property}
            />
          ))}

        </div>
      ) : (
        <div className="max-w-7xl mx-auto text-center py-20 border border-dashed border-zinc-800 rounded-3xl">
          <p className="text-zinc-500">
            No properties found.
          </p>
        </div>
      )}
    </>
  );
}