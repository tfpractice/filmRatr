import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import { resolve, } from 'path';

export const ROOT_PATH = resolve('./');
export const SRC_DIR = resolve(ROOT_PATH, 'src');
export const APP_PATH = resolve(SRC_DIR, 'client/index');

export const PATHS = {
  app:  resolve(SRC_DIR, 'client/index'),
  dist: resolve(ROOT_PATH, 'dist'),
  src: SRC_DIR,
};

export const DEV = 'dev';
export const BUILD = 'build';
export const CONFIG_EVENTS = new Set([ BUILD, DEV, ]);

export const BUILD_CONFIG = {
  entry: { vendor: [ 'material-ui', 'redux-form', 'react', ], },
  output: { filename:   '[name].[chunkhash].bundle.js', },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin(
      { names: [ 'vendor', 'manifest', ], }),
    new ExtractTextPlugin('[name].[chunkhash].styles.css'),
  ],
};

export const BABEL_QUERY = {
  presets: [[ 'latest', { es2015: false, },], 'react', ],
  plugins: [[ 'react-hot-loader/babel', ], ],
};

export const DEV_CONFIG = {
  devServer: { hot: true, },
  entry:   {
    app: [
      'react-hot-loader/patch', 'webpack-hot-middleware/client', PATHS.app,
    ],
    vendor: [ 'react-hot-loader/patch', 'webpack-hot-middleware/client',
      'material-ui', 'redux-form', 'react', ],
  },
  output: {
    hotUpdateChunkFilename: 'hot/[id].[hash].hot-update.js',
    hotUpdateMainFilename: 'hot/[hash].hot-update.json',
  },
  module: {
    loaders: [{
      test:    /\.jsx?$/,
      exclude: /node_modules/,
      loaders:  [{ loader: 'babel-loader', query: BABEL_QUERY, }, ],
      include: PATHS.src,
    },],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.EnvironmentPlugin([ 'MOVIE_DB_API_KEY', ]),
    new webpack.DefinePlugin({ 'process.env': { NODE_ENV: JSON.stringify(process.env.NODE_ENV), }, }),
  ],
};
