import BookingRequestsTable from "@/components/dashboard/ownerDashboard/BookingRequestsTable";
import { getOwnerBookingProperties } from "@/lib/api/booking";
import { getUserSession } from "@/lib/core/session";
import React from "react";

const BookingRequestsPage = async () => {
  const user = await getUserSession();

  if (!user) return <div>Please login first</div>;

  const ownerId = user?.id;

  console.log(ownerId)

  const bookingProperties = await getOwnerBookingProperties(ownerId);

  console.log(bookingProperties);

  return (
    <div className="max-w-6xl mx-auto space-y-7 my-15">
      <div>
        <h1 className="text-2xl sm:text-4xl font-bold">Booking Requests</h1>
        <p className="text-gray-400 mt-1">
          Manage booking requests for your properties.
        </p>
      </div>

      <BookingRequestsTable bookingProperties={bookingProperties} />
    </div>
  );
};

export default BookingRequestsPage;
