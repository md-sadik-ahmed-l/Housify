"use client";

import React, { useMemo, useState } from "react";
import PropertyCard from "./PropertyCard";
import PropertyFilters from "./PropertyFilters";

export default function AllPropertiesContainer({
  initialProperties,
  totalPages,
  currentPage,
}) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState("all");
  const [sortOrder, setSortOrder] = useState("");

  const filteredProperties = useMemo(() => {
    const filtered = initialProperties.filter((property) => {
      const matchesSearch =
        property.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        property.location?.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesType =
        selectedType === "all" || property.propertyType === selectedType;

      return matchesSearch && matchesType;
    });

    if (sortOrder === "lowToHigh") {
      filtered.sort((a, b) => a.price - b.price);
    }

    if (sortOrder === "highToLow") {
      filtered.sort((a, b) => b.price - a.price);
    }

    return filtered;
  }, [searchQuery, selectedType, sortOrder, initialProperties]);
  return (
    <>
      <PropertyFilters
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedType={selectedType}
        setSelectedType={setSelectedType}
        sortOrder={sortOrder}
        setSortOrder={setSortOrder}
      />

      <div className="max-w-7xl mx-auto mb-6 text-zinc-400">
        Showing {filteredProperties.length} Properties
      </div>

      {filteredProperties.length > 0 ? (
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProperties.map((property) => (

            <PropertyCard key={property._id} property={property} />

          ))}

          <div className="flex justify-center gap-3 mt-10">
            {Array.from({ length: totalPages }).map((_, index) => {
              const page = index + 1;

              return (
                <a
                  key={page}
                  href={`/all-properties?page=${page}`}
                  className={`px-4 py-2 rounded-lg ${
                    currentPage === page
                      ? "bg-blue-600 text-white"
                      : "bg-zinc-800 text-white"
                  }`}
                >
                  {page}
                </a>
              );
            })}
          </div>

        </div>

      ) : (

        <div className="max-w-7xl mx-auto text-center py-20 border border-dashed border-zinc-800 rounded-3xl">
          <p className="text-zinc-500">No properties found.</p>
        </div>
        
      )}
    </>
  );
}
