const env = process.env.NODE_ENV;
var path = require('path')
var webpack = require('webpack')
var CompressionWebpackPlugin = require('compression-webpack-plugin') // gzip插件
var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin; // 模块依赖分析插件
var uglifyjs_webpack_plugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/static/dist/',
    filename: 'build.js'
  },
  module: {
    rules: [{
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ],
      }, {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {}
          // other vue-loader options go here
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
        loader: 'url-loader?limit=8192&name=src/assets/[name].[ext]',
      },
      // {
      //   test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
      //   loader: 'url-loader',
      //   query: {
      //     limit: 8192,
      //     name: '/src/assets/img/[hash].[ext]'
      //   }
      // },
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': path.resolve('src')
    },
    extensions: ['*', '.js', '.vue', '.json']
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    overlay: true
  },
  performance: {
    hints: false
  },
  devtool: 'cheap-module-source-map',
}

// 判断当前环境为生产环境
if (env === 'production' || env === 'analyz') {
  module.exports.devtool = 'cheap-module-source-map',
    module.exports.plugins = (module.exports.plugins || []).concat([
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: '"production"'
        }
      }),
      new CompressionWebpackPlugin({ //gzip 压缩
        asset: '[path].gz[query]',
        algorithm: 'gzip',
        test: new RegExp(
          '\\.(js|css)$' //压缩 js 与 css
        ),
        threshold: 10240,
        minRatio: 0.8
      }),
      new uglifyjs_webpack_plugin(),
      // new webpack.optimize.UglifyJsPlugin({
      //     // 最紧凑的输出
      //     beautify: false,
      //     // 删除所有的注释
      //     comments: false,
      //     compress: {
      //         // 在UglifyJs删除没有用到的代码时不输出警告
      //         warnings: false,
      //         // 删除所有的 `console` 语句
      //         drop_console: false,
      //         // 内嵌定义了但是只用到一次的变量
      //         collapse_vars: true,
      //         // 提取出出现多次但是没有定义成变量去引用的静态值
      //         reduce_vars: true
      //     }
      // }),
    ]);
  if (env === 'analyz') {
    module.exports.plugins = (module.exports.plugins || []).concat([
      new BundleAnalyzerPlugin()
    ]);
  }
}
