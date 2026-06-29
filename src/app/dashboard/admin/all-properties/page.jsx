
import AllPropertiesTable from "@/components/dashboard/adminDashboard/AllPropertiesTable";
import { getAdminAllProperties } from "@/lib/api/adminProperties";

import { getUserSession } from "@/lib/core/session";
import React from "react";

const BookingRequestsPage = async () => {
  const user = await getUserSession();

  if (!user) return <div>Please login first</div>;

  

  const postProperties = await getAdminAllProperties();

  console.log(postProperties);

  return (
    <div className="max-w-6xl mx-auto space-y-7 my-15">
      <div>
        <h1 className="text-2xl sm:text-4xl font-bold">All Properties</h1>
        <p className="text-gray-400 mt-1">
          Manage properties post requests for your website.
        </p>
      </div>

      <AllPropertiesTable postProperties={postProperties} />
    </div>
  );
};

export default BookingRequestsPage;
