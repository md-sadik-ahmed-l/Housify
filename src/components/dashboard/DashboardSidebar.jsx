import { getUserSession } from "@/lib/core/session";
import {
  Bars,
  CirclePlus,
  Envelope,
  Gear,
  House,
  CircleDollar,
  Magnifier,
  StarFill,
  Person,
} from "@gravity-ui/icons";
import { Button, Drawer } from "@heroui/react";
import Link from "next/link";

export async function DashboardSidebar() {
  const user = await getUserSession();

  const tenantNavLinks = [
    { icon: Person, href: "/dashboard/tenant/profile", label: "Profile" },
    {
      icon: Magnifier,
      href: "/dashboard/tenant/my-bookings",
      label: "My Bookings",
    },
    { icon: StarFill, href: "/dashboard/tenant/favorites", label: "Favorites" },
    // { icon: House, href: "/dashboard/tenant", label: "Tenant Home" },
    { icon: Gear, href: "/dashboard/tenant/settings", label: "Settings" },
  ];

  const ownerNavLinks = [
    { icon: Person, href: "/dashboard/owner/profile", label: "Profile" },
    {
      icon: Magnifier,
      href: "/dashboard/owner/properties",
      label: "My Properties",
    },
    {
      icon: CirclePlus,
      href: "/dashboard/owner/add-property",
      label: "Add Property",
    },
    {
      icon: Envelope,
      href: "/dashboard/owner/booking-requests",
      label: "Booking Requests",
    },
    { icon: House, href: "/dashboard/owner/owner-analytics", label: "Owner Analytics" },
    { icon: Gear, href: "/dashboard/owner/settings", label: "Settings" },
  ];
  const adminNavLinks = [
    { icon: Person, href: "/dashboard/admin/profile", label: "Profile" },
    {
      icon: Magnifier,
      href: "/dashboard/admin/all-users",
      label: "All Users",
    },
    {
      icon: House,
      href: "/dashboard/admin/all-properties",
      label: "All Properties",
    },
    {
      icon: Envelope,
      href: "/dashboard/admin/all-bookings",
      label: "All Bookings",
    },
    { icon: CircleDollar, href: "/dashboard/admin/all-transactions", label: "All Transactions" },
    { icon: Gear, href: "/dashboard/admin/settings", label: "Settings" },
  ];

  const navLinksMap = {
    tenant: tenantNavLinks,
    owner: ownerNavLinks,
    admin: adminNavLinks,
  };

  const navItems = navLinksMap[user?.role || "tenant"];

  const navContent = (
    <nav className="flex flex-col gap-1">
      {navItems.map((item) => (
        <Link
          key={item.label}
          className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm hover:text-black transition-colors hover:bg-default"
          href={item.href}
        >
          <item.icon className="size-5 text-muted" />
          {item.label}
        </Link>
      ))}
    </nav>
  );

  return (
    <>
      <aside className="hidden w-64 shrink-0 border-r border-default lg:block p-4 text-white bg-gray-900">
        {navContent}
      </aside>
      <Drawer>
        <Button className="lg:hidden" variant="secondary">
          <Bars />
          Sidebar
        </Button>
        <Drawer.Backdrop>
          <Drawer.Content placement="left">
            <Drawer.Dialog>
              <Drawer.CloseTrigger />
              <Drawer.Header>
                <Drawer.Heading>Navigation</Drawer.Heading>
              </Drawer.Header>
              <Drawer.Body>{navContent}</Drawer.Body>
            </Drawer.Dialog>
          </Drawer.Content>
        </Drawer.Backdrop>
      </Drawer>
    </>
  );
}
