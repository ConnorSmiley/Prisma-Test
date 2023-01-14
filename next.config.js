module.exports = {
  reactStrictMode: true,
  webpack: config => {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    }),
    config.resolve.fallback = { fs: false, module: false }
    return config
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  images: {
    domains: ['localhost', 'njnfyypwtoiiqclfvxqe.supabase.co'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'njnfyypwtoiiqclfvxqe.supabase.co',
        port: '',
        pathname: '*',
      },
    ],
  },
}
