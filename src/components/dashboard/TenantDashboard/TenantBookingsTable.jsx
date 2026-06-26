"use client";

import { Calendar, Trash2, DollarSign, Home } from "lucide-react";

const TenantBookingsTable = ({ bookings }) => {
  console.log(bookings);

  //   const getBookingStatusBadge = (status) => {
  //     switch (status?.toLowerCase()) {
  //       case "approved":
  //         return (
  //           <span className="badge badge-success text-white">
  //             Approved
  //           </span>
  //         );

  //       case "rejected":
  //         return (
  //           <span className="badge badge-error text-white">
  //             Rejected
  //           </span>
  //         );

  //       default:
  //         return (
  //           <span className="badge badge-warning">
  //             Pending
  //           </span>
  //         );
  //     }
  //   };

  //   const getPaymentStatusBadge = (status) => {
  //     switch (status?.toLowerCase()) {
  //       case "paid":
  //         return (
  //           <span className="badge badge-success text-white">
  //             Paid
  //           </span>
  //         );

  //       case "failed":
  //         return (
  //           <span className="badge badge-error text-white">
  //             Failed
  //           </span>
  //         );

  //       default:
  //         return (
  //           <span className="badge badge-info text-white">
  //             Unpaid
  //           </span>
  //         );
  //     }
  //   };

  return (
    <div className="overflow-hidden rounded-3xl border border-base-300 bg-base-100 shadow-lg">
      <div className="p-6 border-b border-base-300">
        <h2 className="text-2xl font-bold">Booking History</h2>
        <p className="text-base-content/70 mt-1">
          All your booking requests and payment details
        </p>
      </div>

      {bookings?.length === 0 ? (
        <div className="py-20 text-center">
          <h3 className="text-xl font-semibold">No Bookings Found</h3>
          <p className="text-base-content/60 mt-2">
            You have not booked any property yet.
          </p>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead className="">
              <tr className="bg-base-200 border-b border-base-300 ">
                {[
                  "Property Name",
                  "Move in Date",
                  "Amount Paid",
                  "Booking Status",
                  "Payment Status",
                  "Actions",
                ].map((h, i) => (
                  <th
                    key={h}
                    className={`px-4 py-4 text-left text-sm font-medium uppercase tracking-wider text-gray-300 ${
                      i === 5 ? "text-center" : ""
                    }`}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {bookings?.map((booking) => (
                <tr
                  key={booking._id}
                  className="border-b h-25 border-base-200 hover:bg-base-50 transition-colors last:border-0"
                >
                  <td className="">
                    <div className="flex ml-5 text-white items-center gap-3">
                      <Home size={25} />
                      <span className="font-medium text-xl">{booking?.title}</span>
                    </div>
                  </td>

                  <td>
                    <div className="flex ml-5 text-white items-center gap-2">
                      <Calendar size={16} />
                      {booking?.moveInDate}
                    </div>
                  </td>

                  <td>
                    <div className="flex ml-5 items-center gap-2 text-success font-semibold">
                      <DollarSign size={16} />
                      {booking?.totalPrice || 0}
                    </div>
                  </td>

                  <td>
                    <div className="ml-5">
                        {booking?.status}
                    </div>
                  </td>

                  <td className="">
                   
                    <div className="ml-10">
                        {booking?.paymentStatus || "Paid"}
                    </div>
                  </td>

                  <td>
                    <button className="p-2 sm:p-4 rounded-2xl border border-red-200 text-red-600 hover:bg-red-50 transition-colors">
                      <Trash2 size={24} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default TenantBookingsTable;
