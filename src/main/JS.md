[TOC]

* * *

# JavaScript

* * *

## JS基础

1. 程序书写的位置
	+ 在页面中
	`<script type="text/javascript"></script>`

2. 语法规则
	+ JavsScript对换行、缩进、空白不明感
	+ 每一条语句末尾要加上分号，虽然分号不是必须加的，但是为了程序今后要压缩，如果不加分号，压缩之后将不能运行了
	+ 所有符号都是英文的

3. 注释
	+ `// 单行注释`
	+ `/* 多行注释 */`

5. 基本语句
	+ 弹出窗口一般写法
		- window.alert('执行语句'); // 完整写法
		- alert.alert('执行语句'); // 一般写法

	+ 控制台输出
		- console.log(); // 一般输出
		- console.warn(); // 警告输出
		- console.error(); // 错误输出

	+ 文档打印
		- document.write(); // 文档打印输出

### 变量

+ 变量命名规则
	1. 变量命名必须以字母或是下标符号”\_”或者”$”为开头
	2. 变量名长度不能超过255个字符
	3. 变量名中不允许使用空格
	4. 不用使用脚本语言中保留的关键字及保留符号作为变量名
	5. 变量名区分大小写。(javascript是区分大小写的语言)
	6. 可读性——能看懂
	7. 规范性——符合规则

+ 匈牙利命名法 类型前缀 首字母大写

类型 | 前缀 |	类型 | 示例
---- | ---- | ---- | ----
数组 | a | Array | aItems
布尔值 | b | Boolean | bIsComplete
整数 | i | Integer | iItemCount
浮点型 | f | Float | fPrice
函数 | fn | Function | fnHandler
对象 | o | Object | oDivl
正则表达式 | re | RegExp | reEmailCheck
字符串 | s | String | sUserName
变体变量 | v | Variant | vAnything

> 函数命名 驼峰命名 showDiv(){};

+ 变量作用域
	- 全局变量
		1. 在最外层声明的变量。
    2. 在函数体内部，但是没有声明var 的变量也是全局变量
  - 局部变量
  	1. 在函数体内部的声明变量

+ 数据类型

类型 | 描述 | 转换
---- | ---- | ---- 
字符型 | string | 1. 利用''(双引号)；2. 领用String();
布尔型 | boolean true/false | 1. 利用!!；2. 利用Boolean();
数值型 | var = 10; 数值前面带0表示八进制，0x表示十六进制 | 1. 利用- * / 都可以转换；2. 利用Number();
null | 空 | 
undefined | var a; | 未赋值

boolean | 描述
---- | ----
true | 1、'somestring'、[object]
false | 0、''、null、undefined

+ 数据类型转换补充
	- parseInt() 转换成整数 parseFloat() 浮点型
		* parseInt(值, 进制);
	- NaN(Not A Number)不是数字 不能拿两个NaN相比，不等于自身
	- isNaN() 是不是NaN
	- 隐式类型转换：==、===、-、\*、/

+ typeof运算符检测 变量类型
`console.log(typeof num)`

值 | 1 | '1' | b | 对象 | true | a = function(){};
---- | ---- | ---- | ---- | ---- | ---- | ---- 
描述 | number | string | undefined | object | boolean | function

> 良好的代码习惯：变量从始至终，只存放一种类型的数据

- - -

+ 事件三要素
	1. 事件源 --> 触发者
	2. 事件 --> 动作
	3. 事件处理程序 --> = function(){}

> 事件源.事件 = function(){  事件处理函数 }

事件 | 描述
---- | ----
onclick | 鼠标单击
ondblclick | 鼠标双击
onkeyup | 按下并释放键盘上的一个键时触发 
onchange | 文本内容或下拉菜单中的选项发生改变
onfocus | 获得焦点，表示文本框等获得鼠标光标。
onblur | 失去焦点，表示文本框等失去鼠标光标。
onmouseover | 鼠标悬停，即鼠标停留在图片等的上方
onmouseout | 鼠标移出，即离开图片等所在的区域
onload | 网页文档加载事件
onunload | 关闭网页时
onsubmit | 表单提交事件
onreset | 重置表单时

+ 隐藏样式

属性 | 参数 | 描述
---- | ---- | ----
display | none/block | 隐藏/显示 隐藏不占位
visibility | hidden/visible | 隐藏/显示 隐藏占有位置
overflow | hidden | 隐藏超出部分

### 函数

+ 函数入口
```
window.onload = function() {
	JS部分;
}
```

1. 自定义函数
```
function fn() {
	console.log('我是自定义函数');
}
fn(); // 不调用函数，自己不执行
```

2. 函数直接量声明
```
var fn = function() {
	console.log('我是直接量声明');
}
fn(); // 也需要调用
```

3. 利用Function关键词声明
```
var fn = new Function('console.log('我是关键词声明'));
fn();
```

4. 变量声明提升
```
function fn() {
	console.log(num);
	var num = 20;
}
// 相当于
function fn() {
	var num;
	console.log(num);
	num = 20;
}

// 体内部，声明变量，会把该声明提升到函数体的最顶端。 只提升变量声明，不赋值。
```

5. 函数参数
```
 <script>
    function fn(a,b)
    {
        console.log(fn.length); //得到是 函数的形参的个数
        //console.log(arguments);
        console.log(arguments.length); // 得到的是实参的个数
        if(fn.length == arguments.length)
        {
            console.log(a+b);
        }
        else
        {
            console.error("对不起，您的参数不匹配，正确的参数个数为:" + fn.length);
        }
        //console.log(a+b);
    }
    fn(1,2);
    fn(1,2,3);
    // arguments是存储了函数传送过过来实参 arguments对象的长度是由实参个数而不是形参个数决定的
</script>
```

6. arguments 对象
	+ arguments.length; // 返回的是 实参的个数
	+ arguments.callee; // 返回的是正在执行的函数。也是在函数体内使用。在使用函数递归调用时推荐使用arguments.callee代替函数名本身

7. this
	+ this 指向的是 事件的调用者 ，或者是函数的使用者
	+ 一般情况下，我们喜欢 var that = this; var that = this;  // 把 btn 对象 给 that  var \_this = this;

