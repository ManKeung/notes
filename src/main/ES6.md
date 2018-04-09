[TOC]

* * *

# [ECMAScript6](http://es6.ruanyifeng.com/ "ES6")

+ 学习基本技能基础

1. 了解JavaScript语法的初、中级前端工程师
	
2. 有其他编程经验想学习JavaScript开发工程师

+ 预备知识

1. 模块化概念

2. 工程构建

3. 编程经验

* * *

## ES6项目构建

### 基础构建

1. 业务逻辑
	+ 页面
	+ 交互

2. 自动构建
	+ 编译
	+ 辅助
		- 自动刷新
		- 文件合并
		- 资源压缩

3. 服务接口
	+ 数据
	+ 接口

### 任务自动化（gulp）

1. 减轻重复操作

2. gulp自动化工具
	
### 编译工具（babel/webpack）

1. bable 
	+ JavaScript编译器

2. webpack及webpack-stream的作用

### 代码实现

1. 创建一个ES6前端工程

2. 完成目录结构、自动化构建、服务器搭建

```
ES6
+ app // 前端代码
	- css
	- js
		- index.js
		- test.js
	- views
		- error.ejs
		- index.ejs
+ server // 服务代码
	- 执行 'express -e .'
		- 执行 'npm install'
+ tasks // 构建脚本
	- util
		- args.js
+ .babelrc
+ gulpfile.babel.js
+ package.json 'npm init'

+ cnpm install gulp gulp-if gulp-concat webpack webpack-stream vinyl-named gulp-livereload gulp-plu
mber gulp-rename gulp-uglify gulp-util yargs --save-dev
```

* * *

## ES6转ES5

1. 安装依赖包
`npm install --save-dev gulp-babel`

2. 安装 Gulp 上 Babel 的插件。
`npm install --save-dev babel-preset-es2015`

3. gulp 配置：

```
var gulp = require("gulp");
var babel = require("gulp-babel");

gulp.task("default", function () {
  return gulp.src("src/**/*.js")// ES6 源码存放的路径
    .pipe(babel()) 
    .pipe(gulp.dest("dist")); //转换成 ES5 存放的路径
});
```

4. babel配置

+ 在项目根路径创建文件 .babelrc。内容为

```
{
  "presets": ["es2015"]
}
```

5. 最后：  执行  gulp

* * *

## ES6语法

+ 强制开启严格模式（默认）
+ 处理一些ES6补丁裤
`npm install babel-polyfill --save-dev`

+ 引入编译库：import 'babel-polyfill'

1. let和const --> var
	+ 作用域的概念
		- 块作用域{块作用域} 

	+ 如何使用let和const
		- let声明的变量只在块作用域有用 
			* let不能重复声明变量
			`let a = 1; let a = 2; // false`

		- const 常量
			* const声明的常量不能修改 也有块作用域 声明必须赋值
			* const声明对象 可以修改

```
function last() {
	const PI = 3.1415926;
	const k = {
		a:1
	}
	
	PI = 3 // error
	k.b = 3; // true
}
```

2. 解构赋值
	+ 什么是解构赋值
		* 左右一一对应

	+ 结构赋值分类
		- 数组解构赋值 对象解构赋值 字符串解构赋值 布尔解构赋值 函数参数解构赋值 数值结构赋值

```
// 数组解构赋值

{
  let a,b,rest;
  [a,b]=[1,2];
  console.log(a,b);
}

{
  let a,b,rest;
  [a,b,...rest]=[1,2,3,4,5,6];
  console.log(a,b,rest);
}

// 对象解构赋值
{
  let a,b;
  ({a,b}={a:1,b:2})
  console.log(a,b);
}

{
  let a,b,c,rest;
  [a,b,c=3]=[1,2];
  console.log(a,b,c);
}


// 变量交换
{
  let a=1;
  let b=2;
  [a,b]=[b,a];
  console.log(a,b);
}

{
  function f(){
    return [1,2]
  }
  let a,b;
  [a,b]=f();
  console.log(a,b);
}

{
  function f(){
    return [1,2,3,4,5]
  }
  let a,b,c;
  [a,,,b]=f();
  console.log(a,b);
}

{
  function f(){
    return [1,2,3,4,5]
  }
  let a,b,c;
  [a,,...b]=f();
  console.log(a,b);
}

{
  let o={p:42,q:true};
  let {p,q}=o;
  console.log(p,q);
}

{
  let {a=10,b=5}={a:3};
  console.log(a,b);
}

{
  let metaData={
    title:'abc',
    test:[{
      title:'test',
      desc:'description'
    }]
  }
  let {title:esTitle,test:[{title:cnTitle}]}=metaData;
  console.log(esTitle,cnTitle);
}

```

