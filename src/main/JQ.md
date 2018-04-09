[TOC]

* * *

# JQuery

1. 书写简洁、代码优雅
2. Write Less，Do More
3. 强大的选择器，支持CSS1-3所有的选择器
4. 浏览器兼容性好，兼容IE6、7、8
5. 统一的入口，降低了学习、记忆成本
6. 强大的动画效果、事件支持
7. 开源、免费
8. 插件丰富，可扩展性强

* * *

## 基础

+ JQuery解决问题
	1. window.onload 事件有个事件覆盖的问题，我们只能写一个
	2. 代码容错性差
	3. 浏览器兼容性问题
	4. 书写很繁琐，代码量多
	5. 代码很乱，各个页面到处都是
	6. 动画效果，我们很难实现

> 这些问题都能得到解决

+ JQuery基本使用
	1. 版本
		- jquery-1.xxx.js
		- jquery-1.xxx.min.js // 压缩版本
	2. 引包
		- 要把我们的jQuery源文件拿到我们的项目里面来
		- 在我们的页面中引用jQuery文件
		`<script src="jquer-1.xxx.min.js"></script>`
	3. 入口函数
```
$(document).ready(function(){});
$(function(){});

$ === jQuery
```
	4. 事件处理程序
		- 事件源
			* Js方式：document.getElementById('id')
			* jQuery方式：$('#id')

		- 事件
			* Js方式 :document.getElementById("id").onclick
			* jQuery方式: $("#id").click
			* 区别：jQuery的事件不带on

		- 事件处理程序
```
js 书写方式:
document.getElementById("id").onclick = function(){
	// 语句
}
jQuery 书写方式: 
$("#id").click(function(){
	// 语句
});
```

+ JQuery详细介绍
	1. $ 问题
		- Js命名归法：下划线、字母、$、数字
		- 但是不能以数字作为开头
		- var $ = "我是$符号";
		- jQUery的两个变量：$ 和 jQuery
		- jQuery占用了我们两个变量：$ 和 jQuery
	2. js入口函数跟jQuery入口函数的区别：
		- Js的window.onload事件是等到所有内容，以及我们的外部图片之类的文件加载完了之后，才回去执行
		- jQuery的入口函数 是在 html所有标签都加载之后，就回去执行

+ JS创建对象
	- var obj = {};
	- var obj1 = new Object();
	- var obj2 = Object.create();
	- 1跟2的区别：
		* 推荐使用第一个方式 
		* 第二种方式存在效率问题，因为要new对象，会涉及到原型查找的问题

+ JavaScript与JQuery的区别
	- Javascript是一门编程语言，我们用它来编写客户端浏览器脚本。
	- jQuery是javascript的一个库，包含多个可重用的函数，用来辅助我们javascript开发
	- jQuery能做的javascipt都能做到，而javascript能做的事情，jQuery不一定能做到。

+ DOM对象跟jQuery对象相互转换
```
jQuery对象转换成DOM对象:
方式一：$(“#btn”)[0]
方式二：$(“#btn”).get(0)
DOM对象转换成jQuery对象：
$(document) 	-> 把DOM对象转成了jQuery对象
	var btn = document.getElementById(“bt n”);
	btn 	-> $(btn);

 <script>
        $(document).ready(function () {
            // DOM对象转换成jQuery对象
            /*var btn = document.getElementById("btn");
            $(btn).click(function () {
                $("div").hide();
            });*/

            // jQuery对象转换成DOM对象
            /*$("button")[1].onclick = function (){
                alert("jQuery对象转换成dom对象");
            };*/

            // 另外一个方式
            $("button").get(0).onclick = function () {
                alert("jQuery对象转换成dom对象");
            }

            // js里面的click() 方法：触发click事件
            // js里面的onclick 是绑定点击事件
            /*var btn = document.getElementById("btn");
            btn.onclick = function () {
                alert("我是btn的onclick");
            };
            btn.click();*/
        });
    </script>

```

* * *

## 选择器

### JQuery基本选择器

+ 回顾CSS选择器

