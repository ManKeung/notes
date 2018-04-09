[TOC]

* * *

# javascript

* * *

## 基础

### javascript组成

+ ECMAScript：解释器、翻译器
	- 几乎没有兼容性问题
+ DOM：Document Object Model
	- 一些兼容性问题
+ BOM：Browser Object Model
	- 没有兼容性问题——几乎不兼容

### 变量类型

+ typeof运算符检测 变量类型

值 | 1 | '1' | b | 对象 | true | a = function(){};
---- | ---- | ---- | ---- | ---- | ---- | ----
描述 | number | string | undefined | object | boolean | function 

+ 对象
	- 基本类型(number、string、boolean、undefined)与复合类型(由基本类型所组成)的对比、数组
	- 一切皆是对象

+ 良好的代码习惯：变量从始至终，只存放一种类型的数据

+ 数据类型转换
	- parseInt() 转换成整数 parseFloat() 浮点型
	- NaN(Not A Number)不是数字 不能拿两个NaN相比，不等于自身
	- isNaN() 是不是NaN
	- 隐式类型转换：==、===、-、\*、/

+ 加号 '+'
	- 字符串连接 数字相加

+ 变量作用域（作用范围）
	- 局部变量（定义在一个函数里，只供自己使用） 全局变量（不定义在任意一个函数，可以在任何地方用）
	- 闭包（简单理解）
```
function aaa() { // 父函数
	var a = 12;

	function bbb() { // 子函数
		alert(a); // 子函数可以使用父函数的局部变量
	}
}
```

+ 命令规范
	- 可读性——能看懂
	- 规范性——符合规则
	-匈牙利命名法
		* 类型前缀
		* 首字母大写

> 变量命名

类型 | 前缀 | 类型 | 实例
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

+ 运算符
	- 算数：+ 加、- 减、* 乘、/ 除、% 取模（取余）
	- 赋值：=、+=、-=、\*=、%= a+=2 --> a= a + 2
	- 关系：< 小于、> 大于、<= 小于等于、>= 大于等于、== 等于、=== 全等、!= 不等、!=== 不全等
	- 逻辑：&& 与、|| 或、! 否
	-运算符优先级：括号

+ 程序流程控制
	- 判断：if、switch、?:
		* if
```
1. if(条件){ // 条件真就执行 假就执行 else里的语句
		语句;
	} else {
		语句
	};
2. if(){}if else()...else{}; // 可以多层嵌套
```
		* switch
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
		* ?:
```
条件 ? 语句1 : 语句2; // 条件真 执行1 假 执行2
```

	- 循环：while、for
		* while
```
1. while(条件) { // 条件真 执行
		语句;
}

2. do { // do 里面不管真假 都执行 条件假 执行一次 条件真 继续执行do
		语句;
	} while(条件);
```
		* for
```
for(初始值;条件;递增) {
	语句;
}
// 初始值-->条件真-->执行语句-->递增-->条件真-->执行语句-->...直到递增值不满足条件就不执行
// 注意：初始值只执行一次
```
	- 跳出：break、continue
		* break 跳出循环
		* continue 跳出当次循环 继续下次循环
	- 什么是真、什么是假
		* 真：true、非零数字、非空字符串、非空对象
		* 假：false、数字零、空字符串、空对象、undefined

+ Json
	- 什么是json
	`var obj={a: 5, b: 6, c: 'abc'; d:[1,2,3,4]};`
	- json和数组
	`var arr=[{a: 5,b: 6}, {a: 6, b:7}];`
	- for in
```
<script>
var obj = {a: 1,b: 2, c:3};
var attr = '';

for(attr in obj) {
	alert(attr+'='+obj[attr]);
}
</script>
```

1. 函数返回值
	- 什么是函数返回值
		* 函数的执行结构
		* 可以没有return
	- 一个函数应该只返回一种类型的值

2. 函数参数
	- 可变参（不定参）：arguments
		* 参数的个数可变，参数数组
```
<script>
function sum()
{
	var result=0;
	var i=0;
	
	for(i=0;i<arguments.length;i++)
	{
		result+=arguments[i];
	}
	
	console.log(result);
}

sum(12, 5, 7, 8, 12, 5, 7, 8, 12, 5, 7, 8, 12, 5, 7, 8, 12, 5, 7, 8, 12, 5, 7, 8, 12, 5, 7, 8, 12);
</script>
```

	- 取非行间样式(不能用来设置)
		* obj.currentStyle[attr]
		* getComputedStyle(obj, false)[attr]

3. 数组基础
	1. 数组的使用
		+ 定义
			- var arr=[12, 5, 8, 9];
			- var arr=new Array(12, 5, 8, 9);
			- 没有任何差别，[]的性能略高，因为代码短
	2. 数组的属性
		+ length
			- 既可以获取，又可以设置
			- 例子：快速清空数组 arr.length = 0;
	3. 数组使用原则：数组中应该只存一种类型的变量
	4. 数组的方法
		+ 添加
			- push(元素) 从尾部添加
			- unshift(元素) 从头部添加
		+ 删除
			- pop()，从尾部弹出
			- shift()，从头部弹出
		+ 排序
			- sort([比较函数])，排序一个数组
				* 排序一个字符串数组
				* 排序一个数字数组
		+ 转换类
			- concat(数组2)
				*  连接两个数组
		+ join(分隔符)
			- 用分隔符，组合数组元素，生成字符串
			- 字符串split --> 字符串变数组 '12-8-9'.split('-');
		+ 插入、删除
			- splice
				* splice(开始,长度，元素)
				* 先删除，后插入
			- 删除
				* splice(开始,长度)
			- 插入
				* splice(开始,0,元素)
			- 替换
				* splice(开始,替换个数,元素)
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

* * * 

## **DOM**

+ DOM基础
	- 什么是DOM
	- 浏览器支持情况

+ DOM节点

	- ~~childNodes（在火狐会把文本当做子节点） nodeType（节点类型：1 元素节点，3 文本节点） 配合使用~~
		* 获取子节点
		* **children（注意在ie注释也会当做子节点，所以用时下面不写注释）**

	- parentNode
		* 父节点
		* 例子：点击链接，隐藏整个li

	- offsetParent
		* 定位的父级 父级（包括爷爷、太爷...） 没有的话就是 html

	- 首位节点
		* 有兼容性问题
		* firstChild、firstElementChild
		* lastChild 、lastElementChild
		`var oFirst=oUl.firstElementChild||oUl.firstChild; // 兼容写法`

	- 兄弟节点
		* 有兼容性问题
		* nextSibling、nextElementSibling 
		* previousSibling、previousElementSibling

+ 操作元素属性

	- 元素操作方式
		1. 第一种：oDiv.style.display=“block”;
		2. 第二种：oDiv.style[“display”]=“block”;
		3. 第三种：Dom方式

	- DOM方式操作元素属性
		* 获取：getAttribute(名称)
		* 设置：setAttribute(名称,值)
		* 删除：removeAttribute(名称)

+ 用className选择元素

	- 如何用className选择元素
		* 选出所有元素
		* 通过className条件赛选
	- 封装成函数
```
function getByClass(oParent, sClass)
{
	var aEle=oParent.getElementsByTagName('*');
	var aResult=[];
	var i=0;
	
	for(i=0;i<aEle.length;i++)
	{
		if(aEle[i].className==sClass)
		{
			aResult.push(aEle[i]);
		}
	}
	
	return aResult;
}

```

+ 创建、插入和删除元素
	
	- 创建DOM元素
		* createElement(标签名) 创建一个节点
		* appendChild(节点) 追加一个节点
```
window.onload=function ()
{
	var oBtn=document.getElementById('btn1');
	var oTxt=document.getElementById('txt1');
	var oUl=document.getElementById('ul1');
	
	oBtn.onclick=function ()
	{
		var oLi=document.createElement('li');
		
		oLi.innerHTML=oTxt.value;
		
		//父.appendChild(子节点)
		oUl.appendChild(oLi);
	}
}

```

	- 插入元素
		* insertBefore(节点, 原有节点)	在已有元素前插入