3. 正则扩展
	+ 正则新增特性
	+ 构造函数变化 正则方法扩展 u修饰符 y修饰符 s修饰符

```
{
    // #构造函数#
    let regex = new RegExp('xyz', 'i'); //第一个参数是字符串，第二个是修饰符
    let regex2 = new RegExp(/xyz/i); //第一个参数是正则表达式，不接受第二个参数，否则会报错
    console.log(regex.test('xyz123'), regex2.test('xyz123'));
    console.log(regex.test('xyZ123'), regex2.test('xyZ123'));

    let regex3 = new RegExp(/abc/ig, 'i');
    console.log(regex3.flags); //原有正则对象的修饰符是ig，它会被第二个参数i覆盖

}

// 字符串对象的4个使用正则表达式的方法： match(),replace(),search(),split()这四个方法全部调用RegExp的实例的方法。

{
    let regex = new RegExp('xyz', 'ig');
    console.log(regex.test('xyz0XYZ1xyz2'), regex.exec('xyz0XYZ1xyz2'));
}

{
    // y修饰符
    let s = 'bbbb_bbb_bb_b';
    var a1 = /b+/g;
    var a2 = /b+/y;

    console.log(a1.exec(s), a2.exec(s)); // ["bbbb"],["bbbb"]
    console.log(a1.exec(s), a2.exec(s)); // ["bbb"],null

    console.log(a1.sticky, a2.sticky); //表示是否开启了粘连模式
}

{
    console.log('u修饰符',/^\uD83D/.test('\uD83D\uDC2A')); // true
    console.log('u修饰符',/^\uD83D/u.test('\uD83D\uDC2A')); // false
    // 大括号表示Unicode字符，只有加上u才能识别
    console.log(/\u{61}/.test('a')); // false
    console.log(/\u{61}/u.test('a')); // true
    console.log(/\u{20BB7}/u.test('𠮷')); // true
    // 点（.）字符不能识别码点大于0xFFFF的Unicode字符，必须加上u修饰符。
    let s = '𠮷';
    console.log('大于0xFFFF的Unicode字符',/^.$/.test(s)); // false
    console.log('使用u字符',/^.$/u.test(s)); // true

    // 使用u修饰符后，所有量词都会正确识别大于码点大于0xFFFF的Unicode字符。
    console.log('量词',/a{2}/.test('aa')); // true
    console.log('量词',/a{2}/u.test('aa')); // true
    console.log('量词',/𠮷{2}/.test('𠮷𠮷')); // false
    console.log('量词',/𠮷{2}/u.test('𠮷𠮷')); // true
}

{
    // #正则表达式中，点（.）是一个特殊字符，代表任意的单个字符，但是行终止符（line terminator character）除外
    // U+000A 换行符（\n）
    // U+000D 回车符（\r）
    // U+2028 行分隔符（line separator）
    // U+2029 段分隔符（paragraph separator）
    // 只是一个提案目前还不支持
    // let reg=/test.go/s;
    // console.log(reg.test('test\ngo'));
    // console.log(reg.test('test\ngo'));
    console.log('s变通方法',/foo.bar/.test('foo\nbar'));
    console.log('s变通方法',/foo[^]bar/.test('foo\nbar'));
}

```

4. **字符串扩展**
	+ 新增特性
	+ Unicode表示 遍历接口 模板字符串 新增方法（10种）

