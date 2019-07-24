module.exports = function() {
    var test = document.createElement('div');
    test.textContent = 'Hi, 我正在练习简易版webpack! 我增加了配置文件`webpack.config.js` 使用 npm 命令进行打包';
    return test;
}