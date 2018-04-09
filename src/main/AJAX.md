[TOC]

* * *

# AJAX

## 什么是ajax技术

+ 提高用户体验
+ 无刷新的与后台进行数据的交互
+ 异步的操作方式

### 前后端交互流程

+ 客户端
+ 服务端
+ 数据库
+ 环境搭建
  - wamp
  - http://www.wampserver.com
  - phpMyAdmin

## PHP和MySql基础

+ 提交方式
  - GET POST
+ 指定当前页的编码
  - header("Content-type:text/html;charset=utf-8");
+ 连接Mysql
  - $con=mysql_connect();
  - 默认值
    * config.default.php // 可以修改用户名 密码 搜索 MySQL user
+ 选择数据库
  - mysql_select_db();
  - 建立数据库，建表，建字段
+ 指定数据库编码
  - mysql_query('set names utf8');
+ 获取传输数据
  - $\_GET
  - $\_POST
+ sql查询
  - select * from 表 where 字段 = 值
  - mysql_query
  - mysql_num_rows
+ sql添加
  - insert into 表（字段） values（值）

### 扩展

+ 提取公共代码
  - require_once()
+ 获取数据
  - mysql_fetch_row
  - mysql_fetch_assoc
  - mysql_fetch_array
  - mysql_fetch_aobject
+ 增删改查
  - delete from 表 where 字段=值
  - update 表 set 字段=新值 where id=$id

## Ajax基本使用

+ XMLHttpRequest
+ open
+ onreadystatechange
  - readyState
    * 0（未初始化）
    * 1（初始化）
    * 2（发送数据）
    * 3（数据传送中）
    * 4 （完成）
  - status
    * http状态码
    * 200
    * 301
    * 304
    * 403
    * 404
    * 500
  - statusText
    * responseXML
    * JSON.parse
+ send
+ POST方式
  - 需要设置头信息
    * 位置在send前
    * setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    * setRequestHeader(‘Content-Type’, ‘application/json’);
      1. JSON_stringify

## jQuery中的Ajax

+ $.ajax
  - url
  - type
  - data
  - success
  - error
  - dataType
  - async

## Ajax实战

1. 初始化数据
  + 需要哪些字段
  + 歌词如何获取
  + 导出导入SQL

2. 移动端设置
  + 视口
  `<meta name="viewport" content="width=device-width,minimum-scale=1.0,maximum-scale=1.0,initial-scale=1.0,user-scalable=no">`
  + 屏幕点
  + 屏幕分辨率
  + 字体
  `font: 14px/1.5 Tahoma,Arial,Roboto,"Droid Sans","Helvetica Neue","Droid Sans Fallback","Heiti SC",sans-self;`

3. 列表页制作
  + 兼容PC与移动端
  + 布局头部，尾部，列表
  + Translate3d开启GPU加速
  + 列表页操作框架搭建
    - 兼容PC
    - 兼容event
      * originalEvent.changedTouches
    - 滑动函数
    - Ajax数据    -
    - 事件操作

4. 音乐播放器
  + 载入音乐
  + audio
    - duration
    - currentTime
    - canplaythrough
    - ended
    - play
    - pause

5. 音乐详情页
  + 滚动歌词
  + 左右划屏
  + 载入留言
  + 添加留言
    - htmlspecialchars
  + 滚动留言
  + 问题
    - 横竖屏切换
      * resize
    - ios自动播放


## 实战中ajax的运用
## 了解前后端交互方式
## 了解移动端的模式
## 了解H5的新技术
## 了解CSS3的使用
## 了解jquery的使用
