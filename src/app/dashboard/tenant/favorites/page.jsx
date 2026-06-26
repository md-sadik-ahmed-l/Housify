import React from "react";
import { getUserSession } from "@/lib/core/session";
import { MdCalendarMonth } from "react-icons/md";
import { Plus } from "lucide-react";
import Link from "next/link";
import FavoriteTable from "@/components/dashboard/TenantDashboard/FavoriteTable";
import { getFavoriteProperties } from "@/lib/api/favorite";


const FavoritePage = async () => {
  const user = await getUserSession();

  if (!user) return <div>Please login first</div>;

  const tenantUserId = user?.id;

  const properties = await getFavoriteProperties(tenantUserId);

  return (
    <div className="flex-1 bg-base-200 px-3 sm:px-6 py-7 sm:pt-15 pb-25 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Page header */}
        <div className="flex items-end justify-between mb-8">
          <div>
            <h1 className="text-2xl sm:text-4xl font-medium tracking-tight">
              Favorite Properties
            </h1>
          </div>
          <Link
            href="/all-properties"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2.5 rounded-xl transition-colors"
          >
            <Plus size={15} />
            Add Favorite Properties
          </Link>
        </div>

        {/* Content */}
        {properties?.length > 0 ? (
          <FavoriteTable properties={properties}/>
        ) : (
          <div className="flex flex-col items-center justify-center py-32 text-center">
            <div className="w-16 h-16 rounded-2xl bg-base-100 border border-base-300 flex items-center justify-center mb-5">
              <MdCalendarMonth className="text-3xl text-gray-400" />
            </div>
            <h3 className="text-lg font-medium mb-1">
              No Favorite properties listed yet
            </h3>
            <p className="text-sm text-gray-400 max-w-xs mb-7">
              You have not added any Favorite properties. Add your first listing to
              start renting.
            </p>
            <Link
              href="/all-properties"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-5 py-2.5 rounded-xl transition-colors"
            >
              <Plus size={15} />
              Add your Favorite property
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default FavoritePage;
