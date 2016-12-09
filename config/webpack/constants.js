import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import { resolve, } from 'path';

export const ROOT_PATH = resolve('./');
export const SRC_DIR = resolve(ROOT_PATH, 'src');
export const APP_PATH = resolve(SRC_DIR, 'client/index');

export const PATHS = {
  app:  resolve(SRC_DIR, 'client/index'),
  dist: resolve(ROOT_PATH, 'dist'),
};

export const DEV = 'dev';
export const BUILD = 'build';
export const CONFIG_EVENTS = new Set([ BUILD, DEV, ]);

export const BUILD_CONFIG =
  {
    entry: { vendor: [ 'react', ], },
    output: { filename:   '[name].[chunkhash].bundle.js', },
    plugins: [

      // new webpack.optimize.CommonsChunkPlugin({ names: [ 'vendor', 'manifest', ], }),
      // new ExtractTextPlugin('[name].[chunkhash].styles.css'),
    ],
  };

export const BABEL_QUERY = {
  presets: [
    'latest', 'react',
  ],
  plugins: [
    [ 'react-hot-loader/babel', ],
          [ 'transform-object-rest-spread', ],
          [ 'transform-class-properties', ],

    [ 'react-transform', {
      transforms: [
        {
          transform:  'react-transform-hmr',
          imports:   [ 'react', ],
          locals:    [ 'module', ],
        },
      ],
    },
    ],
  ],
};
export const DEV_CONFIG = {
  // devtool: 'eval-source-map',
  devServer: {
    hot: true,
    headers: { 'Access-Control-Allow-Origin': '*', },
  },
  entry:   {
    app: [
      'react-hot-loader/patch', 'webpack-hot-middleware/client', PATHS.app,
    ],
    vendor: [ 'react', 'react-hot-loader/patch', 'webpack-hot-middleware/client', ],
  },
  output: {
    hotUpdateChunkFilename: 'hot/[id].[hash].hot-update.js',
    hotUpdateMainFilename: 'hot/[hash].hot-update.json',
  },
  module: {
    loaders: [
      // {
      //   test:    /\.jsx?$/,
      //   exclude: /node_modules/,
      //   loaders: [ 'react-hot-loader/webpack', ],
      //   // query:   BABEL_QUERY,
      // }
      // {
      //   test:    /\.jsx?$/,
      //   exclude: /node_modules/,
      //   loader:  'babel-loader',
      //   query:   BABEL_QUERY,
      // },
      {
        test:    /\.jsx?$/,
        exclude: /node_modules/,
        loaders:  [{ loader: 'react-hot-loader/webpack', },
        { loader: 'babel-loader', query:   BABEL_QUERY, },],
      },
    ],
  },
  plugins: [

    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.EnvironmentPlugin([ 'MOVIE_DB_API_KEY', ]),
    new webpack.DefinePlugin({ 'process.env': { NODE_ENV: JSON.stringify(process.env.NODE_ENV), }, }),
  ],
};