```
//父.insertBefore(子节点, 谁之前)

window.onload=function ()
{
	var oBtn=document.getElementById('btn1');
	var oTxt=document.getElementById('txt1');
	var oUl=document.getElementById('ul1');
	
	oBtn.onclick=function ()
	{
		var oLi=document.createElement('li');
		var aLi=oUl.getElementsByTagName('li');
		
		oLi.innerHTML=oTxt.value;
		
		if(aLi.length==0)
		{
			oUl.appendChild(oLi);
		}
		else
		{
			oUl.insertBefore(oLi, aLi[0]);
		}
	}
}

```

	-  删除DOM元素
		* removeChild(节点) 删除一个节点
```
window.onload=function ()
{
	var aA=document.getElementsByTagName('a');
	var oUl=document.getElementById('ul1');
	var i=0;
	
	for(i=0;i<aA.length;i++)
	{
		aA[i].onclick=function ()
		{
			oUl.removeChild(this.parentNode);
		}
	}
}

```

+ 文档碎片
	- 文档碎片可以提高DOM操作性能(理论上)
	- 文档碎片原理
	- document.createDocumentFragment()
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

### DOM高级运用

+ 表格应用

1. 获取
	* tBodies、tHead、tFoot、rows、cells

2. 隔行变色
	* 鼠标移入高亮
```
<script>
window.onload=function ()
{
	var oTab=document.getElementById('tab1');
	var oldBgColor='';
	var i=0;
	
	for(i=0;i<oTab.tBodies[0].rows.length;i++)
	{
		oTab.tBodies[0].rows[i].style.background=i%2?'#CCC':'';
		
		oTab.tBodies[0].rows[i].onmouseover=function ()
		{
			oldBgColor=this.style.background;
			this.style.background='yellow';
		};
		
		oTab.tBodies[0].rows[i].onmouseout=function ()
		{
			this.style.background=oldBgColor;
		};
	}
};
</script>

<body>
<table id="tab1" border="1" width="400">
	<thead>
    	<td>ID</td>
    	<td>姓名</td>
    	<td>操作</td>
    </thead>
    <tbody>
    	<tr>
        	<td>1</td>
        	<td>Blue</td>
        	<td></td>
        </tr>
    	<tr>
        	<td>2</td>
        	<td>Leo</td>
        	<td></td>
        </tr>
    	<tr>
        	<td>3</td>
        	<td>莫莫</td>
        	<td></td>
        </tr>
    	<tr>
        	<td>4</td>
        	<td>aaa</td>
        	<td></td>
        </tr>
    	<tr>
        	<td>5</td>
        	<td>bbb</td>
        	<td></td>
        </tr>
    	<tr>
        	<td>6</td>
        	<td>ccc</td>
        	<td></td>
        </tr>
    </tbody>
</table>
</body>

```

3. 添加、删除一行
	* DOM方法的使用
```
// 1. 添加
<script>
window.onload=function ()
{
	var oTab=document.getElementById('tab1');
	var oBtn=document.getElementById('btn1');
	var oTxt=document.getElementById('txt1');
	
	oBtn.onclick=function ()
	{
		var oTr=document.createElement('tr');
		var oTd=null;
		
		oTd=document.createElement('td');
		oTd.innerHTML=oTab.tBodies[0].rows.length+1;
		oTr.appendChild(oTd);
		
		oTd=document.createElement('td');
		oTd.innerHTML=oTxt.value;
		oTr.appendChild(oTd);
		
		oTd=document.createElement('td');
		oTd.innerHTML='&nbsp;';
		oTr.appendChild(oTd);
		
		oTab.tBodies[0].appendChild(oTr);
	};
};
</script>

<body>
<input id="txt1" type="text" />
<input id="btn1" type="button" value="添加" />
<table id="tab1" border="1" width="400">
	<thead>
    	<td>ID</td>
    	<td>姓名</td>
    	<td>操作</td>
    </thead>
    <tbody>
    	<tr>
        	<td>1</td>
        	<td>Blue</td>
        	<td></td>
        </tr>
    	<tr>
        	<td>2</td>
        	<td>Leo</td>
        	<td></td>
        </tr>
    	<tr>
        	<td>3</td>
        	<td>莫莫</td>
        	<td></td>
        </tr>
    	<tr>
        	<td>4</td>
        	<td>aaa</td>
        	<td></td>
        </tr>
    	<tr>
        	<td>5</td>
        	<td>bbb</td>
        	<td></td>
        </tr>
    	<tr>
        	<td>6</td>
        	<td>ccc</td>
        	<td></td>
        </tr>
    </tbody>
</table>
</body>

// 2. 删除
<script>
window.onload=function ()
{
	var oTab=document.getElementById('tab1');
	var oBtn=document.getElementById('btn1');
	var oTxt=document.getElementById('txt1');
	var iNowId=oTab.tBodies[0].rows.length+1;
	
	oBtn.onclick=function ()
	{
		var oTr=document.createElement('tr');
		var oTd=null;
		
		oTd=document.createElement('td');
		oTd.innerHTML=iNowId++;
		oTr.appendChild(oTd);
		
		oTd=document.createElement('td');
		oTd.innerHTML=oTxt.value;
		oTr.appendChild(oTd);
		
		oTd=document.createElement('td');
		oTd.innerHTML='<a href="javascript:;">删除</a>';
		oTr.appendChild(oTd);
		
		oTd.getElementsByTagName('a')[0].onclick=function ()
		{
			oTab.tBodies[0].removeChild(this.parentNode.parentNode);
		};
		
		oTab.tBodies[0].appendChild(oTr);
	};
};
</script>

<body>
<input id="txt1" type="text" />
<input id="btn1" type="button" value="添加" />
<table id="tab1" border="1" width="400">
	<thead>
    	<td>ID</td>
    	<td>姓名</td>
    	<td>操作</td>
    </thead>
    <tbody>
    	<tr>
        	<td>1</td>
        	<td>Blue</td>
        	<td></td>
        </tr>
    	<tr>
        	<td>2</td>
        	<td>Leo</td>
        	<td></td>
        </tr>
    	<tr>
        	<td>3</td>
        	<td>莫莫</td>
        	<td></td>
        </tr>
    	<tr>
        	<td>4</td>
        	<td>aaa</td>
        	<td></td>
        </tr>
    	<tr>
        	<td>5</td>
        	<td>bbb</td>
        	<td></td>
        </tr>
    	<tr>
        	<td>6</td>
        	<td>ccc</td>
        	<td></td>
        </tr>
    </tbody>
</table>
</body>

```

3. 搜索
	* 版本1：基础版本——字符串比较
	* 版本2：忽略大小写——大小写转换
	* 版本3：模糊搜索——search的使用
	* 版本4：多关键词——split
	* 高亮显示、筛选
```
<script>
window.onload=function ()
{
	var oBtn=document.getElementById('btn1');
	var oTab=document.getElementById('tab1');
	var oTxt=document.getElementById('txt1');
	
	oBtn.onclick=function ()
	{
		var i=0;
		
		for(i=0;i<oTab.tBodies[0].rows.length;i++)
		{
			var sValueInTab=oTab.tBodies[0].rows[i].cells[1].innerHTML.toLowerCase();
			var sValueInTxt=oTxt.value.toLowerCase();
			var arr=sValueInTxt.split(' ');
			
			var bFound=false;
			
			for(var j=0;j<arr.length;j++)
			{
				if(sValueInTab.search(arr[j])!=-1)
				{
					bFound=true;
					break;
				}
			}
			
			if(bFound)
			{
				oTab.tBodies[0].rows[i].style.background='yellow';
			}
			else
			{
				oTab.tBodies[0].rows[i].style.background='';
			}
		}
	};
};
</script>

<body>
<input id="txt1" type="text" />
<input id="btn1" type="button" value="搜索" />
<table id="tab1" border="1" width="400">
	<thead>
    	<td>ID</td>
    	<td>姓名</td>
    	<td>操作</td>
    </thead>
    <tbody>
    	<tr>
        	<td>1</td>
        	<td>Blue</td>
        	<td></td>
        </tr>
    	<tr>
        	<td>2</td>
        	<td>Leo</td>
        	<td></td>
        </tr>
    	<tr>
        	<td>3</td>
        	<td>莫莫</td>
        	<td></td>
        </tr>
    	<tr>
        	<td>4</td>
        	<td>aaa</td>
        	<td></td>
        </tr>
    	<tr>
        	<td>5</td>
        	<td>bbb</td>
        	<td></td>
        </tr>
    	<tr>
        	<td>6</td>
        	<td>ccc</td>
        	<td></td>
        </tr>
    </tbody>
</table>
</body>

```

