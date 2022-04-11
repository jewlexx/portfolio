const pages = require('gh-pages');
const fs = require('fs');
const path = require('path');

const outDir = path.resolve(__dirname, '../out');

fs.writeFileSync(path.join(outDir, '.nojekyll'), '');

pages.publish(
  outDir,
  {
    user: {
      email: 'pages_deploy@github.com',
      user: 'pages_deploy',
    },
  },
  (err) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
  },
);
