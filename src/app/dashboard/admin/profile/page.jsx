

import { getAllBookingsProfile } from "@/lib/api/booking";
import { getPropertiesProfile } from "@/lib/api/property";
import { getAllUsersProfile } from "@/lib/api/users";
import { getUserSession } from "@/lib/core/session";
import Image from "next/image";

export default async function AdminProfilePage() {

    const user = await getUserSession();

    const totalProperties = await getPropertiesProfile();

    const allUsers = await getAllUsersProfile();

    const allBookings = await getAllBookingsProfile();

  const stats = {
    users: 520,
    properties: 180,
    bookings: 340,
    transactions: "$45,000",
  };

  const activities = [
    {
      action: "Property Approved",
      details: "Luxury Apartment",
      date: "25 Jun 2026",
      status: "Completed",
    },
    {
      action: "User Role Changed",
      details: "Tenant → Owner",
      date: "24 Jun 2026",
      status: "Completed",
    },
    {
      action: "Booking Monitored",
      details: "Green Villa Booking",
      date: "23 Jun 2026",
      status: "Completed",
    },
    {
      action: "Property Approved",
      details: "Sky View Flat",
      date: "22 Jun 2026",
      status: "Completed",
    },
    {
      action: "Booking Monitored",
      details: "Beach House Booking",
      date: "21 Jun 2026",
      status: "Completed",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white p-6">

      <div className="max-w-7xl mx-auto">

        <h1 className="text-4xl font-bold mb-8">
          Admin Profile
        </h1>

        {/* Profile & Stats */}

        <div className=" gap-6">

          {/* Profile Card */}

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">

            <div className="flex flex-col items-center">

              <Image
                src={user.image}
                alt="Admin"
                width={140}
                height={140}
                className="rounded-full border-4 border-red-500"
              />

              <h2 className="text-2xl sm:text-3xl font-bold mt-5">
                {user.name}
              </h2>

              <p className="text-slate-400 sm:text-xl mt-2">
                {user.email}
              </p>

              <span className="mt-4 bg-red-500/20 border border-red-500 px-4 py-2 rounded-full text-red-400 font-semibold">
                {user.role}
              </span>

              <p className="text-slate-400 sm:text-xl mt-5">
                <span>Joined: </span>
                {new Date(user.createdAt).toLocaleDateString("en-GB", {
                  day: "2-digit",
                  month: "long",
                  year: "numeric",
                })}
              </p>

            </div>

          </div>

          {/* Statistics */}

          <div className="lg:col-span-3 grid md:grid-cols-2 mt-10 xl:grid-cols-4 gap-6">

            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 text-center">
              <h3 className="text-slate-400">Total Users</h3>
              <p className="text-5xl font-bold text-cyan-400 mt-4">
                {allUsers?.length}
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 text-center">
              <h3 className="text-slate-400">Total Properties</h3>
              <p className="text-5xl font-bold text-green-400 mt-4">
                {totalProperties?.length}
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 text-center">
              <h3 className="text-slate-400">Total Bookings</h3>
              <p className="text-5xl font-bold text-yellow-400 mt-4">
                {allBookings?.length}
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 text-center">
              <h3 className="text-slate-400">Transactions</h3>
              <p className="text-4xl font-bold text-pink-400 mt-5">
                {stats.transactions}
              </p>
            </div>

          </div>

        </div>

        {/* Admin Activity */}

        <div className="mt-10 bg-slate-900 border border-slate-800 rounded-2xl p-6">

          <h2 className="text-2xl font-bold mb-6">
            Recent Admin Activities
          </h2>

          <div className="overflow-x-auto">

            <table className="table w-full">

              <thead className="bg-slate-800 text-slate-300">

                <tr>
                  <th>Action</th>
                  <th>Details</th>
                  <th>Date</th>
                  <th>Status</th>
                </tr>

              </thead>

              <tbody>

                {activities.map((activity, index) => (

                  <tr key={index} className="hover">

                    <td>{activity.action}</td>

                    <td>{activity.details}</td>

                    <td>{activity.date}</td>

                    <td>
                      <span className="badge badge-success mt-5 px-3 py-1.5">
                        {activity.status}
                      </span>
                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </div>

      </div>

    </div>
  );
}