4. 排序
	* 移动Li
	* 元素排序：转换——排序——插入
```
// 1. 移动
<script>
window.onload=function ()
{
	var oBtn=document.getElementById('btn1');
	var oUl1=document.getElementById('ul1');
	
	oBtn.onclick=function ()
	{
		var aLi=oUl1.getElementsByTagName('li');
		
		oUl1.appendChild(aLi[0]);
	};
};
</script>

<body>
<input id="btn1" type="button" value="移动Li" />
<ul id="ul1">
	<li>1</li>
	<li>2</li>
	<li>3</li>
	<li>4</li>
	<li>5</li>
</ul>
</body>


// 2. 排序
<script>
window.onload=function ()
{
	var oBtn=document.getElementById('btn1');
	var oTab=document.getElementById('tab1');
	var bAsc=true;	//是否是升序排列
	
	oBtn.onclick=function ()
	{
		var arr=[];
		var i=0;
		//1.转成数组
		for(i=0;i<oTab.tBodies[0].rows.length;i++)
		{
			arr[i]=oTab.tBodies[0].rows[i];
		}
		
		//2.数组排序
		arr.sort(function (tr1, tr2){
			if(bAsc)
			{
				return parseInt(tr1.cells[0].innerHTML)-parseInt(tr2.cells[0].innerHTML);
			}
			else
			{
				return parseInt(tr2.cells[0].innerHTML)-parseInt(tr1.cells[0].innerHTML);
			}
		});
		
		//3.重新插入
		for(i=0;i<arr.length;i++)
		{
			oTab.tBodies[0].appendChild(arr[i]);
		}
		
		bAsc=!bAsc;
		
		/*if(bAsc)
		{
			bAsc=false;
		}
		else
		{
			bAsc=true;
		}*/
	};
};
</script>

<body>
<input id="btn1" type="button" value="排序" />
<table id="tab1" border="1" width="400">
	<thead>
    	<td>ID</td>
    	<td>姓名</td>
    	<td>操作</td>
    </thead>
    <tbody>
    	<tr>
        	<td>3</td>
        	<td>莫莫</td>
        	<td></td>
        </tr>
    	<tr>
        	<td>2</td>
        	<td>Leo</td>
        	<td></td>
        </tr>
    	<tr>
        	<td>4</td>
        	<td>aaa</td>
        	<td></td>
        </tr>
    	<tr>
        	<td>6</td>
        	<td>ccc</td>
        	<td></td>
        </tr>
    	<tr>
        	<td>1</td>
        	<td>Blue</td>
        	<td></td>
        </tr>
    	<tr>
        	<td>5</td>
        	<td>bbb</td>
        	<td></td>
        </tr>
    </tbody>
</table>
</body>

```

5. 表单基础知识
	* 什么是表单
		- 向服务器提交数据，比如：用户注册
	* action		提交到哪里 
	* 表单事件
		- onsubmit	提交时发生
		- onreset	重置时发生

6. 表单内容验证
	* 阻止用户输入非法字符		阻止事件
	* 输入时、失去焦点时验证		onkeyup、onblur
	* 提交时检查				onsubmit
	* 后台数据检查
```
<script>
window.onload=function ()
{
	var oForm=document.getElementById('form1');
	var oUser=document.getElementsByName('user')[0];
	var oPass=document.getElementsByName('pass')[0];
	
	oForm.onsubmit=function ()
	{
		if(oUser.value=='' || oPass.value=='')
		{
			alert('您填错了');
			return false;
		}
	};
	
	oForm.onreset=function ()
	{
		/*if(confirm('是否要清空？'))
		{
			return true;
		}
		else
		{
			return false;
		}*/
		
		return confirm('是否要清空？');
	};
};
</script>

<body>
<form id="form1" action="http://www.miaov.com/" method="get">
	用户名：<input type="text" name="user" />
	密码：<input type="password" name="pass" />
    <input type="submit" value="提交" />
    <input type="reset" value="重置" />
</form>
</body>

```


* * *

## ~~BOM~~

+ 打开、关闭窗口
	- window.open(地址,参数)
	 * 蓝色理想运行代码功能
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
---- | ---- | ---- | ---- | ----
描述 |  在新窗口中打开被链接文档 | 默认。在相同的框架中打开被链接文档 | 在父框架集中打开被链接文档 | 在整个窗口中打开被链接文档

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

	- window.close()
		*关闭时提示问题
```
<script>
window.onload=function ()
{
	var oBtn=document.getElementById('btn1');
	
	oBtn.onclick=function ()
	{
		window.close();
	};
};
</script>

<body>
<input id="btn1" type="button" value="关闭" />
</body>

```

+ 常用属性
	
	- window.navigator.userAgent 浏览器版本
```
<script>
alert(window.navigator.userAgent);
</script>
```
	- window.location 网址信息 不光可以读 还能写
```
<script>
//alert(window.location);
window.location='http://www.miaov.com/'
</script>
```

+ 尺寸及坐标

	- 可视区尺寸
		* document.documentElement.clientWidth
		* document.documentElement.clientHeight

	- 滚动距离
		* document.body.scrollTop
		* document.documentElement.scrollTop

+ ~~系统对话框~~
	- 警告框：alert(“内容”)，没有返回值
	- 选择框：confirm(“提问的内容”)，返回boolean
	- 输入框：prompt()，返回字符串或null

+ window对象常用事件
	- onload 加载完运行
	- onscroll 滚动
	- onresize 窗口大小变化

* * *

## 事件详解

### 事件对象

+ 什么是event对象
	- 用来获取事件的详细信息：鼠标位置、键盘按键

+ 获取event对象（兼容性写法）
```
document.onclick = function (ev) {
	var oEvent = ev || event;
	alert.(oEvent.clientX+', '+oEvent.clientY);
}
```

+ 事件流
	- 事件冒泡
		* 取消冒泡：oEvent.cancelBubbl=true
		* DOM事件流
```
window.onload=function ()
{
	var oBtn=document.getElementById('btn1');
	var oDiv=document.getElementById('div1');
	
	oBtn.onclick=function (ev)
	{
		var oEvent=ev||event;
		oDiv.style.display='block';
		//alert('按钮被点了');
		
		oEvent.cancelBubble=true;
	};
	
	document.onclick=function ()
	{
		oDiv.style.display='none';
		//alert('页面被点了');
	};
};
</script>

<body>
<input id="btn1" type="button" value="显示" />
<div id="div1">
我说我的眼里只有你  你说你的眼里只有她  他说他的眼里只有我
</div>
</body>

```

+ 鼠标事件
	- 鼠标位置
		* 可视区域：clientX、clientY
	- 获取鼠标在页面的绝对位置
```
window.onload=function ()
{
	var aDiv=document.getElementsByTagName('div');
	var i=0;
	
	document.onmousemove=function (ev)
	{
		var oEvent=ev||event;
		
		for(i=aDiv.length-1;i>0;i--)
		{
			aDiv[i].style.left=aDiv[i-1].style.left;
			aDiv[i].style.top=aDiv[i-1].style.top;
		}
		
		aDiv[0].style.left=oEvent.clientX+'px';
		aDiv[0].style.top=oEvent.clientY+'px';
	};
};

```

+ 键盘事件
	- keyCode
		* 获取用户按下的那个键
	- 其他属性
		* ctrlKey、shiftKey、altKey
```
<script>
window.onload=function ()
{
	var oBtn=document.getElementById('btn1');
	var oTxt1=document.getElementById('txt1');
	var oTxt2=document.getElementById('txt2');
	
	oBtn.onclick=function ()
	{
		oTxt1.value+=oTxt2.value+'\n';
		oTxt2.value='';
	};
	
	oTxt2.onkeydown=function (ev)
	{
		var oEvent=ev||event;
		
		if(oEvent.ctrlKey && oEvent.keyCode==13)
		{
			oTxt1.value+=oTxt2.value+'\n';
			oTxt2.value='';
		}
	};
};
</script>

<body>
<textarea id="txt1" rows="10" cols="40"></textarea><br />
<input id="txt2" type="text" />
<input id="btn1" type="button" value="留言" />
</body>

```

