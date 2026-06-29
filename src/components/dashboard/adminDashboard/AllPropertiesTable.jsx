"use client";

// import { patchStatusApprove, patchStatusReject } from "@/lib/actions/bookings";
import { CheckCircle, XCircle, User, CalendarDays, Home, } from "lucide-react";
import {TrashBin} from '@gravity-ui/icons';
import { deleteAdminStatus, patchAdminStatusApprove, patchAdminStatusReject } from "@/lib/actions/adminProperties";

const AllPropertiesTable = ({ postProperties }) => {


    const handleDelete = async (_id) => {
    try {
      const res = await deleteAdminStatus(_id);

      if (res.success) {
        window.location.reload();
      } else {
        alert(res.message);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleApprove = async (_id) => {
    try {
      const res = await patchAdminStatusApprove(_id);

      if (res.success) {
        window.location.reload();
      } else {
        alert(res.message);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleReject = async (_id) => {
    try {
      const res = await patchAdminStatusReject(_id);

      if (res.success) {
        window.location.reload();
      } else {
        alert(res.message);
      }
    } catch (error) {
      console.error(error);
    }
  };

  

 

  return (
    <div className=" rounded-3xl shadow-lg border border-gray-100 overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary to-secondary text-white p-6">
        <h2 className="text-2xl font-bold">Properties Post Requests</h2>
        <p className="text-sm opacity-90 mt-1">
          Manage Owner post requests for your website.
        </p>
      </div>

      {/* Table */}
      <div className="">
        <table className="table w-full ">
          <thead className="bg-gray-600 h-13">
            <tr className="text-white text-sm sm:text-xl">
              <th>Owner</th>
              <th>Property</th>
              <th>Amount</th>
              <th>Create Date</th>
              <th>Delete</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {postProperties?.map((propertyRequest) => (
              <tr
                key={propertyRequest?._id}
                className=" transition-colors border-b h-25 "
              >
                {/* Tenant */}
                <td>
                  <div className="flex items-center gap-3">
                    <div className="w-11 ml-2 h-11 rounded-full bg-gray-600 flex items-center justify-center">
                      <User size={27} className="text-primary " />
                    </div>

                    <div>
                      <p className="font-semibold text-xl text-gray-300">
                        {propertyRequest?.tenantName}
                      </p>
                      <p className="text-xs text-gray-300 truncate max-w-[180px]">
                        {propertyRequest?.userId}
                      </p>
                    </div>
                  </div>
                </td>

                {/* Property */}
                <td>
                  <div className="flex items-center gap-2">
                    <Home size={16} className="text-primary" />
                    <span className="font-medium">{propertyRequest.title}</span>
                  </div>
                </td>

                {/* Amount */}
                <td>
                  <span className="font-bold text-green-600 text-base">
                    $ {propertyRequest.price?.toLocaleString()}
                  </span>
                </td>

                {/* Date */}
                <td>
                  <div className="flex items-center gap-2 text-gray-300">
                    <CalendarDays size={15} />
                    
                    {new Date(propertyRequest.createdAt).toLocaleDateString("en-GB")}
                  </div>
                </td>

                {/* Status */}
                <td>
                  <div>
                    <button
                        onClick={() => handleDelete(propertyRequest._id)}
                        className="btn flex items-center px-4 gap-1 hover:cursor-pointer hover:bg-red-700 py-2 rounded-3xl btn-success btn-xl bg-red-500 text-white font-bold"
                      >
                        <TrashBin size={16} />
                        <span>Delete</span>
                      </button>
                  </div>
                </td>

                {/* Actions */}
                <td>
                  {propertyRequest?.adminStatus === "pending" ? (
                    <div className="flex justify-center gap-4">
                      <button
                        onClick={() => handleApprove(propertyRequest._id)}
                        className="btn flex items-center gap-1 hover:cursor-pointer hover:bg-green-700 px-3 rounded-3xl btn-success btn-xl bg-green-500 text-white font-bold"
                      >
                        <CheckCircle size={16} />
                        <span>Approve</span>
                      </button>



                      <button
                        onClick={() => handleReject(propertyRequest._id)}
                        className="btn flex items-center px-4 gap-1 hover:cursor-pointer hover:bg-red-600 py-2 rounded-3xl btn-success btn-xl bg-red-400 text-white font-bold"
                      >
                        <XCircle size={16} />
                        <span>Reject</span>
                      </button>
                    </div>
                  ) : (
                    <span className="text-sm font-bold border px-3 py-1.5 rounded-full text-gray-300 capitalize">
                      {propertyRequest.adminStatus} ✓
                    </span>
                  )}
                </td>
              </tr>
            ))}

            {postProperties?.length === 0 && (
              <tr>
                <td colSpan={6}>
                  <div className="py-16 text-center">
                    <div className="text-5xl mb-3">📅</div>
                    <h3 className="font-semibold text-lg">
                      No property Requests
                    </h3>
                    <p className="text-gray-500 mt-1">
                      No Owner booking requests found yet.
                    </p>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllPropertiesTable;
