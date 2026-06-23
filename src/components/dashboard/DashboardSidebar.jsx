import {
  Bars,
  CirclePlus,
  Envelope,
  Gear,
  House,
  Magnifier,
  Person,
} from "@gravity-ui/icons";
import { Button, Drawer } from "@heroui/react";
import Link from "next/link";

export function DashboardSidebar() {
  const navItems = [
    { icon: House, href: "/dashboard/owner", label: "Home" },
    { icon: Magnifier, href: "/dashboard/owner/properties", label: "My Properties" },
    { icon: CirclePlus, href: "/dashboard/owner/add-property", label: "Add Property" },
    { icon: Envelope, href: "/dashboard/owner", label: "Booking Requests" },
    { icon: Person, href: "/dashboard/owner", label: "Profile" },
    { icon: Gear, href: "/dashboard/owner", label: "Settings" },
  ];

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