+ 默认行为
	- 浏览器自带的行为
	- 阻止默认行为
		* 普通写法：return false;
	- oncontextmenu 环境菜单/上下文菜单
	`document.oncontextmenu = function(){return false;}`

* * *

+ 拖拽

1. 简易拖拽
	- 拖拽原理
		* 距离不变
		- 三个事件

2. 靠谱拖拽
	- 原有拖拽的问题
		* 直接给document加事件
	- FF下，空Div拖拽Bug
		* 阻止默认事件
	- 放置拖出页面
		* 修正位置
```
<script>
window.onload=function ()
{
	var oDiv=document.getElementById('div1');
	
	var disX=0;
	var disY=0;
	
	oDiv.onmousedown=function (ev)
	{
		var oEvent=ev||event;
		
		disX=oEvent.clientX-oDiv.offsetLeft;
		disY=oEvent.clientY-oDiv.offsetTop;
		
		document.onmousemove=function (ev)
		{
			var oEvent=ev||event;
			var l=oEvent.clientX-disX;
			var t=oEvent.clientY-disY;
			
			if(l<0)
			{
				l=0;
			}
			else if(l>document.documentElement.clientWidth-oDiv.offsetWidth)
			{
				l=document.documentElement.clientWidth-oDiv.offsetWidth;
			}
			
			if(t<0)
			{
				t=0;
			}
			else if(t>document.documentElement.clientHeight-oDiv.offsetHeight)
			{
				t=document.documentElement.clientHeight-oDiv.offsetHeight;
			}
			
			oDiv.style.left=l+'px';
			oDiv.style.top=t+'px';
		};
		
		document.onmouseup=function ()
		{
			document.onmousemove=null;
			document.onmouseup=null;
		};
		
		return false;
	};
};
</script>

<body>
<div id="div1"></div>
</body>

```

### cookie

+ 什么是cookie
	- 页面用来保存信息
		* 比如：自动登录、记住用户名
	- cookie的特征
		* 同一个网站中所有页面共享一套cookie
		* 数量、大小有限
		* 过期时间
	- JS中使用cookie
		* document.cookit
```
<script>
function setCookie(name, value, iDay)
{
	var oDate=new Date();
	
	oDate.setDate(oDate.getDate()+iDay);
	
	document.cookie=name+'='+value+';expires='+oDate;
}

function getCookie(name)
{
	//'username=abc; password=123456; aaa=123; bbb=4r4er'
	var arr=document.cookie.split('; ');
	var i=0;
	
	//arr->['username=abc', 'password=123456', ...]
	
	for(i=0;i<arr.length;i++)
	{
		//arr2->['username', 'abc']
		var arr2=arr[i].split('=');
		
		if(arr2[0]==name)
		{
			return arr2[1];
		}
	}
	
	return '';
}

function removeCookie(name)
{
	setCookie(name, '1', -1);
}

alert(getCookie('username'));
removeCookie('username');
alert(getCookie('username'));

/*setCookie('username', 'abc', 30);
setCookie('password', '123456', 300);
setCookie('aaa', '123', 300);
setCookie('bbb', '4r4er', 300);*/

/*var oDate=new Date();

oDate.setDate(oDate.getDate()+30);

document.cookie="user=blue;expires="+oDate;
document.cookie="pass=123";*/

//alert(document.cookie);
</script>
```

+ cookie的使用
	- 设置cookie
		* 格式：名字=值
		* 不会覆盖
		* 过期时间：expires=时间
			- 日期对象的使用
		* 封装成函数

	- 读取cookie
		* 字符串分割
	- 删除cookie
		- 已经过期
```
<script>
function setCookie(name, value, iDay)
{
	var oDate=new Date();
	
	oDate.setDate(oDate.getDate()+iDay);
	
	document.cookie=name+'='+value+';expires='+oDate;
}

function getCookie(name)
{
	//'username=abc; password=123456; aaa=123; bbb=4r4er'
	var arr=document.cookie.split('; ');
	var i=0;
	
	//arr->['username=abc', 'password=123456', ...]
	
	for(i=0;i<arr.length;i++)
	{
		//arr2->['username', 'abc']
		var arr2=arr[i].split('=');
		
		if(arr2[0]==name)
		{
			return arr2[1];
		}
	}
	
	return '';
}

function removeCookie(name)
{
	setCookie(name, '1', -1);
}

window.onload=function ()
{
	var oForm=document.getElementById('form1');
	var oUser=document.getElementsByName('user')[0];
	var oBtnClear=document.getElementsByTagName('a')[0];
	
	oForm.onsubmit=function ()
	{
		setCookie('user', oUser.value, 30);
	};
	
	oUser.value=getCookie('user');
	
	oBtnClear.onclick=function ()
	{
		removeCookie('user');
		oUser.value='';
	};
};
</script>

<body>
<form id="form1" action="http://www.miaov.com/">
	用户名：<input type="text" name="user" />
    密码：<input type="password" name="pass" />
    <input type="submit" value="登录" />
    <a href="javascript:;">清除记录</a>
</form>
</body>

```

### 事件高级应用

+ 事件绑定
	- IE方式
		* attachEvent(事件名称,函数)，绑定事件处理函数
		* detachEvent(事件名称,函数)，解除绑定
	- DOM方式
		* addEventListener(事件名称,函数, 捕获)
		* removeEventListener(事件名称, 函数, 捕获)
	- 何时使用事件绑定
	- 绑定事件和this
	- 绑定匿名函数，会无法删除
```
<script>
function aaa()
{
	alert('a');
}

function bbb()
{
	alert('b');
}

//1.谁
//2.事件
//3.函数

function myAddEvent(obj, sEvent, fn)
{
	if(obj.attachEvent)
	{
		obj.attachEvent('on'+sEvent, fn);
	}
	else
	{
		obj.addEventListener(sEvent, fn, false);
	}
}

window.onload=function ()
{
	var oBtn=document.getElementById('btn1');
	
	myAddEvent(oBtn, 'click', aaa);
	myAddEvent(oBtn, 'click', bbb);
};
</script>

<body>
<input id="btn1" type="button" value="aaa" />
</body>

```

+ 复习拖拽原理
	- 距离不变
	- 三个事件：down、move、up
	- 封装成函数

+ 限制范围
	- 对位置进行判断
		* 例子1：不能拖出窗口的Div
		* 例子2：不能拖出指定对象的Div
	- 磁性吸附
```
<script>
window.onload=function ()
{
	var oDiv=document.getElementById('div1');
	
	oDiv.onmousedown=function (ev)
	{
		var oEvent=ev||event;
		var disX=oEvent.clientX-oDiv.offsetLeft;
		var disY=oEvent.clientY-oDiv.offsetTop;
		
		document.onmousemove=function (ev)
		{
			var oEvent=ev||event;
			var l=oEvent.clientX-disX;
			var t=oEvent.clientY-disY;
			
			if(l<50)
			{
				l=0;
			}
			else if(l>document.documentElement.clientWidth-oDiv.offsetWidth-50)
			{
				l=document.documentElement.clientWidth-oDiv.offsetWidth;
			}
			
			if(t<50)
			{
				t=0;
			}
			else if(t>document.documentElement.clientHeight-oDiv.offsetHeight-50)
			{
				t=document.documentElement.clientHeight-oDiv.offsetHeight;
			}
			
			oDiv.style.left=l+'px';
			oDiv.style.top=t+'px';
		};
		
		document.onmouseup=function ()
		{
			document.onmousemove=null;
			document.onmouseup=null;
		};
	};
};
</script>

<body>
<div id="div1">
</div>
</body>

```

+ 图片拖拽
	- 阻止默认事件

+ 文字选中
	- 阻止默认事件
	- IE下拖动有问题
		* 事件捕获

+ 碰撞检测
	- 碰撞检测原理——九宫格
	- 例子：拖拽中的碰撞检测
