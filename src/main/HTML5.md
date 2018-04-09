[TOC]

* * *

# HTML5

* * *

## HTML标签

* * *

### meta

+ 页面关键词
	`<meta name="keywords" conten="you tags">`

+ 页面描述
	`<meta name="description" conten="150 words">`

+ 搜索引擎索引方式
	`<meta name="robots" conten="index,follow">`
	- all：文件将被检索，且页面上的链接可以被查询
	- none：文件将不被检索，且页面上的链接不可以被查询
	- index：文件将被检索
	- follow：页面上的链接可以被查询
	- noindex：文件将不被检索
	- nofollow：页面上的链接不可以被查询

+ 页面重定和刷新
	`<meta http-equiv="refresh" conten="0;url=">`

+ 其他
	`<meta name="author" content="author name" /> <!-- 定义网页作者 -->`
	`<meta name="google" content="index,follow" />`
	`<meta name="googlebot" content="index,follow" />`
	`<meta name="verify" content="index,follow" />`

+ 移动设备
	`<meta name="viewport" content="width=device-width, initial-scale=1.0,maximum-scale=1.0, user-scalable=no"/> <!-- 'width=device-width' 会导致 iPhone 5 添加到主屏后以 WebApp 全屏模式打开页面时出现黑边  -->`

+ WebApp全屏模式
	`<meta name="apple-mobile-web-app-capable" content="yes" /> <!-- 启用 WebApp 全屏模式 -->`

+ 隐藏状态栏/设置状态栏颜色
	`<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />`

+ 添加到主屏后的标题
	`<meta name="apple-mobile-web-app-title" content="标题">`

+ 忽略数字自动识别为电话号码
	`<meta content="telephone=no" name="format-detection" />`

+忽略识别邮箱
	`<meta content="email=no" name="format-detection" />`

+ 申明编码
	`<meta charset='utf-8' />`

+ 优先使用 IE 最新版本和 Chrome
	`<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />`
	<!-- 关于X-UA-Compatible -->
	`<meta http-equiv="X-UA-Compatible" content="IE=6" ><!-- 使用IE6 -->`
	`<meta http-equiv="X-UA-Compatible" content="IE=7" ><!-- 使用IE7 -->`
	`<meta http-equiv="X-UA-Compatible" content="IE=8" ><!-- 使用IE8 -->`

+ 禁止浏览器从本地计算机的缓存中访问页面内容
	`<meta http-equiv="Pragma" content="no-cache">`

+ 浏览器不会自动调整文件的大小,也就是说是固定大小,不会随着浏览器拉伸缩放。
	`<meta name="MobileOptimized" content="240"/>`

### html

+ div h1~h6 p ul ol li dl dt dd span strong em i img a input textarea select ...

### html5 更加语义化：

+ nav 导航 

+ header 头部 

+ main 主体

+ footer 底部

+ figure 放图片

```
<figure>
	<img src="" alt="">
	<figcaption>是figure的标题，需要和figure配合使用</figcaption>
</figure>

```

+ section 定义文档中的某个区块

	- 只出现h1-h6 和内容 p img，展示型的列表如标题段落和图片的

+ datalist 搜索联想，~~很少用~~

```
<input type="text" list="abcd">
<datalist id="abcd">
	<option value="10086">提示词</option>
	<option value="10087">提示词</option>
	<option value="10088">提示词</option>
	<option value="10089">提示词</option>
</datalist>

```

+ detalis 用户补充细节，~~用处不大~~

	- summary 为detalis的标题，不写默认为**详细信息**
	- open 属性 可默认开启

```
<details open>
	<summary>标题</summary>
	内容内容内容..........
</details>

```

+ audio 音频

	- 之前在网页上播放音乐，通过flash Action Script 3.0

```
<audio src="yp.mp3" controls autoplay muted loop preload>
</audio>

<audio controls autoplay muted loop preload>
	<source src="yp.ogg" type="audio/ogg">
	<source src="yp.mp3" type="audio/mp3">
	<source src="yp.wav" type="audio/wav">
</audio>
<!-- 兼容不同格式 -->

<!-- 
- controls 只带播放条
- autoplay 自动播放
- muted 静音
- loop 循环
- preload 预加载
-->

```

+ src与href区别
	- href 引入资源 可以并行加载 link . href
	- src 替代资源 当该文件没有加载完，不会进行后面的操作

+ video 视频

```
<input type="button" value="播放"><br>
<video poster="i.jpg" width="600" height="400" controls id="video">
  <source src="v/mov_bbb.mp4" type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'>
  <source src="v/mov_bbb.ogv" type='video/ogg; codecs="theora, vorbis"'>
  <source src="v/mov_bbb.webm" type='video/webm; codecs="vp8, vorbis"'>
</video>

<script>

  var oBtn = document.getElementsByTagName('input')[0];
  var oVideo = document.getElementById('video');

  oBtn.onclick = function(){
            oVideo.play();
  }

</script>

<!-- 
- controls 只带播放条
- autoplay 自动播放
- muted 静音
- loop 循环
- preload 预加载 当 元素身上出现了 autoplay  默认就是预加载的
- poster="i.jpg"  封面（用在未播放之前的图片）
-->

```

+ HTML 5 全局 contenteditable 属性
	- 语法 `<element contenteditable="value">`

值 | 描述
---- | ----
true | 规定可以编辑元素内容
false | 规定无法编辑元素内容
classname | 继承父元素的 contenteditable 属性

+ input type=""
	- 之前  text 文本 button 按钮 submit 提交 password 密码 checkbox 复选框 radio 单选框 file 文件 reset 重置
	- html5新增
		1. date 日期
		2. number 数字 在PC段带上下箭头 在移动端数字键盘、苹果自带输入弹出的
			min="0" 最小 max="4" 最大 step="2" 每次加2
		3. range 滑块
			min="0" 最小 max="100" 最大 step="1" 每滑动1 value="50"
		4. search 搜索 回车
		5. url 路径
		6. tel 电话
	- `<input type="text" autofocus autocomplete="" pattern="[0-9]{1}">`
		1. autofocus 自动聚焦
		2. autocomplete 是否自动完成表单
				on / off
		3. pattern 正则
	- IOS专用
		1. autocapitalize="off" 关闭IOS键盘首字母自动大写
		2. autocorrect="off" 关闭IOS输入自动修正

### html兼容低版本浏览器全键盘

+ html5shiv.min.js引入来支持

```
<!--[if lt ie 9]>
<script src="html5shiv.min.js"></script>
<![endif]-->

```

* * *