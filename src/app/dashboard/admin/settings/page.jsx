export default function AdminSettingsPage() {
  return (
    <div className="max-w-5xl mx-auto p-6 text-white">
      <h1 className="text-3xl font-bold mb-6">Admin Settings</h1>

      <div className="space-y-6">

        {/* Profile */}
        <div className="bg-gray-900 rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-4">Admin Profile</h2>

          <div className="grid md:grid-cols-2 gap-4">
            <input className="input input-bordered bg-gray-800" placeholder="Full Name" />
            <input className="input input-bordered bg-gray-800" placeholder="Email" disabled />
            <input className="input input-bordered bg-gray-800" placeholder="Phone Number" />
            <input className="input input-bordered bg-gray-800" placeholder="Address" />
          </div>

          <button className="btn btn-primary mt-5">
            Update Profile
          </button>
        </div>

        {/* Admin Preferences */}
        <div className="bg-gray-900 rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-4">System Preferences</h2>

          <label className="flex gap-3 mb-3">
            <input type="checkbox" defaultChecked />
            Auto Approve Properties
          </label>

          <label className="flex gap-3 mb-3">
            <input type="checkbox" defaultChecked />
            Enable Email Alerts
          </label>

          <label className="flex gap-3">
            <input type="checkbox" />
            Allow New Owner Registration
          </label>

          <button className="btn btn-success mt-5">
            Save Preferences
          </button>
        </div>

        {/* Security */}
        <div className="bg-gray-900 rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-4">Security</h2>

          <label className="flex gap-3 mb-3">
            <input type="checkbox" />
            Enable Two-Factor Authentication
          </label>

          <label className="flex gap-3">
            <input type="checkbox" defaultChecked />
            Login Alerts
          </label>

          <button className="btn btn-info mt-5">
            Update Security
          </button>
        </div>

      </div>
    </div>
  );
}