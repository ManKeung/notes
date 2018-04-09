[TOC]

* * *

# [VUE](https://cn.vuejs.org/ "官网")

+ vue到底是什么？
	- 一个人mvvm框架（库）、和angular类似
	- 轻量级 高效率 上手快 简单易学 文档全面而简洁

+ 基本语法

```
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>vue雏形</title>
	<script src="./vue.js"></script>
	<script>
		window.onload = function(){
			var vm = new Vue({
				el:'#box',
				data:{
					msg:'welcomen vue!'
				}
			});
		};
	</script>
</head>
<body>
	<div id="box">
		{{msg}}
	</div>
</body>
</html>

```

+ [调试工具](https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd "google插件")

	- vue-devtools

> 注意打开扩展程序 允许访问文件网址

## 常用指令

+ 指令：扩展html标签功能，属性

### v-model

1. 随表单控件类型不同而不同

2. 限制标签：
	- input
	- select
	- textarea

3. 修饰符：
	- .lazy - 取代 input 监听 change 事件
	- .number - 输入字符串转为数字
	- .trim - 输入首尾空格过滤

4. 用法：在表单控件或者组件上创建双向绑定

### data

+ data数据存储
	1. 数字
	2. 布尔值
	3. 数组
	4. json（对象）

### 条件

+ v-if v-else v-else-if

```
<div v-if="type === 'A'">
  A
</div>
<div v-else-if="type === 'B'">
  B
</div>
<div v-else-if="type === 'C'">
  C
</div>
<div v-else>
  Not A/B/C
</div>
``` 

### v-for

1. ~~vue1x~~
	- v-for="name in arr" // {{$index}} 下标0 1 2...
	- v-for="name in json" // {{$index}} 下标0 1 2... {{$key}} key值
	- v-for="(k,v) in json" // {{k}} key值 {{v}} vule值

> 会有重复数据？track-by='索引'	提高循环性能 track-by='$index/uid


2. vue2x

+ 默认可以添加重复数据
+ 去掉了隐式变量：$index $key

+ v-for="(val,index,key) in array"
+ track-by="id" ===> `<li v-for="(val,index) in list" :key="index">`

### v-on

1. 语法：v-on:事件="函数"

2. 简写：@事件="函数"

3. 修饰符：
	- .stop - 调用 event.stopPropagation()。
	- .prevent - 调用 event.preventDefault()。
	- .capture - 添加事件侦听器时使用 capture 模式。
	- .self - 只当事件是从侦听器绑定的元素本身触发时才触发回调。
	- .{keyCode | keyAlias} - 只当事件是从特定键触发时才触发回调。
	- .native - 监听组件根元素的原生事件。
	- .once - 只触发一次回调。
	- .left - (2.2.0) 只当点击鼠标左键时触发。
	- .right - (2.2.0) 只当点击鼠标右键时触发。
	- .middle - (2.2.0) 只当点击鼠标中键时触发。
	- .passive - (2.3.0) 以 { passive: true } 模式添加侦听器

### v-show

+ v-show="true/false"

### v-bind

1. 语法：v-bind:属性="数据"

2. 简写：:属性="数据"

