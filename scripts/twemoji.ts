import { parse } from "twemoji-parser";

const emojis = Bun.argv[2];

if (!emojis) {
  console.error("Please provide a string of emojis to parse");
  process.exit(1);
}

const entities = parse(emojis);

entities.forEach((entity) => {
  const url = new URL(entity.url);
  const filename = url.pathname.split("/").pop();
  const githubUrl = `https://github.com/twitter/twemoji/blob/master/assets/svg/${filename}`;

  console.log(`${entity.text}: ${githubUrl}`);
});
