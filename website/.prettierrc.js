module.exports = {
    semi: true,
    trailingComma: 'none',
    singleQuote: true,
    printWidth: 100,
    tabWidth: 2,
    endOfLine: 'auto',
    overrides: [
      {
        files: '*.md',
        options: {
          tabWidth: 2,
          proseWrap: 'preserve'
        }
      }
    ]
  };