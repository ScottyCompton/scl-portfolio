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
    'html/*',
    'scripts/**',
    '',
]

// Vite configuration
const config = defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './'),
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
        },
        setupFiles: './tests/setup.js',
        testTimeout: 10000,
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './'),
        },
    },
})

// Merge configurations
export default {
    ...config,
    ...tstConfig,
}
