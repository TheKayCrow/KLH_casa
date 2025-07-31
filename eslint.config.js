import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import eslintPlugin from '@typescript-eslint/eslint-plugin';
import eslintParser from '@typescript-eslint/parser';

export default [
  // Base JavaScript config
  js.configs.recommended,
  
  // Vite config
  {
    files: ['vite.config.ts'],
    languageOptions: {
      parser: eslintParser,
      parserOptions: {
        project: './tsconfig.node.json'
      }
    }
  },
  
  // TypeScript config
  {
    files: ['**/*.{ts,tsx}'],
    ignores: ['vite.config.ts'],
    languageOptions: {
      parser: eslintParser,
      ecmaVersion: 2020,
      globals: {
        ...globals.browser
      },
      parserOptions: {
        project: './tsconfig.json'
      }
    }
  },
  
  // React + TypeScript config
  {
    files: ['**/*.{ts,tsx}'],
    plugins: {
      '@typescript-eslint': eslintPlugin,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh
    },
    rules: {
      ...eslintPlugin.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }]
    }
  }
];
