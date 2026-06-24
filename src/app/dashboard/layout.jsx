import { DashboardSidebar } from "@/components/dashboard/DashboardSidebar";

import React from "react";

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex h-screen overflow-hidden">
        
      <div className="h-full bg-gray-900 shrink-0">
        <DashboardSidebar></DashboardSidebar>
      </div>

      <div className="flex-1 h-full overflow-y-auto bg-black text-white">{children}</div>
    </div>
  );
};

export default DashboardLayout;
