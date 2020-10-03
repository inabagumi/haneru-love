/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  webpack(config, { defaultLoaders }) {
    config.module.rules.push({
      test: /\.(?:jpe?g|webp)$/,
      use: [
        defaultLoaders.babel,
        {
          loader: 'url-loader',
          options: {
            limit: 2048,
            name: '[name].[contenthash:8].[ext]',
            outputPath: 'static/media',
            publicPath: '/_next/static/media'
          }
        }
      ]
    })

    return config
  }
}

module.exports = nextConfig