```
{
  console.log('a',`\u0061`);
  console.log('s',`\u20BB7`); // 当成两个字符

  console.log('s',`\u{20BB7}`); // 处理两个字节的字符


}


{
  let s='𠮷';
  console.log('length',s.length);
  console.log('0',s.charAt(0));
  console.log('1',s.charAt(1));
  console.log('at0',s.charCodeAt(0));
  console.log('at1',s.charCodeAt(1));

  let s1='𠮷a';
  console.log('length',s1.length);
  console.log('code0',s1.codePointAt(0)); // es6 新增 取码字
  console.log('code0',s1.codePointAt(0).toString(16));
  console.log('code1',s1.codePointAt(1));
  console.log('code2',s1.codePointAt(2));
}

{
  console.log(String.fromCharCode("0x20bb7")); // es5 码字变字符
  console.log(String.fromCodePoint("0x20bb7")); // es6 码字变字符
}

{
  let str='\u{20bb7}abc';
  for(let i=0;i<str.length;i++){ // es5 遍历字符接口
    console.log('es5',str[i]);
  }
  for(let code of str){ // es6 字符串遍历接口
    console.log('es6',code);
  }
}

{
  let str="string";
  console.log('includes',str.includes("c")); // 包含
  console.log('start',str.startsWith('str')); // 开始位置
  console.log('end',str.endsWith('ng')); // 结束位置
}

{
  let str="abc";
  console.log(str.repeat(2)); // 重复次数
}

{
  let name="list";
  let info="hello world";
  let m=`i am ${name},${info}`; // 模板
  console.log(m);
}

{
  console.log('1'.padStart(2,'0')); // 补白 向前补
  console.log('1'.padEnd(2,'0')); // 补白 向后
}

{
  let user={
    name:'list',
    info:'hello world'
  };
  console.log(abc`i am ${user.name},${user.info}`); // 标签模板
  function abc(s,v1,v2){
    console.log(s,v1,v2);
    return s+v1+v2
  }
}

{
  console.log(String.raw`Hi\n${1+2}`); // 对 \ 进行转义
  console.log(`Hi\n${1+2}`);
}

```

5. 数值扩展
	+ 数字处理新增方法
	+ 新增方法 方法调整

```
{
  console.log('B',0B111110111); // es5 二进制 0b/0B开头 
  console.log(0o767); // 八进制 0o/0O开头
}

{
  console.log('15',Number.isFinite(15)); // 判断是否在有效范围内
  console.log('NaN',Number.isFinite(NaN));
  console.log('1/0',Number.isFinite('true'/0));
  console.log('NaN',Number.isNaN(NaN)); // 判断不是数
  console.log('0',Number.isNaN(0));

}

{
  console.log('25',Number.isInteger(25)); // 判断是不是整数
  console.log('25.0',Number.isInteger(25.0));
  console.log('25.1',Number.isInteger(25.1));
  console.log('25.1',Number.isInteger('25'));
}

{
  console.log(Number.MAX_SAFE_INTEGER,Number.MIN_SAFE_INTEGER); // 数字最大最小上限
  console.log('10',Number.isSafeInteger(10)); // 判断数字是否安全
  console.log('a',Number.isSafeInteger('a'));
}

{
  console.log(4.1,Math.trunc(4.1)); // 取整数
  console.log(4.9,Math.trunc(4.9));
}

{
  console.log('-5',Math.sign(-5)); // 判断数是 正数 --> 1 负数 --> -1 零 --> 0
  console.log('0',Math.sign(0));
  console.log('5',Math.sign(5));
  console.log('50',Math.sign('50')); // 把字符串转换成数字 --> 1
  console.log('foo',Math.sign('foo')); // NaN
}


{
  console.log('-1',Math.cbrt(-1)); // 立方根
  console.log('8',Math.cbrt(8));
}

```

6. **数组扩展**
	+ 数组新增特性
	+ Array.from Array.of copyWithin find、findIndex fill entries\keys\values inludes

