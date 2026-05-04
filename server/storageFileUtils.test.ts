import { describe, expect, it, vi } from "vitest";
import { buildStorageKey, decodeBase64Upload, sanitizeFilename } from "./storageFileUtils";

describe("storageFileUtils", () => {
  it("sanitizes filenames for stable storage keys", () => {
    expect(sanitizeFilename("Cartografía crítica 2026!.pdf")).toBe("Cartografia-critica-2026.pdf");
    expect(sanitizeFilename("../")).toBe("cartodata-file");
  });

  it("builds user-scoped storage keys", () => {
    vi.setSystemTime(new Date("2026-05-04T12:00:00.000Z"));
    expect(buildStorageKey(42, "mapa final.json")).toBe("cartodata-assets/user-42/1777896000000-mapa-final.json");
    vi.useRealTimers();
  });

  it("decodes plain and data-url base64 uploads", () => {
    const plain = Buffer.from("CartoData").toString("base64");
    expect(decodeBase64Upload(plain).toString("utf8")).toBe("CartoData");
    expect(decodeBase64Upload(`data:text/plain;base64,${plain}`).toString("utf8")).toBe("CartoData");
  });

  it("rejects empty or oversized payloads", () => {
    expect(() => decodeBase64Upload("")).toThrow("vacío");
    const tooLarge = Buffer.from("oversized").toString("base64");
    expect(() => decodeBase64Upload(tooLarge, 2)).toThrow("supera el límite");
  });
});
