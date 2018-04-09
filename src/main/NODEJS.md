[TOC]

* * *

# [NodeJS](https://nodejs.org/)

1. JavaScript -> 前台
2. NodeJS -> 后台

+ 后台
  1. PHP
  2. Java
  3. Python

+ 优势
  1. 性能
    nodejs  php  -> 86倍
    1s  1分半

    PHP 200台  400万
    NodeJS  3台  6万
  2.跟前台JS配合方便
  3.NodeJS便于前端学习

+ NodeJS运行JS
  1. 切换盘符  e:
  2. 改变目录  cd 目录名
  3. 执行程序  node xxx.js

## 服务器

1. http -> 协议
  + request -> 请求 -> 输入-请求的信息
  + response -> 响应 -> 输出-输出的东西

2. 文件操作: fs->File System
  + readFile(文件名, function (err, data){})
  + writeFile(文件名, 内容, function (err){})

3. 数据请求
  + 前台->form、ajax、jsonp
  + 后台->一样

  + 前台 <-> 后台
  + http

4. 请求方式：
  1.GET   数据在url中
  2.POST    数据不在url中

## 模块化

1. 系统模块：http、querystring、url

2. 自定义模块
  + 模块里面
    - require――引入
    - exports――输出
    - module.exports――批量输出

  + npm
    - 帮咱们下载模块
    - 自动解决依赖

  + node_modules
    - 模块放这里

3. 包管理器（npm）

4. 登录自己的npm账号
  + npm login
    - Username： -> 用户名
    - Password： -> 密码
    - Email： -> 邮箱

  + npm whoami -> 我是谁

5. 提交模块
  + npm init -> 初始化
  + index.js -> 写代码
  + npm publish -> 发布 发布前 看看 npm 里有没有同名包

6. 删除模块
  + npm --force unpublish -> 一次只能删除一个版本

## express框架

1. 安装
  + npm install express
2. 配置
3. 接收请求
4. 响应

```
//1.创建服务
var server=express();

//2.监听
server.listen(8080);

//3.处理请求
server.use('地址', function (req, res){
});


3种方法：
.get('/', function (req, res){});
.post('/', function (req, res){});
.use('/', function (req, res){});

```

+ 数据：GET、POST

```
GET-无需中间件
req.query

POST-需要"body-parser"
server.use(bodyParser.urlencoded({}));

server.use(function (){
  req.body
});
```
+ 中间件：使用、写、链式操作

```
1.GET、POST
  req.query

  server.use(bodyParser.urlencoded({limit: }));
  server.use(function (req, res, next){
    req.body
  });

2.链式操作
  server.use(function (req, res, next){});
  server.get('/', function (req, res, next){});
  server.post(function (req, res, next){});

  next――下一个步骤
  next();

  server.use('/login', function (){
    mysql.query(function (){
      if(有错)
        res.emit('error');
      else
        next();
    });
  });

3.中间件(body-parser)、自己写中间件
  next();

  server.use(function (req, res, next){
    var str='';
    req.on('data', function (data){
      str+=data;
    });
    req.on('end', function (){
      req.body=querystring.parse(str);
      next();
    });
  });
```

## cookie

1. cookie空间非常小――省着用
2. 安全性非常差

1. 精打细算
2. 校验cookie是否被篡改过

a.发送cookie
res.secret='字符串';
res.cookie(名字, 值, {path: '/', maxAge: 毫秒, signed: true});

b.读取cookie
cookie-parser

server.use(cookieParser('秘钥'));

server.use(function (){
  req.cookies   未签名版
  req.signedCookies 签名版
});

c.删除cookie
res.clearCookie(名字);

+ 加密
  - cookie-parser
  - cookie-encrypter

```
cookie-session

server.use(cookieParser());
server.use(cookieSession({
  keys: [.., .., .., ..]
}));

server.use('/', function (){
  req.session
});

delete req.session
```

1.cookie-存在浏览器，4K，不安全
  签名、加密