8. 属性方法
	+ Iphone.color = 'red'; 属性给值一定是等号
	+ 方法一律带有小括号 。  isNaN();    动词 方法给值： isNaN('值');
	+ 变量和属性
		- 变量是独立存在的 自由自在
		- 属性和方法属于某个对象的 属性和方法

9. 回调函数
	+ 等动画执行完毕再去执行的函数 回调函数

10. 立即执行函数

```
<script>
    // (function() {
    //   // 独立的作用域，不会污染全局环境
    // })();

    // (function(window, document) {
    //   // 对于当前作用域中，如果将window传入，就不用依赖全局对象了
    //   var div = document.getElementById();
    // })(window, document);
    //
    // var btn = document.getElementById('btn');

    // btn.onclick = function(e) {
    //   console.log(1111);
    // }(function(){console.log(2222);})

    // ();

    (function aaa() {
      console.log(1111);
    })()

    var a = function() {
      console.log(2222);
    }();

    !function() {
      console.log(3333);
    }();

    +function() {
      console.log(4444);
    }();

    // 小括号
    // 赋值操作
    // 逻辑运算符
    // 数字运算符
  </script>
```

### 流程控制

1. 判断：if、switch、?:
	+ if
```
1. if(条件){ // 条件真就执行 假就执行 else里的语句
        语句;
    } else {
        语句
    };
2. if(){}if else()...else{}; // 可以多层嵌套
```
	+ switch
```
switch(变量) { // 变量对应 case 值 执行对应语句 default 不匹配 默认执行
    case 值:
        语句;
        break;
        .
        .
    default:
        语句;
}
```
	+ ?: 三目运算
```
条件 ? 语句1 : 语句2; // 条件真 执行1 假 执行2
```

2. 循环：while、for
	+ while
```
1. while(条件) { // 条件真 执行
        语句;
}

2. do { // do 里面不管真假 都执行 条件假 执行一次 条件真 继续执行do
        语句;
    } while(条件);
```
	+ for
```
for(初始值;条件;递增) {
    语句;
}
// 初始值-->条件真-->执行语句-->递增-->条件真-->执行语句-->...直到递增值不满足条件就不执行
// 注意：初始值只执行一次
```

> 跳出：break、continue
>> break 跳出循环
>> continue 跳出当次循环 继续下次循环

### 运算符

1. 一元操作符

符号 | ++ | -- | + | -
---- | --- | ---- | ---- | ---- 
描述	| 自增 | 自减 | 正数 | 负数

> 后置 每次自加/减 1 先运算后自加；前置 每次自加/减 1 先自加后运算

2. 逻辑操作符

符号 | ! | && | &#124;&#124;
---- | ---- | ---- | ----
描述 | 非 | 与 | 或

3. 基本运算符

符号 | + | - | * | / | % | ^
---- | ---- | ---- | ---- | ---- | ---- | ----
描述 | 加 | 减 | 乘 | 除 | 取余 | 次方

4. 关系操作符

符号 | > | < | >= | <= | == | === | != | !==
---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ----
描述 | 大于 | 小于 | 大于等于 | 小于等于 | 等于 | 全等 | 不等 | 不全等

> 1 == '1' --> true 1 === '1' --> false ; = 赋值 == 判断 === 全等

5. 条件操作符

符号 | ?:
---- | ----
描述 | 三目运算符 相当于 if(){} else {};

6. 赋值运算符

符号 | += | -= | \*= | /= | %=
---- | ---- | ---- | ---- | ---- | ----
描述 | a += 1 --> a = a + 1 ----> 其余同理

7. 逗号运算符
	+ var a = 0, b =0;

8. 运算符顺序
```
1  () 
2  !、-、++、--    (-10)  负号  正号
3 *、/、% 
4 +、-         10-5
5 <、<=、<、>=    
6 ==、!=、===、!==、  
7 && 
8 || 
9?: 
10 =、+=、-=、*=、/=、%=     赋值 
```

9. 面试题
```
1.  a&&b   结果是什么？  
 如果a 为假 ，则返回 a   
 如果a 为真 ，则返回 b 

2. a||b  
   如果 a 为假   则返回b  
   如果 a 为真   则返回a  
```

* * *

## 数组

1. 声明数组
	+ var arr = [];
	+ var arr = [1,3,5];
	+ var arr = new Array(1,3,5);

2. 使用数组
	+ 使用法法：数组名[索引号]; 索引号从0开始 0 1 2 ...

3. 数组长度
	+ 数组名.length;

4. 遍历数组
	+ for遍历
	+ getElementsByTagName()得到一个伪数组

5. +
	+ 数字相加 字符相连
	+ 所有input取出来的值都是字符型

### 数组常用方法

1. 添加
	1. push() **后面推进**
		+ 向数组的末尾添加一个或多个元素，并返回新的长度
		`var arr=[1,2,3] --> arr.push(7) --> [1,2,3,7]`
	2. unshift() 从数组前面放入
		+ 向数组的开头添加一个或更多元素，并返回新的长度
		`var arr=[1,2,3] --> arr.unshift(7) --> [7,1,2,3]`
	3. 注意：
	`var dom = [1,3,5]; console.log(dom.push(7));  // 返回的是 数组的长度  4`

2. 删除
	1. pop() 删除最后一个元素
		+ 除最后一个元素 返回值 是 返回最后一个值
	2. shift() 删除第一个元素
		+ 把数组的第一个元素从其中删除，并返回第一个元素的值

3. 连接
	1. concat()
		+ 该方法用于连接两个或多个数组。它不会改变现有的数组，而仅仅会返回被连接数组的一个副本

4. 转换成字符串
	1. join(separator)
		+ 将数组各个元素是通过指定的分隔符进行连接成为一个字符串
		`arr.join('-'); // 如果省略该参数，则使用逗号作为分隔符`

5. 转换成数组
	1. split(separator,howmany)
		+ 把一个字符串分割成字符串数组
		`arr.split('-'); // 参数 separator 可选。指定要使用的分隔符。如果省略该参数，则使用逗号作为分隔符。howmany 可选。该参数可指定返回的数组的最大长度`

