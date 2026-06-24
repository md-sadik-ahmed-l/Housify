import React from "react";
import { Card, Link } from "@heroui/react";
import {
  MapPin,
  House,
  CircleDollar,
  ArrowRight,
} from "@gravity-ui/icons";

export default function PropertyCard({ property }) {
  if (!property) return null;

  const propertyId = property._id?.$oid || property._id;

  return (
    <Card className="p-6 w-full max-w-[420px] bg-zinc-900 text-white rounded-[32px] border-none">

      <img
        src={property.image}
        alt={property.title}
        className="w-full h-56 object-cover rounded-2xl"
      />

      <Card.Header className="flex flex-col items-start gap-3 p-0 pt-5">

        <Card.Title className="text-2xl font-bold">
          {property.title}
        </Card.Title>

        <Card.Description className="text-zinc-400">
          {property.description}
        </Card.Description>

      </Card.Header>

      <Card.Content className="p-0 py-5 flex flex-col gap-4">

        <div className="flex flex-wrap gap-2">

          <div className="bg-zinc-800 px-3 py-2 rounded-full flex items-center gap-2">
            <MapPin className="w-4 h-4 text-purple-400" />
            <span>{property.location}</span>
          </div>

          <div className="bg-zinc-800 px-3 py-2 rounded-full flex items-center gap-2">
            <House className="w-4 h-4 text-purple-400" />
            <span>{property.propertyType}</span>
          </div>

          <div className="bg-zinc-800 px-3 py-2 rounded-full flex items-center gap-2">
            <CircleDollar className="w-4 h-4 text-purple-400" />
            <span>${property.price}</span>
          </div>

        </div>

        <div className="grid grid-cols-3 gap-3 border-t border-zinc-800 pt-4 text-center">

          <div>
            <p className="text-xl font-bold">{property.bedrooms}</p>
            <p className="text-zinc-500 text-sm">Bedrooms</p>
          </div>

          <div>
            <p className="text-xl font-bold">{property.bathrooms}</p>
            <p className="text-zinc-500 text-sm">Bathrooms</p>
          </div>

          <div>
            <p className="text-xl font-bold">{property.area}</p>
            <p className="text-zinc-500 text-sm">Sq.ft</p>
          </div>

        </div>

      </Card.Content>

      <Card.Footer className="p-0">

        <Link
          href={`/all-properties/${propertyId}`}
          className="group flex items-center gap-2 text-white"
        >
          View Details

          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-all" />

        </Link>

      </Card.Footer>

    </Card>
  );
}