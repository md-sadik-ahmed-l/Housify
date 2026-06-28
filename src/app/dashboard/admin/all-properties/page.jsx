"use client";

import AllPropertiesTable from "@/components/dashboard/adminDashboard/AllPropertiesTable";



const AllPropertiesAdminPage = () => {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-default-900">All Properties</h1>
        <p className="text-sm text-default-500 mt-1">Manage and review all listed properties</p>
      </div>
      <AllPropertiesTable />
    </div>
  );
};

export default AllPropertiesAdminPage;