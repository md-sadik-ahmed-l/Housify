import Link from "next/link";
import { ShieldAlert } from "lucide-react";

export default function UnauthorizedPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
      <div className="max-w-md w-full bg-base-100 shadow-xl rounded-2xl p-8 text-center">
        <div className="flex justify-center mb-4">
          <ShieldAlert className="w-16 h-16 text-error" />
        </div>

        <h1 className="text-4xl font-bold text-error mb-2">401</h1>

        <h2 className="text-2xl font-semibold mb-3">
          Unauthorized Access
        </h2>

        <p className="text-base-content/70 mb-6">
          Sorry, you don't have permission to access this page.
          Please log in with the appropriate account or return to the homepage.
        </p>

        <div className="flex gap-4 justify-center">
          <Link href="/" className="btn btn-primary py-2 px-3 rounded-sm font-medium text-white bg-gray-700">
            Go Home
          </Link>

          <Link href="/auth/signin" className="btn btn-outline py-2 px-6 rounded-sm font-medium text-white bg-gray-700">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}