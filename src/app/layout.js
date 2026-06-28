import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Housify",
  description: "Find Your Dream Home",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
     

    <body className="min-h-screen flex flex-col">
        <Navbar />

        <main className="flex-1">
          {children}
        </main>

        <Footer />
      </body>

      
    </html>
  );
}


// "use client";

// import { AlertTriangle, RefreshCw, Home } from "lucide-react";
// import Link from "next/link";

// export default function Error({ error, reset }) {
//   return (
//     <div className="min-h-screen flex items-center justify-center bg-base-100 px-6">
//       <div className="max-w-xl w-full text-center">

//         <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-red-100 dark:bg-red-900/20">
//           <AlertTriangle className="h-12 w-12 text-red-500" />
//         </div>

//         <h1 className="mt-8 text-4xl font-bold text-base-content">
//           Something went wrong!
//         </h1>

//         <p className="mt-4 text-base-content/70 leading-7">
//           We encountered an unexpected error while loading this page.
//           Please try again or return to the homepage.
//         </p>

//         {process.env.NODE_ENV === "development" && error?.message && (
//           <div className="mt-6 rounded-xl bg-base-200 p-4 text-left">
//             <p className="text-sm font-semibold text-error mb-2">
//               Error Details
//             </p>
//             <code className="text-sm break-all">{error.message}</code>
//           </div>
//         )}

//         <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
//           <button
//             onClick={reset}
//             className="btn btn-primary"
//           >
//             <RefreshCw size={18} />
//             Try Again
//           </button>

//           <Link href="/" className="btn btn-outline">
//             <Home size={18} />
//             Back to Home
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }