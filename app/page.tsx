export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center px-6">
      <h1 className="text-5xl font-bold mb-4">
        VigilAssist AI
      </h1>

      <p className="text-slate-400 text-center max-w-2xl mb-8">
        Assistente inteligente para transcrição de chamadas,
        geração de narrativas de farmacovigilância e identificação
        automática de informações faltantes.
      </p>

      <div className="flex gap-4">
        <button className="bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-700">
          Novo Caso
        </button>

        <button className="border border-slate-700 px-6 py-3 rounded-lg hover:bg-slate-800">
          Ver Demonstração
        </button>
      </div>
    </main>
  );
}