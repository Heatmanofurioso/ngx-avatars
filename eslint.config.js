const tseslint = require('typescript-eslint');
const angular = require('angular-eslint');

module.exports = tseslint.config(
  {
    ignores: ['docs/**/*', 'dist/**/*', 'out-tsc/**/*'],
  },
  {
    files: ['src/**/*.ts', 'e2e/**/*.ts'],
    languageOptions: {
      parserOptions: {
        project: ['tsconfig.json', 'e2e/tsconfig.json'],
        createDefaultProgram: true,
      },
    },
    extends: [
      ...angular.configs.tsRecommended,
    ],
    processor: angular.processInlineTemplates,
    rules: {
      '@angular-eslint/component-selector': [
        'warn',
        {
          prefix: 'lib',
          style: 'kebab-case',
          type: 'element',
        },
      ],
      '@angular-eslint/directive-selector': [
        'error',
        {
          prefix: 'lib',
          style: 'camelCase',
          type: 'attribute',
        },
      ],
    },
  },
  {
    files: ['src/**/*.html'],
    extends: [
      ...angular.configs.templateRecommended,
    ],
    rules: {},
  },
  {
    files: ['projects/ngx-avatars/**/*.ts'],
    languageOptions: {
      parserOptions: {
        project: [
          'projects/ngx-avatars/tsconfig.lib.json',
          'projects/ngx-avatars/tsconfig.spec.json',
        ],
        createDefaultProgram: true,
      },
    },
    extends: [
      ...angular.configs.tsRecommended,
    ],
    processor: angular.processInlineTemplates,
    rules: {
      '@angular-eslint/component-selector': [
        'warn',
        {
          prefix: 'ngx',
          style: 'kebab-case',
          type: 'element',
        },
      ],
      '@angular-eslint/directive-selector': [
        'error',
        {
          prefix: 'ngx',
          style: 'camelCase',
          type: 'attribute',
        },
      ],
    },
  },
  {
    files: ['projects/ngx-avatars/**/*.html'],
    extends: [
      ...angular.configs.templateRecommended,
    ],
    rules: {},
  },
  {
    // avatar.component.ts intentionally aliases these @Input()s as its public template API
    // (e.g. [facebookId], [src], [name]) - renaming them would be a breaking change for consumers.
    files: ['projects/ngx-avatars/src/lib/avatar.component.ts'],
    rules: {
      '@angular-eslint/no-input-rename': 'off',
    },
  },
);
