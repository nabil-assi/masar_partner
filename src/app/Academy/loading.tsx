export default function Loading() {
  return (
    <main className="min-h-screen bg-white px-4 pt-28" dir="rtl" aria-busy="true">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6">
        <div className="h-10 w-44 animate-pulse rounded-full bg-blue-50" />
        <div className="grid gap-6 lg:grid-cols-[1fr_.85fr] lg:items-center">
          <div className="space-y-4">
            <div className="h-12 w-11/12 animate-pulse rounded-2xl bg-slate-100" />
            <div className="h-12 w-8/12 animate-pulse rounded-2xl bg-slate-100" />
            <div className="h-4 w-full max-w-xl animate-pulse rounded-full bg-slate-100" />
            <div className="h-4 w-10/12 max-w-lg animate-pulse rounded-full bg-slate-100" />
          </div>
          <div className="aspect-[4/3] animate-pulse rounded-[1.75rem] bg-slate-100" />
        </div>
      </div>
    </main>
  );
}
