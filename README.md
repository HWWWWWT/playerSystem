# Basketball

1. 确保电脑已经安装了`nodejs`,`npm`,全局`angular/cli`。
2. 克隆项目到本地文件夹。
3. 进入backend文件夹，运行`npm install`。
4. 返回上级目录，运行`npm install`。（推荐配置好淘宝镜像再install）

## Development server

1. 以上步骤安装好后，命令模式（有编辑器的话直接用编辑器，如vscode，WebStorm，使用编辑器的命令行会更好），进入backend，运行`node app.js`，
出现`server is running at ', 5000, dbfile`,表示后台服务开启。
2. 返回上级目录，命令模式，运行`npm start`，没有出现错误表示项目运行成功。
3. 打开网页输入`http://localhost:4200`。
4. 注册账号，登陆。

## 项目介绍

1. 架手脚：angular/cli 。
2. 后端使用Json-serve模拟api，用于angular2的Http请求并放回数据。
3. 使用NG-ZORRO当作UI组件库，感谢蚂蚁金服，感谢阿里云。[NG-ZORRO](https://ng.ant.design/#/components/tag)
