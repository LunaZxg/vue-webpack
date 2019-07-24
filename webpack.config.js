module.exports = {
    entry: './app/main.js', //打包文件的入口
    output: {
        path: __dirname+'/public', //打包后文件存放的路径
        filename: 'bundle.js' //打包后输出的文件名
    }
}