import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function NewCasePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white p-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-2">
          Novo Caso
        </h1>

        <p className="text-slate-400 mb-8">
          Faça upload da gravação para iniciar o processamento.
        </p>

        <Card className="p-8 bg-slate-900 border-slate-800">
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold">
                Upload de Áudio
              </h2>

              <p className="text-slate-400 text-sm mt-1">
                Formatos suportados: MP3 e WAV
              </p>
            </div>

            <input
              type="file"
              accept=".mp3,.wav"
              className="block w-full text-sm"
            />

            <Button className="w-full">
              Processar Caso
            </Button>
          </div>
        </Card>
      </div>
    </main>
  );
}