```
<script>
window.onload=function ()
{
	var oDiv=document.getElementById('div1');
	var oDiv2=document.getElementById('div2');
	
	oDiv.onmousedown=function (ev)
	{
		var oEvent=ev||event;
		var disX=oEvent.clientX-oDiv.offsetLeft;
		var disY=oEvent.clientY-oDiv.offsetTop;
		
		document.onmousemove=function (ev)
		{
			var oEvent=ev||event;
			
			oDiv.style.left=oEvent.clientX-disX+'px';
			oDiv.style.top=oEvent.clientY-disY+'px';
			
			var l1=oDiv.offsetLeft;
			var r1=oDiv.offsetLeft+oDiv.offsetWidth;
			var t1=oDiv.offsetTop;
			var b1=oDiv.offsetTop+oDiv.offsetHeight;
			
			var l2=oDiv2.offsetLeft;
			var r2=oDiv2.offsetLeft+oDiv2.offsetWidth;
			var t2=oDiv2.offsetTop;
			var b2=oDiv2.offsetTop+oDiv2.offsetHeight;
			
			if(r1<l2 || l1>r2 || b1<t2 || t1>b2)
			{
				oDiv2.style.background='yellow';
			}
			else
			{
				oDiv2.style.background='green';
			}
		};
		
		document.onmouseup=function ()
		{
			document.onmousemove=null;
			document.onmouseup=null;
		};
	};
};
</script>

<body>
<div id="div1"></div>
<div id="div2"></div>
</body>

```

+ 与DOM配合
	- 带框的拖拽
	- 保留原有位置的拖拽
```
<script>
window.onload=function ()
{
	var oDiv=document.getElementById('div1');
	
	oDiv.onmousedown=function (ev)
	{
		var oEvent=ev||event;
		var disX=oEvent.clientX-oDiv.offsetLeft;
		var disY=oEvent.clientY-oDiv.offsetTop;
		
		var oNewDiv=document.createElement('div');
		
		oNewDiv.className='box';
		oNewDiv.style.width=oDiv.offsetWidth-2+'px';
		oNewDiv.style.height=oDiv.offsetHeight-2+'px';
		oNewDiv.style.left=oDiv.offsetLeft+'px';
		oNewDiv.style.top=oDiv.offsetTop+'px';
		
		document.body.appendChild(oNewDiv);
		
		document.onmousemove=function (ev)
		{
			var oEvent=ev||event;
			
			oNewDiv.style.left=oEvent.clientX-disX+'px';
			oNewDiv.style.top=oEvent.clientY-disY+'px';
		};
		
		document.onmouseup=function ()
		{
			document.onmousemove=null;
			document.onmouseup=null;
			
			oDiv.style.left=oNewDiv.style.left;
			oDiv.style.top=oNewDiv.style.top;
			
			document.body.removeChild(oNewDiv);
		};
	};
};
</script>

<body>
<div id="div1">
</div>
</body>

```

+ 例子：弹出层
	- 拖拽改变Div大小

+ 拖拽
	- 只有横向拖拽
	- 限制范围——范围的大小
	- 计算比例——当前值/最大值
```
<script>
window.onload=function ()
{
	var oDiv=document.getElementById('div1');
	var oDiv2=document.getElementById('div2');
	
	oDiv.onmousedown=function (ev)
	{
		var oEvent=ev||event;
		var disX=oEvent.clientX-oDiv.offsetLeft;
		var disY=oEvent.clientY-oDiv.offsetTop;
		
		document.onmousemove=function (ev)
		{
			var oEvent=ev||event;
			
			oDiv2.style.width=oEvent.clientX-disX+oDiv.offsetWidth+'px';
			oDiv2.style.height=oEvent.clientY-disY+oDiv.offsetHeight+'px';
		};
		
		document.onmouseup=function ()
		{
			document.onmousemove=null;
			document.onmouseup=null;
		};
	};
};
</script>

<body>
<div id="div2">
	<div id="div1">
	</div>
</div>
</body>

```

+ 控制其他对象
	- 例子1：控制物体的大小
	- 例子2：控制物体的透明度
	- 例子3：控制文字滚动

+ 鼠标滚轮事件
	- 事件
		* mousewheel
		* DOMMouseScroll
		> DOM事件
			* 只能绑定
			* 阻止默认事件——preventDefault
```
<script>
function myAddEvent(obj, sEvent, fn)
{
	if(obj.attachEvent)
	{
		obj.attachEvent('on'+sEvent, fn);
	}
	else
	{
		obj.addEventListener(sEvent, fn, false);
	}
}

window.onload=function ()
{
	var oDiv=document.getElementById('div1');
	var oParent=document.getElementById('parent');
	var oDiv2=document.getElementById('div2');
	var oDiv3=document.getElementById('div3');
	
	function onMouseWheel(ev)
	{
		var oEvent=ev||event;
		var bDown=true;
		
		bDown=oEvent.wheelDelta?oEvent.wheelDelta<0:oEvent.detail>0;
		
		if(bDown)
		{
			setLeft(oDiv.offsetLeft+10);
		}
		else
		{
			setLeft(oDiv.offsetLeft-10);
		}
		
		if(oEvent.preventDefault)
		{
			oEvent.preventDefault();
		}
		
		return false;
	}
	
	myAddEvent(oParent, 'mousewheel', onMouseWheel);
	myAddEvent(oParent, 'DOMMouseScroll', onMouseWheel);
	myAddEvent(oDiv2, 'mousewheel', onMouseWheel);
	myAddEvent(oDiv2, 'DOMMouseScroll', onMouseWheel);
	
	oDiv.onmousedown=function (ev)
	{
		var oEvent=ev||event;
		var disX=oEvent.clientX-oDiv.offsetLeft;
		
		document.onmousemove=function (ev)
		{
			var oEvent=ev||event;
			var l=oEvent.clientX-disX;
			
			setLeft(l);
		};
		
		document.onmouseup=function ()
		{
			document.onmousemove=null;
			document.onmouseup=null;
		};
	};
	
	function setLeft(l)
	{
		if(l<0)
		{
			l=0;
		}
		else if(l>oParent.offsetWidth-oDiv.offsetWidth)
		{
			l=oParent.offsetWidth-oDiv.offsetWidth;
		}
		
		oDiv.style.left=l+'px';
		var scale=l/(oParent.offsetWidth-oDiv.offsetWidth);
		
		oDiv3.style.top=-(oDiv3.offsetHeight-oDiv2.offsetHeight)*scale+'px';
		
		document.title=scale;
	}
};
</script>

<body>
<div id="parent">
	<div id="div1">
    </div>
</div>
<div id="div2">
	<div id="div3">
    	关于妙味
妙味课堂是北京妙味趣学信息技术有限公司旗下的IT前端培训品牌，
妙味课堂是一支独具特色的IT培训团队，妙味反对传统IT教育枯燥乏味的教学模式，妙味提供一种全新的快乐学习方法！
目前主要针对的是javascript培训，同时还提供了css教程、javascript视频、js特效等，最新推出了外地学员们喜欢的javascript网络课程服务，同时还为处于javascript入门阶段的朋友录制了大量javascript视频，其中涉及了大量javascript基础知识，希望妙味课堂推出的javascript网络培训课程能带给大家更多惊喜。
妙味讲师：
妙味课堂的讲师来自中国最具吸引力的IT企业，如淘宝、ShopEx等。
前端开发讲师：刘伟（Leo）
WEB 前端开发工程师(5年)、CSS 精品课程讲师(3年)，妙味课堂创始人；
曾任北京科尔威视、ShopEx 北京营销中心 ECMall 项目前端架构师；
精通 XHTML+CSS 架构，深刻理解 W3C 标准，熟练掌握系统的浏览器兼容性解决方案，
擅长大型网站前端架构及调试各类页面错位等诸多兼容性问题的疑难杂症；
专注于网站用户体验性研究，并在视频、电子商城、教育平台、企业级应用站点拥有数量庞大的案例和多年实战经验；
    </div>
</div>
</body>

```

+ 属性
	- IE下：wheelDelta
	- DOM下：detail

+ 应用到自定义滚动条——给谁加事件


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

* * *

## 运动

+ 运动基础
	- 让Div运动起来
	- 熟读——物体运动的快慢
	- 运动中的Bug
		* 不会停止
		* 熟读取某些值会无法停止
		* 到达位置后再点击还会运动
		* 重复点击速度加快

+ 匀速运动
	- 速度不变
```
<script type="text/javascript">
var timer=null;

function startMove(iTarget)
{
	var oDiv=document.getElementById('div1');
	
	clearInterval(timer);
	timer=setInterval(function (){
		var iSpeed=0;
		
		if(oDiv.offsetLeft<iTarget)
		{
			iSpeed=7;
		}
		else
		{
			iSpeed=-7;
		}
		
		if(Math.abs(oDiv.offsetLeft-iTarget)<7)	//是否到达终点
		{
			clearInterval(timer);	//到达终点
			
			oDiv.style.left=iTarget+'px';
		}
		else
		{
			oDiv.style.left=oDiv.offsetLeft+iSpeed+'px';	//到达之前
		}
	}, 30);
}

</script>

```

