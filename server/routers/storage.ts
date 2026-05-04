import { TRPCError } from "@trpc/server";
import { z } from "zod";
import { adminProcedure, router } from "../_core/trpc";
import { createStoredFile, listStoredFiles } from "../db";
import { storagePut } from "../storage";
import { buildStorageKey, decodeBase64Upload, sanitizeFilename } from "../storageFileUtils";

const uploadInput = z.object({
  filename: z.string().min(1).max(255),
  mimeType: z.string().min(1).max(128),
  base64: z.string().min(1),
});

export const storageRouter = router({
  list: adminProcedure.query(async () => {
    try {
      return await listStoredFiles(50);
    } catch (error) {
      throw new TRPCError({
        code: "INTERNAL_SERVER_ERROR",
        message: error instanceof Error ? error.message : "No fue posible listar archivos.",
      });
    }
  }),

  upload: adminProcedure.input(uploadInput).mutation(async ({ ctx, input }) => {
    try {
      const fileBuffer = decodeBase64Upload(input.base64);
      const filename = sanitizeFilename(input.filename);
      const key = buildStorageKey(ctx.user.id, filename);
      const stored = await storagePut(key, fileBuffer, input.mimeType);

      const metadata = await createStoredFile({
        key: stored.key,
        url: stored.url,
        filename,
        mimeType: input.mimeType,
        sizeBytes: fileBuffer.byteLength,
        uploadedById: ctx.user.id,
      });

      return metadata;
    } catch (error) {
      throw new TRPCError({
        code: "BAD_REQUEST",
        message: error instanceof Error ? error.message : "No fue posible subir el archivo.",
      });
    }
  }),
});
