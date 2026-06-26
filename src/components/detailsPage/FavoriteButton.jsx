"use client";

import { useEffect, useState } from "react";
import { Heart } from "@gravity-ui/icons";
import { createFavorite } from "@/lib/actions/favorite";

const FavoriteButton = ({ property, user }) => {
  const [loading, setLoading] = useState(false);
  const [checking, setChecking] = useState(true);
  const [isFavorite, setIsFavorite] = useState(false);

  // Check if property is already in favorites
  useEffect(() => {
    const checkFavorite = async () => {
      try {
        if (!user?.id || !property?._id) return;

        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/favorites/check?tenantUserId=${user.id}&propertyId=${property._id}`
        );

        const data = await res.json();

        setIsFavorite(data.isFavorite);
      } catch (error) {
        console.error(error);
      } finally {
        setChecking(false);
      }
    };

    checkFavorite();
  }, [user?.id, property?._id]);

  const handleFavorite = async () => {
    try {
      setLoading(true);

      const payload = {
        tenantUserId: user?.id,
        propertyId: property?._id,
        title: property?.title,
        price: property?.price,
        location: property?.location,
        propertyType: property?.propertyType,
      };

      const result = await createFavorite(payload);

      if (result.success) {
        setIsFavorite(true);
      }
    } catch (error) {
      console.error("Favorite failed:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleFavorite}
      disabled={loading || checking || isFavorite}
      className={`px-3 py-2 rounded-lg text-white transition ${
        isFavorite
          ? "bg-gray-500 cursor-not-allowed"
          : "bg-pink-500 hover:bg-pink-700"
      }`}
    >
      <span className="flex items-center gap-1">
        <Heart />

        {checking
          ? "Checking..."
          : loading
          ? "Adding..."
          : isFavorite
          ? "Already Added"
          : "Add Favorite"}
      </span>
    </button>
  );
};

export default FavoriteButton;



// "use client";

// import { createFavorite } from "@/lib/actions/favorite";
// import { Heart } from "@gravity-ui/icons";
// import { useState } from "react";

// const FavoriteButton = ({ property, user }) => {
//   const [loading, setLoading] = useState(false);
//   const [added, setAdded] = useState(false);

//   const handleFavorite = async () => {
//     try {
//       setLoading(true);

//       const payload = {
//         tenantUserId: user?.id,
//         propertyId: property?._id,
//         title: property?.title,
//         price: property?.price,
//         location: property?.location,
//         propertyType: property?.propertyType,
//       };

//       const result = await createFavorite(payload);

//       if (result.success) {
//         setAdded(true);
//       }
//     } catch (error) {
//       if (error?.response?.status === 409) {
//         setAdded(true);
//       }

//       console.error(error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <button
//       onClick={handleFavorite}
//       disabled={loading || added}
//       className={`px-3 py-2 rounded-lg text-white transition ${
//         added
//           ? "bg-gray-500 cursor-not-allowed"
//           : "bg-pink-500 hover:bg-pink-700"
//       }`}
//     >
//       <span className="flex items-center gap-2">
       
//         <span>
//           {loading
//             ? "Adding..."
//             : added
//             ? "Already Added"
//             :  <span className="flex items-center"><Heart /> <span>Add Favorite</span></span>}
//         </span>
//       </span>
//     </button>
//   );
// };

// export default FavoriteButton;

// "use client";

// import { createFavorite } from "@/lib/actions/favorite";
// import { Heart } from "@gravity-ui/icons";
// import { useState } from "react";


// const FavoriteButton = ({ property, user }) => {
//   const [loading, setLoading] = useState(false);

//   const handleFavorite = async () => {
//     try {
//       setLoading(true);

//       const payload = {
//         tenantUserId: user?.id,
//         propertyId: property?._id,
//         title: property?.title,
//         price: property?.price,
//         location: property?.location,
//         propertyType: property?.propertyType,
//       };

//       console.log(payload);

//       const result = await createFavorite(payload);

//       console.log(result);
//     } catch (error) {
//       console.error("Favorite failed:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <button
//       onClick={handleFavorite}
//       disabled={loading}
//       className="bg-pink-500 hover:bg-pink-700 text-white px-3 py-2 rounded-lg transition disabled:opacity-50"
//     >
//       <span className="flex items-center gap-2">
//         <Heart />
//         <span>{loading ? "Adding..." : "Add Favorite"}</span>
//       </span>
//     </button>
//   );
// };

// export default FavoriteButton;