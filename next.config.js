module.exports = {
  reactStrictMode: true,
  webpack: config => {
    // Unset client-side javascript that only works server-side
    config.resolve.fallback = { fs: false, module: false },
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });
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
