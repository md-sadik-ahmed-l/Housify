"use client";

import React from "react";
import { Magnifier } from "@gravity-ui/icons";

export default function PropertyFilters({
  searchQuery,
  setSearchQuery,
  selectedType,
  setSelectedType,
}) {
  return (
    <div className="max-w-7xl mx-auto bg-zinc-900 p-6 rounded-3xl mb-8">

      <div className="grid md:grid-cols-2 gap-4">

        <div>
          <label className="block mb-2 text-zinc-400">
            Search Property
          </label>

          <div className="flex items-center bg-zinc-800 rounded-xl px-4">
            <Magnifier className="w-4 h-4 text-zinc-500" />

            <input
              type="text"
              placeholder="Search title or location..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-transparent outline-none p-3 text-white"
            />
          </div>
        </div>

        <div>
          <label className="block mb-2 text-zinc-400">
            Property Type
          </label>

          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="w-full bg-zinc-800 text-white p-3 rounded-xl"
          >
            <option value="all">All Types</option>
            <option value="Apartment">Apartment</option>
            <option value="Duplex">Duplex</option>
            <option value="Villa">Villa</option>
            <option value="Cottage">Cottage</option>
            <option value="Penthouse">Penthouse</option>
          </select>
        </div>

      </div>

    </div>
  );
}

