import { useMemo, useState } from "react";
import { Database, FileArchive, Loader2, LockKeyhole, ShieldAlert, UploadCloud } from "lucide-react";
import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { getLoginUrl } from "@/const";
import { trpc } from "@/lib/trpc";

function formatBytes(bytes: number) {
  if (!bytes) return "0 B";
  const units = ["B", "KB", "MB", "GB"];
  const index = Math.min(Math.floor(Math.log(bytes) / Math.log(1024)), units.length - 1);
  return `${(bytes / 1024 ** index).toFixed(index === 0 ? 0 : 1)} ${units[index]}`;
}

const MAX_FRONTEND_UPLOAD_BYTES = 10 * 1024 * 1024;
const ALLOWED_MIME_PREFIXES = ["image/", "application/pdf", "text/", "application/json", "application/zip"];

function isAllowedMimeType(type: string) {
  if (!type) return true;
  return ALLOWED_MIME_PREFIXES.some(prefix => type.startsWith(prefix));
}

function readFileAsDataUrl(file: File) {
  return new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result));
    reader.onerror = () => reject(new Error("No fue posible leer el archivo seleccionado."));
    reader.readAsDataURL(file);
  });
}

export default function StorageStudio() {
  const { user, loading, isAuthenticated } = useAuth();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const utils = trpc.useUtils();
  const filesQuery = trpc.storage.list.useQuery(undefined, { enabled: isAuthenticated });
  const uploadMutation = trpc.storage.upload.useMutation({
    onSuccess: async () => {
      setSelectedFile(null);
      setStatusMessage("Archivo almacenado correctamente en File Storage.");
      await utils.storage.list.invalidate();
    },
    onError: error => setStatusMessage(error.message),
  });

  const selectedSummary = useMemo(() => {
    if (!selectedFile) return "Selecciona un archivo para preparar la carga.";
    return `${selectedFile.name} · ${formatBytes(selectedFile.size)} · ${selectedFile.type || "tipo desconocido"}`;
  }, [selectedFile]);

  const handleUpload = async () => {
    if (!selectedFile) {
      setStatusMessage("Selecciona un archivo antes de subirlo.");
      return;
    }

    if (selectedFile.size > MAX_FRONTEND_UPLOAD_BYTES) {
      setStatusMessage("El archivo supera el límite operativo de 10 MB.");
      return;
    }

    if (!isAllowedMimeType(selectedFile.type)) {
      setStatusMessage("Tipo de archivo no permitido para esta consola interna.");
      return;
    }

    try {
      setStatusMessage("Preparando archivo para carga segura...");
      const base64 = await readFileAsDataUrl(selectedFile);
      await uploadMutation.mutateAsync({
        filename: selectedFile.name,
        mimeType: selectedFile.type || "application/octet-stream",
        base64,
      });
    } catch (error) {
      setStatusMessage(error instanceof Error ? error.message : "No fue posible completar la subida.");
    }
  };

  if (loading) {
    return (
      <main className="min-h-screen bg-[#090807] text-[#f5f0e8] grid place-items-center">
        <div className="flex items-center gap-3 text-sm uppercase tracking-[0.32em] text-[#cbb8a0]">
          <Loader2 className="h-5 w-5 animate-spin" /> Verificando sesión
        </div>
      </main>
    );
  }

  if (!isAuthenticated) {
    return (
      <main className="min-h-screen bg-[#090807] text-[#f5f0e8] grid place-items-center px-6">
        <Card className="max-w-xl border-[#5c1218]/50 bg-[#14100d]/90 text-[#f5f0e8] shadow-2xl">
          <CardContent className="p-8 space-y-5">
            <div className="h-12 w-12 rounded-full bg-[#6f111b] grid place-items-center">
              <LockKeyhole className="h-5 w-5" />
            </div>
            <h1 className="text-3xl font-semibold tracking-tight">Storage Studio requiere acceso autenticado.</h1>
            <p className="text-[#d5c8ba]">Esta vista es una consola interna para cargar y consultar archivos en el almacenamiento S3 del proyecto, sin exponer controles administrativos en el sitio público.</p>
            <Button asChild className="bg-[#7d1420] text-white hover:bg-[#9d1b2a]">
              <a href={getLoginUrl()}>Iniciar sesión</a>
            </Button>
          </CardContent>
        </Card>
      </main>
    );
  }

  if (user?.role !== "admin") {
    return (
      <main className="min-h-screen bg-[#090807] text-[#f5f0e8] grid place-items-center px-6">
        <Card className="max-w-xl border-[#5c1218]/50 bg-[#14100d]/90 text-[#f5f0e8] shadow-2xl">
          <CardContent className="p-8 space-y-5">
            <div className="h-12 w-12 rounded-full bg-[#6f111b] grid place-items-center">
              <ShieldAlert className="h-5 w-5" />
            </div>
            <h1 className="text-3xl font-semibold tracking-tight">Acceso reservado a administradores.</h1>
            <p className="text-[#d5c8ba]">File Storage es una consola interna para activos y documentos del proyecto. Tu sesión está autenticada, pero no tiene permisos administrativos para gestionar archivos.</p>
            <Button asChild className="bg-[#7d1420] text-white hover:bg-[#9d1b2a]"><a href="/">Volver al sitio</a></Button>
          </CardContent>
        </Card>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#090807] text-[#f5f0e8]">
      <section className="relative overflow-hidden border-b border-[#5c1218]/40">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_10%,rgba(125,20,32,0.55),transparent_30%),radial-gradient(circle_at_88%_0%,rgba(177,110,65,0.26),transparent_26%)]" />
        <div className="container relative py-14 lg:py-20">
          <a href="/" className="text-xs uppercase tracking-[0.28em] text-[#cbb8a0] hover:text-white">← Volver al sitio CartoData</a>
          <div className="mt-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
              <p className="text-sm uppercase tracking-[0.36em] text-[#b85b62]">File Storage · Consola interna</p>
              <h1 className="mt-4 max-w-4xl text-5xl font-semibold tracking-[-0.05em] md:text-7xl">Archivo territorial, gestionado como infraestructura de datos.</h1>
            </div>
            <p className="max-w-xl text-lg leading-8 text-[#d5c8ba]">Carga documentos, imágenes o insumos operativos al almacenamiento administrado. La base de datos conserva únicamente metadatos y referencias, mientras los bytes permanecen en S3.</p>
          </div>
        </div>
      </section>

      <section className="container grid gap-6 py-10 lg:grid-cols-[0.9fr_1.1fr]">
        <Card className="border-[#5c1218]/50 bg-[#15100d] text-[#f5f0e8] shadow-xl">
          <CardContent className="p-7 space-y-6">
            <div className="flex items-center gap-3">
              <div className="h-11 w-11 rounded-2xl bg-[#7d1420] grid place-items-center"><UploadCloud className="h-5 w-5" /></div>
              <div>
                <h2 className="text-2xl font-semibold">Subir archivo</h2>
                <p className="text-sm text-[#cbb8a0]">Sesión activa: {user?.name ?? user?.email ?? "usuario autenticado"}</p>
              </div>
            </div>
            <label className="block rounded-3xl border border-dashed border-[#8b2a31] bg-[#0e0b09] p-7 transition hover:border-[#c76855]">
              <input className="sr-only" type="file" onChange={event => setSelectedFile(event.target.files?.[0] ?? null)} />
              <span className="flex min-h-40 flex-col items-center justify-center gap-4 text-center">
                <FileArchive className="h-10 w-10 text-[#c76855]" />
                <span className="text-lg font-medium">Haz clic para seleccionar un archivo</span>
                <span className="max-w-sm text-sm leading-6 text-[#cbb8a0]">{selectedSummary}</span>
                <span className="text-xs uppercase tracking-[0.22em] text-[#8f7e70]">PDF, imágenes, texto, JSON o ZIP · máximo 10 MB</span>
              </span>
            </label>
            <Button onClick={handleUpload} disabled={!selectedFile || uploadMutation.isPending} className="w-full bg-[#7d1420] text-white hover:bg-[#9d1b2a]">
              {uploadMutation.isPending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <UploadCloud className="mr-2 h-4 w-4" />}
              Guardar en File Storage
            </Button>
            {statusMessage && <p className="rounded-2xl border border-[#5c1218]/60 bg-[#0e0b09] px-4 py-3 text-sm text-[#d5c8ba]">{statusMessage}</p>}
          </CardContent>
        </Card>

        <Card className="border-[#5c1218]/50 bg-[#15100d] text-[#f5f0e8] shadow-xl">
          <CardContent className="p-7">
            <div className="mb-6 flex items-center justify-between gap-4">
              <div>
                <h2 className="text-2xl font-semibold">Archivos registrados</h2>
                <p className="text-sm text-[#cbb8a0]">Metadatos persistidos en la base de datos del proyecto.</p>
              </div>
              <Database className="h-5 w-5 text-[#c76855]" />
            </div>
            {filesQuery.isLoading ? (
              <div className="flex items-center gap-3 text-[#cbb8a0]"><Loader2 className="h-4 w-4 animate-spin" /> Cargando archivo de datos</div>
            ) : filesQuery.data?.length ? (
              <div className="overflow-hidden rounded-3xl border border-[#2b211b]">
                {filesQuery.data.map(file => (
                  <a key={file.id} href={file.url} target="_blank" rel="noreferrer" className="grid gap-2 border-b border-[#2b211b] bg-[#0e0b09] p-4 transition last:border-b-0 hover:bg-[#1f1712] md:grid-cols-[1fr_auto]">
                    <span>
                      <strong className="block text-base">{file.filename}</strong>
                      <span className="mt-1 block break-all text-xs text-[#cbb8a0]">{file.key}</span>
                    </span>
                    <span className="text-left text-sm text-[#d5c8ba] md:text-right">
                      {formatBytes(file.sizeBytes)}<br />{file.mimeType}
                    </span>
                  </a>
                ))}
              </div>
            ) : (
              <div className="rounded-3xl border border-[#2b211b] bg-[#0e0b09] p-8 text-[#cbb8a0]">Aún no hay archivos registrados en este proyecto.</div>
            )}
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
