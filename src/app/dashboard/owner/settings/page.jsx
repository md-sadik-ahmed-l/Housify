export default function OwnerSettingsPage() {
  return (
    <div className="max-w-5xl mx-auto p-6 text-white">
      <h1 className="text-3xl font-bold mb-6">Owner Settings</h1>

      <div className="space-y-6">

        {/* Profile */}
        <div className="bg-gray-900 rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-4">Profile Information</h2>

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

        {/* Business */}
        <div className="bg-gray-900 rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-4">Business Information</h2>

          <div className="grid md:grid-cols-2 gap-4">
            <input className="input input-bordered bg-gray-800" placeholder="Business Name" />
            <input className="input input-bordered bg-gray-800" placeholder="Business Email" />
            <input className="input input-bordered bg-gray-800" placeholder="Business Phone" />
            <input className="input input-bordered bg-gray-800" placeholder="Business Address" />
          </div>

          <button className="btn btn-success mt-5">
            Save Business Info
          </button>
        </div>

        {/* Bank */}
        <div className="bg-gray-900 rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-4">Payment Information</h2>

          <div className="space-y-3">
            <input className="input input-bordered bg-gray-800 w-full" placeholder="Bank Name" />
            <input className="input input-bordered bg-gray-800 w-full" placeholder="Account Name" />
            <input className="input input-bordered bg-gray-800 w-full" placeholder="Account Number" />
          </div>

          <button className="btn btn-info mt-5">
            Save Payment Info
          </button>
        </div>

      </div>
    </div>
  );
}