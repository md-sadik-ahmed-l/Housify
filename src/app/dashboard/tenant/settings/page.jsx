export default function TenantSettingsPage() {
  return (
    <div className="max-w-5xl mx-auto p-6 text-white">
      <h1 className="text-3xl font-bold mb-6">Tenant Settings</h1>

      <div className="space-y-6">

        {/* Profile */}
        <div className="bg-gray-900 rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-4">Profile Information</h2>

          <div className="grid md:grid-cols-2 gap-4">
            <input className="input input-bordered bg-gray-800" placeholder="Full Name" />
            <input className="input input-bordered bg-gray-800" placeholder="Phone Number" />
            <input className="input input-bordered bg-gray-800" placeholder="Email" disabled />
            <input className="input input-bordered bg-gray-800" placeholder="Address" />
          </div>

          <button className="btn btn-primary mt-5">
            Update Profile
          </button>
        </div>

        {/* Password */}
        <div className="bg-gray-900 rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-4">Change Password</h2>

          <div className="space-y-3">
            <input className="input input-bordered bg-gray-800 w-full" placeholder="Current Password" type="password" />
            <input className="input input-bordered bg-gray-800 w-full" placeholder="New Password" type="password" />
            <input className="input input-bordered bg-gray-800 w-full" placeholder="Confirm Password" type="password" />
          </div>

          <button className="btn btn-success mt-5">
            Change Password
          </button>
        </div>

        {/* Notifications */}
        <div className="bg-gray-900 rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-4">Notifications</h2>

          <label className="flex gap-3 mb-3">
            <input type="checkbox" defaultChecked />
            Email Notifications
          </label>

          <label className="flex gap-3">
            <input type="checkbox" defaultChecked />
            Booking Notifications
          </label>

          <button className="btn btn-info mt-5">
            Save Preferences
          </button>
        </div>

      </div>
    </div>
  );
}