+ 运动框架
	- 在开始运动时，关闭已有定时器
	- 把运动和停止隔开(if/else)

+ 缓冲运动
	- 逐渐变慢，最后停止
	- 距离越远速度越大
		* 速度由距离决定
		* 速度=（目标值-当前值）/ 缩小系数

+ 运动终止条件
	- 匀速运动：距离足够近
	- 缓冲运动：两点重合

### 弹性运动

+ 加减速运动
	- 熟读不断增加或减少
	- 速度减小到负值，会反方向运动
```
// 1. 加速运动
<script>
var iSpeed=0;

function startMove()
{
	var oDiv=document.getElementById('div1');
	
	setInterval(function (){
		iSpeed++;
		
		oDiv.style.left=oDiv.offsetLeft+iSpeed+'px';
	}, 30);
}
</script>

// 2. 减速运动
<script>
var iSpeed=20;

function startMove()
{
	var oDiv=document.getElementById('div1');
	
	setInterval(function (){
		iSpeed--;
		
		oDiv.style.left=oDiv.offsetLeft+iSpeed+'px';
	}, 30);
}
</script>


<body>
<input type="button" value="开始运动" onclick="startMove()" />
<div id="div1"></div>
</body>

```

+ 弹性运动
	- 在目标点左边，加速；在目标点右边减速
	- 根据距离，计算加速度
```
// 1. 弹性1
<script>
var iSpeed=0;

function startMove()
{
	var oDiv=document.getElementById('div1');
	
	setInterval(function (){
		if(oDiv.offsetLeft<300)
		{
			iSpeed++;
		}
		else
		{
			iSpeed--;
		}
		
		oDiv.style.left=oDiv.offsetLeft+iSpeed+'px';
	}, 30);
}
</script>

// 2. 弹性 加减速转变
<script>
var iSpeed=0;

function startMove()
{
	var oDiv=document.getElementById('div1');
	
	setInterval(function (){
		if(oDiv.offsetLeft<300)
		{
			iSpeed+=(300-oDiv.offsetLeft)/50;
		}
		else
		{
			iSpeed-=(oDiv.offsetLeft-300)/50;
		}
		
		oDiv.style.left=oDiv.offsetLeft+iSpeed+'px';
	}, 30);
}
</script>

// 3. 弹性 2--> a+b-c a-c+b 等式换算
<script>
var iSpeed=0;

function startMove()
{
	var oDiv=document.getElementById('div1');
	
	setInterval(function (){
		if(oDiv.offsetLeft<300)
		{
			iSpeed+=(300-oDiv.offsetLeft)/50;
		}
		else
		{
			iSpeed+=(300-oDiv.offsetLeft)/50;
		}
		
		oDiv.style.left=oDiv.offsetLeft+iSpeed+'px';
	}, 30);
}
</script

// 4.弹性 3--> 合并 
<script>
var iSpeed=0;

function startMove()
{
	var oDiv=document.getElementById('div1');
	
	setInterval(function (){
		iSpeed+=(300-oDiv.offsetLeft)/50;
		
		oDiv.style.left=oDiv.offsetLeft+iSpeed+'px';
	}, 30);
}
</script>


```

+ 摩擦力
	- 速度不断减小
```
<script>
var iSpeed=20;

function startMove()
{
	var oDiv=document.getElementById('div1');
	
	setInterval(function (){
		iSpeed*=0.95;
		
		oDiv.style.left=oDiv.offsetLeft+iSpeed+'px';
		
		document.getElementById('txt1').value+=iSpeed+'\n';
	}, 30);
}
</script>

```

+ 带摩擦力的弹性运动
	- 弹性运动+摩擦力
```
<script>
var iSpeed=0;

function startMove()
{
	var oDiv=document.getElementById('div1');
	
	setInterval(function (){
		iSpeed+=(300-oDiv.offsetLeft)/5;
		iSpeed*=0.7;
		
		oDiv.style.left=oDiv.offsetLeft+iSpeed+'px';
	}, 30);
}
</script>

```

+ 弹性公式
	- 速度+=(目标值-oDiv.offsetLeft)/5
	- 速度\*=0.7
```
<script type="text/javascript">
window.onload=function ()
{
	var oUl=document.getElementById('ul1');
	var aLi=oUl.getElementsByTagName('li');
	var oBg=aLi[aLi.length-1];
	var i=0;
	
	for(i=0;i<aLi.length-1;i++)
	{
		aLi[i].onmouseover=function ()
		{
			startMove(oBg, this.offsetLeft);
		};
	}
};

var iSpeed=0;
var left=0;

function startMove(obj, iTarget)
{
	clearInterval(obj.timer);
	
	obj.timer=setInterval(function (){
		iSpeed+=(iTarget-obj.offsetLeft)/5;
		iSpeed*=0.7;
		
		left+=iSpeed;
		
		if(Math.abs(iSpeed)<1 && Math.abs(left-iTarget)<1)
		{
			clearInterval(obj.timer);
			
			obj.style.left=iTarget+'px';
			
			//alert('关了');
		}
		else
		{
			obj.style.left=left+'px';
		}
		
		document.title=iSpeed;
	}, 30);
}
</script>

<body>

<ul id="ul1">
	<li>首页</li>
	<li>关于我们</li>
	<li>产品</li>
	<li>联系方式</li>
    <li class="bg"><img src="../../../../../../../b.jpg" /></li>
</ul>

</body>

```

+ 碰撞运动
	- 撞到目标点，速度反转
	- 无重力的漂浮Div
		* 速度反转
	- 滚动条闪烁的问题
		* 过界后直接拉回
```
<script>
var iSpeedX=6;
var iSpeedY=8;

function startMove()
{
	setInterval(function (){
		var oDiv=document.getElementById('div1');
		var l=oDiv.offsetLeft+iSpeedX;
		var t=oDiv.offsetTop+iSpeedY;
		
		if(t>=document.documentElement.clientHeight-oDiv.offsetHeight)
		{
			iSpeedY*=-1;
			t=document.documentElement.clientHeight-oDiv.offsetHeight;
		}
		else if(t<=0)
		{
			iSpeedY*=-1;
			t=0;
		}
		
		if(l>=document.documentElement.clientWidth-oDiv.offsetWidth)
		{
			iSpeedX*=-1;
			l=document.documentElement.clientWidth-oDiv.offsetWidth;
		}
		else if(l<=0)
		{
			iSpeedX*=-1;
			l=0;
		}
		
		oDiv.style.left=l+'px';
		oDiv.style.top=t+'px';
	}, 30);
}
</script>

<body>
<input type="button" value="开始运动" onclick="startMove()" />
<div id="div1">
</div>
</body>

```

+ 加入重力
	- 反转速度的同时，减小速度
	- 纵向碰撞，横向速度也减小
	- 横向速度小数问题（负数）
```
<script>
var iSpeedX=1000;
var iSpeedY=0;

function startMove()
{
	setInterval(function (){
		var oDiv=document.getElementById('div1');
		
		iSpeedY+=3;
		
		var l=oDiv.offsetLeft+iSpeedX;
		var t=oDiv.offsetTop+iSpeedY;
		
		if(t>=document.documentElement.clientHeight-oDiv.offsetHeight)
		{
			iSpeedY*=-0.8;
			iSpeedX*=0.8;
			t=document.documentElement.clientHeight-oDiv.offsetHeight;
		}
		else if(t<=0)
		{
			iSpeedY*=-1;
			iSpeedX*=0.8;
			t=0;
		}
		
		if(l>=document.documentElement.clientWidth-oDiv.offsetWidth)
		{
			iSpeedX*=-0.8;
			l=document.documentElement.clientWidth-oDiv.offsetWidth;
		}
		else if(l<=0)
		{
			iSpeedX*=-0.8;
			l=0;
		}
		
		if(Math.abs(iSpeedX)<1)
		{
			iSpeedX=0;
		}
		
		if(Math.abs(iSpeedY)<1)
		{
			iSpeedY=0;
		}
		
		oDiv.style.left=l+'px';
		oDiv.style.top=t+'px';
		
		document.title=iSpeedX;
	}, 30);
}
</script>

<body>
<input type="button" value="开始运动" onclick="startMove()" />
<div id="div1">
</div>
</body>

```

