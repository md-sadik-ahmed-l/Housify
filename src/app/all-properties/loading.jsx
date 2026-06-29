export default function BrowsePropertiesLoading() {
  return (
    <div className="min-h-screen bg-[#09090B] animate-pulse">
      <div className="max-w-7xl mx-auto px-6 py-10">

        {/* Hero */}
        <div className="space-y-4">
          <div className="h-14 w-80 rounded-xl bg-zinc-800" />
          <div className="h-5 w-60 rounded-lg bg-zinc-800" />
        </div>

        {/* Search */}
        <div className="mt-12 rounded-3xl border border-zinc-800 bg-zinc-900/70 p-6">
          <div className="grid gap-5 lg:grid-cols-3">
            <div className="lg:col-span-2 h-14 rounded-2xl bg-zinc-800" />
            <div className="h-14 rounded-2xl bg-zinc-800" />
            <div className="h-14 rounded-2xl bg-zinc-800" />
          </div>
        </div>

        {/* Counter */}
        <div className="mt-10 h-5 w-40 rounded bg-zinc-800" />

        {/* Cards */}
        <div className="mt-8 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="rounded-3xl border border-zinc-800 bg-zinc-900 p-5"
            >
              <div className="h-64 rounded-2xl bg-zinc-800" />

              <div className="mt-6 h-8 w-3/4 rounded bg-zinc-800" />
              <div className="mt-3 h-4 w-full rounded bg-zinc-800" />
              <div className="mt-2 h-4 w-2/3 rounded bg-zinc-800" />

              <div className="mt-6 flex gap-3">
                <div className="h-9 w-24 rounded-full bg-zinc-800" />
                <div className="h-9 w-24 rounded-full bg-zinc-800" />
                <div className="h-9 w-28 rounded-full bg-zinc-800" />
              </div>

              <div className="my-6 h-px bg-zinc-800" />

              <div className="grid grid-cols-3 gap-4">
                {[1, 2, 3].map((item) => (
                  <div key={item}>
                    <div className="mx-auto h-8 w-10 rounded bg-zinc-800" />
                    <div className="mx-auto mt-2 h-3 w-16 rounded bg-zinc-800" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}