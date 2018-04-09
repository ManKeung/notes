[TOC]

* * *

# [Webpack](http://list.youku.com/albumlist/show?id=49394464&ascending=1&page=1 "优酷视频")

## [webpack](http://blog.parryqiu.com/ "blog")安装和命令行

1. 创建项目文件夹 例如：webpack

2. 命令行
`$ cd C:\WEBMK\05ES6\webpack-test`

3. 配置npm
`$ npm init`

4. 安装webpack
`$ npm install webpack --save-dev // 注意权限问题`

5. 初使用
	+ 在项目文件下建立文件夹app app下建立index.js文件并写一小段代码
`$ node_modules\.bin\webpack app/index.js build/index.js`

6. 安装插件
`cnpm install html-webpack-plugin --save-dev`
	+ 在项目目录下新建 webpack.config.js 配置文件

```
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PATHS = {
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'build'),
};

module.exports = {
  // Entries have to resolve to files! They rely on Node
  // convention by default so if a directory contains *index.js*,
  // it resolves to that.
  entry: {
    app: PATHS.app,
  },
  output: {
    path: PATHS.build,
    filename: '[name].js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Webpack demo',
    }),
  ],
};

```

`node_modules\.bin\webpack // 打包`

7. webpack编译输出日志

```
C:\WEBMK\05ES6\webpack>node_modules\.bin\webpack
Hash: 625234dcc21a82335278 // 编译的唯一值
Version: webpack 3.10.0 // 适用版本
Time: 393ms // 耗时
     Asset       Size  Chunks             Chunk Names // 输出文件
    app.js    3.07 kB       0  [emitted]  app
index.html  180 bytes          [emitted]
   [0] ./app/index.js 75 bytes {0} [built]  // 引用的文件
   [1] ./app/component.js 140 bytes {0} [built]
Child html-webpack-plugin for "index.html": // 引用的插件
     1 asset  // 编译过程
       [2] (webpack)/buildin/global.js 509 bytes {0} [built]
       [3] (webpack)/buildin/module.js 517 bytes {0} [built]
        + 2 hidden modules
```

8. 使用快捷方式进行编译
	+ 在package.json 添加
`"build": "webpack" // 添加在"test"下`

`npm run build // 运行`

9. 浏览器自动刷新
`$ npm install webpack-dev-server --save-dev`

```
 "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "webpack-dev-server --env development",
    "build": "webpack --env production"
  }
```

10. wabpack-dev-server 端口号等配置相关
	+ 在webpack.config.js文件下配置

```
devServer: {
    host: process.env.HOST, // Defaults to 'localhost' IP地址
    port: 80, // Defaults to 8080 端口号
  }
```

11. 配置ESLint实现代码规范自动测试
`$ npm install eslint --save-dev`
	+ 在package.json文件中
`"lintjs": "eslint app/ webpack.*.js --cache"`

	+ 在项目目录下建立文件夹 .eslintrc.js

```
module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
  },
  extends: 'eslint:recommended',
  parserOptions: {
    sourceType: 'module',
  },
  rules: {
    'comma-dangle': ['error', 'always-multiline'],
    indent: ['error', 2],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'no-unused-vars': ['warn'],
    'no-console': 0,
  },
};
```

`$ npm run lintjs // 规范检测`

`$ npm run lintjs -- --fix // 自动修正`

12. webpack中代码规范检测
`$ npm install eslint-loader --save-dev`

  + 在webpack.config.js配置

```
module:{
    rules:[
      {
        test: /\.js$/,
        enforce: 'pre',

        loader: 'eslint-loader',
        options: {
          emitWarning: true,
        },
      },
    ],
  },
```

`$ npm run start // 运行`

  + 配置在浏览器中显示 在webpack.config.js配置

```
overlay: {
      errors: true,
      warnings: true,
    },
```

13. webpack中加载CSS的相关问题
`$ npm install css-loader style-loader --save-dev`

  + 在webpack.config.js配置

```
{
  test: /\.css$/,
  use: ['style-loader', 'css-loader'],
}
```
  
  + 作用域 默认css是全局，所以同名的会造成命名冲突

```
module:{
    rules:[
      {
        test: /\.js$/,
        enforce: 'pre',

        loader: 'eslint-loader',
        options: {
          emitWarning: true,
        },
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          },
        ],
      },
    ],
  },
```

  + 自动分离CSS到独立文件
`$ npm install extract-text-webpack-plugin --save-dev`

```
  rules:[
      {
        test: /\.js$/,
        enforce: 'pre',

        loader: 'eslint-loader',
        options: {
          emitWarning: true,
        },
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: plugin.extract({
          use: {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          },
          fallback : 'style-loader',
        }),
      },
    ],
  },
```

## [深入了解webpack中的loader](https://webpack.js.org/concepts/loaders/ "官方文档")