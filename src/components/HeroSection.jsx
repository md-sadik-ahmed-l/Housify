"use client";

import { Briefcase, Factory, Magnifier, Star } from "@gravity-ui/icons";
import { motion } from "motion/react";
import hero_1 from "../app/assets/hero_1.jpg";

export default function HeroSection() {
  const stats = [
    { id: 1, icon: <Briefcase className="w-4 h-4" />, value: "50K", label: "Active Property" },
    { id: 2, icon: <Factory className="w-4 h-4" />, value: "12K", label: "Owner" },
    { id: 3, icon: <Magnifier className="w-4 h-4" />, value: "2M", label: "Property Seekers" },
    { id: 4, icon: <Star className="w-4 h-4" />, value: "97%", label: "Satisfaction Rate" },
  ];

  return (
    <section
      className="relative overflow-hidden py-28 text-white"
      style={{
        backgroundImage: `url(${hero_1.src})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Subtle radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(37,99,235,0.15),transparent)]" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto max-w-[680px] text-center"
        >
          {/* Eyebrow */}
          <div className="mb-5 inline-flex items-center gap-2">
            <span className="h-px w-8 bg-blue-400/60" />
            <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-blue-400">
              Premier Property Search
            </span>
            <span className="h-px w-8 bg-blue-400/60" />
          </div>

          <h2 className="font-serif text-[42px] font-light leading-[1.12] text-white/95 tracking-tight">
            Find Your Dream Home &amp;{" "}
            <span className="italic font-semibold text-blue-400">
              Discover the Perfect Property for You
            </span>
          </h2>

          <p className="mt-4 text-[15px] font-light leading-relaxed text-white/45 tracking-wide">
            Browse thousands of properties and find the perfect home
            that fits your lifestyle and budget.
          </p>
        </motion.div>

        {/* Search Form */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          action=""
          className="mt-12 flex items-stretch overflow-hidden rounded-full border border-white/10 bg-white/5 backdrop-blur-xl"
        >
          {[
            { placeholder: "Location", label: "Where" },
            { placeholder: "Property type", label: "Type" },
            { placeholder: "Min – Max", label: "Budget" },
            { placeholder: "Any", label: "Beds" },
          ].map((field, i) => (
            <div
              key={i}
              className={`flex flex-1 flex-col justify-center px-5 py-4 ${
                i !== 0 ? "border-l border-white/10" : ""
              } group transition-colors hover:bg-white/[0.04]`}
            >
              <label className="mb-0.5 text-[10px] font-medium uppercase tracking-[0.14em] text-blue-400/80">
                {field.label}
              </label>
              <input
                type="text"
                placeholder={field.placeholder}
                className="w-full bg-transparent text-[13px] font-light text-white/90 placeholder:text-white/30 outline-none"
              />
            </div>
          ))}

          <div className="flex items-center p-2 pl-0">
            <button
              type="submit"
              className="flex items-center gap-2 rounded-full bg-blue-600 px-7 py-3.5 text-[13px] font-medium text-white tracking-wide transition-colors hover:bg-blue-500 active:scale-[0.98]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z"
                />
              </svg>
              Search
            </button>
          </div>
        </motion.form>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="mt-8 grid grid-cols-4 overflow-hidden rounded-2xl border border-white/8 bg-white/[0.04] backdrop-blur-md"
        >
          {stats.map((stat, i) => (
            <div
              key={stat.id}
              className={`flex flex-col items-center gap-1.5 py-5 ${
                i !== 0 ? "border-l border-white/8" : ""
              }`}
            >
              <span className="text-white/25">{stat.icon}</span>
              <span className="font-serif text-2xl font-semibold text-white/90 leading-none">
                {stat.value}
              </span>
              <span className="text-[10px] font-normal uppercase tracking-[0.1em] text-white/30">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// "use client";

// import {
//     Briefcase,
//     Factory,
//     Magnifier,
//     Star,
// } from "@gravity-ui/icons";
// import { motion } from "motion/react"

// // import JobListingContainer from "./jobs/JobListingContainer";

// export default function HeroSection() {


    

//     const stats = [
//         {
//             id: 1,
//             icon: <Briefcase className="h-5 w-5" />,
//             value: "50K",
//             label: "Active Jobs",
//         },
//         {
//             id: 2,
//             icon: <Factory className="h-5 w-5" />,
//             value: "12K",
//             label: "Companies",
//         },
//         {
//             id: 3,
//             icon: <Magnifier className="h-5 w-5" />,
//             value: "2M",
//             label: "Job Seekers",
//         },
//         {
//             id: 4,
//             icon: <Star className="h-5 w-5" />,
//             value: "97%",
//             label: "Satisfaction Rate",
//         },
//     ];

//     return (
//         <section className="relative overflow-hidden bg-black py-28 text-white">
//             {/* Background Globe */}
//             <div
//                 className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-90"
//                 style={{
//                     backgroundImage: "url('/images/globe.png')",
//                 }}
//             />

//             {/* Dark Overlay */}
//             <div className="absolute inset-0 bg-black/40" />

//             {/* Glow Effect */}
//             <div className="absolute left-1/2 top-[25%] h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-violet-600/30 blur-[140px]" />

//             {/* Content */}
//             <div className="relative z-10 mx-auto max-w-7xl px-6">
//                 {/* Heading */}
//                 <div className="mx-auto max-w-3xl text-center">
//                     <h2 className="text-2xl font-medium leading-relaxed text-white/90">
//                         Assisting over 15,000 job seekers
//                         <br />
//                         find their dream positions.
//                     </h2>
//                     <motion.p animate={{ rotate: 0 }}>Remote Jobs</motion.p>
//                     <motion.p initial={{ scale: 0 }} animate={{ scale: 1 }}>On-site Jobs</motion.p>
//                 </div>

//                 {/* Stats Cards */}
//                 <div className="mt-20 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
//                     {stats.map((stat) => (
//                         <div
//                             key={stat.id}
//                             className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl transition duration-300 hover:border-violet-500/30"
//                         >
//                             {/* Card Glow */}
//                             <div className="absolute bottom-0 right-0 h-32 w-32 rounded-full bg-white/10 blur-3xl transition duration-300 group-hover:bg-violet-500/20" />

//                             {/* Icon */}
//                             <div className="relative z-10 text-white/90">
//                                 {stat.icon}
//                             </div>

//                             {/* Number */}
//                             <h3 className="relative z-10 mt-10 text-5xl font-bold tracking-tight">
//                                 {stat.value}
//                             </h3>

//                             {/* Label */}
//                             <p className="relative z-10 mt-4 text-base text-gray-300">
//                                 {stat.label}
//                             </p>
//                         </div>
//                     ))}
//                 </div>
//             </div>

//             {/* <JobListingContainer initialJobs={jobs || []} /> */}
//         </section>
//     );
// }