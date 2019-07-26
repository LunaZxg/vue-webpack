- `npm init ` 添加package.json文件
- `npm install --save-dev webpack` 安装webpack作为依赖包
- 创建相关文件
- 执行命令`node_modules/.bin/webpack app/main.js -o public/bundle.js`后相关的js文件就被打包进了bundle文件中
## 使用配置文件
-  增加配置文件`webpack.config.js` 后使用执行命令`node_modules/.bin/webpack`即可完成打包
## 使用 npm 命令进行打包
## 生成 `source map`
## 使用webpack构建本地服务器
- `npm install --save-dev webpack-dev-server`
- 执行命令 `npm run server` 可以在本地的8080端口查看结果
## 自己尝试写loader
- `npx webpack -p`执行打包命令
- `npm run server`用于启动本地服务
