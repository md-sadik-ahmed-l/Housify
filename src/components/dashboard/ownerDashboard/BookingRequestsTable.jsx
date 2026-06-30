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

  const ActionButtons = ({ booking }) =>
    booking.status === "pending" ? (
      <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
        <button
          onClick={() => handleApprove(booking._id)}
          className="btn flex items-center gap-1 hover:cursor-pointer hover:bg-green-700 px-3 rounded-3xl btn-success btn-sm sm:btn-md bg-green-500 text-white font-bold"
        >
          <CheckCircle size={16} />
          <span>Approve</span>
        </button>

        <button
          onClick={() => handleReject(booking._id)}
          className="btn flex items-center px-3 gap-1 hover:cursor-pointer hover:bg-red-700 py-2 rounded-3xl btn-sm sm:btn-md bg-red-500 text-white font-bold"
        >
          <XCircle size={16} />
          <span>Reject</span>
        </button>
      </div>
    ) : (
      <span className="text-sm font-medium text-gray-500 capitalize">
        {booking.status} ✓
      </span>
    );

  if (bookingProperties?.length === 0) {
    return (
      <div className="rounded-3xl shadow-lg border border-gray-100 overflow-hidden">
        <div className="bg-gradient-to-r from-primary to-secondary text-white p-6">
          <h2 className="text-2xl font-bold">Booking Requests</h2>
          <p className="text-sm opacity-90 mt-1">
            Manage tenant booking requests for your properties
          </p>
        </div>
        <div className="py-16 text-center">
          <div className="text-5xl mb-3">📅</div>
          <h3 className="font-semibold text-lg">No Booking Requests</h3>
          <p className="text-gray-500 mt-1">
            No tenant booking requests found yet.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-3xl shadow-lg border border-gray-100 overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary to-secondary text-white p-4 sm:p-6">
        <h2 className="text-xl sm:text-2xl font-bold">Booking Requests</h2>
        <p className="text-xs sm:text-sm opacity-90 mt-1">
          Manage tenant booking requests for your properties
        </p>
      </div>

      {/* ---------- Mobile / Tablet: Card layout ---------- */}
      <div className="lg:hidden divide-y divide-gray-200">
        {bookingProperties?.map((booking) => (
          <div key={booking._id} className="p-4 space-y-3">
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-11 h-11 shrink-0 rounded-full bg-gray-600 flex items-center justify-center">
                  <User size={22} className="text-primary" />
                </div>
                <div className="min-w-0">
                  <p className="font-semibold text-base sm:text-lg text-gray-300 truncate">
                    {booking.tenantName}
                  </p>
                  <p className="text-xs text-gray-400 truncate">
                    {booking.phone}
                  </p>
                </div>
              </div>

              <span
                className={`shrink-0 px-3 py-1 rounded-full text-xs font-semibold capitalize ${getStatusStyle(
                  booking.status,
                )}`}
              >
                {booking.status}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
              <div className="flex items-center gap-2">
                <Home size={15} className="text-primary shrink-0" />
                <span className="font-medium truncate">{booking.title}</span>
              </div>

              <div className="flex items-center gap-2 text-gray-400">
                <CalendarDays size={15} className="shrink-0" />
                {new Date(booking.moveInDate).toLocaleDateString("en-GB")}
              </div>

              <div className="flex items-center gap-2 sm:col-span-2">
                <span className="font-bold text-green-600 text-base">
                  $ {booking.totalPrice?.toLocaleString()}
                </span>
              </div>
            </div>

            <div className="pt-2">
              <ActionButtons booking={booking} />
            </div>
          </div>
        ))}
      </div>

      {/* ---------- Desktop: Table layout ---------- */}
      <div className="hidden lg:block overflow-x-auto">
        <table className="table w-full">
          <thead className="bg-gray-600 h-13">
            <tr className="text-white text-sm xl:text-lg">
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
                className="transition-colors border-b h-25"
              >
                {/* Tenant */}
                <td>
                  <div className="flex items-center gap-3">
                    <div className="w-11 ml-2 h-11 rounded-full bg-gray-600 flex items-center justify-center shrink-0">
                      <User size={27} className="text-primary" />
                    </div>

                    <div className="min-w-0">
                      <p className="font-semibold text-lg xl:text-xl text-gray-300 truncate max-w-[180px]">
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
                    <Home size={16} className="text-primary shrink-0" />
                    <span className="font-medium truncate max-w-[160px]">
                      {booking.title}
                    </span>
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
                  <div className="flex items-center gap-2 text-gray-300 whitespace-nowrap">
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
                  <ActionButtons booking={booking} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BookingRequestsTable;