6. 插入、删除
	1. splice()
		+ splice(开始,删除长度,插入元素)
		+ 先删除，后插入
	2. 删除
		+ splice(开始,删除长度)
	3. 插入
		+ splice(开始,0,插入元素)
	4. 替换
		+ splice(开始,替换个数,元素)
```
<script>
var arr = [1,2,3,4,5,6,7,8];

// 1. 中间删除
arr.splice(2,3);
console.log(arr);

// 2. 中间插入
arr.splice(5,0,'a','b','c','d');
console.log(arr);

// 3. 替换
arr.splice(1,2,'a','b');
console.log(arr);
</script>
```

7. 排序
	+ sort([比较函数])，排序一个数组
		- 排序一个字符串数组
		- 排序一个数字数组
```
// 1. 默认字符排序
<script type="text/javascript">
var arr=['float', 'zindex', 'xy', 'absolute', 'blue', 'leo'];

arr.sort();

alert(arr);
</script>

// 2. 数字大小排序
<script type="text/javascript">
var arr=[96, 8, 12, 72, 33, 118];

arr.sort(function (num1, num2){
	return num1-num2;
});

alert(arr);
</script>

```

* * *

## 字符串

1. 转化为字符
	1. +'' 2+''= '2' 2+'ab'='2ab' 
	2. String() 转换为字符串 
	3. toString(基数);    基数就是进制

2. 获取字符位置
	+ charAt(参数); // 获取相应位置字符（参数：字符位置） 0 1 2 3...
	+ charCodeAt(参数); // 获取相应字符unicode编码（参数：字符位置） 0 1 2 3 ...

4. 根据字符返回位置
	1. indexOf('字符'); // 它是从前面开始数（从左边开始数），而且只找第一个，然后返回改字符的位置，索引号都是从0开始的
	2. lasIndexOf('字符'); // 从后面开始数 同上

5. 网址编码
	1. encodeURIComponent() 函数可把字符串作为 URI 组件进行编码
	2. decodeURIComponent() 函数可把字符串作为 URI 组件进行解码
```
var url = "http://www.itcast.cn?name=andy";
console.log(encodeURIComponent(url));  // 编码
var afterUrl = encodeURIComponent(url);
console.log(decodeURIComponent(afterUrl));
```

### 操作字符串

1. concat(); // 连接字符串
```
var  txt1 = “abc”;
var txt2 = ”123”;
console.log(txt1.concat(txt2));     “abc123”;
```

2. slice(取字符串起始位置,[结束位置]); //   起始位置一定要有  结束位置可以省略
	1. slice(3); 从第3个开始取，一直取到最后
	2. slice(3,6); 3 从 第3个开始 取 6 取到第6索引号的位置，还是从左边的第0个开始数。但是不包 6
```
起始位置可以是负数  ， 如果是负数，则是从 右边往左边开始取。
   var txt =”asdf”;
   txt.slice(-1)  结果是   f 
```

3. substr(起始位置,[取得个数]);
	+ 不写取的个数， 默认从起始位置一直取到最后 
	+ 取的个数：    是指从起始位置开始，往后面数几个
	+ substr(-1)  少用   ie678 报错 。 尽量少用
		- onBtnClick("btn7",div1.substr(div1.length-1,1));  // 兼容的写法

4. substring(取字符串起始位置,[结束位置]); // 同slice一样 但是有一点不同 substring 始终会把  小的值作为  起始位置 大的值作为结束位置
	+ 例如：  substring(6,3)   实际中   自动变成  substring(3,6); 

5. 保留两位小数
	1. console.log(str.substr(0,str.indexOf(".")+3)); // 通过 indexOf 返回小数点的位置 截取字符串
	2. console.log(parseInt(PI\*100) /100); // 先乘以100  取整  然后 除以100
	3. onsole.log(PI.toFixed(2)); // pi.toFixed(2)  保留 2位 小数

6. 大小写转换
	+ toUpperCase(); // 转换为大写（参数：无）
	+ toLowerCase(); // 转换为小写（参数：无）

* * *

## BOM

1. 打开、关闭窗口
	+ window.open(地址,参数)
```
window.onload=function ()
{
    var oBtn=document.getElementById('btn1');

    oBtn.onclick=function ()
    {
        window.open('http://www.miaov.com/', '_self');
    };
};
</script>

<body>
<input id="btn1" type="button" value="开窗口" />
</body>

```

参数 | \_blank | \_self | \_parent | \_top
---- | ---- | ---- | ---- | ---- |----
描述 | 在新窗口中打开被链接文档 | 默认。在相同的框架中打开被链接文档 | 在父框架集中打开被链接文档	| 在整个窗口中打开被链接文档

	+ 运行代码功能
```
<script>
window.onload=function ()
{
    var oTxt=document.getElementById('txt1');
    var oBtn=document.getElementById('btn1');

    oBtn.onclick=function ()
    {
        var oNewWin=window.open('about:blank');

        oNewWin.document.write(oTxt.value);
    };
};
</script>

<body>
<textarea id="txt1" rows="10" cols="40"></textarea><br />
<input id="btn1" type="button" value="运行" />
</body>
```

2. window.close()
  + 关闭时提示问题
```
<script> 
window.onload=function (){
 var oBtn=document.getElementById('btn1');
 oBtn.onclick=function () {
  window.close(); 
  }; 
}; 
 </script> 
 <body> 
 <input id="btn1" type="button" value="关闭" /> 
 </body>
```

3. 常用属性
	+ window.navigator.userAgent 浏览器版本
```
<script>
alert(window.navigator.userAgent);
</script>
```
	+ window.location 网址信息 不光可以读 还能写
```
<script>
//alert(window.location);
window.location='http://www.miaov.com/'
</script>
```

4. 尺寸及坐标
	+ 可视区尺寸
		- document.documentElement.clientWidth
		- document.documentElement.clientHeight

	+ 滚动距离
		- document.body.scrollTop // ie
		- document.documentElement.scrollTop // 其他浏览器 Left 横向滚动

5. ~~系统对话框~~
	+ 警告框：alert(“内容”)，没有返回值
	+ 选择框：confirm(“提问的内容”)，返回boolean
	+ 输入框：prompt()，返回字符串或null

