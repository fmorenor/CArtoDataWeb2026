export const MAX_UPLOAD_BYTES = 10 * 1024 * 1024;

export function sanitizeFilename(filename: string): string {
  const normalized = filename
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-zA-Z0-9._-]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/-+\./g, ".")
    .replace(/^[-.]+|[-.]+$/g, "")
    .slice(0, 160);

  return normalized || "cartodata-file";
}

export function buildStorageKey(userId: number, filename: string): string {
  const safeFilename = sanitizeFilename(filename);
  return `cartodata-assets/user-${userId}/${Date.now()}-${safeFilename}`;
}

export function decodeBase64Upload(base64: string, maxBytes = MAX_UPLOAD_BYTES): Buffer {
  const payload = base64.includes(",") ? base64.split(",").pop() ?? "" : base64;
  const cleaned = payload.trim();

  if (!cleaned) {
    throw new Error("El archivo enviado está vacío.");
  }

  const buffer = Buffer.from(cleaned, "base64");

  if (buffer.byteLength === 0) {
    throw new Error("El archivo enviado no pudo decodificarse.");
  }

  if (buffer.byteLength > maxBytes) {
    throw new Error(`El archivo supera el límite de ${Math.round(maxBytes / 1024 / 1024)} MB.`);
  }

  return buffer;
}
