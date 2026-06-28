"use client";

import { patchStatusApprove, patchStatusReject } from "@/lib/actions/bookings";
import { CheckCircle, XCircle, User, CalendarDays, Home } from "lucide-react";

const BookingRequestsTable = ({ bookingProperties }) => {
  const handleApprove = async (id) => {
    try {
      const res = await patchStatusApprove(id);

      if (res.success) {
        window.location.reload();
      } else {
        alert(res.message);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleReject = async (id) => {
    try {
      const res = await patchStatusReject(id);

      if (res.success) {
        window.location.reload();
      } else {
        alert(res.message);
      }
    } catch (error) {
      console.error(error);
    }
  };

  console.log(bookingProperties?.tenantName);
  console.log(bookingProperties);

  const getStatusStyle = (status) => {
    switch (status) {
      case "approved":
        return "bg-green-100 text-green-700 border border-green-200";
      case "rejected":
        return "bg-red-100 text-red-700 border border-red-200";
      default:
        return "bg-amber-100 text-amber-700 border border-amber-200";
    }
  };

  return (
    <div className=" rounded-3xl shadow-lg border border-gray-100 overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary to-secondary text-white p-6">
        <h2 className="text-2xl font-bold">Booking Requests</h2>
        <p className="text-sm opacity-90 mt-1">
          Manage tenant booking requests for your properties
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
              <th>Move in Date</th>
              <th>Status</th>
              <th className="text-center">Actions</th>
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
                    
                    {new Date(booking.moveInDate).toLocaleDateString("en-GB")}
                  </div>
                </td>

                {/* Status */}
                <td>
                  <span
                    className={`px-3.5 py-2 rounded-full text-sm font-semibold capitalize ${getStatusStyle(
                      booking.status,
                    )}`}
                  >
                    {booking.status}
                  </span>
                </td>

                {/* Actions */}
                <td>
                  {booking.status === "pending" ? (
                    <div className="flex justify-center gap-4">
                      <button
                        onClick={() => handleApprove(booking._id)}
                        className="btn flex items-center gap-1 hover:cursor-pointer hover:bg-green-700 px-3 rounded-3xl btn-success btn-xl bg-green-500 text-white font-bold"
                      >
                        <CheckCircle size={16} />
                        <span>Approve</span>
                      </button>

                      <button
                        onClick={() => handleReject(booking._id)}
                        className="btn flex items-center px-4 gap-1 hover:cursor-pointer hover:bg-red-700 py-2 rounded-3xl btn-success btn-xl bg-red-500 text-white font-bold"
                      >
                        <XCircle size={16} />
                        <span>Reject</span>
                      </button>
                    </div>
                  ) : (
                    <span className="text-sm font-medium text-gray-500 capitalize">
                      {booking.status} ✓
                    </span>
                  )}
                </td>
              </tr>
            ))}

            {bookingProperties?.length === 0 && (
              <tr>
                <td colSpan={6}>
                  <div className="py-16 text-center">
                    <div className="text-5xl mb-3">📅</div>
                    <h3 className="font-semibold text-lg">
                      No Booking Requests
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

export default BookingRequestsTable;
