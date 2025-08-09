import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig } from 'vitest/config'

const exclusions = [
    'node_modules',
    'public',
    'prisma',
    '.next',
    'app/generated/**',
    './middleware.ts',
    '**/*.config*',
    '.vscode',
    'tests/utils/test-utils.tsx',
    '**/route.ts',
    '**/layout.tsx',
    'html/*',
    '**/lib/utils.ts',
    'scripts/**',
    'types/**',
    '**/index.ts',
    '*.d.ts',
]

// Vite configuration
const config = defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
})

// Vitest configuration
const tstConfig = defineConfig({
    test: {
        environment: 'jsdom',
        globals: true,
        exclude: exclusions,
        coverage: {
            exclude: exclusions,
            thresholds: {
                statements: 85,
                branches: 75,
                functions: 80,
                lines: 85,
            },
        },
        setupFiles: './tests/setup.js',
        testTimeout: 10000,
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
})

// Merge configurations
export default {
    ...config,
    ...tstConfig,
}
