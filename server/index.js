import "dotenv/config";
import cors from "cors";
import express from "express";
import fs from "fs";
import multer from "multer";
import OpenAI from "openai";
import path from "path";
import sharp from "sharp";
import { toFile } from "openai/uploads";

const PORT = process.env.PORT ?? 3001;
const app = express();
const upload = multer({ storage: multer.memoryStorage() });
const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

app.use(cors());

const ASSETS_DIR = path.resolve("src/assets");
const BASE_CHAIR_PATH = path.join(ASSETS_DIR, "ff-chair.jpg");

let baseChairBytes = null;
try {
  baseChairBytes = fs.readFileSync(BASE_CHAIR_PATH);
} catch (error) {
  console.error("Missing base chair image at", BASE_CHAIR_PATH, error);
}

// Prompt mirrors the working Playground behaviour: background is sacred; only the character changes.
const compositePrompt = `
Use the FIRST image as the fixed Fox Coin jet cabin background.
Do NOT change its camera angle, table, logo, glass, colours, or lighting.

Use the SECOND image only to understand who the character is
(face, headwear, clothing style, colours, overall vibe).

Create a new realistic final photo where:
- The character from the second image is now sitting naturally in the seat,
  behind the table, facing the camera.
- Their likeness is strictly preserved: face shape, hair, clothing, colours, and art style
  (if stylized/illustrated/anime/cel-shaded, keep that stylization).
  Do NOT add or remove accessories (hats, masks, glasses, props) unless they appear in the second image.
  Keep the head/hair exactly as provided in the second image unless the accessory is present there.
  Do NOT convert stylized sources into pure photoreal; keep the stylistic vibe and palette
  while matching the cabin lighting and shading.
- The table and champagne glass remain fully visible in front of them.
- The background (cabin walls, window, logo, lighting) stays the same.
- No extra text, watermarks, or props are added.
`;

const normaliseUpload = async (file) => {
  const pngBuffer = await sharp(file.buffer).png().toBuffer();
  return { buffer: pngBuffer, filename: "upload.png", contentType: "image/png" };
};

app.post("/api/chair-pfp", upload.single("photo"), async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: "Upload a selfie to continue." });
  }

  if (!baseChairBytes) {
    return res.status(500).json({ error: "Base chair image missing on server." });
  }

  try {
    // Normalize the user image
    const { buffer: userBuffer, filename, contentType } = await normaliseUpload(req.file);

    // Prepare images for OpenAI
    const baseFile = await toFile(baseChairBytes, "ff-chair.jpg", { type: "image/jpeg" });
    const userFile = await toFile(userBuffer, filename, { type: contentType });

    // Ask the model to produce the final composite in one call
    const result = await client.images.edit({
      model: "gpt-image-1",
      image: [baseFile, userFile], // 1st = background, 2nd = character reference
      prompt: compositePrompt,
      size: "1024x1536", // 2:3 ratio close to ff-chair.jpg
      n: 1,
    });

    const b64 = result?.data?.[0]?.b64_json;
    if (!b64) {
      throw new Error("No image returned from OpenAI");
    }

    // Resize to match the base chair dimensions (ff-chair.jpg is 853x1280)
    const finalBuffer = await sharp(Buffer.from(b64, "base64"))
      .resize({ width: 853, height: 1280, fit: "cover" })
      .png()
      .toBuffer();

    return res.json({ image: finalBuffer.toString("base64") });
  } catch (error) {
    console.error("Failed to generate chair PFP:", error);
    const message =
      error?.response?.data?.error?.message ||
      error.message ||
      "Failed to generate the chair PFP.";
    return res.status(500).json({ error: message });
  }
});

app.listen(PORT, () => {
  console.log(`Chair PFP server listening on http://localhost:${PORT}`);
});
