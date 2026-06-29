"use client";

import { User, CalendarDays, Home } from "lucide-react";

const AllTransactionsTable = ({ bookingProperties }) => {
  return (
    <div className=" rounded-3xl shadow-lg border border-gray-100 overflow-hidden">
      {/* Header */}
      <div className="bg-white/20 from-primary to-secondary text-white p-6">
        <h2 className="text-2xl font-bold">Booking Transactions Details</h2>
        <p className="text-sm opacity-90 mt-1">
          Manage tenant and Owner booking transactions details for your websites.
        </p>
      </div>

      {/* Table */}
      <div className="">
        <table className="table w-full ">
          <thead className="bg-gray-600 h-13">
            <tr className="text-white text-sm sm:text-xl">
              <th>Tenant</th>
              <th>Property</th>
              <th>Amount</th>
              <th>Transaction Date</th>
              <th>Owner info</th>
              <th className="text-center">Transaction ID</th>
            </tr>
          </thead>

          <tbody>
            {bookingProperties?.map((booking) => (
              <tr
                key={booking._id}
                className=" transition-colors border-b h-25 "
              >
                {/* Tenant */}
                <td>
                  <div className="flex items-center gap-3">
                    <div className="w-11 ml-2 h-11 rounded-full bg-gray-600 flex items-center justify-center">
                      <User size={27} className="text-primary " />
                    </div>

                    <div>
                      <p className="font-semibold text-xl text-gray-300">
                        {booking.tenantName}
                      </p>
                      <p className="text-xs text-gray-300 truncate max-w-[180px]">
                        {booking.phone}
                      </p>
                    </div>
                  </div>
                </td>

                {/* Property */}
                <td>
                  <div className="flex items-center gap-2">
                    <Home size={16} className="text-primary" />
                    <span className="font-medium">{booking.title}</span>
                  </div>
                </td>

                {/* Amount */}
                <td>
                  <span className="font-bold text-green-600 text-base">
                    $ {booking.totalPrice?.toLocaleString()}
                  </span>
                </td>

                {/* Date */}
                <td>
                  <div className="flex items-center gap-2 text-gray-300">
                    <CalendarDays size={15} />

                    {new Date(booking.bookedAt).toLocaleDateString("en-GB")}
                  </div>
                </td>

                {/* Status */}
                <td>
                  <div>{booking?.ownerId}</div>
                </td>

                {/* Actions */}
                {/* <td>
                  <div>
                    {booking?.sessionId}
                  </div>
                </td> */}
                <td className="max-w-[180px]">
                  <div className="break-all whitespace-normal">
                    {booking?.sessionId}
                  </div>
                </td>
              </tr>
            ))}

            {bookingProperties?.length === 0 && (
              <tr>
                <td colSpan={6}>
                  <div className="py-16 text-center">
                    <div className="text-5xl mb-3">📅</div>
                    <h3 className="font-semibold text-lg">
                      No Booking Transactions Requests
                    </h3>
                    <p className="text-gray-500 mt-1">
                      No tenant booking requests found yet.
                    </p>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllTransactionsTable;