```
{
  let arr = Array.of(3,4,7,9,11); // 把一组数据变量转换成数组
  console.log('arr=',arr);

  let empty=Array.of();
  console.log('empty',empty);
}

{
  let p=document.querySelectorAll('p');
  let pArr=Array.from(p); // 把伪数组或集合 转换成真正的数组
  pArr.forEach(function(item){
    console.log(item.textContent);
  });

  console.log(Array.from([1,3,5],function(item){return item*2})); // 遍历还转换
}

{
  console.log('fill-7',[1,'a',undefined].fill(7)); // 填充数组 换值
  console.log('fill,pos',['a','b','c'].fill(7,1,3)); // 从1 - 到 3 替换成7
}

{
  for(let index of ['1','c','ks'].keys()){ // 数组索引
    console.log('keys',index);
  }
  for(let value of ['1','c','ks'].values()){ // 对应值 兼容问题注意
    console.log('values',value);
  }
  for(let [index,value] of ['1','c','ks'].entries()){ // 索引和值
    console.log('values',index,value);
  }
}

{
  console.log([1,2,3,4,5].copyWithin(0,3,4)); // 替换位置0 从3开始读取 4+1 之前
}

{
  console.log([1,2,3,4,5,6].find(function(item){return item>3})); // 查找第一个符合的成员
  console.log([1,2,3,4,5,6].findIndex(function(item){return item>3})); // 查找第一个符合的成员的索引值（下标）
}

{
  console.log('number',[1,2,NaN].includes(1)); // 数组中包不包括1
  console.log('number',[1,2,NaN].includes(NaN));
}

```

7. **函数扩展**
	+ 新增特性
	+ 参数默认值 rest参数 扩展运算符 箭头函数 this绑定 尾调函数

```
{
  function test(x, y = 'world'){ // 默认参数
    console.log('默认值',x,y);
  }
  test('hello');
  test('hello','kill');
}

{
  let x='test';
  function test2(x,y=x){ // 作用域
    console.log('作用域',x,y);
  }
  test2('kill');
}

{
  function test3(...arg){ // 把参数当做数组
    for(let v of arg){
      console.log('rest',v);
    }
  }
  test3(1,2,3,4,'a');
}

{
  console.log(...[1,2,4]); // 把数组拆分成离散的值
  console.log('a',...[1,2,4]);
}

{
  let arrow = v => v*2; // 箭头函数
  let arrow2 = () => 5;
  console.log('arrow',arrow(3));
  console.log(arrow2());

}
/**
 * let arrow = v => v*2
 * 相当于
 * var arrow = function(v) {
 *   return v*2;
 * }
 *
 * let 函数名 = (参数) => 返回值 ---> let arr = () {语句;}
 */

{
  function tail(x){ // 尾调用 函数的最后一步是调用另一个函数
    console.log('tail',x);
  }
  function fx(x){
    return tail(x)
  }
  fx(123)
}

```

8. 对象扩展
	+ 函数新增特性
	+ 简洁表示法 属性表示法 扩展运算法 Object新增方法

```
{
  // 简洁表示法
  let o=1;
  let k=2;
  let es5={
    o:o,
    k:k
  };
  let es6={
    o,
    k
  };
  console.log(es5,es6);

  let es5_method={
    hello:function(){
      console.log('hello');
    }
  };
  let es6_method={
    hello(){
      console.log('hello');
    }
  };
  console.log(es5_method.hello(),es6_method.hello());
}

{
  // 属性表达式
  let a='b';
  let es5_obj={
    a:'c',
    b:'c'
  };

  let es6_obj={
    [a]:'c'
  }

  console.log(es5_obj,es6_obj);

}

{
  // 新增API
  console.log('字符串',Object.is('abc','abc'),'abc'==='abc'); // 比较两个是不是相等
  console.log('数组',Object.is([],[]),[]===[]);

  console.log('拷贝',Object.assign({a:'a'},{b:'b'})); // 拷贝 不拷贝继承

  let test={k:123,o:456};
  for(let [key,value] of Object.entries(test)){
    console.log([key,value]);
  }
}

{
  // 扩展运算符
  // let {a,b,...c}={a:'test',b:'kill',c:'ddd',d:'ccc'};
  // c={
  //   c:'ddd',
  //   d:'ccc'
  // }
}

```

9. Symbol
	+ Symbol的概念
	+ Symbol的作用

