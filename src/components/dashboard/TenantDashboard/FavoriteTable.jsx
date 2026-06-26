"use client";

import { useState } from "react";
import Link from "next/link";
import { Trash2, MapPin, Building2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { deleteFavorite } from "@/lib/actions/favorite";

const FavoriteTable = ({ properties = [] }) => {
  const [loadingId, setLoadingId] = useState(null);
  const router = useRouter();

  const handleRemove = async (tenantUserId, propertyId) => {
    setLoadingId(propertyId);

    try {
        
      const data = await deleteFavorite(tenantUserId, propertyId);

      if (data.success) {
        router.refresh(); // পেজ রিফ্রেশ করে নতুন ডেটা আনবে
      } else {
        alert("Remove করা যায়নি, আবার চেষ্টা করুন।");
      }
    } catch (error) {
      console.error("Remove failed:", error);
      alert("কিছু একটা সমস্যা হয়েছে।");
    } finally {
      setLoadingId(null);
    }
  };

  return (
    <div className="bg-white/20 rounded-2xl border border-base-300 overflow-hidden">
      {/* Header */}
      <div className="px-6 py-5 border-b border-base-300 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-medium">Listed Favorite properties</h2>
          <p className="text-sm text-gray-400 mt-0.5">
            Manage and track your active listings
          </p>
        </div>
        <span className="text-sm font-medium bg-blue-50 text-blue-800 px-3 py-2 rounded-xl">
          {properties.length} properties
        </span>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-base-200 border-b border-base-300">
              {["Property name", "Type", "Location", "Price", "Actions"].map(
                (h) => (
                  <th
                    key={h}
                    className="px-4 py-4 text-left text-sm font-medium uppercase tracking-wider text-gray-300"
                  >
                    {h}
                  </th>
                ),
              )}
            </tr>
          </thead>

          <tbody>
            {properties.length > 0 ? (
              properties.map((property) => (
                <tr
                  key={property._id}
                  className="border-b h-25 border-base-200 hover:bg-base-50 transition-colors last:border-0"
                >
                  {/* Property */}
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                        <Building2 size={27} className="text-blue-600" />
                      </div>
                      <div>
                        <p className="font-medium text-sm md:text-xl leading-tight">
                          {property.title}
                        </p>
                        <p className="text-[11px] text-gray-400 font-mono mt-0.5">
                          #{property._id.slice(-6)}
                        </p>
                      </div>
                    </div>
                  </td>

                  {/* Type */}
                  <td className="px-4 py-3">
                    <span className="text-md border border-base-300 text-gray-300 px-3 py-2 rounded-full">
                      {property.propertyType}
                    </span>
                  </td>

                  {/* Location */}
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-1.5 text-sm text-gray-300">
                      <MapPin size={16} className="flex-shrink-0" />
                      <span className="truncate max-w-[100px]">
                        {property.location}
                      </span>
                    </div>
                  </td>

                  {/* Price */}
                  <td className="px-4 py-3">
                    <span className="text-xl font-medium text-[#dba736]">
                      $ {property.price?.toLocaleString()}
                    </span>
                  </td>

                  {/* Actions */}
                  <td className="px-4 py-3">
                    <div className="flex justify-center gap-3">
                      <button
                        onClick={() =>
                          handleRemove(
                            property.tenantUserId,
                            property.propertyId,
                          )
                        }
                        disabled={loadingId === property.propertyId}
                        className="flex items-center gap-1 sm:p-4 rounded-2xl border border-red-200 text-red-600 hover:bg-red-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        <Trash2 size={24} />
                        <span className="text-xl font-bold">
                          {loadingId === property.propertyId
                            ? "Removing..."
                            : "Remove Favorite"}
                        </span>
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={5} className="py-20 text-center">
                  <Building2 size={40} className="mx-auto text-gray-300 mb-3" />
                  <p className="font-medium text-gray-500">
                    No Favorite properties listed yet
                  </p>
                  <p className="text-xs text-gray-400 mt-1">
                    Add your first Favorite property to get started.
                  </p>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FavoriteTable;

// "use client";

// import Link from "next/link";
// import { Trash2, Pencil, MapPin, Building2 } from "lucide-react";

// const FavoriteTable = ({ properties = [] }) => {

//   return (
//     <div className=" bg-white/20 rounded-2xl border border-base-300 overflow-hidden">

//       {/* Header */}
//       <div className="px-6 py-5 border-b border-base-300 flex items-center justify-between">
//         <div>
//           <h2 className=" text-xl font-medium">Listed Favorite properties</h2>
//           <p className="text-sm text-gray-400 mt-0.5">Manage and track your active listings</p>
//         </div>
//         <span className="text-sm font-medium bg-blue-50 text-blue-800 px-3 py-2 rounded-xl">
//           {properties.length} properties
//         </span>
//       </div>

//       {/* Table */}
//       <div className="overflow-x-auto">
//         <table className="w-full text-sm">
//           <thead>
//             <tr className="bg-base-200 border-b border-base-300">
//               {["Property name", "Type", "Location", "Price", "Actions"].map((h, i) => (
//                 <th
//                   key={h}
//                   className={`px-4 py-4 text-left text-sm font-medium uppercase tracking-wider text-gray-300 ${
//                     i === 5 ? "text-center" : ""
//                   }`}
//                 >
//                   {h}
//                 </th>
//               ))}
//             </tr>
//           </thead>

//           <tbody>
//             {properties.length > 0 ? (
//               properties.map((property) => (
//                 <tr
//                   key={property._id}
//                   className="border-b h-25 border-base-200 hover:bg-base-50 transition-colors last:border-0"
//                 >
//                   {/* Property */}
//                   <td className="px-4 py-3">
//                     <div className="flex items-center gap-3">
//                       <div className="w-11 h-11 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
//                         <Building2 size={27} className="text-blue-600" />
//                       </div>
//                       <div>
//                         <p className="font-medium text-sm md:text-xl leading-tight">{property.title}</p>
//                         <p className="text-[11px] text-gray-400 font-mono mt-0.5">
//                           #{property._id.slice(-6)}
//                         </p>
//                       </div>
//                     </div>
//                   </td>

//                   {/* Type */}
//                   <td className="px-4 py-3">
//                     <span className="text-md border border-base-300 text-gray-300 px-3 py-2 rounded-full">
//                       {property.propertyType}
//                     </span>
//                   </td>

//                   {/* Location */}
//                   <td className="px-4 py-3">
//                     <div className="flex items-center gap-1.5 text-sm text-gray-300">
//                       <MapPin size={16} className="flex-shrink-0" />
//                       <span className="truncate max-w-[100px]">{property.location}</span>
//                     </div>
//                   </td>

//                   {/* Price */}
//                   <td className="px-4 py-3">
//                     <span className="text-xl font-medium text-[#dba736]">
//                       $ {property.price?.toLocaleString()}
//                     </span>
//                   </td>

//                   <td className="mr-5">
//                     <div className="flex justify-center gap-3">

//                       <button className=" flex items-center gap-1 sm:p-4 rounded-2xl border border-red-200 text-red-600 hover:bg-red-50 transition-colors">
//                         <Trash2 size={24} />
//                         <span className="text-xl font-bold">Remove Favorite</span>
//                       </button>
//                     </div>
//                   </td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan={6} className="py-20 text-center">
//                   <Building2 size={40} className="mx-auto text-gray-300 mb-3" />
//                   <p className="font-medium text-gray-500">No Favorite properties listed yet</p>
//                   <p className="text-xs text-gray-400 mt-1">Add your first Favorite property to get started.</p>
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default FavoriteTable;
