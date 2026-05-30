export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white p-8">
      <h1 className="text-4xl font-bold mb-8">
        Dashboard
      </h1>

      <div className="grid grid-cols-3 gap-6">
        <div className="bg-slate-900 p-6 rounded-xl">
          <h2 className="text-slate-400">
            Casos Processados
          </h2>

          <p className="text-3xl font-bold mt-2">
            12
          </p>
        </div>

        <div className="bg-slate-900 p-6 rounded-xl">
          <h2 className="text-slate-400">
            Missing Info
          </h2>

          <p className="text-3xl font-bold mt-2">
            4
          </p>
        </div>

        <div className="bg-slate-900 p-6 rounded-xl">
          <h2 className="text-slate-400">
            Áudios Processados
          </h2>

          <p className="text-3xl font-bold mt-2">
            8
          </p>
        </div>
      </div>
    </main>
  );
}