```
{
  // 声明
  let a1=Symbol(); // Symbol 声明的变量 永远不相等
  let a2=Symbol();
  console.log(a1===a2);
  let a3=Symbol.for('a3');
  let a4=Symbol.for('a3');
  console.log(a3===a4);
}

{
  let a1=Symbol.for('abc');
  let obj={
    [a1]:'123',
    'abc':345,
    'c':456
  };
  console.log('obj',obj);

  for(let [key,value] of Object.entries(obj)){
    console.log('let of',key,value);
  }

  Object.getOwnPropertySymbols(obj).forEach(function(item){ // 取Symbol属性值
    console.log(obj[item]);
  })

  Reflect.ownKeys(obj).forEach(function(item){ // 可拿到Symbol 和非Symbol的属性值
    console.log('ownkeys',item,obj[item]);
  })
}

```

10. 数据结构
	+ Set的作用 WeakSet的用法 Map的作用 WeakMap的用法
	+ Map与Array对比 Set与Array的对比
	+ Map与Object的对比 Set与Object的对比

```
{
  let list = new Set(); // set元素不能重复
  list.add(5); // add 增加
  list.add(7);

  console.log('size',list.size); // size长度
}

{
  let arr = [1,2,3,4,5];
  let list = new Set(arr);

  console.log('size',list.size);
}

{
  let list = new Set();
  list.add(1);
  list.add(2);
  list.add(1);

  console.log('list',list);

  let arr=[1,2,3,1,'2']; // 应用场景去重 保证元素独一无二
  let list2=new Set(arr);

  console.log('unique',list2);
}

{
  let arr=['add','delete','clear','has'];
  let list=new Set(arr);

  console.log('has',list.has('add')); // has 判断有没有
  console.log('delete',list.delete('add'),list); // delete 删除
  list.clear(); // 清空
  console.log('list',list);
}

{
  let arr=['add','delete','clear','has'];
  let list=new Set(arr);

  for(let key of list.keys()){ // 遍历key
    console.log('keys',key);
  }
  for(let value of list.values()){ // 遍历value
    console.log('value',value);
  }
  for(let [key,value] of list.entries()){ // 遍历 key value
    console.log('entries',key,value);
  }

  list.forEach(function(item){console.log(item);}) // value
}


{
  let weakList=new WeakSet(); // set WeakSet 数据类型不同

  let arg={}; // WeakSet 只能放对象

  weakList.add(arg);

  // weakList.add(2);

  console.log('weakList',weakList);
}

{
  let map = new Map(); // 接收元素可以重复
  let arr=['123'];

  map.set(arr,456); // 添加元素 set(key,value);

  console.log('map',map,map.get(arr)); // get 获取值
}

{
  let map = new Map([['a',123],['b',456]]);
  console.log('map args',map);
  console.log('size',map.size); // 长度
  console.log('delete',map.delete('a'),map); // 删除
  console.log('clear',map.clear(),map); // 清空
}

// 遍历和Set一模一样

{
  let weakmap=new WeakMap(); // 接收的必须是对象

  let o={};
  weakmap.set(o,123);
  console.log(weakmap.get(o));
}

{
  // 数据结构横向对比，增，查，改，删
  let map=new Map();
  let array = [];

  // 增
  map.set('t',1);
  array.push({t:1});
  console.info('map-array',map,array);

  // 查
  let map_exist=map.has('t');
  let array_exist=array.find(item=>item.t);
  console.info('map-array',map_exist,array_exist);

  // 改
  map.set('t',2);
  array.forEach(item=>item.t?item.t=2:'');
  console.info('map-array-modify',map,array);

  // 删
  map.delete('t');
  let index = array.findIndex(item=>item.t);
  array.splice(index,1);
  console.info('map-array-empty',map,array);
}

{ // set和array的对比
  let set=new Set();
  let array=[];

  // 增
  set.add({t:1});
  array.push({t:1});
  console.info('set-array',set,array);

  // 查
  let set_exist=set.has({t:1});
  let array_exist=array.find(item=>item.t);
  console.info('set-array',set_exist,array_exist);

  // 改
  set.forEach(item=>item.t?item.t=2:'');
  array.forEach(item=>item.t?item.t=2:'');
  console.info('set-array-modify',set,array);

  // 删
  set.forEach(item=>item.t?set.delete(item):'');
  let index = array.findIndex(item=>item.t);
  array.splice(index,1);
  console.info('set-array-empty',set,array);
}

{
  // map，set，object的对比
  let item={t:1};
  let map=new Map();
  let set=new Set();
  let obj={};

  // 增
  map.set('t',1);
  set.add(item);
  obj['t']=1;
  console.info('map-set-obj',map,set,obj);

  // 查
  consoel.info({
    map_exist:map.has('t'),
    set_exist:set.has(item),
    obj_exist:'t' in obj
  });

  // 改
  map.set('t',2);
  item.t=2;
  obj['t']=2;
  console.info('map-set-obj-modify',map,set,obj);

  // 删除
  map.delete('t');
  set.delete(item);
  delete obj['t'];
  console.info('map-set-obj',map,set,obj);
}
// 优先使用map 唯一性用set
```

