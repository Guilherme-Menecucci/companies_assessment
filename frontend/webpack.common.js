const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const JSONMinifyPlugin = require('node-json-minify');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const isProductionMode = process.env.NODE_ENV === 'production';

const config = {
  entry: path.resolve(__dirname, 'src', 'index.tsx'),
  output: {
    path: path.resolve(__dirname, 'public'),
    publicPath: '/',
    filename: '[name].bundle.js',
  },
  resolve: {
    extensions: ['.mjs', '.ts', '.tsx', '.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        include: path.resolve(__dirname, 'app'),
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'ts-loader'],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        loader: 'file-loader',
        options: {
          name(resourcePath, resourceQuery) {
            if (!isProductionMode) {
              return '[name].[ext]';
            }

            return '[contenthash].[ext]';
          },
          outputPath: 'assets/images',
          publicPath: 'assets/images',
        },
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
    ],
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          /* i18n */
          from: path.join(__dirname, 'src', 'languages'),
          transform(content) {
            // minify json
            return JSONMinifyPlugin(content.toString());
          },
          to: path.join(__dirname, 'public', 'languages'),
        },
      ],
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html'),
      title: 'Localhost',
    }),
    new WebpackPwaManifest({
      name: 'Localhost',
      short_name: 'CO',
      description: 'A personal page',
      background_color: '#ffffff',
      inject: true,
      fingerprints: true,
      ios: true,
      crossorigin: null,
      icons: [
        {
          src: path.resolve(__dirname, 'src', 'icon', 'icon.png'),
          sizes: [120, 152, 167, 180, 1024],
          destination: path.join('icons', 'ios'),
          ios: true,
        },
        {
          src: path.resolve(__dirname, 'src', 'icon', 'icon.png'),
          size: 1024,
          destination: path.join('icons', 'ios'),
          ios: 'startup',
        },
        {
          src: path.resolve(__dirname, 'src', 'icon', 'icon.png'),
          sizes: [36, 48, 72, 96, 144, 192, 512],
          destination: path.join('icons', 'android'),
        },
      ],
    }),
  ],
};

module.exports = config;
