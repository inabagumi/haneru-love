const nextConfig = {
  i18n: {
    defaultLocale: 'en',
    domains: [
      {
        defaultLocale: 'en',
        domain: 'haneru.love'
      },
      {
        defaultLocale: 'ja',
        domain: 'ja.haneru.love'
      }
    ],
    localeDetection: false,
    locales: ['en', 'ja']
  },
  webpack(config, { defaultLoaders }) {
    config.module.rules.push({
      test: /\.(?:jpe?g|png|webp)$/,
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