+ 鼠标拖拽
	- 两点间距离求出速度
```
<script>
window.onload=function ()
{
	var oDiv=document.getElementById('div1');
	
	var lastX=0;
	var lastY=0;
	
	oDiv.onmousedown=function (ev)
	{
		var oEvent=ev||event;
		
		var disX=oEvent.clientX-oDiv.offsetLeft;       //鼠标到div左边距离
		var disY=oEvent.clientY-oDiv.offsetTop;
		
		document.onmousemove=function (ev)
		{
			var oEvent=ev||event;
			
			var l=oEvent.clientX-disX;
			var t=oEvent.clientY-disY;
			
			oDiv.style.left=l+'px';
			oDiv.style.top=t+'px';
			
			iSpeedX=l-lastX;     //lastX 前一个div的坐标
			iSpeedY=t-lastY;
			
			lastX=l;   //更新l t
			lastY=t;
			
			document.title='x:'+iSpeedX+', y:'+iSpeedY;
		};
		
		document.onmouseup=function ()
		{
			document.onmousemove=null;
			document.onmouseup=null;
			
			startMove();
		};
		
		clearInterval(timer);
	};
};

var timer=null;

var iSpeedX=0;   //全局变量 上面函数可以用 ；
var iSpeedY=0;

function startMove()
{
	clearInterval(timer);
	
	timer=setInterval(function (){
		var oDiv=document.getElementById('div1');
		
		iSpeedY+=3;   //重力
		
		var l=oDiv.offsetLeft+iSpeedX;   //l表示div左边到窗口左边的距离
		var t=oDiv.offsetTop+iSpeedY;    //t表示div左边到窗口顶端的距离
		
		if(t>=document.documentElement.clientHeight-oDiv.offsetHeight)
		{
			iSpeedY*=-0.8;  //剩以小数 是div向上的速度速度减小
			iSpeedX*=0.8;
			t=document.documentElement.clientHeight-oDiv.offsetHeight;
		}
		else if(t<=0)
		{
			iSpeedY*=-1;
			iSpeedX*=0.8;
			t=0;
		}
		
		if(l>=document.documentElement.clientWidth-oDiv.offsetWidth)
		{
			iSpeedX*=-0.8;
			l=document.documentElement.clientWidth-oDiv.offsetWidth;
		}
		else if(l<=0)
		{
			iSpeedX*=-0.8;
			l=0;
		}
		
		if(Math.abs(iSpeedX)<1)
		{
			iSpeedX=0;
		}
		
		if(Math.abs(iSpeedY)<1)
		{
			iSpeedY=0;
		}
		
		if(iSpeedX==0 && iSpeedY==0 && t==document.documentElement.clientHeight-oDiv.offsetHeight)
		{
			clearInterval(timer);
			alert('停止');
		}
		else
		{
			oDiv.style.left=l+'px';
			oDiv.style.top=t+'px';
		}
		
		document.title=iSpeedX;
	}, 30);
}
</script>

<body>
<input type="button" value="开始运动" onclick="startMove()" />
<div id="div1">
</div>
</body>

```

+ 运动终止条件
	- 弹性运动：距离足够近，并且速度足够小
	- 碰撞运动：距离足够近，并且速度足够小

* * *

## 面向对象

+ 什么是对象
	- 什么是收音机
	- 对象是一个整体，对外提供一些操作

+ 什么是面向对象
	- 使用对象时，值关注对象提供的功能，不关注其内部细节
	- 比如JQuery

+ 面向对象是一种通用思想，并非只是编程中能用，任何事情都可以用

### JS中的面向对象

+ 面向对象编程(OOP)的特点
	- 抽象：抓住核心问题
	- 封装：不考虑内部实现，只考虑功能使用
	- 继承：从已有对象上，继承出新的对象
		* 多重继承
		* 多态

+ 对象的组成
	- 方法——函数：过程、动态的
	- 属性——变量：状态、静态的

+ 为对象添加方法和属性
	- this详解，事件处理中this的本质
		* window
		* this——函数属于谁
	- 不能在系统对象中随意附加方法、属性，否则会覆盖已有方法、属性
	- object对象
```
<script>
var obj = new Object();

obj.name = bule;
obj.sex = boy;

obj.showName = function(){
	console.log(this.name);
}

obj.showSex = function(){
	console.log(this.sex);
}

obj.showName();
obj.showSex();
</script>
```

### 工厂方式

+ 什么是工厂
	- 原料
	- 加工
	- 出厂

+ 工厂方式
	- 用构造函数创建一个类
	- 什么是类、对象（实例）：模具和零件

+ 问题
	- 没有new
	- 函数重复定义

+ 加上new
	- 偷偷做了两件事
		* 替你创建了一个空白对象
		* 替你返回了这个对象
	-new和this

```
<script>
//用工厂方式构造对象

function createPerson(name, sex)	//构造函数
{
	//1.原料
	var obj=new Object();
	
	//2.加工
	obj.name=name;
	obj.sex=sex;
	
	obj.showName=function ()
	{
		alert('我的名字叫：'+this.name);
	};
	obj.showSex=function ()
	{
		alert('我是'+this.sex+'的');
	};
	
	//3.出厂
	return obj;
}

var p1=createPerson('blue', '男');
var p2=createPerson('leo', '女');

alert(p1.showName==p2.showName);

/*p1.showName();
p1.showSex();
p2.showName();
p2.showSex();*/
</script>

```

### 原型——prototype

+ 什么是原型
	- 原型是class，修改他可以影响一类元素
	- 在已有对象中加入自己的属性、方法
	- 原型修改对已有对象的影响

+ 为Array添加sum方法
	- 给对象添加方法，类似于行间样式
	- 给原型添加方法，类似于class

+ 原型的小缺陷
	- 无法限制覆盖

+ 用混合方式构造对象
	- 混合的的构造函数/原型方式
	- Mixed Constructor Function/Prototype Method

+ 原则
	- 构造函数：加属性
	- 原型：加方法

+ 对象命名规范
	- 类名首字母大写
```
<script>
function Person(name, sex)
{
	this.name=name;
	this.sex=sex;
}

Person.prototype.showName=function ()
{
	alert(this.name);
};

Person.prototype.showSex=function ()
{
	alert(this.sex);
};

var p=new Person('blue', '男');

p.showName();
p.showSex();
</script>

```

- - -

+ 把面向过程的程序，改写成面向对象的形式
	- 原则：
		* 不能有函数套函数、但可以有全局变量
	- 过程
		* onload	→	构造函数
		* 全局变量	→	属性
		* 函数		→	方法
	- 改错
		* this、事件、闭包、传参

+ 对象与闭包
	- 通过闭包传递this
```
<script>
window.onload=function ()
{
	var oTab=new TabSwitch('div1'); //oDate=new oDate(); TabSwitch('div1')与 oDate()前者叫构造                                       函数后者叫类。（有些人将二者分开，其实作用都一样，没有必要将其分开）
};

function TabSwitch(id)      
{
	var oDiv=document.getElementById(id); //this指的是构造函数所new出来的那个对象；
	this.aBtn=oDiv.getElementsByTagName('input');
	this.aDiv=oDiv.getElementsByTagName('div');
	var i=0;
	
	var _this=this;
	
	for(i=0;i<this.aBtn.length;i++)
	{
		this.aBtn[i].index=i;
		this.aBtn[i].onclick=function ()  //当this在事件或定时器中会将this赋值到定时器上或添加事件的对象上
		{
			_this.tab(this);//这个this指的就是aBtn[i]
		};
	}
}

TabSwitch.prototype.tab=function (oBtn)
{
	for(i=0;i<this.aBtn.length;i++)
	{
		this.aBtn[i].className='';
		this.aDiv[i].style.display='none';
	}
	oBtn.className='active';
	this.aDiv[oBtn.index].style.display='block';
};
</script>

<body>
<div id="div1">
	<input class="active" type="button" value="教育" />
	<input type="button" value="财经" />
	<input type="button" value="aaa" />
	<div style="display:block;">1asdfasdfds</div>
	<div>2xzcvxzcv</div>
	<div>5332342345</div>
</div>
</body>

```


