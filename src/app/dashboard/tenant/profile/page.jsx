import { getUserSession } from "@/lib/core/session";
import Image from "next/image";

export default async function TenantProfilePage() {
  const user = await getUserSession();

  console.log(user);

  //   const user = {
  //     name: "John Doe",
  //     email: "john@gmail.com",
  //     role: "Tenant",
  //     joined: "15 June 2026",
  //     image: "https://i.pravatar.cc/300?img=12",
  //   };

  const stats = {
    bookings: 12,
    favorites: 8,
    reviews: 5,
  };

  const recentBookings = [
    {
      property: "Luxury Apartment",
      status: "Approved",
      date: "12 Jun 2026",
    },
    {
      property: "Green Villa",
      status: "Pending",
      date: "10 Jun 2026",
    },
    {
      property: "Sky View Flat",
      status: "Rejected",
      date: "08 Jun 2026",
    },
  ];

  const recentFavorites = [
    {
      property: "Luxury Apartment",
      date: "12 Jun 2026",
    },
    {
      property: "Beach House",
      date: "09 Jun 2026",
    },
  ];

  const recentReviews = [
    {
      property: "Luxury Apartment",
      rating: 5,
      date: "11 Jun 2026",
    },
    {
      property: "Green Villa",
      rating: 4,
      date: "06 Jun 2026",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Page Title */}
        <h1 className="text-4xl font-bold mb-8">Tenant Profile</h1>

        {/* Profile + Stats */}
        <div className="">
          {/* Profile Card */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl shadow-lg p-8">
            <div className="flex flex-col items-center">
              <Image
                src={user.image}
                alt="profile"
                width={130}
                height={130}
                className="rounded-full border-4 border-cyan-500"
              />

              <h2 className="mt-5 text-2xl sm:text-3xl font-bold">{user.name}</h2>

              <p className="text-slate-400 sm:text-xl mt-2">{user.email}</p>

              <span className="mt-4 px-5 py-2 rounded-full bg-cyan-500/20 border border-cyan-500 text-cyan-400 font-semibold">
                {user.role}
              </span>

              
              <p className="text-slate-400 sm:text-xl mt-5"><span>Joined: </span> 
                {new Date(user.createdAt).toLocaleDateString("en-GB", {
                  day: "2-digit",
                  month: "long",
                  year: "numeric",
                })}
              </p>
            </div>
          </div>

          {/* Statistics */}
          <div className="lg:col-span-2 grid md:grid-cols-3 gap-6 mt-10">
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 text-center hover:border-cyan-500 transition">
              <h3 className="text-slate-400 text-lg">Total Bookings</h3>

              <p className="text-5xl font-bold text-cyan-400 mt-4">
                {stats.bookings}
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 text-center hover:border-pink-500 transition">
              <h3 className="text-slate-400 text-lg">Total Favorites</h3>

              <p className="text-5xl font-bold text-pink-400 mt-4">
                {stats.favorites}
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 text-center hover:border-yellow-500 transition">
              <h3 className="text-slate-400 text-lg">Total Reviews</h3>

              <p className="text-5xl font-bold text-yellow-400 mt-4">
                {stats.reviews}
              </p>
            </div>
          </div>
        </div>

        {/* Recent Bookings */}
        <div className="mt-10 bg-slate-900 border border-slate-800 rounded-2xl p-6">
          <h2 className="text-2xl font-bold mb-5">Recent Bookings</h2>

          <div className="overflow-x-auto">
            <table className="table w-full">
              <thead className="bg-slate-800 text-slate-300">
                <tr>
                  <th>Property</th>
                  <th>Status</th>
                  <th>Date</th>
                </tr>
              </thead>

              <tbody>
                {recentBookings.map((booking, index) => (
                  <tr key={index} className="hover">
                    <td>{booking.property}</td>

                    <td>
                      <span
                        className={`badge ${
                          booking.status === "Approved"
                            ? "badge-success"
                            : booking.status === "Pending"
                              ? "badge-warning"
                              : "badge-error"
                        }`}
                      >
                        {booking.status}
                      </span>
                    </td>

                    <td>{booking.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Recent Favorites */}
        <div className="mt-8 bg-slate-900 border border-slate-800 rounded-2xl p-6">
          <h2 className="text-2xl font-bold mb-5">Recent Favorites</h2>

          <div className="overflow-x-auto">
            <table className="table w-full">
              <thead className="bg-slate-800 text-slate-300">
                <tr>
                  <th>Property</th>
                  <th>Added On</th>
                </tr>
              </thead>

              <tbody>
                {recentFavorites.map((favorite, index) => (
                  <tr key={index} className="hover">
                    <td>{favorite.property}</td>

                    <td>{favorite.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Recent Reviews */}
        <div className="mt-8 bg-slate-900 border border-slate-800 rounded-2xl p-6">
          <h2 className="text-2xl font-bold mb-5">Recent Reviews</h2>

          <div className="overflow-x-auto">
            <table className="table w-full">
              <thead className="bg-slate-800 text-slate-300">
                <tr>
                  <th>Property</th>
                  <th>Rating</th>
                  <th>Date</th>
                </tr>
              </thead>

              <tbody>
                {recentReviews.map((review, index) => (
                  <tr key={index} className="hover">
                    <td>{review.property}</td>

                    <td className="text-yellow-400">
                      {"⭐".repeat(review.rating)}
                    </td>

                    <td>{review.date}</td>
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

// import { getUserSession } from "@/lib/core/session";
// import { getUserSession } from "@/lib/core/session";
// import Image from "next/image";

// export default async function TenantProfilePage() {

//     const user = await getUserSession();

//     console.log(user)

// //   const user = {
// //     name: "John Doe",
// //     email: "john@gmail.com",
// //     role: "Tenant",
// //     joined: "15 June 2026",
// //     image: "https://i.pravatar.cc/300?img=12",
// //   };

//   const stats = {
//     bookings: 12,
//     favorites: 8,
//     reviews: 5,
//   };

//   const recentBookings = [
//     {
//       property: "Luxury Apartment",
//       status: "Approved",
//       date: "12 Jun 2026",
//     },
//     {
//       property: "Green Villa",
//       status: "Pending",
//       date: "10 Jun 2026",
//     },
//     {
//       property: "Sky View Flat",
//       status: "Rejected",
//       date: "08 Jun 2026",
//     },
//   ];

//   const recentFavorites = [
//     {
//       property: "Luxury Apartment",
//       date: "12 Jun 2026",
//     },
//     {
//       property: "Beach House",
//       date: "09 Jun 2026",
//     },
//   ];

//   const recentReviews = [
//     {
//       property: "Luxury Apartment",
//       rating: 5,
//       date: "11 Jun 2026",
//     },
//     {
//       property: "Green Villa",
//       rating: 4,
//       date: "06 Jun 2026",
//     },
//   ];

//   return (
//     <div className="max-w-7xl mx-auto p-6 space-y-8">

//       {/* Page Title */}
//       <h1 className="text-3xl font-bold text-gray-800">
//         Tenant Profile
//       </h1>

//       {/* Profile + Stats */}
//       <div className="grid md:grid-cols-3 gap-6">

//         {/* Profile Card */}
//         <div className="bg-white rounded-xl shadow p-6">

//           <div className="flex flex-col items-center">

//             <Image
//               src={user?.image}
//               alt="profile"
//               width={120}
//               height={120}
//               className="rounded-full"
//             />

//             <h2 className="mt-4 text-xl font-semibold">
//               {user?.name}
//             </h2>

//             <p className="text-gray-500">
//               {user?.email}
//             </p>

//             <span className="mt-3 px-4 py-1 rounded-full bg-blue-100 text-blue-700 font-medium">
//               {user.role}
//             </span>

//             <p className="mt-4 text-sm text-gray-500">
//               Joined: {user?.createdAt}
//             </p>
//           </div>

//         </div>

//         {/* Statistics */}
//         <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-5">

//           <div className="bg-white rounded-xl shadow p-6 text-center">
//             <p className="text-gray-500">Total Bookings</p>
//             <h2 className="text-4xl font-bold text-blue-600 mt-2">
//               {stats.bookings}
//             </h2>
//           </div>

//           <div className="bg-white rounded-xl shadow p-6 text-center">
//             <p className="text-gray-500">Total Favorites</p>
//             <h2 className="text-4xl font-bold text-red-500 mt-2">
//               {stats.favorites}
//             </h2>
//           </div>

//           <div className="bg-white rounded-xl shadow p-6 text-center">
//             <p className="text-gray-500">Total Reviews</p>
//             <h2 className="text-4xl font-bold text-yellow-500 mt-2">
//               {stats.reviews}
//             </h2>
//           </div>

//         </div>

//       </div>

//       {/* Recent Bookings */}
//       <div className="bg-white rounded-xl shadow p-6">

//         <h2 className="text-2xl font-semibold mb-5">
//           Recent Bookings
//         </h2>

//         <div className="overflow-x-auto">

//           <table className="table w-full">

//             <thead>
//               <tr>
//                 <th>Property</th>
//                 <th>Status</th>
//                 <th>Date</th>
//               </tr>
//             </thead>

//             <tbody>
//               {recentBookings.map((item, index) => (
//                 <tr key={index}>
//                   <td>{item.property}</td>

//                   <td>
//                     <span
//                       className={`badge ${
//                         item.status === "Approved"
//                           ? "badge-success"
//                           : item.status === "Pending"
//                           ? "badge-warning"
//                           : "badge-error"
//                       }`}
//                     >
//                       {item.status}
//                     </span>
//                   </td>

//                   <td>{item.date}</td>
//                 </tr>
//               ))}
//             </tbody>

//           </table>

//         </div>

//       </div>

//       {/* Recent Favorites */}

//       <div className="bg-white rounded-xl shadow p-6">

//         <h2 className="text-2xl font-semibold mb-5">
//           Recent Favorites
//         </h2>

//         <div className="overflow-x-auto">

//           <table className="table">

//             <thead>
//               <tr>
//                 <th>Property</th>
//                 <th>Added On</th>
//               </tr>
//             </thead>

//             <tbody>

//               {recentFavorites.map((item, index) => (
//                 <tr key={index}>
//                   <td>{item.property}</td>
//                   <td>{item.date}</td>
//                 </tr>
//               ))}

//             </tbody>

//           </table>

//         </div>

//       </div>

//       {/* Recent Reviews */}

//       <div className="bg-white rounded-xl shadow p-6">

//         <h2 className="text-2xl font-semibold mb-5">
//           Recent Reviews
//         </h2>

//         <div className="overflow-x-auto">

//           <table className="table">

//             <thead>
//               <tr>
//                 <th>Property</th>
//                 <th>Rating</th>
//                 <th>Date</th>
//               </tr>
//             </thead>

//             <tbody>

//               {recentReviews.map((item, index) => (
//                 <tr key={index}>
//                   <td>{item.property}</td>

//                   <td>{"⭐".repeat(item.rating)}</td>

//                   <td>{item.date}</td>
//                 </tr>
//               ))}

//             </tbody>

//           </table>

//         </div>

//       </div>

//     </div>
//   );
// }