2.session-存在服务器
  不能独立存在，基于cookie

```
server.use(cookieParser('签名字符串'));
server.use(cookieSession({

}));

server.use(function (req, res){
  res.cookie(名字, 值, {signed: true});

  res.cookies['user']
  res.clearCookie('名字');

  res.session['xxx']
  delete res.session['xxx'];
});
```

+ multer

```
body-parser 解析post数据  application/x-www-form-urlencoded
server.use(bodyParse.urlencode());
  req.body



multer    解析post文件  multipart/form-data
var obj=multer({dest: 'upload/'});

server.use(obj.any());

server.use(function (req, res){
  req.files[0].originalname
  req.files[0].path
});

把扩展名加上
    //'upload/aadfaew324we34' + '.txt'
    //'upload/aadfaew324we34.txt'
var newName=file.path+pathLib.parse(file.originalname).ext;

fs.rename(老名, 新名, function (err){});
```

+ 模板引擎：适配

```
consolidate=require

server.set('view engine', 'html');
server.set('views', '模板文件目录');
server.engine('html', consolidate.ejs);

server.get('/', function (req, res){
  res.render('模板文件', 数据);
});
```

+ route-路由

```
把不同的目录，对应到不同的模块

xxxx.com/aaa/   mod1
xxxx.com/news/  mod_news
  post      news_post
  list      news_list
  content   news_content
xxxx.com/user/    mod_users

server.get();
server.use()
server.post()

Router――迷你server
router.get();
router.post();
router.use();

Router――拆
/user/....    mod_user
/item/....    mod_item

//1.创建router
var router=express.Router();

//2.把router添加到server
server.use('/user', router);

//3.router内部
router.get('/1.html')
router.post('/2.html')

consolidate

server.set('view engine', 'html');
server.set('views', '模板目录');
server.engine('html', consolidate.ejs);

server.use(function (req, res){
  res.render('模板文件', 数据);
});

Router――子服务

var router1=express.Router();
server.use('/user', router1);

var r=express.Router();
router1.use('/user_mod', r);
router1.use('/user_reg', function (){});
http://www.xxxx.com/user/user_mod
http://www.xxxx.com/user/user_reg
http://www.xxxx.com/user/user_login

var router2=express.Router();
server.use('/news', router2);
http://www.xxxx.com/news/list
http://www.xxxx.com/news/post
http://www.xxxx.com/news/content

var router3=express.Router();
server.use('/item', router3);
http://www.xxxx.com/item/buy
http://www.xxxx.com/item/mod
http://www.xxxx.com/item/del
```

+ 数据 - 数据库

```
关系型数据库：
MySQL、Oracle、SQLServer、Access、db2、fox pro

MySQL：
免费、中小网站
优点：性能非常不错
缺点：集群、容灾稍微弱一些

Oracle：
挺贵、大型应用、金融级
优点：性能非常不错、集群、容灾非常强
缺点：挺贵

文件型：
sqlite、mongodb

空间型：


Server端：
数据存在

Client端：
管理工具、Node


数据基本概念：
两种单位：
1.库：文件夹-用来管理，本身没法存数据
2.表：文件-存数据的

表-Excel：
行-一条数据
列(字段、域)-一个数据项
```

+ SQL
  - 大查询语句――增删改查

```
1. 增-INSERT
INSERT INTO 表 (字段列表) VALUES(值列表)
INSERT INTO `user_table` (`ID`, `username`, `password`) VALUES(0, 'blue2', '987654');

2. 删-DELETE

3. 改-UPDATE

4. 查-SELECT
SELECT 什么 FROM 表
SELECT * FROM `user_table`;

SQL标准写法：
1.关键字大写
2.库、表、字段需要加上``


1.下载mysql模块(client)
2.连接
  var db=mysql.createConnection(host, port, user, password, database) //?
3.查询
  db.query(SQL, (err, data)=>{})
4.SQL语句
  增删改查
```
