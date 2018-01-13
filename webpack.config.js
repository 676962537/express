var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
console.log(process.env.ENV)
module.exports = {
    entry:'./client/index.js',
    output:{
        path: path.resolve(__dirname, ''),
        publicPath: '',
        filename:'[name].js'
    },
    plugins:[
        new HtmlWebpackPlugin({
            title: '<%= title %>',
            title1: '<%= title1 %>',
            filename: './views/index.html',
            chunks:'[name]',
            // template:path.resolve(__dirname, 'client/index.html')
            template:path.resolve(__dirname, 'client/index.ejs')
            // hash:true
        }),
        new HtmlWebpackPlugin({
            title: '<%= title %>',
            title1: '<%= title1 %>',
            filename: './views/index2.html',
            chunks:'[name]',
            // template:path.resolve(__dirname, 'client/index.html')
            template:path.resolve(__dirname, 'client/index.ejs')
            // hash:true
        })
    ],
    resolve: {
        extensions: ['.css','.js', '.vue'],
        alias: {
            'vue': 'vue/dist/vue.esm.js'
        }
    },
    module: {
        rules: [
            // 使用ejs-loader 加载 .ejs 结尾的文件
            {
                test: /\.ejs/,
                loader: "ejs-loader",
                query: {
                    variable: 'all',
                    interpolate : '\\{\\{(.+?)\\}\\}',
                    evaluate : '\\[\\[(.+?)\\]\\]'
                }
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }
        ]
    }
}