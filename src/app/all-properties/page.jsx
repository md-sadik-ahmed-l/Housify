import AllPropertiesContainer from "@/components/properties/AllPropertiesContainer";
import { getProperties } from "@/lib/api/property";
import React from "react";

const AllPropertiesPage = async ({ searchParams }) => {
  const resolvedParams = await searchParams;

  const page = Number(resolvedParams.page) || 1;
  const search = resolvedParams.search || "";
  const propertyType = resolvedParams.propertyType || "";
  const sort = resolvedParams.sort || "";

  const response = await getProperties(page, 6, { search, propertyType, sort });
  const properties = response.data;

  return (
    <div className="w-full min-h-screen bg-zinc-950 p-6 md:p-12 text-white">
      <div className="max-w-7xl mx-auto mb-10">
        <h1 className="text-4xl font-bold tracking-tight">Open Properties</h1>
        <p className="text-zinc-400 mt-2">Discover your next future House.</p>
      </div>

      <AllPropertiesContainer
        initialProperties={properties}
        totalPages={response.totalPages}
        currentPage={page}
        currentSearch={search}
        currentType={propertyType}
        currentSort={sort}
      />
    </div>
  );
};

export default AllPropertiesPage;