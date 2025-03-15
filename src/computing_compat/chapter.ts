import fs from "fs/promises";
import path from "path";
import { PythonShell } from "python-shell";

export type ChapterRange = 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17;
export type FileName = `${number}.${number} ${string}.py`;

export interface ChapterFile {
  content: string;
  name: FileName;
}

export interface ChapterData {
  content: string;
  chapter: number;
  title: string;
}

const pythonPath = path.join(process.cwd(), "src", "assets", "python");

export const getChapterData = async (
  chapter: ChapterRange,
): Promise<ChapterData> => {
  const chapterPath = path.join(
    pythonPath,
    `${chapter}`,
    `${chapter} answers.md`,
  );

  const answers = await fs.readFile(chapterPath, "utf-8");
  const references = await fs.readdir(path.join(pythonPath, `${chapter}`));
  const filesP: Promise<ChapterFile>[] = references
    .filter((v) => v.endsWith(".py"))
    .map(async (v) => {
      const filePath = path.join(pythonPath, `${chapter}`, v);
      const content = await fs.readFile(filePath, "utf-8");

      return {
        content,
        name: v as FileName,
      };
    });

  const files = await Promise.all(filesP);

  return {
    chapter,
    content: await files.reduce(async (old, current) => {
      return parseCode(await old, current, chapter);
    }, Promise.resolve(answers)),
    title: `Chapter ${chapter}: Answers`,
  };
};

const parseCode = async (code: string, file: ChapterFile, chapter: number) => {
  const reg = new RegExp(`\`${file.name}\``, "gm");
  const sourceReg = new RegExp(`\`${file.name}-source\``, "gm");
  const outputReg = new RegExp(`\`${file.name}-output\``, "gm");

  const p = PythonShell.run(
    path.join(pythonPath, `${chapter}`, `${file.name}`),
    undefined,
  ).then((out) => out.map((v) => `>>> ${v}`).join("\n") ?? "");

  const fence = "```";

  let codeParsed = code
    .replace(
      outputReg,
      `### Output: ${file.name}\n${fence}python\n${await p}\n${fence}`,
    )
    .replace(
      sourceReg,
      `### Source: ${file.name}\n${fence}python\n${file.content}\n${fence}`,
    );

  const source = `
  ${fence}python
  ${file.content}
  ${fence}
  `;

  const output = `
  #### Output
  ${fence}python
  ${await p}
  ${fence}
  `;

  const [section, fileName] = file.name.split(" ");

  codeParsed = codeParsed.replace(
    reg,
    [`### ${section}: \`${fileName}\``, source, output].join("\n"),
  );

  return codeParsed;
};
