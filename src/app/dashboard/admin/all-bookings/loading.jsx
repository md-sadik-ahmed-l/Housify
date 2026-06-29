const rows = Array.from({ length: 6 });

export default function Loading() {
  return (
    <div className="max-w-6xl mx-auto my-15 space-y-7 animate-pulse">
      {/* Page Header */}
      <div className="space-y-3">
        <div className="h-10 w-72 rounded-xl bg-base-300" />
        <div className="h-5 w-96 rounded bg-base-300" />
      </div>

      {/* Table Card */}
      <div className="overflow-hidden rounded-3xl border border-base-300 shadow-lg">

        {/* Card Header */}
        <div className="bg-base-300 p-6 space-y-3">
          <div className="h-8 w-72 rounded bg-base-200" />
          <div className="h-4 w-80 rounded bg-base-200" />
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr className="border-b border-base-300">
                {Array.from({ length: 6 }).map((_, i) => (
                  <th key={i}>
                    <div className="h-5 w-20 rounded bg-base-300" />
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {rows.map((_, index) => (
                <tr key={index} className="h-24 border-b border-base-300">

                  {/* Owner */}
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="h-12 w-12 rounded-full bg-base-300" />

                      <div className="space-y-2">
                        <div className="h-5 w-36 rounded bg-base-300" />
                        <div className="h-4 w-48 rounded bg-base-300" />
                      </div>
                    </div>
                  </td>

                  {/* Property */}
                  <td>
                    <div className="h-5 w-40 rounded bg-base-300" />
                  </td>

                  {/* Amount */}
                  <td>
                    <div className="h-5 w-20 rounded bg-base-300" />
                  </td>

                  {/* Date */}
                  <td>
                    <div className="h-5 w-28 rounded bg-base-300" />
                  </td>

                  {/* Delete */}
                  <td>
                    <div className="h-11 w-28 rounded-full bg-base-300" />
                  </td>

                  {/* Actions */}
                  <td>
                    <div className="flex justify-center gap-3">
                      <div className="h-11 w-28 rounded-full bg-base-300" />
                      <div className="h-11 w-28 rounded-full bg-base-300" />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>
      </div>
    </div>
  );
}