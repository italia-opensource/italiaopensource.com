import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import prettierConfig from 'eslint-config-prettier';
import markdown from 'eslint-plugin-markdown';

export default [
  {
    ignores: ['node_modules/**', 'build/**', '.docusaurus/**', '.cache-loader/**']
  },
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  ...markdown.configs.recommended,
  {
    files: ['**/*.md'],
    processor: markdown.processors.markdown
  },
  prettierConfig
];
