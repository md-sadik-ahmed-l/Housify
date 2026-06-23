import AllPropertiesContainer from "@/components/properties/AllPropertiesContainer";
import { getProperties } from "@/lib/api/property";
import React from "react";

const AllPropertiesPage = async() => {

    const properties = await getProperties();
    // console.log(properties)
    // console.log("Type:", typeof properties);

  return (
    <div className="w-full min-h-screen bg-zinc-950 p-6 md:p-12 text-white">

      <div className="max-w-7xl mx-auto mb-10">

        <h1 className="text-4xl font-bold tracking-tight">Open Properties</h1>

        <p className="text-zinc-400 mt-2">
          Discover your next future House.
        </p>

      </div>

      <h1>{}</h1>

      <AllPropertiesContainer initialProperties={ properties || []}></AllPropertiesContainer>

    </div>
  );
};

export default AllPropertiesPage;
