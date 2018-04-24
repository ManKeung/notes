[TOC]

* * *

# NVM

+ NVM,node版本管理工具

## 安装

1. 首先保持网络畅通，还有不被墙，[翻墙](https://github.com/getlantern/lantern "翻墙看这里")看这里

2. [下载](https://github.com/coreybutler/nvm-windows/releases "地址")NVM包，我们选择第一个：nvm-noinstall.zip
	+ 下载完解压到一个地方，比如：C:\dev\nvm
	+ 文件列表：elevate.cmd、elevate.vbs、install.cmd、LICENSE、nvm.exe

> 备注：windows下要设置显示文件类型的扩展名，这样才能看到上述文件的后缀

3. 双击 install.cmd 然后会让你输入”压缩文件解压或拷贝到的一个绝对路径” 先不用管它，直接回车，成功后，会在C盘的根目录生成一个settings.txt的文本文件，把这个文件剪切到C:\dev\nvm目录中，然后我们把它的内容修改成这样：

```
root: C:\dev\nvm 
path: C:\dev\nodejs 
arch: 64 
proxy: none 
node_mirror: http://npm.taobao.org/mirrors/node/ 
npm_mirror: https://npm.taobao.org/mirrors/npm/
```

## 环境配置

+ 两个变量名的变量值：NVM_HOME的变量值为：C:\dev\nvm； NVM_SYMLINK的变量值为：C:\dev\nodejs
+ 在Path的最前面输入： ;%NVM_HOME%;%NVM_SYMLINK%;

+ 命令行输入：set --> 可以看我们的环境变量

## 命令


1. nvm v --> 查看nvm版本信息

2. nvm install latest --> 下载nodejs 下载完成后 会让你use那个最新的node版本

3. 第一次下载，在use之前，C:\dev目录下是没有nodejs这个文件夹的，在输入比如： nvm use 5.11.0 之后，你会发现，C:\dev目录下多了一个nodejs文件夹，这个文件夹不是单纯的文件夹，它是一个快捷方式，指向了 C:\dev\nvm 里的 v5.11.0 文件夹

4. nvm install 版本号 --> 下载其他版本 
	+ 注意：如果你的电脑系统是32 位的，那么在下载nodejs版本的时候，一定要指明 32 如： nvm install 5.11.0 32 这样在32位的电脑系统中，才可以使用，默认是64位的。

5. nvm use 版本号 --> 切换使用哪个版本

6. nvm ls --> 查看安装有哪些nodejs版本

7. nvm uninstall 版本号 --> 卸载某个版本

```
C:\Users\wangw>nvm ls

    9.1.0
    8.9.1
  * 8.6.0 (Currently using 64-bit executable) // 带 * 表示当前使用版本
    6.0.0
    5.5.0
    4.2.6
```

* * *

# [NPM](https://www.npmjs.com "NPM包")

+ node包管理工具

## 安装

```
首先 npm是什么？ 
npm有两层含义，第一是npm这个开源的模块登记和管理系统，也就是这个站点：https://www.npmjs.com。 
第二个指的是 nodejs package manager 也就是nodejs的包管理工具。我们主要说的就是这一个。 
在每个版本的nodejs中，都会自带npm，为了统一起见，我们安装一个全局的npm工具，这个操作很
有必要，因为我们需要安装一些全局的其他包，不会因为切换node版本造成原来下载过的包不可用。

```

1. 首先我们进入命令模式，输入 npm config set prefix "C:\dev\nvm\npm" 回车，这是在配置npm的全局安装路径，然后在用户文件夹下会生成一个.npmrc的文件，用记事本打开后可以看到如下内容：

```
prefix=C:\dev\nvm\npm

```

2. npm install npm -g --> 下载npm包 C:\dev\nvm\npm目录中可以看到下载中的文件 -g表示全局

3. 我们为这个npm配置环境变量： 变量名为：NPM_HOME，变量值为 ：C:\dev\nvm\npm
		+ 在Path的最前面添加;%NPM_HOME%，注意了，这个一定要添加在 %NVM_SYMLINK%之前，所以我们直接把它放到Path的最前面

4. 换成淘宝镜像

```
PS C:\Users\wangw> npm get registry
https://registry.npmjs.org/
PS C:\Users\wangw> npm config set registry http://registry.npm.taobao.org/
PS C:\Users\wangw> npm get registry
http://registry.npm.taobao.org/
PS C:\Users\wangw>

```

## 常见NPM操作

1. 安装一个包，默认安装最新版本
	+ npm install package_name
		- npm install package_name@版本号

	+ npm install package_name --save --> dependencies

	+ npm install package_name --save-dev --> devDependencies 开发时需要

	+ npm install --> 安装配置文件里需要的包

2. 初始化操作，给项目添加一个配置文件
	+ npm init --> package.json 配置文件

```
{
  "name": "npm-demo",  ---> 名字
  "version": "1.0.0",  ---> 版本号
  "description": "",   ---> 描述
  "main": "index.js",  ---> 入口函数
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1" --> 测试
  },
  "keywords": [], ---> 关键字
  "author": "iceStone <ice@wedn.net> (http://wedn.net/)", ---> 作者
  "license": "ISC",
  "dependencies": {
    "bootstrap": "^3.3.6"
  },
  "devDependencies": {
    "bootstrap": "^3.3.6"
  }
}
```
	
	+ npm init --yes --> 参数走默认配置

> rm .\package.json 删除当前文件下package.json

3. npm i -g to update --> 版本更新

4. npm uninstall 包 --> 卸载一个包

5. NPM安装全局路径
	+ 在用户目录下添加.npmrc文件
	+ C:\Users\wangw

```
cache=C:\dev\nvm\npm-cache
prefix=C:\dev\nvm\npm
registry=https://registry.npmjs.org/
```
	
+ npm config list --> npm配置清单

## [npm常用命令](http://www.cnblogs.com/PeunZhang/p/5553574.html)

命令 | 描述
---- | ----
npm root -g | 查看node.js全局的安装路径
npm root | 查看当前npm包的安装路径
npm cache clean | 清除缓存
npm ls | 查看安装的模块及依赖
npm ls webpack | 查看webpack（某个）安装模块
npm ls -g | 查看全局安装的模块依赖
npm install xxx --save-dev | 安装模块到项目依赖
npm i webpack@<version> -D | 安装摸个版本的模块
npm uninstall xxx -g | 卸载全局模块 --save-dev(-D) --save(-S)
npm update xxx | 更新模块
npm view webpack versions | 查看webpack（某个）版本
npm view webpack dependencies | 查看webpack（某个）模块的依赖关系
npm view webpack repository.url | 查看模块的源文件地址
npm view npm contributors | 产看模块的贡献值，包含邮箱地址
npm init | 会自动生成一个package.json文件
webpack -h | 查看版本

### [CNPM](http://npm.taobao.org/ "淘宝镜像")

+ 淘宝 NPM 镜像

1. 安装
`npm install -g cnpm --registry=https://registry.npm.taobao.org`

2. 安装包
	+ 可以代替npm快速安装包
`cnpm install [name]`

* * *

# GULP

```
- 不再是简简单单的使用HTML+CSS+JavaScript这些简单的技术构建网页应用程序了
- 我们要提高效率，就必须减少重复的工作
- 使用less之类预处理的CSS coffeescript
- 提供开发阶段的便利，开发阶段更快捷
- 现在的开发行业优质的开发人员是不应该将精力放在这些重复性质的工作上
- Gulp就是一种可以自动化完成我们开发过程中大量的重复工作
    + 预处理语言的编译
    + js css html 压缩混淆
    + 图片体积优化
- 除gulp之外还有一些类似的自动化工具，比如grunt
- what how why
```

1. 当下最流行的自动化工具
    + 什么是自动化构建工具？
    + 自动完成一系列重复的操作
        * less → css
        * coffeescript → js
        * css压缩
        * js混淆
        * html压缩
        * img尺寸优化
        * 。。。。
2. 链接：
    + [官网](http://gulpjs.com/ "官网")
    + [中文网](http://www.gulpjs.com.cn/ "中文网")

3. gulp的包既包含工具，也包含一些编程的API

## 准备工作

1. 安装
	+ `npm install -g gulp`
	+ -g 指的是在全局作用域中安装
	+ 测试命令 gulp -v

2. 初始化 gulp 项目
	+ 在本地安装gulp包
	+ npm install gulp --save-dev --> 开发依赖

## 创建任务

+ gulpfile.js

```
/**
 * gulp的主文件，用于注册任务
 * @Author: iceStone
 * @Date:   2016-01-26 17:07:26
 * @Last Modified by:   iceStone
 * @Last Modified time: 2016-01-26 17:56:34
 */

'use strict';

// 此处代码都是由NODE执行
// 载入Gulp模块
var gulp = require('gulp');
var less = require('gulp-less');

// 注册一个任务
gulp.task('copy', function() {
  // 当gulp执行这个copy任务时会自动执行该函数
  // console.log('hello world');
  // 合并 压缩之类的操作
  // 复制文件
  // gulp.src取一个文件
  gulp.src('src/index.html')
    .pipe(gulp.dest('dist/')); // 将此处需要的操作传递进去
});


gulp.task('dist', function() {
  // src/index.html
  gulp.watch('src/index.html', ['copy']);
  gulp.watch('src/styles/*.less', ['style']);
});

var cssnano = require('gulp-cssnano');

gulp.task('style', function() {
  gulp.src('src/styles/*.less')
    .pipe(less()) // 该环节过后就是CSS
    .pipe(cssnano())
    .pipe(gulp.dest('dist/css/'));
});

var browserSync = require('browser-sync').create();

// Static server
gulp.task('serve', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});
```

+ 执行
`gulp 任务名`

## gulp API

1. src 取一个文件
	+ 语法：src(path)
`gulp.src('client/templates/*.jade')`

	+ .pipe() // 此处需要的操作传递进去

2. dest 终点
	+ 语法：dest(path)
`gulp.dest('dist/css/')` 

3. watch 监视
	+ 语法：watch(监视文件是否变化,方法)
`gulp.watch('src/index.html', ['copy']);`

## [globs匹配语法](https://github.com/isaacs/node-glob)

+ \* 匹配单个路径部分中的0个或更多个字符
+ ? 匹配1个字符
+ [...]匹配一系列字符，与RegExp范围类似。如果范围的第一个字符是!或^然后它匹配任何不在范围内的字符。
+ !(pattern|pattern|pattern) 匹配任何不符合提供的任何模式的东西。
+ +(pattern|pattern|pattern) 匹配一个或多个出现的模式。
+ \*(a|b|c) 匹配零次或多次出现的模式
+ @(pattern|pat\*|pat?erN) 完全匹配提供的模式之一
+ \*\*如果“globstar”在路径部分单独存在，则匹配零个或多个目录和搜索匹配的子目录。它不抓取符号链接的目录。

+ src/\*
	- src/\*/\*
	- src/\*\*/\*
	- src/\*.jpg
	- src/\*.{jpg,png}
	- 多个globs
		* ['src/\*.{jpg,png}','a/a.html']
+ 排除某些文件
	- !xxxxx
	- 默认任务
+ gulp 中的任务名有个特殊值 default
+ 文件监视自动执行任务

## 常用插件

+ [编译 Sass：gulp-sass](https://www.npmjs.com/package/gulp-sass)
+ [编译 Less：gulp-less](https://www.npmjs.com/package/gulp-less)
+ [编译 Jade: gulp-jade](https://www.npmjs.com/package/gulp-jade)
+ [创建本地服务器：gulp-connect](https://www.npmjs.com/package/gulp-connect)
+ [合并文件：gulp-concat](https://www.npmjs.com/package/gulp-concat)
+ [最小化 js 文件：gulp-uglify](https://www.npmjs.com/package/gulp-uglify)
+ [重命名文件：gulp-rename](https://www.npmjs.com/package/gulp-rename)
+ [最小化 css 文件：gulp-cssnano](https://www.npmjs.com/package/gulp-cssnano)
+ [压缩html文件 gulp-minify-html](https://www.npmjs.com/package/gulp-minify-html)
+ [最小化图像：gulp-imagemin](https://www.npmjs.com/package/gulp-imagemin)
+ [服务器同步：browser-sync](https://www.npmjs.com/package/browser-sync)

## 项目使用

1. 首先 npm init 给项目添加配置文件
`npm init`

2. 安装 gulp
`npm install gulp --save-dev`

3. 安装需要插件 例如 less编译 gulp-less
`npm install gulp-less --save-dev`

4. 创建任务 gulpfile.js

```
'use strict';
/**
 * 1. LESS编译 压缩 合并
 * 2. JS合并 压缩 混淆
 * 3. img复制
 * 4. html压缩
 */

// 在gulpfile中先载入gulp包，因为这个包提供了一些API
var gulp = require('gulp');
var less = require('gulp-less');
var cssnano = require('gulp-cssnano');

// 1. LESS编译 压缩 --合并没有必要，一般预处理CSS都可以导包
gulp.task('style', function() {
  // 这里是在执行style任务时自动执行的
  gulp.src(['src/styles/*.less', '!src/styles/_*.less'])
    .pipe(less())
    .pipe(cssnano())
    .pipe(gulp.dest('dist/styles'))
    .pipe(browserSync.reload({
      stream: true
    }));
});

var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

// 2. JS合并 压缩混淆
gulp.task('script', function() {
  gulp.src('src/scripts/*.js')
    .pipe(concat('all.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist/scripts'))
    .pipe(browserSync.reload({
      stream: true
    }));
});

// 3. 图片复制
gulp.task('image', function() {
  gulp.src('src/images/*.*')
    .pipe(gulp.dest('dist/images'))
    .pipe(browserSync.reload({
      stream: true
    }));
});

var htmlmin = require('gulp-htmlmin');
// 4. HTML
gulp.task('html', function() {
  gulp.src('src/*.html')
    .pipe(htmlmin({
      collapseWhitespace: true,
      removeComments: true
    }))
    .pipe(gulp.dest('dist'))
    .pipe(browserSync.reload({
      stream: true
    }));
});

var browserSync = require('browser-sync');
gulp.task('serve', function() {
  browserSync({
    server: {
      baseDir: ['dist'] // 服务器根目录
    },
  }, function(err, bs) {
    console.log(bs.options.getIn(["urls", "local"]));
  });

  gulp.watch('src/styles/*.less',['style']);
  gulp.watch('src/scripts/*.js',['script']);
  gulp.watch('src/images/*.*',['image']);
  gulp.watch('src/*.html',['html']);
});

```

5. 执行gulp
`gulp serve`

* * *

# [GIT](https://guides.github.com/ "github")

+ 是一个源代码管理工具
+ 在一个项目中，凡是由开发人员编写的都算是源代码
+ 源代码有必要管理起来
+ 让源代码可以被追溯，主要记录每次变更了什么，谁主导这次变化
+ 人为的维护比较麻烦，
+ Git是Linux之父当年为了维护管理Linux的源代码写的一个工具
+ Git 之前 很多使用 svn vss tfs hs ......

## 安装

1. [下载](http://www.softpedia.com/get/PORTABLE-SOFTWARE/Programming/Portable-Git.shtml "地址")地址

2. 环境变量配置
```
GIT_HOME --> C:\dev\git
path --> %GIT_HOME%\bin
```

## GIT命令

1. 初始化一个本地GIT仓储
	+ cd 到当前目录
`git init // 初始化一个本地的仓库`

> 就是在本地文件夹中添加了一个.git的文件夹用于记录所有的项目变更信息

2. 查看本地仓储的变更状态
`git status`
`git status -s // -s 是输出简要的变更日志`

3. 添加本地暂存（托管）文件
`git add --all === git add . // 可以将一个没有被跟踪的文件添加到跟踪列表`

4. 添加本地GIT忽略清单文件
	+ 在代码库文件夹的根目录添加一个.gitignore文件
	+ 此文件用于说明忽略的文件有哪些

```
node_modules --->node_modules文件
/dist ---> 根目录下的dist文件
```

5. 提交被托管的文件变化到本地仓储
`git commit -m '版本说明' // 单引号内填写版本说明`

> 将本地的变化提交的本地的仓库文件夹归档，一般在有了一个小单元的体变化后再提交

6. 对比差异
`git diff // 可以用于对比当前状态和版本库中状态的变化`

7. 日志查看
`git log // 可以查看提交日志`

8. 回归到指定版本

```
git reset --hard 123456六位值

commit 747c2014fd8b4ff1292260fcf22d6e9a01aba1c7 ---> 747c20 // 看日志能得到commit
```

## git命令大全

```
git init                                                  # 初始化本地git仓库（创建新仓库）
git config --global user.name "xxx"                       # 配置用户名
git config --global user.email "xxx@xxx.com"              # 配置邮件
git config --global color.ui true                         # git status等命令自动着色
git config --global color.status auto
git config --global color.diff auto
git config --global color.branch auto
git config --global color.interactive auto
git config --global --unset http.proxy                    # remove  proxy configuration on git
git clone git+ssh://git@192.168.53.168/VT.git             # clone远程仓库
git status                                                # 查看当前版本状态（是否修改）
git add xyz                                               # 添加xyz文件至index
git add .                                                 # 增加当前子目录下所有更改过的文件至index
git commit -m 'xxx'                                       # 提交
git commit --amend -m 'xxx'                               # 合并上一次提交（用于反复修改）
git commit -am 'xxx'                                      # 将add和commit合为一步
git rm xxx                                                # 删除index中的文件
git rm -r *                                               # 递归删除
git log                                                   # 显示提交日志
git log -1                                                # 显示1行日志 -n为n行
git log -5
git log --stat                                            # 显示提交日志及相关变动文件
git log -p -m
git show dfb02e6e4f2f7b573337763e5c0013802e392818         # 显示某个提交的详细内容
git show dfb02                                            # 可只用commitid的前几位
git show HEAD                                             # 显示HEAD提交日志
git show HEAD^                                            # 显示HEAD的父（上一个版本）的提交日志 ^^为上两个版本 ^5为上5个版本
git tag                                                   # 显示已存在的tag
git tag -a v2.0 -m 'xxx'                                  # 增加v2.0的tag
git show v2.0                                             # 显示v2.0的日志及详细内容
git log v2.0                                              # 显示v2.0的日志
git diff                                                  # 显示所有未添加至index的变更
git diff --cached                                         # 显示所有已添加index但还未commit的变更
git diff HEAD^                                            # 比较与上一个版本的差异
git diff HEAD -- ./lib                                    # 比较与HEAD版本lib目录的差异
git diff origin/master..master                            # 比较远程分支master上有本地分支master上没有的
git diff origin/master..master --stat                     # 只显示差异的文件，不显示具体内容
git remote add origin git+ssh://git@192.168.53.168/VT.git # 增加远程定义（用于push/pull/fetch）
git branch                                                # 显示本地分支
git branch --contains 50089                               # 显示包含提交50089的分支
git branch -a                                             # 显示所有分支
git branch -r                                             # 显示所有原创分支
git branch --merged                                       # 显示所有已合并到当前分支的分支
git branch --no-merged                                    # 显示所有未合并到当前分支的分支
git branch -m master master_copy                          # 本地分支改名
git checkout -b master_copy                               # 从当前分支创建新分支master_copy并检出
git checkout -b master master_copy                        # 上面的完整版
git checkout features/performance                         # 检出已存在的features/performance分支
git checkout --track hotfixes/BJVEP933                    # 检出远程分支hotfixes/BJVEP933并创建本地跟踪分支
git checkout v2.0                                         # 检出版本v2.0
git checkout -b devel origin/develop                      # 从远程分支develop创建新本地分支devel并检出
git checkout -- README                                    # 检出head版本的README文件（可用于修改错误回退）
git merge origin/master                                   # 合并远程master分支至当前分支
git cherry-pick ff44785404a8e                             # 合并提交ff44785404a8e的修改
git push origin master                                    # 将当前分支push到远程master分支
git push origin :hotfixes/BJVEP933                        # 删除远程仓库的hotfixes/BJVEP933分支
git push --tags                                           # 把所有tag推送到远程仓库
git fetch                                                 # 获取所有远程分支（不更新本地分支，另需merge）
git fetch --prune                                         # 获取所有原创分支并清除服务器上已删掉的分支
git pull origin master                                    # 获取远程分支master并merge到当前分支
git mv README README2                                     # 重命名文件README为README2
git reset --hard HEAD                                     # 将当前版本重置为HEAD（通常用于merge失败回退）
git rebase
git branch -d hotfixes/BJVEP933                           # 删除分支hotfixes/BJVEP933（本分支修改已合并到其他分支）
git branch -D hotfixes/BJVEP933                           # 强制删除分支hotfixes/BJVEP933
git ls-files                                              # 列出git index包含的文件
git show-branch                                           # 图示当前分支历史
git show-branch --all                                     # 图示所有分支历史
git whatchanged                                           # 显示提交历史对应的文件修改
git revert dfb02e6e4f2f7b573337763e5c0013802e392818       # 撤销提交dfb02e6e4f2f7b573337763e5c0013802e392818
git ls-tree HEAD                                          # 内部命令：显示某个git对象
git rev-parse v2.0                                        # 内部命令：显示某个ref对于的SHA1 HASH
git reflog                                                # 显示所有提交，包括孤立节点
git show HEAD@{5}
git show master@{yesterday}                               # 显示master分支昨天的状态
git log --pretty=format:'%h %s' --graph                   # 图示提交日志
git show HEAD~3
git show -s --pretty=raw 2be7fcb476
git stash                                                 # 暂存当前修改，将所有至为HEAD状态
git stash list                                            # 查看所有暂存
git stash show -p stash@{0}                               # 参考第一次暂存
git stash apply stash@{0}                                 # 应用第一次暂存
git grep "delete from"                                    # 文件中搜索文本“delete from”
git grep -e '#define' --and -e SORT_DIRENT
git gc
git fsck
```

* * *

# [GITHUB](https://github.com/ "github")

+ 用来同步本地代码库
+ git是一个工具
+ github是一个网站（服务提供商）
	- “免费” 服务
	- 免费服务必须是开源
+ 提出社交化编程

http://zoomzhao.github.io/code-guide/
https://github.com/jobbole/awesome-javascript-cn
https://github.com/jobbole/awesome-css-cn

## 基本操作

1. 新建代码仓库（Create a new repository）
	+ Repository name --> 仓库名字
	+ Description (optional) --> 描述项目
	+ Initialize this repository with a README --> 是否默认初始化README文件

2. 打开GIT-bash命令窗口 cmd也可以
	+ 进入项目目录
`$ cd /C/WEBMK/04TOOL/code`

3. 添加一个远端地址并起了一个别名叫origin
`$ git remote add origin https://github.com/ManKeung/git-demo.git`

4. 拉取远端master分支的更新记录到本地
`$ git pull origin master`

5. 克隆

```
$ git clone  https://github.com/tastejs/todomvc-app-template.git --> 克隆并创建文件todomvc-app-template

$ git clone  https://github.com/tastejs/todomvc-app-template.git . --> 克隆到当前文件

$ dir 文件结构（cdm）
```

6. push到github
`git push -u origin master`


## 托管页面

1. 显示分支
`$ git branch`

2. 创建分支 名字必须是gh-pages才能托管
`$ git branch gh-pages`

3. 分支切换
`$ git checkout gh-pages`

4. push 到GitHub
`git push -u origin gh-pages`

5. 进入页面 注意项目名区分大小写
`username.github.io/repository --> mankeung.github.io/crh`

6. 服务器启动

```
$ hs -o --> httpserve
$ hs -o -p 8888 -->设置端口8888
```

### 绑自己域名

1. 在项目文件下常见 CNAME 文件 没有扩展名

2. 在文件里绑定什么域名就写什么

```
wjs.wedn.net
```

3. [DNS解析](https://www.dnspod.cn "DNS解析") DNS运营商
	+ 域名解析

主机记录 | 记录类型 | 线路类型 | 记录值 
---- | ---- | ---- | ---- 
wjs | CNA... | 默认 | mankeung.github.io

* * *

# [HEXO](https://hexo.io)

## 基本操作

1. 安装
`npm install hexo-cli -g`

2. 配置
`hexo init blog`

3. 进入blog文件夹
`cd blog`

4. 安装依赖
`npm install`

5. 启动服务
`hexo server`

6. 生成静态页
`hexo generate`

## 配置信息

+ 打开blog/\_config.yml文件，进行配置 

```
#博客名称
title: 我的博客
#副标题
subtitle: 一天进步一点
#简介
description: 记录生活点滴
#博客作者
author: John Doe
#博客语言
language: zh-CN
#时区
timezone:

#博客地址,与申请的GitHub一致
url: http://elfwalk.github.io
root: /
#博客链接格式
permalink: :year/:month/:day/:title/
permalink_defaults:

source_dir: source
public_dir: public
tag_dir: tags
archive_dir: archives
category_dir: categories
code_dir: downloads/code
i18n_dir: :lang
skip_render:

new_post_name: :title.md # File name of new posts
default_layout: post
titlecase: false # Transform title into titlecase
external_link: true # Open external links in new tab
filename_case: 0
render_drafts: false
post_asset_folder: false
relative_link: false
future: true
highlight:
  enable: true
  line_number: true
  auto_detect: true
  tab_replace:

default_category: uncategorized
category_map:
tag_map:

#日期格式
date_format: YYYY-MM-DD
time_format: HH:mm:ss

#分页，每页文章数量
per_page: 10
pagination_dir: page

#博客主题
theme: landscape

#发布设置
deploy: 
  type: git
  #elfwalk改为你的github用户名
  repository: https://github.com/elfwalk/elfwalk.github.io.git
  branch: master
```

* * *

# EDITORCONFIG

+ editorconfig不是什么软件，而是一个名称为.editorconfig的自定义文件。该文件用来定义项目的编码规范，编辑器的行为会与.editorconfig 文件中定义的一致，并且其优先级比编辑器自身的设置要高，这在多人合作开发项目时十分有用而且必要

1. 文件语法

+ editorConfig配置文件需要是UTF-8字符集编码的, 以回车换行或换行作为一行的分隔符
+ 斜线(/)被用作为一个路径分隔符，井号(#)或分号(;)被用作于注释. 注释需要与注释符号写在同一行

2. 通配符

```
*                匹配除/之外的任意字符串
**               匹配任意字符串
?                匹配任意单个字符
[name]           匹配name中的任意一个单一字符
[!name]          匹配不存在name中的任意一个单一字符
{s1,s2,s3}       匹配给定的字符串中的任意一个(用逗号分隔) 
{num1..num2}   　匹配num1到num2之间的任意一个整数, 这里的num1和num2可以为正整数也可以为负整数
```

3. 属性
	+ 所有的属性和值都是忽略大小写的. 解析时它们都是小写的

```
indent_style    设置缩进风格(tab是硬缩进，space为软缩进)
indent_size     用一个整数定义的列数来设置缩进的宽度，如果indent_style为tab，则此属性默认为tab_width
tab_width       用一个整数来设置tab缩进的列数。默认是indent_size
end_of_line     设置换行符，值为lf、cr和crlf
charset         设置编码，值为latin1、utf-8、utf-8-bom、utf-16be和utf-16le，不建议使用utf-8-bom
trim_trailing_whitespace  设为true表示会去除换行行首的任意空白字符。
insert_final_newline      设为true表示使文件以一个空白行结尾
root        　　　表示是最顶层的配置文件，发现设为true时，才会停止查找.editorconfig文件 
```

4. 实例

```
# EditorConfig helps developers define and maintain consistent
# coding styles between different editors and IDEs
# editorconfig.org

root = true


[*]

# change these settings to your own preference
indent_style = space
indent_size = 2

# we recommend you to keep these unchanged
end_of_line = lf
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true

[*.md]
trim_trailing_whitespace = false

[{package,bower}.json]
indent_style = space
indent_size = 2
```

5. 使用

+ 在项目根目录下创建 .editorconfig 文件 注意没收后缀

+ 在文件中编辑要配置的编码规范

# Git-Bash常用命令

+ 在Windows下使用Git Bash，用的是Linux命令，常用几个文件操作命令如下：


Windows命令	| Linux命令	| 意义
---- | ---- | ----
cd e:\xxx | cd /e/xxx | 切换到xxx目录
cd | pwd | 显示当前目录路径
dir	| ls |列出当前目录内容
copy nul xxx.txt | touch xxx.txt | 生成名为xxx.txt的空文件
del xxx.txt | rm xxx.txt | 删除xxx.txt文件
md xxx | mkdir xxx | 建立xxx目录
rd /s xxx | rm -r xxx | 删除xxx目录