11. Proxy和Reflect
	+ Proxy和Reflect的概念
	+ Proxy和Reflect的适用场景

```
{
  // 原始数据对象
  let obj={
    time:'2017-03-11',
    name:'net',
    _r:123
  };

  // 代理商 Proxy
  let monitor=new Proxy(obj,{
    // 拦截对象属性的读取
    get(target,key){
      return target[key].replace('2017','2018')
    },
    // 拦截对象设置属性
    set(target,key,value){
      if(key==='name'){
        return target[key]=value;
      }else{
        return target[key];
      }
    },
    // 拦截key in object操作
    has(target,key){
      if(key==='name'){
        return target[key]
      }else{
        return false;
      }
    },
    // 拦截delete
    deleteProperty(target,key){
      if(key.indexOf('_')>-1){
        delete target[key];
        return true;
      }else{
        return target[key]
      }
    },
    // 拦截Object.keys,Object.getOwnPropertySymbols,Object.getOwnPropertyNames
    ownKeys(target){
      return Object.keys(target).filter(item=>item!='time')
    }
  });

  console.log('get',monitor.time);

  monitor.time='2018';
  monitor.name='mukewang';
  console.log('set',monitor.time,monitor);

  console.log('has','name' in monitor,'time' in monitor);

  // delete monitor.time;
  // console.log('delete',monitor);
  //
  // delete monitor._r;
  // console.log('delete',monitor);
  console.log('ownKeys',Object.keys(monitor));

}

{
  let obj={
    time:'2017-03-11',
    name:'net',
    _r:123
  };

  console.log('Reflect get',Reflect.get(obj,'time'));
  Reflect.set(obj,'name','mukewang');
  console.log(obj);
  console.log('has',Reflect.has(obj,'name'));
}

{
  function validator(target,validator){
    return new Proxy(target,{
      _validator:validator,
      set(target,key,value,proxy){
        if(target.hasOwnPropert(key)){
          let va=this._validator[key];
          if(!!va(value)){
            return Reflect.set(target,key,value,proxy)
          }else{
            throw Error(`不能设置${key}到`${value`)
          }
        }else{
          throw Error(`${key}不存在`)
        }
      }
    })
  }

  const personValidators={
    name(val){
      return typeof val==='string'
    },
    age(val){
      return typeof val === 'number' && val>18
    }
  }
  class Person{
    constructor(name,age){
      this.name=name;
      this.age=age;
      return validator(this,personValidators)
    }
  }

  const person=new Person('lilei',30);
  console.info(person);
  person.name=48;
}
```

12. 类
	+ 类的概念
	+ 基本语法 类的继承 静态方法 静态属性 getter setter

```
{
  // 基本定义和生成实例
  class Parent{
    constructor(name='mukewang'){
      this.name=name;
    }
  }
  let v_parent=new Parent('v');
  console.log('构造函数和实例',v_parent);
}

{
  // 继承
  class Parent{
    constructor(name='mukewang'){
      this.name=name;
    }
  }

  class Child extends Parent{

  }

  console.log('继承',new Child());
}

{
  // 继承传递参数
  class Parent{
    constructor(name='mukewang'){
      this.name=name;
    }
  }

  class Child extends Parent{
    constructor(name='child'){
      super(name);
      this.type='child';
    }
  }

  console.log('继承传递参数',new Child('hello'));
}

