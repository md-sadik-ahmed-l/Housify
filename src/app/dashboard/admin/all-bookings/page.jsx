

import AllBookingsTable from "@/components/dashboard/adminDashboard/AllBookingsTable";
import { getAdminAllBookings } from "@/lib/api/adminProperties";


import { getUserSession } from "@/lib/core/session";
import React from "react";

const BookingRequestsPage = async () => {

  const user = await getUserSession();

  if (!user) return <div>Please login first</div>;

  

  const bookingsProperties = await getAdminAllBookings();

  console.log(bookingsProperties);

  return (
    <div className="max-w-6xl mx-auto space-y-7 my-15">
      <div>
        <h1 className="text-2xl sm:text-4xl font-bold">All Properties</h1>
        <p className="text-gray-400 mt-1">
          Manage properties post requests for your website.
        </p>
      </div>

      <AllBookingsTable postProperties={bookingsProperties} />
    </div>
  );
};

export default BookingRequestsPage;
