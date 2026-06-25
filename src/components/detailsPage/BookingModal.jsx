"use client";

import { useState } from "react";

const BookingModal = ({ open, onClose, property, user }) => {
  const [loading, setLoading] = useState(false);

  //   console.log(user.id)

  console.log(property.price);

  const [form, setForm] = useState({
    moveInDate: "",
    phone: "",
    notes: "",
    name: user?.name || "",
    email: user?.email || "",
  });

  if (!open) return null;

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4">Book {property?.title}</h2>

        {/* User Info */}
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Full Name"
          className="border p-2 w-full mb-3 rounded"
        />

        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email Address"
          className="border p-2 w-full mb-3 rounded"
        />

        {/* Move In Date */}
        <input
          type="date"
          name="moveInDate"
          min={new Date().toISOString().split("T")[0]}
          value={form.moveInDate}
          onChange={handleChange}
          className="border p-2 w-full mb-3 rounded"
        />

        {/* Contact Number */}
        <input
          type="tel"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="Contact Number"
          className="border p-2 w-full mb-3 rounded"
        />

        {/* Additional Notes */}
        <textarea
          name="notes"
          value={form.notes}
          onChange={handleChange}
          placeholder="Additional Notes"
          rows={4}
          className="border p-2 w-full rounded"
        />

        <div className="flex justify-end gap-3 mt-5">
          <button onClick={onClose} className="border px-4 py-2 rounded">
            Cancel
          </button>

          <form action="/api/chackout_sessions" method="POST">
            <input type="hidden" name="price" value={property?.price} />
            <input type="hidden" name="phone" value={form.phone} />
            <input type="hidden" name="notes" value={form.notes} />
            <input type="hidden" name="moveInDate" value={form.moveInDate} />
            <input type="hidden" name="title" value={property?.title} />
            <input type="hidden" name="productId" value={property?._id} />
            <input type="hidden" name="ownerId" value={property?.userId} />
            <input type="hidden" name="role" value={"tenant"} />
            <input
              type="hidden"
              name="ownerEmail"
              value={property?.ownerEmail || "kk@gmail.com"}
            />

            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-50"
            >
              {loading ? "Processing..." : "Continue Payment"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