{
  // getter,setter
  class Parent{
    constructor(name='mukewang'){
      this.name=name;
    }

    get longName(){
      return 'mk'+this.name
    }

    set longName(value){
      this.name=value;
    }
  }

  let v=new Parent();
  console.log('getter',v.longName);
  v.longName='hello';
  console.log('setter',v.longName);
}

{
  // 静态方法
  class Parent{
    constructor(name='mukewang'){
      this.name=name;
    }

    static tell(){
      console.log('tell');
    }
  }

  Parent.tell();

}

{
  // 静态属性
  class Parent{
    constructor(name='mukewang'){
      this.name=name;
    }

    static tell(){
      console.log('tell');
    }
  }

  Parent.type='test';

  console.log('静态属性',Parent.type);


}

```

13. Promise
	+ 什么是异步
	+ Promise的作用 Promise的基本用法

```
{
  // 基本定义
  let ajax=function(callback){
    console.log('执行');
    setTimeout(function () {
      callback&&callback.call()
    }, 1000);
  };
  ajax(function(){
    console.log('timeout1');
  })
}

{
  let ajax=function(){
    console.log('执行2');
    return new Promise(function(resolve,reject){
      setTimeout(function () {
        resolve()
      }, 1000);
    })
  };

  ajax().then(function(){
    console.log('promise','timeout2');
  })
}

{
  let ajax=function(){
    console.log('执行3');
    return new Promise(function(resolve,reject){
      setTimeout(function () {
        resolve()
      }, 1000);
    })
  };

  ajax()
    .then(function(){
    return new Promise(function(resolve,reject){
      setTimeout(function () {
        resolve()
      }, 2000);
    });
  })
    .then(function(){
    console.log('timeout3');
  })
}

{
  let ajax=function(num){
    console.log('执行4');
    return new Promise(function(resolve,reject){
      if(num>5){
        resolve()
      }else{
        throw new Error('出错了')
      }
    })
  }

  ajax(6).then(function(){
    console.log('log',6);
  }).catch(function(err){
    console.log('catch',err);
  });

  ajax(3).then(function(){
    console.log('log',3);
  }).catch(function(err){
    console.log('catch',err);
  });
}

{
  // 所有图片加载完再添加页面
  function loadImg(src){
    return new Promise((resole,reject)=>{
      let img=document.createElement('img');
      img.src=src;
      img.onload=function(){
        resolve(img);
      }
      img.onerror=function(err){
        reject(err);
      }
    })
  }

  function showImgs(imgs){
    imgs.forEach(function(img){
      document.body.appendChild(img);
    })
  }

  Promise.all([// all 全部
    loadImg('http://14jdj/4454/32.png'),
    loadImg('http://14jdj/4454/3d2.png'),
    loadImg('http://14jdj/4454/3dsa2.png'),
    ]).then(showImgs)
}

{
  // 有一个图片加载完再添加页面
  function loadImg(src){
    return new Promise((resole,reject)=>{
      let img=document.createElement('img');
      img.src=src;
      img.onload=function(){
        resolve(img);
      }
      img.onerror=function(err){
        reject(err);
      }
    })
  }

  function showImgs(img){
    let p=document.createElement('p');
    p.appendChild(img);
    document.body.appendChild(p);
  }

   Promise.race([
    loadImg('http://14jdj/4454/32.png'),
    loadImg('http://14jdj/4454/3d2.png'),
    loadImg('http://14jdj/4454/3dsa2.png'),
    ]).then(showImgs)
}
```

14. Iterator和for...of循环
	+ 什么是Iterator接口
	+ Iterator的基本使用
	+ for...of

```
{
  let arr=['hello','world'];
  let map=arr[Symbol.iterator]();
  console.log(map.next());
  console.log(map.next());
  console.log(map.next());
}

{
  let obj={
    start:[1,3,2],
    end:[7,9,8],
    [Symbol.iterator](){
      let self=this;
      let index=0;
      let arr=self.start.concat(self.end);
      let len=arr.length;
      return {
        next(){
          if(index<len){
            return {
              value:arr[index++],
              done:false
            }
          }else{
            return {
              value:arr[index++],
              done:true
            }
          }
        }
      }
    }
  }
  for(let key of obj){
    console.log(key);
  }
}

