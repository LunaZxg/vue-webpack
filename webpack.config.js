const path = require('path');

module.exports = {
    mode: 'development',
    devtool: 'eval-source-map',
    entry: './app/main.js', //打包文件的入口
    output: {
        path: __dirname+'/public', //打包后文件存放的路径
        filename: 'bundle.js' //打包后输出的文件名
    },
    devServer: {
        contentBase: './public', //本地服务器加载的页面服务路径
        inline: true,  //实时刷新
        port: 8007,
    },
    module:{
        rules: [
            {
                test: /\.html$/,
                use: {
                    loader: path.resolve(__dirname + '/loaders/handle-html.js')
                }
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader"
                    }, {
                        loader: "css-loader"
                    }, {
                        loader: "postcss-loader"
                    }
                ]
            }
        ],
    }
}