### Json方式的面向对象

+ 把方法包在一个Json里
	- 有人管他叫——命名空间
```
<script>
var miaov={};

miaov.common={
	getByClass: function ()
	{
	},
	myAddEvent: function ()
	{
	}
};

miaov.fx={
	startMove: function ()
	{
	},
	drag: function ()
	{
	}
};

miaov.common.getByClass()
</script>

```
	- 在公司里，把同一类方法，包在一起
```
var p1={
	name: 'blue',
	sex: '男',
	showName: function ()
	{
		alert('我的名字是：'+this.name);
	},
	showSex: function ()
	{
		alert('我的性别是'+this.sex+'的');
	}
};

var p2={
	name: 'leo',
	sex: '男',
	showName: function ()
	{
		alert('我的名字是：'+this.name);
	},
	showSex: function ()
	{
		alert('我的性别是'+this.sex+'的');
	}
};

p1.showSex();
p2.showName();
</script>
```

+ 面向对象的拖拽
	- 改写原有拖拽

+ 对象的继承
	- 什么是继承
		* 在原有类的基础上，略作修改，得到一个新的类
		* 不影响原有类的功能
	- instanceof运算符
		* 查看对象是否是某个类的实例

+ 限制范围的拖拽类
	- 构造函数伪装
		* 属性的继承
		* 原理：欺骗构造函数
		* call的使用

+ 原型链
	- 方法的继承
		* 原理：复制方法
	- 覆盖原型和方法复制
```
<script>
function Person(name, sex)
{
	this.name=name;
	this.sex=sex;
}

Person.prototype.showName=function ()
{
	alert(this.name);
};

Person.prototype.showSex=function ()
{
	alert(this.sex);
};

//-------------------------------------

function Worker(name, sex, job)
{
	//this->new出来的Worker对象
	//构造函数伪装		调用父级的构造函数——为了继承属性
	Person.call(this, name, sex);
	
	this.job=job;
}

//原型链		通过原型来继承父级的方法
//Worker.prototype=Person.prototype;

for(var i in Person.prototype)
{
	Worker.prototype[i]=Person.prototype[i];
}

Worker.prototype.showJob=function ()
{
	alert(this.job);
};

var oP=new Person('blue', '男');
var oW=new Worker('blue', '男', '打杂的');

oP.showName();
oP.showSex();

oW.showName();
oW.showSex();
oW.showJob();
</script>

```

+ 本地对象（非静态对象）
	- 什么是本地对象
	- 常用对象
		* Object、Function、Array、String、Boolean、Number、Date、RegExp、Error

+ 内置对象（静态对象）
	- 什么是本地对象
		* Global、Math

+ 宿主对象（由浏览器提供的对象）
	- DOM、BOM

* * *

## PHP语言基础

+ 后台语言作用
	- 静态页面和动态页面的区别

+ PHP基本语法
	- <?php和?>
	- echo
	- 定义变量
	- PHP与HTML混编

+ MVC基本概念

+ 获取表单数据
	- \_GET、\_POST、\_FILE
	- \_COOKIE
	- 例子：ajax用户登录

### Mysql数据库

+ 什么是数据库
	- 存放数据的仓库
	- sql——Structured Query Language

+ 数据库基本语句
	- 四大语句
		* 查询——SELECT：WHERE、ORDER BY、LIMIT
		* 添加——INSERT
		* 修改——UPDATE
		* 删除——DELETE
	- phpmyadmin的使用

* * *

## JS库封装

+ VQuery类
	- elements属性，存储选中的元素

+ 参数
	- typeof的使用
	- 字符串
		* class、ID、tagName
	- 函数
		* 事件绑定
	- 对象
		* 直接插入

+ $函数

+ 绑定事件
	- click方法
		* 显示隐藏——show、hide方法
	- hover方法
		* 解决函数中的this问题
		* call、apply
	- toggle方法
		* 点击计数
		* arguments的使用 

+ CSS方法
	- 简单形式——设置、获取
	- 获取计算后的样式

+ attr方法

+ eq方法
+ find方法
+ index方法

### 高级特性

1. CSS方法
	+ 同时设置多个——for in
	+ 链式操作

2. 链式操作
	+ 函数“链式操作”
	+ css方法链式操作
	+ json的使用

3. 阻止冒泡、默认事件

4. 插件机制
	+ 可以任意扩展库的功能

5. extend
	+ 为VQuery添加方法
		- 原型

6. 实例
	+ animate——动画
	+ drag——拖拽

* * *

## 高级桌面应用

+ 图片预加载
	1. 不直接修改img元素的src，加载完成后，再显示
	2. 用到的事件
		- onload，加载完成后显示图片
		- onerror，加载失败时，进行其他处理(跳过、显示信息等)
	3. 预判加载——自动加载下一张图片
	4. 延迟加载——先加载HTML，然后再加载页面图片

* * *

## 正则表达式

+ 复习字符串操作
	- search			查找
	- substring		获取子字符串
	- charAt			获取某个字符
	- split			分割字符串，获得数组

+ 找出字符串中的所有数字
	- 用传统字符串操作完成
	- 用正则表达式完成

+ 什么是正则表达式
	- 什么叫“正则”
		* 规则、模式
	- 强大的字符串匹配工具
	- 是一种正常人类很难读懂的文字

+ RegExp对象
	- JS风格——new RegExp(“a”, “i”)
	- perl风格——/a/i
```
<script>
var str='abcdef';
//var re=new RegExp('a', 'i');
var re=/a/i;

alert(re.test(str));
</script>

```

+ search
	- 字符串搜索
		* 返回出现的位置
		* 忽略大小写：i——ignore
		* 判断浏览器类型
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

+ match
	- 获取匹配的项目
		* 量词：+
		* 量词变化：\d、\d\d和\d+
		* 全局匹配：g——global
		* 例子：找出所有数字
```
<script>
var str='sdf e443 fedef  55 66gg 333322312 dff 99';
var re=/\d+/g;

alert(str.match(re));

```

+ replace
	- 替换所有匹配
		* 返回替换后的字符串
		* 例子：敏感词过滤
		* | 或则
```
<script>
var str='abacdAef';

alert(str.replace(/a/gi, 'T'));

name = "Doe, John"; 
name.replace(/(\w+)\s*, \s*(\w+)/, "$2 $1"); 
</script>

```

+ 任意字符
	- [abc]
		* 例子：o[usb]t——obt、ost、out
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
		* 例子：id[0-9]——id0、id5

+ 排除
	- [^a] ^ 除了
		* 例子：o[^0-9]t——oat、o?t、o t

+ 组合
	- [a-z0-9A-Z]

+ 实例：偷小说
	- 过滤HTML标签
		* 自定义innerText方法
```
window.onload=function ()
{
	var oTxt1=document.getElementById('txt1');
	var oTxt2=document.getElementById('txt2');
	var oBtn=document.getElementById('btn1');
	
	oBtn.onclick=function ()
	{
		var re=/<[^<>]+>/g;
		
		oTxt2.value=oTxt1.value.replace(re, '');
	};
};
</script>
</head>

<body>
<textarea id="txt1" rows="10" cols="40"></textarea>
<input id="btn1" type="button" value="转换" />
<textarea id="txt2" rows="10" cols="40"></textarea>
</body>

```

+ 转义字符
	- .（点）——任意字符
	- \d、\w、\s 数字 数字字母下划线[a-z0-9_A-Z] 空白
	- \D、\W、\S 除了数字 除了数字字母下划线 除了空白字符

+ 什么是量词
	- 出现的次数
	- {n,m}，至少出现n次，最多m次
	- 例子：查找QQ号
```
<script>
var str='我的QQ是：258344567，你的是4487773吗？';

var re=/[1-9]\d{4,10}/g;

alert(str.match(re));
</script>

```

+ 常用量词
	- {n,}	至少n次
	- *		任意次	{0,} 建议不用
	- ？	零次或一次	{0,1}
	- +	一次或任意次{1,}
	- {n}	正好n次

+ 高级表单校验
	- 校验邮箱
		* 行首行尾
		* 去除空格：^\s*|\s*$
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

	- 匹配中文：[\u4e00-\u9fa5]
	- 完美版getByClass
		* 单词边界：\b
