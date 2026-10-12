// @ts-check
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import angular from 'angular-eslint';

export default tseslint.config(
  {
    ignores: ['projects/**/*', 'docs/**/*'],
  },
  {
    files: ['**/*.ts'],
    extends: [
      eslint.configs.recommended,
      ...tseslint.configs.recommended,
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
      // Newly added to the angular-eslint recommended set in this upgrade.
      // The Angular 22 migration deliberately kept pre-existing components on
      // ChangeDetectionStrategy.Eager to preserve their prior behavior rather
      // than silently switching them to OnPush; mirror that by not enforcing
      // this rule, to avoid forcing an unrelated behavior change here.
      '@angular-eslint/prefer-on-push-component-change-detection': 'off',
    },
  },
  {
    files: ['**/*.html'],
    extends: [...angular.configs.templateRecommended],
    rules: {},
  },
);
