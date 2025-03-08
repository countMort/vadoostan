// lint-staged.config.js
module.exports = {
  // Type check TypeScript files
  '**/*.(ts|tsx)': () => 'npx tsc --noEmit',

  // Lint then format TypeScript and JavaScript files
  '**/*.(ts|tsx|js)': (filenames) => [
    `npx eslint --fix ${filenames.join(' ')}\n`,
    `npx prettier --write ${filenames.join(' ')}\n`,
  ],
  // Format MarkDown and JSON
  '**/*.(md|json|ts|tsx|js|scss|css)': (filenames) =>
    `npx prettier --write ${filenames.join(' ')}\n`,
};
