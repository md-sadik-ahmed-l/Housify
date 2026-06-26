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
          `/api/favorites/check?tenantUserId=${user.id}&propertyId=${property._id}`
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
      className={`px-4 py-2 rounded-lg text-white transition ${
        isFavorite
          ? "bg-gray-500 cursor-not-allowed"
          : "bg-pink-500 hover:bg-pink-700"
      }`}
    >
      <span className="flex items-center gap-2">
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