6. window对象常用事件
	+ onload 加载完运行
	+ onscroll 滚动
	+ onresize 窗口大小变化

* * *

## DOM

### 节点访问

1. 访问节点
	1. getElemntById() id访问节点
	2. getElementsByTagName() 标签访问节点
	3. getElementsByClassName() 类名 有兼容性问题

2. 访问关系
	1. **父节点**
		+ parentNode 亲的 一层
	2. 兄弟节点
		+ nextSibing 下一个兄弟 亲的 ie 678认识
		+ nextElementSibling 其他浏览器认识
		+ previousSibling   同理  上一个兄弟   
		+ previousElementSibling
		+ 兼容写法
		`var div = one.nextElementSibling || one.nextSibling;div.style.backgroundColor = "red"; // 必须先写 正常浏览器  后写  ie678 `
	3. 子节点
		+ firstChild    第一个孩子  ie678
		+ firstElementChild  第一个孩子   正常浏览器
		+ lastChild 最后一个孩子
		+ lastElementChild
	4. 孩子节点
		+ childNodes    选出全部的孩子
		+ childNodes：它是标准属性，它返回指定元素的子元素集合，包括HTML节点，所有属性，文本节点（嫡出）火狐 谷歌等高本版会把换行也看做是子节点
		+ 利用 nodeType == 1 时才是元素节点 来获取元素节点 标签 元素 nodeType == 1 元素节点 nodeType == 2 属性节点 nodeType == 3 文本节点
```
<script type="text/javascript">
window.onload=function ()
{
	var oUl=document.getElementById('ul1');
	var i=0;
	
	for(i=0;i<oUl.childNodes.length;i++)
	{
		if(oUl.childNodes[i].nodeType==1)
		{
			oUl.childNodes[i].style.background='red';
		}
	}
}

</script>

```
	5. **children** 重要 选取所有孩子（只有元素）
		+ 注意：ie 678 包含 注释节点 之歌要避免开

### 节点操作

1. 创建节点
	+ creatElement(标签名)
	`var div = document.creatElement('div'); // 生成一个div`

2. 出入节点
	1. appendChild();
		+ 意思：添加孩子 放到和子最后面
	2. insertBefore(插入的节点,参照的节点之前) 
		+ 子节点 添加孩子
		`demo.insertBefore(test,childrens[0]); // 放到了第一个孩子的前面  `
		+ 如果第二个参数  为 null  则 默认这新生成的盒子放到最后面
	3. 移除
		+ removeChild() 孩子节点
		`var da = document.getElementById("xiongda"); demo.removeChild(da);`
	4. 克隆
		+ cloneNode() 复制节点
		+ 括号里面可以跟参数，如果 里面是 true 深层复制，除了复制本盒子，还复制子节点 如果为 false 浅层复制 只复制 本节点 不复制 子节点

3. ~~文档碎片~~
	+ 文档碎片可以提高DOM操作性能(理论上)
	+ 文档碎片原理
	+ document.createDocumentFragment()
```
<script type="text/javascript">
window.onload=function ()
{
    var oBtn=document.getElementById('btn1');
    var oUl=document.getElementById('ul1');

    oBtn.onclick=function ()
    {
        var iStart=new Date().getTime();
        var oFrag=document.createDocumentFragment();
        var i=0;

        for(i=0;i<100000;i++)
        {
            var oLi=document.createElement('li');

            oFrag.appendChild(oLi);
        }

        oUl.appendChild(oFrag);

        alert(new Date().getTime()-iStart);
    }
}
</script>

<body>
<input id="btn1" type="button" value="碎片"/>
<ul id="ul1">
</ul>
</body>
```

#### 设置节点属性

1. 获取节点属性
	+ getAttribute(属性) 获取属性
	`alert(demo.getAttribute("title"));`

2. 设置节点属性
	+ setAttribute(“属性”,”值”)
	`div.setAttribute(“class”,”demo”);`

3. 删除某个属性
	+ removeAttribute(“属性”);
	`demo.removeAttribute(“title”)`

### 访问CSS属性

1. 利用点语法
	+ box.style.width;
	+ 点语法可以得到 width 属性 和 top属性 带有单位的 100px
	+ 但是这个语法有非常大的缺，不变的
	+ 后面的width  和 top 没有办法传递参数的

2. 利用[]访问属性
	+ 语法
		- 元素.style[“属性”];
	`box.style[“width”];`
	+ 最大的优点：可以给属性传递参数

3. 得到CSS样式
	+ 我们想要获得css 的样式，box.style.left box.style.backgorundColor但是它只能得到 行内的样式。
	+ 核心： 我们怎么才能得到内嵌或者外链的样式呢？
		1. obj.currentStyle ie opera 常用
			- 外部和内嵌样式表中的样式（ie和opera）
		2. window.getComputedStyle("元素", "伪类") w3c 
			- 两个选项是必须的， 没有伪类 用 null 替代
	+ 兼容写法
```
var demo = document.getElementById("demo");
      function getStyle(obj,attr) {  //  谁的      那个属性
          if(obj.currentStyle)  // ie 等
          {
              return obj.currentStyle[attr];  
          }
          else
          {
              return window.getComputedStyle(obj,null)[attr];  // w3c 浏览器
          }
      }
      console.log(getStyle(demo,"width"));
```
	

* * *

## 日期函数

1. 声明日期
	+ 创造一个新的日期函数
	`var data = new Date();`

2. 使用函数
	+ data.getTime(); // 得到距离1970年的毫秒数 提倡使用
	+ date.valueOf();

3. 常用日期方法

方法 | 描述
---- | ----
getDate() | 获取日 1 —— 31
getDay() | 获取星期 0 —— 6 0-->星期天
getMonth() | 获取月 0 —— 11
getFullYear() | 获取完整年份（浏览器都支持）
getHours() | 获取小时 0 —— 23
getMinutes() | 获取分钟 0 —— 59
getSeconds() | 获取秒 0 —— 59
getMilliseconds() | 获取当前毫秒
getTime() | 返回累计毫秒数(从1970/1/1午夜)

