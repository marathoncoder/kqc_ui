var path = require('path');
//定义了一些文件夹的路径
var ROOT_PATH = path.resolve(__dirname);
var BUILD_PATH = path.resolve(ROOT_PATH, './doc/build/');

module.exports = {
    //项目的文件夹 可以直接用文件夹名称 默认会找index.js 也可以确定是哪个文件名字
    entry: {
        kqc_common_css: ['./css/reset.css', './css/base.css', './css/grid.css', './css/font-awesome.css', './css/buttons.css',]
        //app: path.resolve(APP_PATH, 'index.js'),
        //添加要打包在vendors里面的库
        //vendors: ['jquery', 'moment']
    },
    output: {
        path: BUILD_PATH,
        //filename: '[name].[hash].js'
        filename: '[name].js'
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loaders: ['style', 'css'],
                include: path.resolve(ROOT_PATH, 'css')
            },
            {
                test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
                loader: 'url-loader?limit=50000&name=[path][name].[ext]'
            },
            //添加ES6的支持
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015']
                }
            }
        ],
        jshint: {
            "esnext": true
        }
    }
};