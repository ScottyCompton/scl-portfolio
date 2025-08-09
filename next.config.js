/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers() {
        return [
            {
                source: '/:path*',
                headers: [
                    {
                        key: 'referrer-policy',
                        value: 'no-referrer',
                    },
                ],
            },
        ]
    },
    devIndicators: false,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cardosystems.com',
                pathname: '/cdn/shop/articles/**',
            },
            {
                protocol: 'https',
                hostname: 'firebasestorage.googleapis.com',
                pathname: '/v0/b/**',
            },
            {
                protocol: 'https',
                hostname: 'drive.google.com',
                pathname: '/file/d/**',
            },
            {
                protocol: 'https',
                hostname: 'drive.usercontent.google.com',
                pathname: '/download/**',
            },
            {
                protocol: 'https',
                hostname: 'drive.usercontent.google.com',
                pathname: '/download',
            },
            {
                protocol: 'https',
                hostname: 'lh3.googleusercontent.com',
                pathname: '/**',
            },
        ],
    },
    webpack: (config, { isServer, dev }) => {
        // Completely disable file watching in production builds
        if (!dev) {
            config.watchOptions = {
                ignored: ['**/*'],
            }
        } else {
            config.watchOptions = {
                ignored: [
                    '**/node_modules/**',
                    '**/.next/**',
                    '**/C:/Users/**',
                    '**/C:/ProgramData/**',
                    '**/C:/Windows/**',
                    '**/C:/Program Files/**',
                    '**/C:/Program Files (x86)/**',
                    '**/AppData/**',
                    '**/Application Data/**',
                ],
            }
        }

        // Disable file system caching that might cause issues
        config.infrastructureLogging = {
            level: 'error',
        }

        return config
    },
}

module.exports = nextConfig
