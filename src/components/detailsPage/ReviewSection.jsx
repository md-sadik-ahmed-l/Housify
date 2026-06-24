'use client';

import { useEffect, useState } from 'react';

const ReviewSection = ({ propertyId }) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(`/api/reviews/${propertyId}`)
      .then(res => res.json())
      .then(data => setReviews(data));
  }, [propertyId]);

  return (
    <div className="mt-10">
      <h2 className="text-xl font-bold">Reviews</h2>

      {reviews.map((r) => (
        <div key={r._id} className="border p-3 mt-2 rounded">
          <p className="font-semibold">{r.name}</p>
          <p>{r.comment}</p>
          <p>⭐ {r.rating}</p>
        </div>
      ))}
    </div>
  );
};

export default ReviewSection;