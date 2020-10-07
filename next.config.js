/**
 * @typedef {Object} DefaultLoaders
 * @property {import('webpack').RuleSetRule} babel
 */

/**
 * @typedef {Object} NextWebpackOptions
 * @property {string} buildId
 * @property {boolean} dev
 * @property {boolean} isServer
 * @property {DefaultLoaders} defaultLoaders
 */

/**
 * @type {import('next').NextConfig}
 * @see https://nextjs.org/docs/api-reference/next.config.js/introduction
 */
const nextConfig = {
  /**
   * @param {import('webpack').Configuration} config
   * @param {NextWebpackOptions} options
   * @see https://nextjs.org/docs/api-reference/next.config.js/custom-webpack-config
   */
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