4. 定时器
	1. window.setInterval('执行函数',间隔时间);
		+ setInterval(fun, 1000); // 1000 ms 毫秒
			- 每隔1秒钟，就去执行一次 fun 这个函数  
      	* setInterval(“fun()”,1000); // 可以用 
      	* setInterval( function(){} , 1000 ); // 可以用
     		* setInterval(fun(),1000); // 错误的 
  2. setTimeout(“函数”, 时间 )
  	+ 好多时间后执行函数
```
setInterval是排队执行的
假如 间隔时间是1秒，而执行的程序的时间是2秒 上次还没执
行完的代码会排队, 上一次执行完下一次的就立即执行, 这样
实际执行的间隔时间为2秒setTimeout延迟时间为1秒执行, 要执行的代码需要2秒来执行,那这段代码上一次与下一次的执
行时间为3秒. 
```

5. 定义自己的日子
	+  var endTime = new Date(“2015/12/12”);
		- 如果date 括号里面写日期  就是 自己定义的时间  
  	- 如果 date括号里面不写日期 ， 就是当前时间 
  + new Date(“2015/12/12 17:30:00”);
  	- 日期和时分秒中间 有空格隔开

6. 按钮不可用
	+ btn.disabled = 'disabled' || btn.disabled = true;
		- 因为 button是个双标签  所以要更改他的值， 使用 innerHTML 的，不是value。
		- 关闭定时器   clearInterval(定时器名称);    定时器不再进行

## 运动

### 基础运动

1. 匀速运动
	+ 速度不变

2. 运动框架
	+ 在运动开始时，关闭定时器
	+ 把运动和停止隔开（if/else）

3. 缓冲运动
	+ 逐渐变慢、最后停止
	+ 距离越远速度越大
		* 速度由距离决定
		* 速度 = (目标值-当前值) / 缩小系数 --> leader = leader + (target - leader ) /10 ;

4. 运动终止条件
	+ 匀速运动：距离足够近
	+ 缓冲运动：两点重合

### 弹性运动

1. 加速运动
	+ 速度不断增加或减少
	+ 速度减小到负值，会反向运动

2. 弹性运动
	+ 在目标左边，加速；在目标右边减速
	+ 根据距离，计算加速度

3. 摩擦力
	+ 速度不断减小

4. 带摩擦力的弹性运动
	+ 弹性运动+摩擦力

5. 弹性公式
	+ 速度+=(目标值-oDiv.offsetLeft)/5
	+ 速度\*=0.7

### 碰撞运动

1. 撞到目标点，速度反转

2. 无重力的漂浮
	+ 速度反转

3. 滚动条闪烁的问题
	+ 过界后直接拉回

4. 加入重力
	+ 反转速度的同时，减小速度
	+ 纵向碰撞，横向速度也减小
	+ 横向速度小数问题（负数）

5. 鼠标拖拽
	+ 两点间距离求出速度

> 运动终止条件
>> 弹性运动：距离足够近，并且速度足够小
>> 碰撞运动：距离足够近，并且速度足够小

### 三个取整函数

1. Math.ceil(); // 向上取整 天花板
	+ 比如：console.log(Math.ceil(1.01)); // 结果 是 2

2. Math.floor(); // 向下取整  地板  
	+ 比如：console.log(Math.floor(1.01)); // 结果 是 1

3. Math.round(); // 四舍五入函数   
	+ 比如：console.log(Math.round(1.01)); // 结果 是 1 

* * *

## offset家族

1. 目的；JS中有一套方便的获取元素尺寸的办法就是offset家族

2. offsetWidth offsetHeight
	+ 得到对象的宽度和高度（自己的，与他人无关）
	+ offsetWidth = width + border + padding
	+ 为什么不用 div.style.width   因为东西 只能得到行内的数值

3. offsetLeft offsetTop
	+ 返回距离上级盒子（最近的带有定位）左边/上边的位置
	+ 如果父级都没有定位则以body 为准 
	+ offsetLeft 从父级的padding 开始算    父亲的border 不算

> 总结一下：  就是子盒子到定位的父盒子边框到边框的距离
> 这里的父级指的是所有上一级 不仅仅指的是 父亲 还可以是 爷爷 曾爷爷 曾曾爷爷。。。。

4. offsetParent
	+ 返回该对象的父级 （带有定位） 不一定是亲的爸爸
```
var son = document.getElementById("son");
//alert(son.parentNode.id);
alert(son.offsetParent.tagName);  // tagName标签的名字  
``` 

5. offsetTop style.top 的区别
	1. 最大区别在于 offsetLeft 可以返回没有定位盒子的距离左侧的位置。而 style.top 不可以 只有定位的盒子 才有 left  top right
	2. offsetTop 返回的是数字，而 style.top 返回的是字符串，除了数字外还带有单位：px。
	3. offsetTop 只读，而 style.top 可读写
	4. 如果没有给 HTML 元素指定过 top 样式，则 style.top 返回的是空字符串
	5. 最重要的区别 style.left 只能得到 行内样式 offsetLeft 随便

* * *

## 事件对象

1. event 单词翻译过来，事件的意思；event就是事件对象，指向的是事件

2. 兼容写法
`var event = event || window.event;`

3. event常见属性

属性 | 作用
---- | ----
data | 返回拖拽对象的URL字符串（dragDrop）
width | 该窗口或框架的高度
height | 该窗口或框架的高度
pageX | 光标相对于该网页的水平位置（ie无）
pageY | 光标相对于该网页的垂直位置（ie无）
screenX | 光标相对于该屏幕的水平位置
screenY | 光标相对于该屏幕的垂直位置
target | 该事件被传送到的对象
type | 事件的类型
clientX | 光标相对于该网页的水平位置 （当前可见区域）
clientY | 光标相对于该网页的水平位置 

4. pageX  clientX  screenX 区别
	+ screenX   screenY   
 		- 是以我们的电脑屏幕 为基准点 测量
 	+ pageX pageY   
		- 以我们的 文档（绝对定位）的基准点 对齐      
   	- ie678 不认识  
  + clientX   clientY
		- 以 可视区域 为基准点 类似于 固定定位 

