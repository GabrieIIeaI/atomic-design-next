// @ts-check

import eslint from '@eslint/js'
import eslintPluginImport from 'eslint-plugin-import'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    plugins: {
      import: eslintPluginImport, // Configura o plugin 'import'
    },
    rules: {
      // Melhora a legibilidade e segurança do código
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }], // Evita variáveis não usadas, com exceção de variáveis prefixadas com _
      '@typescript-eslint/no-explicit-any': ['warn', { ignoreRestArgs: true }], // Evita o uso de any, exceto para argumentos de rest
      '@typescript-eslint/consistent-type-definitions': ['warn', 'interface'], // Usa interfaces em vez de tipos para declarações de tipos
      'no-console': 'warn', // Evita o uso de console.log no código de produção
      'eqeqeq': ['error', 'always'], // Requer o uso de === e !== em vez de == e !=
      'no-var': 'error', // Requer o uso de let/const em vez de var
      'prefer-const': 'warn', // Recomenda o uso de const para variáveis que não são reatribuídas
      'quotes': ['error', 'single'], // Requer o uso de aspas simples para strings
      'indent': ['error', 2], // Requer indentação com 2 espaços
      'semi': ['error', 'never'], // Requer a ausência de ponto e vírgula no final das declarações
      'import/order': [
        'error',
        {
          'groups': ['builtin', 'external', 'internal'],
          'pathGroups': [
            {
              'pattern': 'react',
              'group': 'external',
              'position': 'before'
            }
          ],
          'pathGroupsExcludedImportTypes': ['react'],
          'newlines-between': 'always',
          'alphabetize': {
            'order': 'asc',
            'caseInsensitive': true
          }
        }
      ],
    },
  },
)
