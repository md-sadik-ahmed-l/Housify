"use client";

import Image from "next/image";
import { BadgeCheck, Building2, MapPin, Star } from "lucide-react";
import { Button } from "@heroui/react";

const owners = [
  {
    id: 1,
    name: "Sadik Ahmed",
    role: "Super Host",
    location: "Dhaka",
    properties: 42,
    rating: 4.9,
    image: "https://i.pravatar.cc/300?img=12",
  },
  {
    id: 2,
    name: "Sarah Khan",
    role: "Verified Owner",
    location: "Chattogram",
    properties: 35,
    rating: 4.8,
    image: "https://i.pravatar.cc/300?img=32",
  },
  {
    id: 3,
    name: "John Smith",
    role: "Premium Owner",
    location: "Sylhet",
    properties: 28,
    rating: 5.0,
    image: "https://i.pravatar.cc/300?img=15",
  },
  {
    id: 4,
    name: "Emily Wilson",
    role: "Trusted Owner",
    location: "Rajshahi",
    properties: 31,
    rating: 4.9,
    image: "https://i.pravatar.cc/300?img=48",
  },
];

export default function TrustedOwners() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
            <BadgeCheck size={16} />
            Trusted Community
          </span>

          <h2 className="mt-5 text-4xl md:text-5xl font-bold">
            Trusted Property Owners
          </h2>

          <p className="mt-4 text-default-500 text-lg">
            Meet our verified property owners who consistently provide
            exceptional rental experiences and quality homes.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-4">

          {owners.map((owner) => (
            <div
              key={owner.id}
              className="group rounded-3xl border bg-content1 shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
            >
              <div className="relative overflow-hidden">

                <Image
                  src={owner.image}
                  alt={owner.name}
                  width={500}
                  height={500}
                  className="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                <div className="absolute left-4 top-4 rounded-full bg-success text-white px-3 py-1 text-xs font-semibold flex items-center gap-1">
                  <BadgeCheck size={14} />
                  Verified
                </div>

              </div>

              <div className="p-6">

                <h3 className="text-xl font-bold">
                  {owner.name}
                </h3>

                <p className="text-primary text-sm font-medium">
                  {owner.role}
                </p>

                <div className="mt-5 space-y-3 text-default-600">

                  <div className="flex items-center gap-2">
                    <MapPin size={17} />
                    {owner.location}
                  </div>

                  <div className="flex items-center gap-2">
                    <Building2 size={17} />
                    {owner.properties} Properties
                  </div>

                  <div className="flex items-center gap-2">
                    <Star
                      size={17}
                      className="fill-yellow-400 text-yellow-400"
                    />
                    {owner.rating} Rating
                  </div>

                </div>

                <Button
                  color="primary"
                  variant="flat"
                  radius="full"
                  className="mt-6 w-full font-semibold"
                >
                  View Profile
                </Button>

              </div>
            </div>
          ))}

        </div>

        {/* Bottom CTA */}
        <div className="mt-20 rounded-[32px] bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border p-10 text-center">

          <h3 className="text-3xl font-bold">
            Become a Trusted Owner
          </h3>

          <p className="mt-3 text-default-500 max-w-xl mx-auto">
            Join our growing community of verified property owners and reach
            thousands of potential renters across the country.
          </p>

          <Button
            color="primary"
            size="lg"
            radius="full"
            className="mt-8 px-10"
          >
            Explore Owners
          </Button>

        </div>

      </div>
    </section>
  );
}