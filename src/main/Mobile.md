[TOC]

* * *

# 移动端交互及常用事件

* * *

## 移动端event相关问题

### 移动端基础事件

+ touch事件 在 chrome的模拟器下，部分版本 通过on的方式来添加事件无效

1. touchstart 手指触摸

2. touchmove 手指移动

3. touchend 手指离开

4. 监听事件
`el.addEventListener('event',fn,false);`
	+ 不会存在前后覆盖的问题
	+ 在chrome的模拟器下可以一直识别

5. 解除事件
`el.removeEventListener('event',fn,false);`

6. 冒泡和捕获
	+ false 冒泡：他会把事件一直向上传递 从下向上传递
	+ true 捕获：从上向下传递

### event

+ 事件函数中 默认的第一个 参数 是 event对象
```
	touches 当前屏幕上的手指列表
	targetTouches 当前元素上的手指列表
	changedTouches 触发当前事件的手指列表
```

1. e.preventDefault(); 阻止默认事件
	+ 阻止掉：document touchstart的默认事件，可以解决一下问题：
		1. 阻止页面上的文字被选中    -- 可以通过阻止冒泡使某个元素上的文字被选中
		2. 阻止页面上的系统菜单
	+ 隐患:
		页面上的所有滚动条失效

2. e.stopPropagation(); 阻止冒泡

### 移动端的问题

1. 取消橡皮筋效果
```
阻止 document的 	touchstart 或者 touchmove，可以清除系统默认的回弹

document.addEventListener(
	"touchmove",
	function(e) {
		e.preventDefault();
	}
);
```

2. 阻止文字选中

3. 事件点透问题
```
PC端鼠标事件 在移动端也可以正常使用，但是注意 事件的执行 会有300ms的延迟
	
		事件点透：
			1. 在移动端 PC事件 有 300ms的延迟
			2. 我们点击了页面之后，浏览器会记录点击下去的坐标
			3. 300ms后，在该坐标找到现在在这的元素 执行事件
		解决办法：
			1. 阻止默认事件	(部分安卓机型不支持)
			2. 不在移动端使用鼠标事件，不用a标签做页面跳转
```

### transform2D

1. rotate() 旋转 deg

2. scale() 缩放 数字

3. translateX x位移 translateY y位移

4. skewX() skewY() 斜切 deg

* * *

## 移动端适配

1. 适配
	+ rem适配
		- 注意最小字体

	+ viewport适配
		- location.reload()

	+ 横竖屏事件 orientationchange

2. 页面的样式设置
	+ -webkit-text-size-adjust:100%;
	+ -webkit-tap-highlight-color:rgab(0,0,0,0);
	+ -webkit-appearance:none;
	+ 默认字体设置:Helvetica;

3. 页面结构设置
	+ 取图大小问题
	+ IOS下超出问题
	+ 模拟固定定位
		- -webkit-overflow-scrolling:touch;
	+ font-boosting问题

* * *

## 3D