5. 常用事件
	1. onmouseover（鼠标经过）onmouseout（鼠标移除）onclick（单击）
	2. onmousemove 当鼠标移动的时候 就是说，鼠标移动一像素就会执行的事件 
```
div.onmouseover 和 div.onmousemove 区别  
他们相同点 都是 经过  div 才会触发 
div.onmouseover 只触发一次 
div.onmousemove 每移动一像素，就会触发一次 
```
	3. onmouseup 当鼠标弹起 onmousedown 当鼠标按下的时候
	4. 拖动 原理 ==   鼠标按下  接着 移动鼠标
```
bar.onmousedown = function(){
    document.onmousemove = function(){ 
  }
}
// 当我们按下鼠标的时候，就要记录当前 鼠标 的位置 - 大盒子的位置 算出  bar  当前 在  大盒子内的距离
```
	5. 防止选择拖动
		+ 我们知道 按下鼠标然后拖拽可以选择文字 的
```
// 清除选中的内容 
window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
```

6. html基本结构访问
	+ 文档document
```
  html   body   head    
  document.head     
  document.body 
  document.title  
  没有 document.html  取而代之的是  document.documentElement;
```

7. 检测屏幕宽度（可视区域）
	+ ie9及以上版本
		- window.innerWidth 
	+ 标准模式
		- document.documentElement.clientWidth
	+ 怪异模式 
		- document.body.clientWidth
```
// 封装
function client() {
        if(window.innerWidth != null) { // ie9+ 最新浏览器
            return {
                width: window.innerWidth,
                height: window.innerHeight
            }
        } else if(document.compatMode === "CSS1Compat") { // 标准浏览器
            return {
                width: document.documentElement.clientWidth,
                height: document.documentElement.clientHeight
            }
        }
        return { // 怪异浏览器
            width: document.body.clientWidth,
            height: document.body.clientHeight
        }
    }
```

8. window.onresize 窗口事件
	+ window.onscroll  = function() {}  屏幕滚动事件 
	+ window.onresize = function() {}  窗口改变事件
	+ onresize 事件会在窗口或框架被调整大小时发生

9. 检测屏幕宽度(分辨率)
	+ clientWidth 返回的是 可视区 大小 浏览器内部的大小 
	+ window.screen.width 返回的是我们电脑的 分辨率 跟浏览器没有关系

10. 简单冒泡机制
  事件冒泡: 当一个元素上的事件被触发的时候，比如说鼠标点击了一个按钮，
同样的事件将会在那个元素的所有祖先元素中被触发。这一过程被称为事件冒
泡；这个事件从原始元素开始一直冒泡到DOM树的最上层。
	
	+ 顺序
		- E 6.0: 
			* div -> body -> html -> document
		- 其他浏览器: 
			* div -> body -> html -> document -> window

> 不是所有的事件都能冒泡。以下事件不冒泡：blur、focus、load、unload

11. 阻止冒泡的方法
	+ 标准浏览器 和  ie浏览器  
 		- w3c的方法是event.stopPropagation() proPagation 传播 传递
 		- IE则是使用event.cancelBubble = true bubble 冒泡 泡泡 cancel 取消
 	+ 兼容的写法
 ```
 if(event && event.stopPropagation)
          {
              event.stopPropagation();  //  w3c 标准
          }
          else
          {
              event.cancelBubble = true;  // ie 678  ie浏览器
   }

 ```

12. 判断当前对象
	+ 火狐 谷歌 等 --> event.target.id   
	+ ie 678 --> event.srcElement.id
	+ 兼容性写法：  
  `var targetId = event.target ? event.target.id : event.srcElement.id;`

13. 获得用户选择内容
	+ window.getSelection() 标准浏览器
	+ document.selection.createRange().text; ie 获得选择的文字
	+ 兼容性的写法
```
if(window.getSelection)
{
    txt = window.getSelection().toString();   // 转换为字符串
}
else
{
    txt = document.selection.createRange().text;   // ie 的写法
}
```

### cookie

1. 什么是cookie
	+ 页面用来保存信息
	+ cookie的特性
		- 同一个网站中所有页面共享一套cookie
		- 数量、大小有限
		- 过期时间

2. cookie的使用
	+ 设置cookie
		- 格式：名字=值
		- 不会覆盖
		- 过期时间：expires=时间
			* 日期对象的使用
		- 封装成函数
	+ 读取cookie
		- 字符串分割
	+ 删除cookie
		- 已经过期

### 事件绑定

1. IE方式
	+ attachEvent(事件名称,函数)，绑定事件处理函数
	+ detachEvent(事件名称,函数)，解除绑定

2. DOM方式
	+ addEventListener(事件名称,函数, 捕获)
	+ removeEventListener(事件名称, 函数, 捕获)

* * *

## scroll家族

1. scroll 滚动的

2. scrollTop scrollLeft // 被卷去的头部/横向

3. 怎么得到scrollTop
	+ 我们学习一个事件 ：  页面滚动效果
	+ window.onscroll = function() { 页面滚动语句  }
		1. 谷歌浏览器 和没有声明 DTD <DOCTYPE	> ：document.body.scrollTop;
		2. 火狐 和其他浏览器 document.documentElement.scrollTop;
		3. ie9+ 和 最新浏览器 都认识 window.pageXOffset; pageYOffset  （scrollTop）
	+ 兼容写法
	`var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;`

4. scrollTo(x,y)
	+ window.scrollTo(15,15); // 方法可把内容滚动到指定的坐标
	+ 语法：scrollTo(xpos,ypos)
		- xpos 必需。要在窗口文档显示区左上角显示的文档的 x 坐标
		- ypos 必需。要在窗口文档显示区左上角显示的文档的 y 坐标
		- 因为我们的网页大部分都没有水平滚动条，所以，这个x 不太常用

### JSON

1. JSON(JavaScript Object Notation)
	+ 是一种轻量级的数据交换格式，我们称之为JavaScript对象表示法。使用JSON进行数据传输的优势之一。JSON实际上就是JavaScript

2. Json很像我们学过的样式条
	` var myjson={k:v,k:v,k:v...} // 键值对 key: value   color: red;`

