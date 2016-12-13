import webpack from 'webpack';
import merge from 'webpack-merge';
import wpClean from 'clean-webpack-plugin';
import sharedConf from './shared';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import { BUILD_CONFIG, DEV_CONFIG, PATHS, } from './constants';

const clean = path =>
({ plugins: [ new wpClean([ path, ], { root: process.cwd(), }), ], });

export const build = common =>
  merge.smart(common, BUILD_CONFIG, clean(PATHS.dist));

export const dev = (common = sharedConf({ prod: false, })) => {
  // console.log('==============common==============');
  // console.log(process.env.NODE_ENV);

  // console.log(common);
  const dConf = (merge.smart(common, DEV_CONFIG));

  // console.log('==============dConf==============');

  // console.log(process.env.NODE_ENV);

  // console.log(dConf);
  return dConf;
};

export const applyHotMiddleware = compiler => (app) => {
  if (process.env.NODE_ENV !== 'production') {
    app.use(webpackDevMiddleware(compiler, {

      noInfo: true,
      historyApiFallback: true,

      // publicPath: '/',

      publicPath: compiler.options.output.publicPath,
      serverSideRender: false,
    }));
    app.use(webpackHotMiddleware(compiler, ));
  }

  return app;
};

export const compile = config => webpack(config);

export const enableHotReload = app => applyHotMiddleware(compile(dev()))(app);
