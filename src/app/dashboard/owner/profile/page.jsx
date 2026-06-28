import { getOwnerBookingProperties } from "@/lib/api/booking";
import { getOwnerProperties } from "@/lib/api/property";
import { getUserSession } from "@/lib/core/session";
import Image from "next/image";

export default async function OwnerProfilePage() {
  const user = await getUserSession();

  if (!user) return <div>Please login first</div>;

  const properties = await getOwnerProperties(user.id);

  const ownerId = user?.id;

  // console.log(ownerId)

  const bookingProperties = await getOwnerBookingProperties(ownerId);

  const stats = {
    properties: 15,
    bookings: 28,
    earnings: "$8,500",
  };

  const ownerInfo = {
    added: 15,
    approved: 12,
    pending: 2,
    rejected: 1,
  };

  const recentProperties = [
    {
      title: "Luxury Apartment",
      location: "Dhaka",
      status: "Approved",
      price: "$450/month",
    },
    {
      title: "Green Villa",
      location: "Chattogram",
      status: "Pending",
      price: "$650/month",
    },
    {
      title: "Sky View Flat",
      location: "Sylhet",
      status: "Approved",
      price: "$520/month",
    },
    {
      title: "Beach House",
      location: "Cox's Bazar",
      status: "Rejected",
      price: "$800/month",
    },
    {
      title: "Lake Side Home",
      location: "Rajshahi",
      status: "Approved",
      price: "$400/month",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Owner Profile</h1>

        {/* Profile + Stats */}

        <div className=" gap-6">
          {/* Profile */}

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
            <div className="flex flex-col items-center">
              <Image
                src={user?.image}
                alt="owner"
                width={130}
                height={130}
                className="rounded-full border-4 border-cyan-500"
              />

              <h2 className="text-2xl sm:text-3xl font-bold mt-5">
                {user.name}
              </h2>

              <p className="text-slate-400 sm:text-xl mt-2">{user.email}</p>

              <span className="mt-4 bg-cyan-500/20 border border-cyan-500 px-4 py-2 rounded-full text-cyan-400">
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

          {/* Stats */}

          <div className="lg:col-span-2 grid md:grid-cols-3 gap-6 mt-10">
            <div className="bg-slate-900 rounded-2xl border border-slate-800 p-8 text-center">
              <h3 className="text-slate-400">Total Properties</h3>

              <p className="text-5xl font-bold text-cyan-400 mt-4">
                {properties?.length}
              </p>
            </div>

            <div className="bg-slate-900 rounded-2xl border border-slate-800 p-8 text-center">
              <h3 className="text-slate-400">Total Bookings</h3>

              <p className="text-5xl font-bold text-green-400 mt-4">
                {bookingProperties?.length}
              </p>
            </div>

            <div className="bg-slate-900 rounded-2xl border border-slate-800 p-8 text-center">
              <h3 className="text-slate-400">Total Earnings</h3>

              <p className="text-5xl font-bold text-yellow-400 mt-4">
                {stats.earnings}
              </p>
            </div>
          </div>
        </div>

        {/* Owner Information */}

        <div className="bg-slate-900 border border-slate-800 rounded-2xl mt-8 p-6">
          <h2 className="text-2xl font-bold mb-5">Owner Information</h2>

          <div className="overflow-x-auto">
            <table className="table w-full">
              <thead className="bg-slate-800 text-slate-300">
                <tr>
                  <th>Field</th>
                  <th>Value</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>Properties Added</td>
                  <td>{ownerInfo.added}</td>
                </tr>

                <tr>
                  <td>Approved Properties</td>
                  <td className="text-green-400">{ownerInfo.approved}</td>
                </tr>

                <tr>
                  <td>Pending Properties</td>
                  <td className="text-yellow-400">{ownerInfo.pending}</td>
                </tr>

                <tr>
                  <td>Rejected Properties</td>
                  <td className="text-red-400">{ownerInfo.rejected}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Recent Properties */}

        <div className="bg-slate-900 border border-slate-800 rounded-2xl mt-8 p-6">
          <h2 className="text-2xl font-bold mb-5">Recent Properties</h2>

          <div className="overflow-x-auto">
            <table className="table w-full">
              <thead className="bg-slate-800 text-slate-300">
                <tr>
                  <th>Property</th>
                  <th>Location</th>
                  <th>Price</th>
                  <th>Status</th>
                </tr>
              </thead>

              <tbody>
                {recentProperties.map((property, index) => (
                  <tr key={index} className="hover">
                    <td>{property.title}</td>

                    <td>{property.location}</td>

                    <td>{property.price}</td>

                    <td>
                      <span
                        className={`badge mt-5 py-1.5 px-3 ${
                          property.status === "Approved"
                            ? "badge-success"
                            : property.status === "Pending"
                              ? "badge-warning"
                              : "badge-error"
                        }`}
                      >
                        {property.status}
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
