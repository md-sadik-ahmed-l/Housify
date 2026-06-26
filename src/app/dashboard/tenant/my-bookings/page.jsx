import { getTenantBookingProperties } from "@/lib/api/booking";
import { getUserSession } from "@/lib/core/session";
import TenantBookingsTable from "@/components/dashboard/TenantDashboard/TenantBookingsTable";
import { CalendarDays } from "lucide-react";

const TenantBookingsPage = async () => {
  const user = await getUserSession();

  if (!user) {
    return (
      <div className="flex items-center justify-center min-h-[50vh]">
        Please login first
      </div>
    );
  }

  const bookingProperties = await getTenantBookingProperties(user.id);

  return (
    <div className="max-w-6xl mx-auto space-y-7 my-15">
      <div className="flex justify-between">
        {/* Header */}
        <div>
          <h1 className="text-2xl sm:text-4xl font-bold">My Bookings</h1>
          <p className="text-base-content/70 mt-2">
            View and track all your booking requests.
          </p>
        </div>

        {/* Stats Card */}
        <div className="bg-base-100 border border-base-300 rounded-2xl p-3 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="p-1 rounded-xl bg-primary/10">
              <CalendarDays className="w-10 h-10 text-primary" />
            </div>

            <div>
              <h3 className="text-xl font-semibold">
                {bookingProperties?.length || 0} Bookings
              </h3>
              <p className="text-sm text-base-content/70">
                Total booking requests made by you
              </p>
            </div>
          </div>
        </div>
      </div>

      <TenantBookingsTable bookings={bookingProperties} />
    </div>
  );
};

export default TenantBookingsPage;
