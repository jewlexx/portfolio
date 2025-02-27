import fg from "fast-glob";
import path from "path";
import fs from "fs/promises";

export const dynamic = "force-dynamic";

export async function GET() {
  const imagesPath = path.join(process.cwd(), "src/assets/images/anybrowser/*");
  const images = await fg([imagesPath]);

  console.log(images);

  const index = Math.floor(Math.random() * images.length);
  const imagePath = images[index];
  const data = await fs.readFile(imagePath);

  return new Response(data);
}
