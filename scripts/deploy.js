const pages = require('gh-pages');
const fs = require('fs');
const path = require('path');

const outDir = path.resolve(__dirname, '../out');

fs.writeFileSync(path.join(outDir, '.nojekyll'), '');

pages.publish(
  outDir,
  {
    dotfiles: true,
  },
  (err) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
  },
);
