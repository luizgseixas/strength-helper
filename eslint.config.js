// eslint.config.js
import stylisticTs from '@stylistic/eslint-plugin-ts'
import parserTs from '@typescript-eslint/parser'

export default [
  {
    plugins: {
      '@stylistic/ts': stylisticTs
    },
    parser: parserTs,
    rules: {
      '@stylistic/indent': 'error',
      '@stylistic/quotes': 'error',
      '@stylistic/semi': 'error',
      '@stylistic/ts/indent': ['error', 2],
      // ...
    }
  }
]