const stats = Array.from({ length: 4 });
const rows = Array.from({ length: 5 });

export default function Loading() {
  return (
    <div className="min-h-screen bg-slate-950 text-white p-6 animate-pulse">
      <div className="max-w-7xl mx-auto">

        {/* Page Title */}
        <div className="h-10 w-64 rounded-xl bg-slate-800 mb-8" />

        {/* Profile */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">

          <div className="flex flex-col items-center">

            <div className="w-36 h-36 rounded-full bg-slate-800 border-4 border-slate-700" />

            <div className="h-8 w-60 rounded bg-slate-800 mt-6" />

            <div className="h-5 w-72 rounded bg-slate-800 mt-4" />

            <div className="h-10 w-28 rounded-full bg-slate-800 mt-5" />

            <div className="h-5 w-52 rounded bg-slate-800 mt-6" />

          </div>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 mt-10">
          {stats.map((_, i) => (
            <div
              key={i}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-8"
            >
              <div className="h-5 w-32 mx-auto rounded bg-slate-800" />

              <div className="h-12 w-24 mx-auto rounded bg-slate-800 mt-6" />
            </div>
          ))}
        </div>

        {/* Activity */}
        <div className="mt-10 bg-slate-900 border border-slate-800 rounded-2xl p-6">

          <div className="h-8 w-72 rounded bg-slate-800 mb-6" />

          <div className="overflow-x-auto">

            <table className="table w-full">

              <thead>
                <tr>
                  {[1, 2, 3, 4].map((item) => (
                    <th key={item}>
                      <div className="h-5 w-24 rounded bg-slate-800" />
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {rows.map((_, i) => (
                  <tr key={i} className="h-16">

                    <td>
                      <div className="h-5 w-36 rounded bg-slate-800" />
                    </td>

                    <td>
                      <div className="h-5 w-48 rounded bg-slate-800" />
                    </td>

                    <td>
                      <div className="h-5 w-28 rounded bg-slate-800" />
                    </td>

                    <td>
                      <div className="h-8 w-24 rounded-full bg-slate-800" />
                    </td>

                  </tr>
                ))}
              </tbody>

            </table>

          </div>
        </div>

      </div>
    </div>
  );
}