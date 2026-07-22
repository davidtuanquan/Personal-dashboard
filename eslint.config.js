import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      globals: globals.browser,
    },
    rules: {
      // Fetch-on-mount + realtime-subscription hooks (useTasks, useRuns, etc.)
      // intentionally setState after an async Supabase call inside useEffect —
      // the standard pattern for this app's scale, not a React Compiler target.
      'react-hooks/set-state-in-effect': 'off',
    },
  },
])
