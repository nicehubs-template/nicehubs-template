module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-css-modules'],
  rules: {
    'selector-max-id': null,
    'max-nesting-depth': 8,
    'value-keyword-case': null,
    'font-family-no-missing-generic-family-keyword': null,
  },
  ignoreFiles: ['dist/**/*', '*.json'],
};
