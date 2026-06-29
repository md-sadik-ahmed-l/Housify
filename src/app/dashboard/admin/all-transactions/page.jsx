

import AllTransactionsTable from "@/components/dashboard/adminDashboard/AllTransactionsTable";
import { getAdminBookingsProperties } from "@/lib/api/booking";

import React from "react";

const BookingRequestsPage = async () => {


  const bookingProperties = await getAdminBookingsProperties();

  console.log(bookingProperties);

  return (
    <div className="max-w-6xl mx-auto space-y-7 my-15">
      <div>
        <h1 className="text-2xl sm:text-4xl font-bold">Booking Transactions</h1>
        <p className="text-gray-400 mt-1">
          Manage Booking Transactions details for your website.
        </p>
      </div>

      <AllTransactionsTable bookingProperties={bookingProperties} />
    </div>
  );
};

export default BookingRequestsPage;