3. 修饰符：
	- .prop - 被用于绑定 DOM 属性 (property)。[(差别在哪里？)](https://stackoverflow.com/questions/6003819/what-is-the-difference-between-properties-and-attributes-in-html#answer-6004028)
	- .camel - (2.1.0+) 将 kebab-case 特性名转换为 camelCase. (从 2.1.0 开始支持)
	- .sync (2.3.0+) 语法糖，会扩展成一个更新父组件绑定值的 v-on 侦听器

```
<!-- 绑定一个属性 -->
<img v-bind:src="imageSrc">

<!-- 缩写 -->
<img :src="imageSrc">

<!-- 内联字符串拼接 -->
<img :src="'/path/to/images/' + fileName">

<!-- class 绑定 -->
<div :class="{ red: isRed }"></div>
<div :class="[classA, classB]"></div>
<div :class="[classA, { classB: isB, classC: isC }]">

<!-- style 绑定 -->
<div :style="{ fontSize: size + 'px' }"></div>
<div :style="[styleObjectA, styleObjectB]"></div>

<!-- 绑定一个有属性的对象 -->
<div v-bind="{ id: someProp, 'other-attr': otherProp }"></div>

<!-- 通过 prop 修饰符绑定 DOM 属性 -->
<div v-bind:text-content.prop="text"></div>

<!-- prop 绑定。“prop”必须在 my-component 中声明。-->
<my-component :prop="someThing"></my-component>

<!-- 通过 $props 将父组件的 props 一起传给子组件 -->
<child-component v-bind="$props"></child-component>

<!-- XLink -->
<svg><a :xlink:special="foo"></a></svg>
```

> v-bind 属性名称驼峰化

### 自定义指令

1. 语法 与钩子函数结合
```
// 注册
Vue.directive('my-directive', {
  bind: function () {},
  inserted: function () {},
  update: function () {},
  componentUpdated: function () {},
  unbind: function () {}
})

// 注册 (指令函数)
Vue.directive('my-directive', function () {
  // 这里将会被 `bind` 和 `update` 调用
})

// getter，返回已注册的指令
var myDirective = Vue.directive('my-directive')
```

```
Vue.directive(指令名称,function(参数){
		this.el	-> 原生DOM元素
	});

	<div v-red="参数"></div>

	指令名称: 	v-red  ->  red

	* 注意: 必须以 v-开头
```

+ ~~自定义元素指令:（用处不大）~~

### 自定义键盘信息

1. ~~vue1x~~

	- @keydown.up
	- @keydown.enter

	- @keydown.a/b/c....

	- 自定义键盘信息:
	 * Vue.directive('on').keyCodes.ctrl=17;
	 * Vue.directive('on').keyCodes.myenter=13;

2. vue2x

+ 自定义键盘信息：Vue.config.keyCodes.ctrl = 17;

## 模板

1. {{msg}}		数据更新模板变化 --> v-text
2. {{\*msg}}	数据只绑定一次	
3. {{{msg}}}	HTML转意输出 --> v-html

## 过滤器

1. ~~vue1x~~

```
{{msg| filterA}}
{{msg| filterA | filterB}}
uppercase	eg:	{{'welcome'| uppercase}} // 大写
lowercase // 小写
capitalize // 首字母大写
currency // 钱
{{msg| filterA 参数}} eg：{{12|currency '￥'}}

vue提供过滤器:
		capitalize	uppercase	currency....

		debounce	配合事件，延迟执行
	数据配合使用过滤器:
		limitBy	限制几个
		limitBy 参数(取几个)
		limitBy 取几个  从哪开始

		filterBy	过滤数据
		filterBy ‘谁’

		orderBy	排序
		orderBy 谁 1/-1
			1  -> 正序
			2  -> 倒序
```

+ 自定义过滤器
	- model --> 过滤 --> view

```
Vue.filter('过滤器名字',function(input){ // 参数可以是多个 
	// 逻辑代码
	return ...;
	});
```

2. vue2x

+ vue2x 内置过滤器全部删除
+ 可利用[lodash](http://www.css88.com/doc/lodash/ "中文文档")工具库

+ 自定义过滤器（和vue1x一样）
	- 区别：传参数时
	{{msg | toDou('12','5')}}

## 交互

+ $http	（ajax）
+ 引入：vue-resouce

> vue建议使用[axios](http://www.jianshu.com/p/df464b26ae58)

```
	get:
		获取一个普通文本数据:
		this.$http.get('aa.txt').then(function(res){
		    alert(res.data);
		},function(res){
		    alert(res.status);
		});
		给服务发送数据:√
		this.$http.get('get.php',{
		    a:1,
		    b:2
		}).then(function(res){
		    alert(res.data);
		},function(res){
		    alert(res.status);
		});
	post:
		this.$http.post('post.php',{
		    a:1,
		    b:20
		},{
		    emulateJSON:true
		}).then(function(res){
		    alert(res.data);
		},function(res){
		    alert(res.status);
		});
	jsonp:
		https://sug.so.360.cn/suggest?callback=suggest_so&word=a

		https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=a&cb=jshow

		this.$http.jsonp('https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su',{
		    wd:'a'
		},{
		    jsonp:'cb'	//callback名字，默认名字就是"callback"
		}).then(function(res){
		    alert(res.data.s);
		},function(res){
		    alert(res.status);
		});
```

## 生存周期

1. ~~vue1x~~

+ 钩子函数：
	- created	->   实例已经创建	√
	- beforeCompile	->   编译之前
	- compiled	->   编译之后
	- ready		->   插入到文档中	√
	- beforeDestroy	->   销毁之前
	- destroyed	->   销毁之后

2. vue2x

+ 钩子函数：
	- beforeCreate	组件实例刚刚被创建,属性都没有
	- created	实例已经创建完成，属性已经绑定
	- beforeMount	模板编译之前
	- mounted	模板编译之后，代替之前ready  √
	- beforeUpdate	组件更新之前
	- updated	组件更新完毕	√
	- beforeDestroy	组件销毁前
	- destroyed	组件销毁后

## 计算属性

+ 注意，不应该使用箭头函数来定义计算属性函数

+ 计算属性的使用

```
computed:{
		b:function(){	//默认调用get
			return 值
		}
	}
```

```
computed:{
		b:{
			get:
			set:
		}
	}
```

> computed里面可以放置一些业务逻辑代码，一定记得return

## vue实例简单方法

+ vm = new Vue({...});

1. vm.$el --> 就是元素 --> vm.$el.style.background = 'red';
2. vm.$data --> 就是data --> vm.$data.a;
3. vm.$mount --> 手动挂载 √ --> new Vue({data:{a:1}}).$mount('#box');
4. vm.$options --> 获取自定义属性

```
 <script>
    var vm = new Vue({
      // el: '#box',
      aa: 11, // 自定义属性
      show:function(){
        alert(1);
      },
      data: {
        a: 1
      }
    }).$mount('#box');
    vm.$options.show();
    console.log(vm.$options.aa);
  </script>
```

5. vm.$destroy --> 销毁对象 --> 看生命周期例子
6. vm.$log --> 查看现在数据的状态 --> vm.$log();

## 监听数据变化

+ vm.$el/$mount/$options/....
+ vm.$watch(name,fnCb);  //浅度
+ vm.$watch(name,fnCb,{deep:true});  //深度监视 

```
var vm = new Vue({
  data: {
    a: 1,
    b: 2,
    c: 3,
    d: 4
  },
  watch: {
    a: function (val, oldVal) {
      console.log('new: %s, old: %s', val, oldVal)
    },
    // 方法名
    b: 'someMethod',
    // 深度 watcher
    c: {
      handler: function (val, oldVal) { /* ... */ },
      deep: true
    },
    // 该回调将会在侦听开始之后被立即调用
    d: {
      handler: function (val, oldVal) { /* ... */ },
      immediate: true
    }
  }
})
vm.a = 2 // => new: 2, old: 1
```

## 动画

1. vue1x

+ style

```
.fade-transition{
			
		}
		进入：
		.fade-enter{
			opacity: 0;
		}
		离开：
		.fade-leave{
			opacity: 0;
			transform: translateX(200px);
		}
```

+ html

```
<div transition="fade"></div>
```

2. vue2x

+ transition 组件

```
<transition name="fade">
	运动东西(元素，属性、路由....)
</transition>
```

+ class定义:
	- .fade-enter{}	//初始状态
	- .fade-enter-active{}  //变化成什么样  ->  当元素出来(显示)
	- .fade-leave{}
	- .fade-leave-active{} //变化成什么样   -> 当元素离开(消失)

+ 如何animate.css配合用？

```
<transition enter-active-class="animated zoomInLeft" leave-active-class="animated zoomOutRight">
  <p v-show="show"></p>
</transition>
```

+ 多个元素运动:

```
	<transition-group enter-active-class="" leave-active-class="">
		<p :key=""></p>
		<p :key=""></p>
	</transition-group>
```

## 组件

+ 一个大的对象

### ~~vue1x~~ 

#### 定义组件

1. 全局组件

```
var Aaa = Vue.extend({
	template: '<h3>我是标题</h3>'
});

Vue.component('aaa', Aaa);
```

> 组件里面放数据：data必须是函数的形式，函数必须返回一个对象(json)

2. 局部组件：放到某个组件内部

```
var vm=new Vue({
	el:'#box',
	data:{
		bSign:true
	},
	components:{ //局部组件
		aaa:Aaa
	}
});
```

3. 另一种编写方式

```
Vue.component('my-aaa',{
		template:'<strong>好</strong>'
	});

var vm=new Vue({
		el:'#box',
		components:{
			'my-aaa':{
				template:'<h2>标题2</h2>'
			}
		}
	});
```

4. 配合模板
	+ `template:'<h2 @click="change">标题2->{{msg}}</h2>'`
	+ 单独放到某个地方

```
		a). <script type="x-template" id="aaa">
					<h2 @click="change">标题2->{{msg}}</h2>
				</script>

		b). <template id="aaa">
					<h1>标题1</h1>
					<ul>
						<li v-for="val in arr">
							{{val}}
						</li>
					</ul>
				</template>
```

5. 动态组件

`<component :is="组件名称"></component>`

6. vue默认情况下，子组件也没法访问父组件数据

7. 组件数据传递 √
	+ 子组件就想获取父组件data
		- 在调用子组件：`<bbb :m="数据"></bbb>`
```
子组件之内:
		props:['m','myMsg']

		props:{
			'm':String,
			'myMsg':Number
		}
```
	+ 父级获取子级数据
```
*子组件把自己的数据，发送到父级

vm.$emit(事件名,数据);

v-on:	@

vm.$dispatch(事件名,数据)	子级向父级发送数据
vm.$broadcast(事件名,数据)	父级向子级广播数据
	配合: event:{}

	在vue2.0里面已经，报废了
```

#### vue2x组件通信

+ vm.$emit(); vm.$on();

```
	子组件想要拿到父组件数据:
		通过  props

	之前，子组件可以更改父组件信息，可以是同步  sync
	现在，不允许直接给父级的数据，做赋值操作

	问题，就想更改：
		a). 父组件每次传一个对象给子组件, 对象之间引用	√
		b). 只是不报错, mounted中转
```

+ 可以单一事件管理组件通信

```
	var Event=new Vue();

	Event.$emit(事件名称, 数据)

	Event.$on(事件名称,function(data){
		//data
	}.bind(this));

	+ debounce	废弃
	->   lodash
		\_.debounce(fn,时间)
```

### vue2x

+ 组件模板：必须有根元素，包裹住所有的代码

```
			<template id="aaa">
			        <div>
			            <h3>我是组件</h3>
			            <strong>我是加粗标签</strong>
			        </div>
			</template>
```

#### 组件自定义

```
	var Home={
		template:''		===>   Vue.extend()
	};
```

#### 自定义全局组件

+ 使用：<Loading></Loading>

+ 文件结构

	个人习惯：
		|-loading/
			|-index.js // 导出组件，并且install
			|-Loading.vue // Loading组件

+ 主要文件index.js代码

```
import LoadingComponent from './Loading.vue'

const Loading = {
  install:function(Vue){
    Vue.component('Loading',LoadingComponent)
  }
};

export default Loading

```

### slot

+ 位置、槽口
+ 作用: 占个位置
+ 类似ng里面 transclude  （指令）

## **[路由](http://router.vuejs.org/zh-cn/index.html "网站")**

+ vue-> SPA应用，单页面应用
+ vue-resouce	交互
+ vue-router	路由
+ 根据不同url地址，出现不同效果

### ~~vue1x~~

1. html

```
<a v-link="{path:'/home'}">主页</a>	跳转链接
	
展示内容:
<router-view></router-view>
```

2. js

```
	//1. 准备一个根组件
	var App=Vue.extend();

	//2. Home News组件都准备
	var Home=Vue.extend({
		template:'<h3>我是主页</h3>'
	});

	var News=Vue.extend({
		template:'<h3>我是新闻</h3>'
	});

	//3. 准备路由
	var router=new VueRouter();

	//4. 关联
	router.map({
		'home':{
			component:Home
		},
		'news':{
			component:News
		}
	});

	//5. 启动路由
	router.start(App,'#box');

	//6. 跳转:
	router.redirect({
		‘/’:'/home'
	});
```

3. 路由嵌套

```
主页	home
	登录	home/login
	注册	home/reg

新闻页	news

	subRoutes:{
		'login':{
			component:{
				template:'<strong>我是登录信息</strong>'
			}
		},
		'reg':{
			component:{
				template:'<strong>我是注册信息</strong>'
			}
		}
	}
```

4. 路由其他信息
	+ /detail/:id/age/:age
	+ {{$route.params | json}} --> 当前参数
	+ {{$route.path}} --> 当前路径
	+ {{$route.query | json}} --> 数据

### vue2x

#### 基本使用

1. 布局

```
<router-link to="/home">主页</router-link>

<router-view></router-view>
```

2. 路由具体写法

```
	//组件
	var Home={
	    template:'<h3>我是主页</h3>'
	};
	var News={
	    template:'<h3>我是新闻</h3>'
	};

	//配置路由
	const routes=[
	    {path:'/home', componet:Home},
	    {path:'/news', componet:News},
	];

	//生成路由实例
	const router=new VueRouter({
	    routes
	});

	//最后挂到vue上
	new Vue({
	    router,
	    el:'#box'
	});
```

3. 重定向

	+ ~~之前  router.rediect  废弃了~~
	+ {path:'\*', redirect:'/home'}

#### 路由嵌套

```
	/user/username

	const routes=[
	    {path:'/home', component:Home},
	    {
	        path:'/user',
	        component:User,
	        children:[  //核心
	            {path:'username', component:UserDetail}
	        ]
	    },
	    {path:'*', redirect:'/home'}  //404
	];

/user/strive/age/10

:id
:username
:age
```

#### 路由实例方法：

+ router.push({path:'home'});  //直接添加一个路由,表现切换路由，本质往历史记录里面添加一个
+ router.replace({path:'news'}) //替换路由，不会往历史记录里面添加

## vue-loader

+ 其他loader --> css-loader url-loader html-loader...
+ 后台：nodeJs --> require exports
+ broserif 模块加载，只能加载js
+ webpack 模块加载器，一切东西都是模块，最后打包到一块
+ require('style.css'); --> css-loader style-loader
+ vue-loader基于webpack
+ .css .js .html .php ....

+ .vue文件：放置的是组件代码

```
		<template>
			html
		</template>
	
		<style>
			css
		</style>
	
		<script>
			js	（平时代码、ES6）	babel-loader
		</script>
```

+ 简单目录结构：
	|-index.html
	|-main.js 入口文件
	|-App.vue vue文件，官方推荐命名法
	|-package.json 工程文件（项目依赖、名称、配置）
		$ npm init --yes 生成
	|-webpack.config.js webpack配置文件

+ ES6：模块化开发
	- 导出模块：export default {}
	- 引入模块：import 模块名 from地址

+ webpack准备工作
	- $ cnpm install webpack webpack-dev-server --save-dev
	- App.vue --> 变成正常代码 vue-loader@8.5.4
	- $ cnpm install vue-loader@8.5.4 --save-dev
	- $ cnpm install vue-html-loader --save-dev
	- vue-html-loader css-loader vue-style-loader vue-hot-reload-api@1.3.2
	- babel-loader babel-core babel-plugin-transfrom-runtime babel-preset-es2015 babel-runtime

+ 路由
	1. 下载vue-router模块：$ cnpm install vue-router@0.7.13 --save
	2. import VueRouter from 'vue-router'
	3. Vue.use(VueRouter);
	4. 配置路由
```
var router=new VueRouter();
	router.map({
		路由规则
	})
```
	5. 开启：router.start(App, '#app');

> 注意：之前: index.html	->   <app></app> 现在: index.html	->   <div id="app"></div>
> App.vue	->   需要一个 <div id="app"></div>  根元素

## 脚手架

+ vue-cli --> vue脚手架
	- 帮你提供好几本项目结构

+ 本生集成很多项目模块
	1. simple		个人觉得一点用都没有
	2. webpack	可以使用(大型项目)
		- Eslint 检查代码规范，
		- 单元测试
	3. webpack-simple	个人推荐使用, 没有代码检查	√
	4. browserify	->  自己看
	5. browserify-simple

+ 基本使用流程：
	1. npm install vue-cli -g	安装 vue命令环境
		- 验证安装ok?
		- vue --version / vue -V
	2. 生成项目模板
		- vue init <模板名> 本地文件夹名称
	3. 进入到生成目录里面
		- cd xxx
		- npm install
	4. npm run dev

### vue-loader

1. ~~vue1x~~

```
	new Vue({
	  el: '#app',
	  components:{App}
	});	
```

2. vue2x

```
	new Vue({
	  el: '#app',
	  render: h => h(App)
	});
```

+ vue-loader和vue-router配合

```
style-loader	css-loader

style-loader!css-loader
```

## UI组件

+ 最好看相应的API文档

### bootstrap

+ twitter	开源
+ 简洁、大方
+	官网文档

+	基于 jquery

+	栅格化系统+响应式工具  (移动端、pad、pc)
+	按钮

### [elementUI](http://element.eleme.io/ "官网")

+ 如何使用

1. 安装 element-ui
`$ npm i element-ui --save-dev`
// i ==> install
// -D ==> --save-dev
// -S ==> --save

2. 引入 main.js 入口文件
`import ElementUI from 'element-ui`
`import 'element-ui/lib/theme-default/index.css'`

3. 引入
	+ 全部引入
		`Vue.use(ElementUI)`
		- css-loader 引入css
		- 字体图标 file-loader
	+ 按需求加载相应组件 √
		1. babel-plugi-component
		`$ npm i babel-plugin-component -D`
		2. .babelrc文件里面新增一个配置
```
		"plugins": [["component", [
	    {
	      "libraryName": "element-ui",
	      "styleLibraryName": "theme-default"
	    }
	  ]]]
```
	3. 想用哪个组件就用哪个
		- 引入：import {Button,Radio} from 'element-ui'
		- 使用：
			a). Vue.component(Button.name, Button);  个人不太喜欢
			b). Vue.use(Button);   √

### [mint-ui](http:..mint-ui.github.io/ "移动端 UI库")

1. 下载
`$ npm i mint-ui -D`

2. [引入](http://mint-ui.github.io/docs/#!/zh-cn2)

```
	import Vue from 'vue';
	import Mint from 'mint-ui';
	import 'mint-ui/lib/style.css'
	Vue.use(Mint);

	按需引入:
	import { Cell, Checklist } from 'minu-ui';
	Vue.component(Cell.name, Cell);
	Vue.component(Checklist.name, Checklist);
```

[Mint-ui-demo:  看着手册走了一遍](https://github.com/itstrive/striveCode/tree/js/vue2.0-Mint-ui-demo)

## [vuex](http://vuex.vuejs.org "集中管理数据")

+ vuex提供两个非常靠谱方法
	- mapActions 管理所有事件（行为）
	- mapGetters 获取数据

`$ vue init webpack-simple vuex-demo`
`$ cnpm install vuex -D`

+ 做项目基本流程
	1. 规划组件结构
		* Nav.vue
		* Header.vue
		* Home.vue
		....
	2. 编写对应路由
		* Vue-router
	3. 具体写每个组件功能

> 建议：一些公共文件jquery，jquery插件，一般在index.html文件里面引入
> 不建议：main.js require()/import

+ 项目需要的模块：vuex vue-router axios

+ axios：可以配置
	- 目前为止：axios，不能 Vue.use(axios)

	axios.interceptors.request.use(); // 发送请求配置
	axios.interceptors.reponse.use(); // 接收请求配置
	axios.defaults.baseURL='http://localhost:8082/'; // 配置请求根路径
	axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'; // 设置post头部信息

#### vue总结

1. 直接页面级开发，script直接引入
2. 工程性开发，webpack+loader\vue-cli

webpack 配置多个文件入口（多页面）

3. 打包文件很大
+ webpack代码拆分：code-spliting
+ 提取公共（css、js）
+ 预渲染：prerender-spa-plugin
+ 后台——开启压缩，gzip
+ 异步加载组件 require.ensure