符号 | 说明 | 用法
---- | ---- | ----
\#id | Id选择器 | #id{ color:red; }
.class | 类选择器 | .class{ //}
Element | 标签选择器 | P { //}
\* | 通配符选择器 | 配合其他选择器来使用
, | 并集选择器 | div,p{}
空格 | 后代选择器 | div span{} 选择div下面所有后代的span
\> | 子代选择器 |	div > span{}
+ | 紧邻选择器 | div+p | 选择div紧挨着的下一个p元素

+ JQuery基本选择器

符号 | 说明 | 用法
---- | ---- | ----
$('#demo) | 选择id为demo的第一个元素 | $('#demo').css('background','red');
$('.liItem') | 选择所有类名（样式名）为liItem的元素 | $('.liItem').css('background','red');
$('div') | 选择所有标签名字为div的元素 | $('div'). css('background','red');
$('\*') | 选择所有元素 少用或配合其他选择器来使用 | $('\*').css('background','red')
$('.liItem,div') | 选择多个指定的元素，这个地方是选择出了 .liItem元素和div元素 | $('.liItem,div').css('background','red');

> 规律：$(selector).css("background","red");

### 层级选择器

符号 | 说明 | 用法
---- | ---- | ----
空格 | 后代选择器 选择所有的后代元素 | $('div span').css('background','red');
\> | 子代选择器 选择所有的子代元素 | $('div > span').css('background','red');
+ | 紧邻选择器 选择紧挨着的下一个元素 | $('div + p').css('background','red');
~ | 兄弟选择器 选择后面的所有的兄弟元素	| $('div ~ p').css('background','red');

> 层级选择器选择了选择符 后面那个元素，比如，div  >  p，是选择>后面的p元素。

### 过滤选择器

符号 | 说明 | 用法
---- | ---- | ----
:eq(index) | index是从0开始的一个数字，选择序号为index的元素。选择第一个匹配的元素。 | $('li:eq(1)').css('background','red');
:gt(index) | index是从0开始的一个数字，选择序号大于index的元素 | $('li:gt(2)').css('background','red');
:lt(index) | index是从0开始的一个数字，选择小于index 的元素 | $('li:lt(2)').css('background','red');
:odd | 选择所有序号为奇数行的元素	| $('li:odd').css('background','red');
:even |	选择所有序号为偶数的元素 | $('li:even').css('background','red');
:first | 选择匹配第一个元素	$('li:first').css('background','red');
:last	| 选择匹配的最后一个元素 | $('li:last').css('background','red');

### 属性选择器

符号 | 说明 | 用法
---- | ---- | ----
$('a[href]') | 选择所有包含href属性的元素	| $('a[href]').css('background','red');
$("a[href='itcast']")	| 选择href属性值为itcast的所有a标签 | $("a[href='itcast']").css('background','red');
$("a[href!='baidu']") | 选择所有href属性不等baidu的所有元素，包括没有href的元素 | $("a[href!='baidu']").css("background","red")
$("a[href^='web']") | 选择所有以web开头的元素 | $("a[href^='web']").css("background","red")
$("a[href$='cn']") | 选择所有以cn结尾的元素	| $("a[href$='cn']").css("background","red")
$("a[href\*='i']") | 选择所有包含i这个字符的元素，可以是中英文	| $("a[href\*='i']").css("background","red")
$("a[href][title='我']") | 选择所有符合指定属性规则的元素，都符合才会被选中。	$("a[href][title='我']").css("background","red");

* * *

## 事件

+ mouseover事件跟mouseenter事件的区别
	- mouseover/mouseout事件，鼠标经过的时候会触发多次，每遇到一个子元素就会触发一次。
	- mouseenter/mouseleave事件，鼠标经过的时候只会触发一次

1. 绑定
	+ click/mouseenter/blur/keyup 
	+ bind：$node.bind(“click”,function(){}); // 绑定事件
	+ one : $node.one(“click”,function(){}); // 触发一次
	+ delegate : $node.delegate(“p”,”click”,function(){}); // 给$node下的p绑定click
	+ on： $node.on(“click”,”p”,function(){}); // 推荐使用

2. 解绑
	+ unbind
	+ undelegate	
	+ off

3. 触发
	+ click	: $(“div”).click();
	+ trigger：触发事件，并且触发浏览器默认行为
	+ triggerHandler：不触发浏览器默认行为

4. 冒泡默认行为
	+ event.stopPropagation(); // 阻止事件冒泡
	+ event.preventDefault(); // 阻止默认行为

* * *

## 动画

1. 基本动画
	+ $('div').show(); // 让div显示
	+ $('div').hide(); // 让div隐藏
	+ 第一个参数 动画时长，可以是数字或字符串（slow fast normal）；第二个参数，动画执行完后，要执行的函数
	+ show([speed],[easing],[fn]);
		- speed:三种预定速度之一的字符串("slow","normal", or "fast")或表示动画时长的毫秒数值(如：1000)
		- easing:(Optional) 用来指定切换效果，默认是"swing"，可用参数"linear"
		- fn:在动画完成时执行的函数，每个元素执行一次

2. 滑动效果
	+ $("div").slideDown(); // 下拉显示
	+ $("div").slideUp(); // 上拉
	+ $("div").slideToggle(); // 切换

3. 淡入淡出
	+ $("div").fadeIn(); // 淡入
	+ $("div").fadeOut(); // 淡出
	+ $("div").fadeToggle(); // 切换
	+ $("div").fadeTo(); // 设置不透明度

4. 自定义动画
	+ $("div").animate(); // 自定义动画
	+ $("div").stop(); // 看文档解释
		- 两个参数：
			* 第一个参数：表示是否清空动画队列，也就是后面的动画。默认值false，如果是true，表示清空队列，也就是所有的动画都停止了。
			* 第二个参数：表示是否立即执行完当前动画。默认值为false，如果是true，表示立即执行当前动画，然后，再执行后续动画。

> animate动画：不支持背景的动画效果

* * *

## DOM

### 操作样式

1. $("div").css("background","pink"); // 设置背景颜色值
	+ 两个参数 代表设置值
	+ 一个参数 代表获取
	+ 键值对 代表设置多个值

2. $("div").addClass("color-red"); // 添加样式

3. $("div").removeClass("color-red"); // 移除样式

4. $("div").toggleClass("color-red"); // 切换样式

> 注意：样式名字没有点(.)

### 常用的DOM操作

1. $("div").attr("name"); // 获取name属性值

2. $("div").removeAttr("name"); // 移除name属性值

3. $("input").val(function(i,v){}); // 设置input的值

4. 获取html的内容
	+ $("div").html() 获取内容的时候，只返回匹配到的第一个元素的数据
	+ $(selector).text() - 设置或返回所选元素的文本内容
	+ $(selector).html() - 设置或返回所选元素的内容（包括 HTML 标记）
	+ $(selector).val()  - 设置或返回表单字段的值
	+ 获取和设置相同方法名,通过不同参数来确定是获取还是设置值
	+ 使用html来创建dom的方式效率比较高。  远大于： document.createElement();

5. $()的几种常用用法
	1. $(“#id”)	选择某个元素，返回值为jQuery对象
	2. $(this) 将DOM对象转换成jQuery对象
	3. $(“<div></div>”) 创建元素，返回值为jQuery对象
	4. $(function(){}); 入口函数的简写方式

6. $(“div”).data(“index”);		// 获取数据index的值
	+ 注意：html里面的data 属性，例如：data-ROLE，jQuery获取的时候用：$(“div”).data(“role”);
	+ 当使用jQuery设置data属性的时候，例如：$(“div”).data(“UPCASE”,123); ，那么获取的时候，要使用：$(“div”).data(“UPCASE”);

7. .data()跟.attr() 方法的区别
	1. 获取数据的时候，attr方法需要传入参数，data方法可以不传入参数，这时候获取到的是一个js对象，即使没有任何data属性。
	2. 获取到的数据类型不同，attr方法获取到的数据类型是字符串(String)，data方法获取到的是相应的类型。
	3. data方法获取到数据之后，我们使用一个对象来接收它，那么就可以直接操作(设置值或获取值)这个对象，而attr方法不可以。并且通过这种方式，要比.data(key,value)的方式更高效！
	4. data-attribute属性会在页面初始化的时候放到jQuery对象，被缓存起来，而attr方法不会。

### 操作文档

1. 内部插入节点
	+ $("div").append(node); // 在div内部的后面追加元素
		- node.appendTo(“div”); // 把node追加到div
	+ $("div").prepend(node); // 在div内部的前面追加元素
		- node.prependTo($(“div”)); // 把node追加到div内部的前面

2. 外部插入节点
	+ $("div").after(node); // 在div后面添加兄弟节点node
	+ $("div").before(node); // 在div前面添加兄弟节点node
	+ $("div").insertBefore(node); // 把div插入到node前面
	+ $("div").insertAfter(node); // 把div插入到node后面

3. 删除节点
	+ $("div").remove(); // 删除选中的元素 “自杀”
	+ $("div").empty(); // 清空子元素
	+ $("div").html(""); // 清空子元素 推荐使用 高效

4. 复制节点
	+ $("div").clone(); // 复制节点 传参数 true 深度复制（绑定的事件也会复制）

5. 包裹几点
	+ $("div").wrap(node); // 包裹 单个包裹
	+ $("div").wrapAll(node); // 包裹 所有包裹在一个node中

6. 替换节点
	+ $("div").replaceWith(node); // 替换

### 元素操作

1. 高度和宽度
	+ $("div").height(); // 高度
	+ $("div").width(); // 宽度
	+ .height()方法和.css(“height”)的区别
		- 1.	返回值不同，.height()方法返回的是 数字类型(20)，.css(“height”)返回的是字符串类型(20px)，因此.height()方法常用在参与数学计算的时候

2. 坐标值
	+ $(“div”).offset(); // 获取或设置坐标值 设置值后变成相对定位
	+ $(“div”).position(); // 获取坐标值 子绝父相 只能读取不能设置

3. 滚动条（滚动事件）
	+ $(“div”).scrollTop();	// 相对于滚动条顶部的偏移
	+ $(“div”).scrolllLeft();	// 相对于滚动条左部的偏移