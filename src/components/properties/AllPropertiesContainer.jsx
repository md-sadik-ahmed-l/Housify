"use client";

import React, { useState } from "react";
import PropertyCard from "./PropertyCard";
import PropertyFilters from "./PropertyFilters";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

export default function AllPropertiesContainer({
  initialProperties,
  totalPages,
  currentPage,
  currentSearch,
  currentType,
  currentSort,
}) {
  const router = useRouter();
  const pathname = usePathname();

  const [searchQuery, setSearchQuery] = useState(currentSearch || "");
  const [selectedType, setSelectedType] = useState(currentType || "all");
  const [sortOrder, setSortOrder] = useState(currentSort || "");

  // URL আপডেট করার function
  const applyFilters = ({ search, type, sort, page = 1 }) => {
    const params = new URLSearchParams();
    if (search) params.set("search", search);
    if (type && type !== "all") params.set("propertyType", type);
    if (sort) params.set("sort", sort);
    params.set("page", page);

    router.push(`${pathname}?${params.toString()}`);
  };

  const handleSearchChange = (value) => {
    setSearchQuery(value);
    applyFilters({ search: value, type: selectedType, sort: sortOrder });
  };

  const handleTypeChange = (value) => {
    setSelectedType(value);
    applyFilters({ search: searchQuery, type: value, sort: sortOrder });
  };

  const handleSortChange = (value) => {
    setSortOrder(value);
    applyFilters({ search: searchQuery, type: selectedType, sort: value });
  };

  return (
    <>
      <PropertyFilters
        searchQuery={searchQuery}
        setSearchQuery={handleSearchChange}
        selectedType={selectedType}
        setSelectedType={handleTypeChange}
        sortOrder={sortOrder}
        setSortOrder={handleSortChange}
      />

      <div className="max-w-7xl mx-auto mb-6 text-zinc-400">
        Showing {initialProperties.length} Properties
      </div>

      {initialProperties.length > 0 ? (
        <>
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {initialProperties.map((property) => (
              <PropertyCard key={property._id} property={property} />
            ))}
          </div>

          <div className="flex justify-center gap-3 mt-10">
            {Array.from({ length: totalPages }).map((_, index) => {
              const page = index + 1;
              const params = new URLSearchParams();
              if (currentSearch) params.set("search", currentSearch);
              if (currentType && currentType !== "all") params.set("propertyType", currentType);
              if (currentSort) params.set("sort", currentSort);
              params.set("page", page);

              return (
                <Link
                  key={page}
                  href={`${pathname}?${params.toString()}`}
                  className={`px-4 py-2 rounded-lg ${
                    currentPage === page
                      ? "bg-blue-600 text-white"
                      : "bg-zinc-800 text-white"
                  }`}
                >
                  {page}
                </Link>
              );
            })}
          </div>
        </>
      ) : (
        <div className="max-w-7xl mx-auto text-center py-20 border border-dashed border-zinc-800 rounded-3xl">
          <p className="text-zinc-500">No properties found.</p>
        </div>
      )}
    </>
  );
}