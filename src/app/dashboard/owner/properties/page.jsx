import React from "react";
import { getOwnerProperties } from "@/lib/api/property";
import { getUserSession } from "@/lib/core/session";
import { MdCalendarMonth } from "react-icons/md";
import { Plus } from "lucide-react";
import Link from "next/link";
import MyPropertyTable from "@/components/dashboard/ownerDashboard/MyPropertyTable";

const OwnerPropertiesPage = async () => {
  const user = await getUserSession();

  if (!user) return <div>Please login first</div>;

  const properties = await getOwnerProperties(user.id);

  return (
    <div className="flex-1 bg-base-200 px-3 sm:px-6 py-7 sm:pt-15 pb-25 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Page header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
          <div>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight">
              My Properties
            </h1>
          </div>

          <Link
            href="/dashboard/owner/add-property"
            className="inline-flex w-full sm:w-auto justify-center items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-5 py-3 rounded-xl transition"
          >
            <Plus size={18} />
            Add Property
          </Link>
        </div>

        {/* Content */}
        {properties?.length > 0 ? (
          <MyPropertyTable properties={properties} />
        ) : (
          <div className="flex flex-col items-center justify-center py-32 text-center">
            <div className="w-16 h-16 rounded-2xl bg-base-100 border border-base-300 flex items-center justify-center mb-5">
              <MdCalendarMonth className="text-3xl text-gray-400" />
            </div>
            <h3 className="text-lg font-medium mb-1">
              No properties listed yet
            </h3>
            <p className="text-sm text-gray-400 max-w-xs mb-7">
              You have not added any properties. Create your first listing to
              start renting.
            </p>
            <Link
              href="/dashboard/owner/properties/add"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-5 py-2.5 rounded-xl transition-colors"
            >
              <Plus size={15} />
              Add your first property
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default OwnerPropertiesPage;