3. Json一般就是被当做一个配置单用

4. json  对象 结构书写
	`var json = { key: value， key1:value }`

5. 判断是不是怪异模式的浏览器
```
document.compatMode == "CSS1Compat"

document.compatMode === "BackCompat"
BackCompat  未声明
CSS1Compat  已经声明
```

6. json遍历
	+ for in 关键字
```
for(变量 in 对象) {
	执行语句;
}

var json = {width:200,height:300,left:50}
console.log(json.width);
for(var k in json)
{
    console.log(k);   // k 遍历的是json  可以得到的是  属性
    console.log(json[k]);  // json[k]  得到 是属性的  值
}
```

> 千万要记得 每个 的意思 那是相当重要 k 是 属性 json[k] 得到的是属性值

7. in 运算符
in运算符也是一个二元运算符，但是对运算符左右两个操作数的要求比较严格。
in运算符要求第1个（左边的）操作数必须是字符串类型或可以转换为字符串类
型的其他类型，而第2个（右边的）操作数必须是数组或对象。只有第1个操作
数的值是第2个操作数的属性名，才会返回true，否则返回false
```
var json = {name: "刘德华",age : 55};
// in 可以用用来判断 json 里面有没有某个属性
if("andy" in json)
{
    console.log("yes");
}
else
{
    console.log("no");  //  返回 no
}
```

8. json两种声明方式
	1. 对象声明
	`var json = {width:100,height:100};`
	2. 数组声明
```
var  man = [        //  数组的 json  
    {
        name:"刘德华",
        age : 16,
        address: "香港"
    },
    {
        name:"张学友",
        age: 33,
        address: "澳门"
    },
    {
        name:"黎明",
        age: 55,
        address: "大陆"
    }
];

for(var i=0;i<man.length;i++)
{
    console.log(man[i].name);  
}
```

* * * 

## 面向对象

1. 闭包
在程序语言中，所谓闭包，是指语法域位于某个特定的区域，
具有持续参照(读写)位于该区域内自身范围之外的执行域上的
非持久型变量值能力的段落。这些外部执行域的非持久型变量
神奇地保留他们在闭包最初定义(或创建)时的值

> 白话：  我们可以用一个函数 去访问 另外一个函数的内部变量的方式就是闭包

+ 内部变量 是 局部变量 那我们知道，局部变量是不可以为别人随便使用也
+ 优点：不产生全局变量，实现属性私有化
+ 缺点：闭包中的数据会常驻内存，在不用的时候要删掉否则会导致内存溢出

2. 对象（object）
对象是什么？    
基本数据类型 string number boolean null undefined
Array 对象

+ 对象数据类型：对象就是带有属性和方法的 数据类型
但是有个问题，我们想要某些属性或者方法的时候，用数组不合适 
arr.lenght
我们想要自己id属性和方法 要求这个一定是个对象才行

+ 声明对象
	1. var obj = new Object();
	2. var obj  = {}; // 推荐
```
var obj = {};  // 声明对象
obj.name = "刘德华";  // 属性
obj.age = 55;
obj.showName = function() {   // 声明方法    方法一定带有 ()
    alert("俺是刘德华");
}
obj.showAge = function() {
    alert("俺今年18岁");
}
```

+ 使用对象
```
console.log(obj.name);  // 调用属性
console.log(obj.age);
obj.showName();   //  调用方法
obj.showAge();
```

+ 面向对象
面向对象里面：类和对象
类是对象的抽象，而对象是类的具体实例
一切事物皆对象  JavaScript 一切皆对象

+ 面向对象的特性
	1. 抽象
		- 抽象就是忽略一个主题中与当前目标无关的那些方面，以便更充分地注意与当前目标有关的方面
	2. 封装
		- 封装是把过程和数据包围起来，对数据的访问只能通过已定义的界面
	3. 继承
	4. 多态
		- 多态是指两个或多个属于不同类的对象，对于同一个消息（方法调用）作出不同响应的方式

+ new
	- 新的 我们经常利用new 关键字 去声明新的对象

javascript   
new运算符的作用是创建一个对象实例。这个对象可以是用户自定义的，也可以是带构造函数的一些系统自带的对象
new 关键字可以让 this  指向新的对象 
所谓"构造函数"，其实就是一个普通函数，但是内部使用了this变量。对构造函数使用new运算符，就能生成实例，并且this变量会绑定在实例对象上

+ prototype
	- 共同的 相同的 部分 
	- 主要解决：函数因为使用非常非常多，重复执行效率太低
```
Person.prototype.showName = function() {  // 用的共同的父亲
    alert("我的名字是"+ this.name);
}
```

	- 可以把那些不变的属性和方法，直接定义在prototype对象上
	- 使用方法：类名.prototype.方法

* * *

## 正则表达式

1. 什么是正则表达式
	+ 规则、模式
	+ 强大的字符串匹配工具
	+ 是一种正常人类很难读懂的文字

2. RegExp对象
	+ JS风格 —— new RegExp('a',i);
	+ perl风格 —— /a/i
```
<script>
var str='abcdef';
//var re=new RegExp('a', 'i');
var re=/a/i;

alert(re.test(str));
</script>
```

3. search
	+ 字符串搜索
	+ 忽略大小写：i —— ignore
	+ 判断浏览器类型
```
<script>
var str='abcdef';
alert(str.search(/b/));
</script>

<script>
//alert(window.navigator.userAgent);
if(window.navigator.userAgent.search(/firefox/i)!=-1)
{
    alert('ff');
}
else if(window.navigator.userAgent.search(/chrome/i)!=-1)
{
    alert('chrome');
}
else if(window.navigator.userAgent.search(/msie 9/i)!=-1)
{
    alert('IE9');
}
</script>

```

4. match
	+ 获取匹配的项目
		- 量词：+
		- 量词变化：\d、\d\d和\d+
		- 全局匹配：g——global
		- 例子：找出所有数字
```
<script>
var str='sdf e443 fedef  55 66gg 333322312 dff 99';
var re=/\d+/g;

alert(str.match(re));

```

5. replace
	+ 替换所有匹配
		- 返回替换后的字符串
		- 例子：敏感词过滤
		- | 或则
