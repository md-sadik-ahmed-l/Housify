'use client';

import { useState } from 'react';

const FavoriteButton = ({ propertyId }) => {
  const [loading, setLoading] = useState(false);

  const handleFavorite = async () => {
    setLoading(true);

    await fetch('/api/favorites', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ propertyId }),
    });

    setLoading(false);
  };

  return (
    <button
      onClick={handleFavorite}
      disabled={loading}
      className="bg-pink-500 text-white px-4 py-2 rounded"
    >
      ❤️ Save
    </button>
  );
};

export default FavoriteButton;