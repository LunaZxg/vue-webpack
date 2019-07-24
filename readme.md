- `npm init ` 添加package.json文件
- `npm install --save-dev webpack` 安装webpack作为依赖包
- 创建相关文件
- 执行命令`node_modules/.bin/webpack app/main.js -o public/bundle.js`后相关的js文件就被打包进了bundle文件中
## 使用配置文件
-  增加配置文件`webpack.config.js` 后使用执行命令`node_modules/.bin/webpack`即可完成打包
## 使用 npm 命令进行打包