```
<script>
var str='abacdAef';

alert(str.replace(/a/gi, 'T'));

name = "Doe, John"; 
name.replace(/(\w+)\s*, \s*(\w+)/, "$2 $1"); 
</script>
```

6. 任意字符
	+ [abc]
```
<script>
var str='1b2 abc 1c2 ee';

//或者

var re=/1[abc]2/g;
//var re=/1a2|1b2|1c2/;

alert(str.match(re));
</script>
```
	+ 范围
		- [a-z]、[0-9] 
	+ 排除
		- [^a] ^除了
	+ 组合
		- [a-z0-9A-Z]

7. 转义字符
	+ .（点）——任意字符
	+ \d、\w、\s 数字 数字字母下划线[a-z0-9_A-Z] 空白
	+ \D、\W、\S 除了数字 除了数字字母下划线 除了空白字符

8. 常用量词
	+ {n,} 至少n次
	+ \* 任意次 {0,} 建议不用
	+ ？ 零次或一次 {0,1}
	+ \+ 一次或任意次{1,}
	+ {n} 正好n次

9. 头尾
	+ ^ 开头
	+ $ 结尾
```
<script>
window.onload=function ()
{
    var oTxt=document.getElementById('txt1');
    var oBtn=document.getElementById('btn1');

    oBtn.onclick=function ()
    {
        var re=/^\w+@[a-z0-9]+\.[a-z]{2,4}$/;

        if(re.test(oTxt.value))
        {
            alert('对了');
        }
        else
        {
            alert('你写错了');
        }
    };
};
</script>
```

10. 匹配中文：[\u4e00-\u9fa5]

11. 单词边界：\b

* * *

## AJAX

+ 什么是服务器
	- 网页浏览过程分析
	- 如何配置自己的服务器程序（AMP）

+ 什么是AJAX
	- 无刷新数据读取
		* 用户注册、在线聊天室
		* 异步、同步

+ 使用AJAX
	- 基础：请求并显示静态TXT文件
		* 字符集编码
		* 缓存、阻止缓存
```
<script src="ajax.js"></script>
<script>
window.onload=function ()
{
	var aBtn=document.getElementsByTagName('input');
	var oDiv=document.getElementById('div1');
	var i=0;
	
	for(i=0;i<aBtn.length;i++)
	{
		aBtn[i].index=i;
		aBtn[i].onclick=function ()
		{
			ajax(this.index+1+'.txt', function (str){
				oDiv.innerHTML=str;
			});
		};
	}
};
</script>
</head>

<body>
<input type="button" value="按钮1" />
<input type="button" value="按钮2" />
<input type="button" value="按钮3" />
<div id="div1">
</div>
</body>

// 清除缓存
window.onload=function ()
{
	var oBtn=document.getElementById('btn1');
	
	oBtn.onclick=function ()
	{
		//ajax能且仅能 从服务器读取文件
		//alert('abc.txt?t='+new Date().getTime());
		ajax('abc.txt?t='+new Date().getTime(), function (str){ //abc.txt?t='+new Date().getTime()更新缓存；
			alert(str);
		});
	};
};


```

	- 动态数据：请求JS（或json）文件
		* eval的使用
```
<script>
//eval就是计算字符串里的值

/*var str='54-8*6+4';

alert(eval(str));*/

/*var str='[12,2,3]';
var arr=eval(str);

alert(arr[0]);*/

/*var str='alert("abc");';

eval(str);
*/

/*var str="function show(){alert('abc');}";
eval(str);
show();*/
</script>

```

		* DOM创建元素
	- 局部刷新：请求显示部分网页文件

```
<script src="ajax.js"></script>
<script>
window.onload=function ()
{
	var oBtn=document.getElementById('btn1');
	
	oBtn.onclick=function ()
	{
		ajax('data.json', function (str){
			var arr=eval(str);
			
			alert(arr[0].b);
		});
	};
};
</script>

<body>
读取服务器上的一个文件，文件里面放了一个json<br />
<input id="btn1" type="button" value="读取json" />
</body>

```

+ AJAX原理
	- GET——用于获取数据（如：浏览帖子） 
		* 把数据放在URL（网站）里面来提交 安全性低、容量低
	- POST——用于上传数据（如：用户注册） 
		* 把数据放在不是URL的地方 安全性一般、容量几乎无限
	- GET、POST的区别
		* get是在url里传数据：安全性、容量
		* 缓存

+ 编写AJAX

1. 创建AJAX对象
	- ActiveXObject("Microsoft.XMLHTTP")
	- XMLHttpRequest()

2. 连接服务器
	- open(方法,文件名,异步传输)
		* 同步和异步

3. 发送请求
	- send()

- 请求状态监控

	* onreadystatechange事件
		+ readyState属性：请求状态
			> 0 (为初始化)还没有调用open()方法
			> 1 (载入)已调用send()方法，正在发送请求
			> 2 (载入完成)send()方法完成，已收到全部响应内容
			> 3 (解析)正在解析响应内容
			> 4 (完成)响应内容解析完成，可以在客户端调用
		+ status属性：请求结果
		+ responseText

- 数据类型
	* 什么叫数据类型——英语、中文
	* XML、Json

- 字符集
	* 所有文件字符集相同

```
function ajax(url, fnSucc, fnFaild)
{
	//1.创建ajax对象
	var oAjax=null;
	
	if(window.XMLHttpRequest)
	{
		oAjax=new XMLHttpRequest();
	}
	else
	{
		oAjax=new ActiveXObject("Microsoft.XMLHTTP");
	}
	
	//2.连接服务器
	//open(方法, url, 是否异步)
	oAjax.open('GET', url, true);
	
	//3.发送请求
	oAjax.send();
	
	//4.接收返回
	//OnReadyStateChange
	oAjax.onreadystatechange=function ()
	{
		if(oAjax.readyState==4)
		{
			if(oAjax.status==200)
			{
				//alert('成功：'+oAjax.responseText);
				fnSucc(oAjax.responseText);
			}
			else
			{
				if(fnFaild)
				{
					fnFaild();
				}
			}
		}
	};
}
}
```


