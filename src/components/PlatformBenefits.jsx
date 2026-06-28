"use client";

import {
  ShieldCheck,
  House,
  CreditCard,
  Star,
  Users,
  Clock,
} from "lucide-react";

const benefits = [
  {
    icon: <House className="w-10 h-10 text-primary" />,
    title: "Verified Properties",
    description:
      "Browse carefully verified rental properties with complete details, images, and transparent pricing.",
  },
  {
    icon: <ShieldCheck className="w-10 h-10 text-primary" />,
    title: "Secure Booking",
    description:
      "Book your desired property safely with protected authentication and role-based access control.",
  },
  {
    icon: <CreditCard className="w-10 h-10 text-primary" />,
    title: "Safe Online Payments",
    description:
      "Complete reservation payments securely through Stripe with instant booking confirmation.",
  },
  {
    icon: <Star className="w-10 h-10 text-primary" />,
    title: "Trusted Reviews",
    description:
      "Read authentic tenant reviews and ratings before making your rental decision.",
  },
  {
    icon: <Users className="w-10 h-10 text-primary" />,
    title: "Direct Owner Connection",
    description:
      "Communicate with verified property owners through a transparent and reliable rental platform.",
  },
  {
    icon: <Clock className="w-10 h-10 text-primary" />,
    title: "Fast & Easy Process",
    description:
      "Search, filter, book, and manage rentals quickly with a smooth and responsive user experience.",
  },
];

export default function PlatformBenefits() {
  return (
    <section className="py-20 bg-base-100">
      <div className="max-w-7xl mx-auto px-5">

        <div className="text-center max-w-3xl mx-auto">
          <p className="text-primary font-semibold uppercase tracking-widest">
            Why Choose Us
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Experience a Better Way to Rent Properties
          </h2>

          <p className="mt-5 text-base-content/70">
            Our platform simplifies property renting by connecting tenants,
            owners, and administrators in one secure ecosystem. From searching
            to booking and payment, every step is designed to be seamless,
            transparent, and reliable.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {benefits.map((item, index) => (
            <div
              key={index}
              className="bg-base-200 rounded-3xl p-8 border border-base-300 hover:border-primary hover:-translate-y-2 transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                {item.icon}
              </div>

              <h3 className="text-2xl font-bold mb-3">{item.title}</h3>

              <p className="text-base-content/70 leading-7">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}