{
  let arr=['hello','world'];
  for(let value of arr){
    console.log('value',value);
  }
}

```

15. Generator
	+ 基本概念
	+ next函数的用法
	+ yield\*的语法

```
{
  // genertaor基本定义
  let tell=function* (){
    yield 'a';
    yield 'b';
    return 'c'
  };

  let k=tell();

  console.log(k.next());
  console.log(k.next());
  console.log(k.next());
  console.log(k.next());
}

{
  let obj={};
  obj[Symbol.iterator]=function* (){
    yield 1;
    yield 2;
    yield 3;
  }

  for(let value of obj){
    console.log('value',value);
  }
}

{
  let state=function* (){
    while(1){
      yield 'A';
      yield 'B';
      yield 'C';
    }
  }
  let status=state();
  console.log(status.next());
  console.log(status.next());
  console.log(status.next());
  console.log(status.next());
  console.log(status.next());
}

// {
//   let state=async function (){
//     while(1){
//       await 'A';
//       await 'B';
//       await 'C';
//     }
//   }
//   let status=state();
//   console.log(status.next());
//   console.log(status.next());
//   console.log(status.next());
//   console.log(status.next());
//   console.log(status.next());
// }

{
  let draw=function(count){
    // 具体抽奖逻辑
    console.info(`剩余${count}次`)
  }

  let residue=function*(count){
    while(count>0){
      count--;
      yield draw(count);
    }
  }

  let star=residue(5);
  let btn=document.createElement('button');
  btn.id='start';
  btn.textContent='抽奖';
  document.body.appendChild(btn);
  document.getElementById('start').addEventListener('click',function(){
    start.net();
  }, false)
}

{
  // 长轮询
  let ajax=function*(){
    yield new Promise(function(resolve,reject){
      setTimeout(function(){
        resolve({code:0})
      },200);
    })
  }

  let pull=function(){
    let genertaor=ajax();
    let step=genertaor.next();
    step.value.then(function(d){
      if(d.code!=0){
        setTimeout(function(){
          console.log('wait');
          pull();
        },1000)
      }else{
        console.info(d);
      }
    })
  }

  pull();
}
```

16. Decorator
	+ 基本概念
	+ 基本用法

```
{
  // npm install transform-decorators-legacy --save-dev
  let readonly=function(target,name,descriptor){
    descriptor.writable=false;
    return descriptor
  };

  class Test{
    @readonly
    time(){
      return '2017-03-11'
    }
  }

  let test=new Test();

  // test.time=function(){
  //   console.log('reset time');
  // };

  console.log(test.time());
}


{
  let typename=function(target,name,descriptor){
    target.myname='hello';
  }

  @typename
  class Test{

  }

  console.log('类修饰符',Test.myname);
  // 第三方库修饰器的js库：core-decorators; npm install core-decorators
}

{
  let log=(type)=>{
    return function(targt,name,descriptor){
      let src_method=descriptor.value;
      descriptor.value=(...arg)=>{
        src_method.apply(target,arg);
        cosnole.info(`log ${type}`);
      }
    }
  }

  class AD{
    @log('show')
    show(){
      console.info('ad is show')
    }

    @log('click')
    click(){
      cosnole.info(ad is click);
    }
  }

  let ad=new AD();
  ad.show();
  ad.click();
}
```

17. 模块化
	+ 基本概念
	+ ES6的模块化语法

```
// export let A=123;
//
// export function test(){
//   console.log('test');
// }
//
// export class Hello{
//   test(){
//     console.log('class');
//   }
// }

let A=123;
let test=function(){
  console.log('test');
}
class Hello{
  test(){
    console.log('class');
  }
}

export default {
  A,
  test,
  Hello
}

```

## 彩票项目实战

+ 功能模块

1. 倒计时

2. 玩法切换

3. 计算金额

4. 添加号码

5. 投注支付

6. 随机号码

7. 奖金预测

8. 状态更新

9. 动态遗漏