[TOC]

* * *

# CSS3 [兼容查询](https://www.caniuse.com "兼容查询")

* * *

## 选择器

* * *

### [元素选择符](http://css.doyoe.com/)

选择符 | 名称 | 版本 | 描述
---- | ---- | ---- | ----
* | 通配选择符 | CSS2 | 所有元素
E | 类型选择符 | CSS1 | 以文档语言类型作为选择符
E#myid | id选择符 | CSS1 | 以唯一标识符id属性等于myid的E对象作为选择符
E.myclass | class选择符 | CSS1 | 以class属性包含myclass的E对象作为选择符

### [关系选择符](http://css.doyoe.com/)

选择符 | 名称 | 版本 | 描述
---- | ---- | ---- | ----
E F | 包含选择符 | CSS1 | 选择所有被E元素包含的F元素
E>F | 子选择符 | CSS2 | 选择所有作为E元素的子元素F
E+F	| 相邻选择符 | CSS2 |	选择紧贴在E元素之后F元素
E~F	| 兄弟选择符 | CSS3 |	选择E元素所有兄弟元素F

### [属性选择符](http://css.doyoe.com/)

选择符 | 版本 | 描述
---- | ---- | ----
E[att] | CSS2	| 选择具有att属性的E元素
E[att="val"] | CSS2 |	选择具有att属性且属性值等于val的E元素
E[att~="val"]	| CSS2 | 选择具有att属性且属性值为一用空格分隔的字词列表，其中一个等于val的E元素
E[att^="val"]	| CSS3 | 选择具有att属性且属性值为以val开头的字符串的E元素
E[att$="val"]	| CSS3 | 选择具有att属性且属性值为以val结尾的字符串的E元素
E[att*="val"]	| CSS3 | 选择具有att属性且属性值为包含val的字符串的E元素
E[att&#124;="val"]	| CSS2 | 选择具有att属性且属性值为以val开头并用连接符"-"分隔的字符串的E元素，如果属性值仅为val，也将被选择 | (&#124; == |)

### [伪类选择符](http://css.doyoe.com/)

选择符 | 版本 | 描述
---- | ---- | ----
E:link | CSS1 | 设置超链接a在未被访问前的样式
E:visited | CSS1 | 设置超链接a在其链接地址已被访问过时的样式
E:hover	| CSS1/2 | 设置元素在其鼠标悬停时的样式
E:active | CSS1/2 | 设置元素在被用户激活（在鼠标点击与释放之间发生的事件）时的样式
E:focus | CSS1/2 | 设置元素在成为输入焦点（该元素的onfocus事件发生）时的样式
E:lang(fr) | CSS2 | 匹配使用特殊语言的E元素
E:not(s) | CSS3 | 匹配不含有s选择符的元素E
E:root | CSS3 | 匹配E元素在文档的根元素
E:first-child | CSS2 | 匹配父元素的第一个子元素E
E:last-child | CSS3	| 匹配父元素的最后一个子元素E
E:only-child | CSS3	| 匹配父元素仅有的一个子元素E
E:nth-child(n) | CSS3 | 匹配父元素的第n个子元素E （odd 奇数 even 偶数）
E:nth-last-child(n) | CSS3 | 匹配父元素的倒数第n个子元素E
E:first-of-type | CSS3 | 匹配同类型中的第一个同级兄弟元素E
E:last-of-type | CSS3 | 匹配同类型中的最后一个同级兄弟元素E
E:only-of-type | CSS3 | 匹配同类型中的唯一的一个同级兄弟元素E
E:nth-of-type(n) | CSS3 | 匹配同类型中的第n个同级兄弟元素E
E:nth-last-of-type(n) | CSS3 | 匹配同类型中的倒数第n个同级兄弟元素E
E:empty | CSS3 | 匹配没有任何子元素（包括text节点）的元素E
E:checked | CSS3 | 匹配用户界面上处于选中状态的元素E(用于input type为radio与checkbox时)
E:enabled | CSS3 | 匹配用户界面上处于可用状态的元素E
E:disabled | CSS3 | 匹配用户界面上处于禁用状态的元素E
E:target | CSS3 | 匹配相关URL指向的E元素
@page:first | CSS2 | 设置页面容器第一页使用的样式。仅用于@page规则
@page:left | CSS2 | 设置页面容器位于装订线左边的所有页面使用的样式。仅用于@page规则
@page:right	| CSS2 | 设置页面容器位于装订线右边的所有页面使用的样式。仅用于@page规则

### [伪对象选择符](http://css.doyoe.com/)

选择符 | 版本 | 描述
---- | ---- | ----
~~E:first-letter~~/E::first-letter | CSS1/3 | 设置对象内的第一个字符的样式
~~E:first-line~~/E::first-line | CSS1/3 | 设置对象内的第一行的样式
~~E:before~~/E::before | CSS2/3	| 设置在对象前（依据对象树的逻辑结构）发生的内容。用来和content属性一起使用
~~E:after~~/E::after | CSS2/3 | 设置在对象后（依据对象树的逻辑结构）发生的内容。用来和content属性一起使用
E::placeholder | CSS3 | 设置对象文字占位符的样式
E::selection | CSS3 | 设置对象被选择时的颜色

### 伪类伪元素

+ **伪类：hover focus 不会产生东西，只会执行一个样式而已**
+ **伪元素：在你的结构中添加一个元元素出来(::after ::before)，可以给他加任何的样式。（需要添加content才能看到，没有加content就等于没有加伪元素一样）**

+ 伪元素content

值 | 描述
---- | ----
string | 定义文本内容
~~url~~ | 定义url
**attr(x)** | 定义显示在该选择器之前或之后的选择器的属性

+ 示例
	1. `div::after {content: '';}`
	2. `div::after {content: url('./image.png');}`
	3. `div::after {content: attr(title);}`

* * *

## 样式

* * *

### box-shadow

+ 语法
	`box-shadow:inset x y enhance size color;`

参数 | 描述
---- | ----
inset | 内阴影（一般不写，省略就是外阴影）
x | x方向偏移量，可以为正/负值
y | y方向偏移量，可以为正/负值
size | 模糊大小，必须为正值，如：10px
enhance | 增强，可选参数（就是有多少像素是实色的）
color | 阴影颜色

+ 可以写多组
	`box-shadow: 0 -2px 5px green,0 2px 5px hotpink, -2px 0 5px pink, 2px 0  5px orange;`
	
> *最简单就是弄图片*

### text-shadow

+ 语法
	`text-shadow:x y enhance size color;`

参数 | 描述
---- | ----
x | x方向偏移量，可以为正/负值
y | y方向偏移量，可以为正/负值
size | 模糊大小，必须为正值，如：10px
enhance | 增强，可选参数（就是有多少像素是实色的）
color | 阴影颜色

---

### border-radius

+ 语法
	- `border-radius: size;`
	- `border-radius: leftTop rightTop rightBottom leftBottom;`
	- `border-radius: n[2~3];`

参数 | 描述
---- | ----
size | 大小可以写具体数字也可写百分比，1. 只有一个参数说明四个角都是；2. 四个参数：四个角；3. 其他况没有的就是它的对角

#### [border三角生成工具](http://apps.eky.hk/css-triangle-generator/zh-hant "生成三角工具")

### ~~calc~~

```

 .box{
      width: calc(200px - 2 * 20px);
      height: 200px;
      background-color: yellow;
      border: solid 20px red;
    }

```

> 保持距离不变，如上width:200px不变，一般不常用

### **box-sizing**

+ 语法
```

.box {
	width:300px;
	height:300px;
	border:solid 10px red;
	background-color:yellow;
	box-sizing:border-box/content-box;
}

```

参数 | 描述
---- | ----
content-box | 默认值 跟没给没有区别
border-box | 元素的宽度 就是给的宽度 不会去计算padding和border值，margin除外

### background

+ 之前
	- background-color: color;
	- background-image: url();
	- background-position: x y;
	- background-repeat: no-repeat;
	- opacity: .5; // 透明度
	- background: url color x y / cover repeat; // 注意只有斜线同时在x，y后才能写cover或则contain

+ 现在
	- background-color: rgba(255,255,255,.5); // rgba 可设置颜色半透明度
	- background-size: x y; // x,y可以是百分比，也可以是具体大小；注意auto自动
	- background-size: contain/cover; // 等比例缩小/等比例放大 来适应元素/填满元素
	- background-origin: padding-box/content-box/border-box; // 背景图像绘制区域 pading/content/border
	- background-clip: padding-box/content-box/border-box; // 背景绘制区域 pading/content/border
	- background: url color x y / cover repeat, url color x y / cover repeat...; // 支持叠加 先写在上面

### 渐变

+ **线性渐变**
	`background-image: linear-gradient(direction,color1 number%,color2 number%...);`

方向参数direction | 描述
---- | ----
to top | 方向下到上 颜色1 > 颜色2
to right | 方向左到右 颜色1 > 颜色2
to bottom | 方向上到下 颜色1 > 颜色2
to left | 方向右到左 颜色1 > 颜色2
数字deg | 多少度 颜色1 > 颜色2

> 颜色可以是多个用逗号分开，颜色后面可以跟百分比值，颜色前后差值就是渐变区域，角度数字可以是负数

+ 重复性线性渐变
	`background-image: repeating-linear-gradient(red 0, yellow 10px);`

+ *径向渐变*
	`background-image: radial-gradient(cX cY, shape, color1 number%,color2 number%...);`

参数 | 描述
---- | ----
cX cY | 渐变圆心 不写默认圆心
shape | 渐变形状 circle 表示圆 ellipse 椭圆 不写默认圆形
color | 同线性渐变一样
大小 | closest-side - 最近的边儿 farthest-side - 最远的边儿 closest-corner - 最近的角落 farthest-corner - 最远的角落

>大小和形状不能同时出现

+ *重复性径向渐变*
	`background-image: repeating-radial-gradient(red 20px, yellow 30px);`

* * *

## 弹性布局

+ display:-webkit-box;
	- 旧版 标准的（兼容性好一些）
+ display:-webkit-flex;
+ display:flex;
	- 新版的标准 兼容性稍微的弱一些

* * *

### ~~-webkit-box~~

+ 语法

```

father {
	display: -webkit-box;
	-webkit-box-pack: end;
	-webkit-box-direction: reverse;
	-webkit-box-align: center;
	-webkit-box-orient: vertical;
	/*
		father 是一个弹性的盒子

		-webkit-box-pack: 对齐方式水平方向
    start 左 | center 中 | end 右 | justify 分散
    不和-webkit-box-flex同时使用


    -webkit-box-direction: reverse;
		是否反转 reverse 反转 normal 正常

		-webkit-box-align: 对齐方式垂直方向
    start 左 | center 中 | end 右 | baseline 基线 | stretch(默认值)

    -webkit-box-orient:  排列方式
		不给 默认为 水平
		horizontal 水平 vertical 垂直
		【排列方式影响对齐方式】

	 */
	
}

father children {
	-webkit-box-flex: 1;
	/*
		均分剩余宽度：
			1 代表几份的意思(可以分别给孩子设几份)
	 */
}

```

### **flex**

```

father {
	display: flex;
	flex-direction: row; // 排列方式 决定主轴方向
	flex-wrap: nowrap; // 换行
	justify-content: flex-end; // 水平对齐方式
	align-items: center; // 垂直对齐方式
	align-content: center; // 多行对齐方式 注意：需要多行才行 多根轴线对齐方式
}

```

属性 | 参数 | 描述
---- | ---- | ----
display | flex | 给某个开启弹性布局
flex-direction | row | 水平方向，起点在左端（默认值）
flex-direction | row-reverse | 水平方向，起点在右端
flex-direction | column | 垂直方向，起点在上沿
flex-direction | column-reverse | 垂直方向，起点在下沿
flex-wrap | nowrap | 单行
flex-wrap | wrap | 换行（宽度不够自动换行，前提不参加收缩）
flex-wrap | wrap-reverse | 换行并反转
justify-content | flex-start | 左对齐
justify-content | flex-end | 右对齐
justify-content | center | 居中对齐
justify-content | space-between | 两端对齐（之间间隔相等）
justify-content | space-around | 每个项目两侧的间隔相等
align-items | flex-start | 起点对齐
align-items | flex-end | 终点对齐
align-items | center | 中点对齐
align-items | baseline | 基线对齐
align-items | stretch | 默认值（未设置高度或设为auto，将占满容器的高度）
align-content | flex-start | 左对齐
align-content | flex-end | 右对齐
align-content | center | 居中对齐
align-content | space-between | 两端对齐（之间间隔相等）
align-content | space-around | 每个项目两侧的间隔相等
align-content | stretch | 轴线占满整个交叉轴

+ 当这两个属性遇到了
  flex-direction: column / column-reverse  整个顺序就都变了

```
father children {
	flex: 1;
	flex-shrink: 0; // 为复杂布局而生 缩小比例
	flex-grow: 1; // 扩展比例
	align-self: flex-end; // 允许单个项目有与其他项目不一样的对齐方式
	flex-basis: 500px; // 最小分配空间
}

```

属性 | 参数 | 描述
---- | ---- | ----
flex | number | **均分**宽度 number（阿拉伯数字） 份
flex-shrink | number | 此时剩余空间不足时都等比例缩小，0 表示不参加收缩比例；若没写该属性，则为 1；number：1 2 3 ...
flex-grow | number | 剩余空间是正值的时，伸缩项目相对于伸缩容器里其他伸缩项目能分配到空间比例，若没写该属性，则为0 ，0代表不参与扩展
align-self | auto | 默认值auto，表示继承父级元素的align-items，如果没有父级，则等同于stretch
align-self | flex-start |
align-self | flex-end |
align-self | center |
align-self | baseline |
align-self | stretch |
flex-basis | number | 再分配之前，页已经分配得到空间（最小空间）


+ 剩余不足等比缩小计算公式
`剩余宽度：总体宽度 - 自适应两个元素的宽度的和`
`缩小后的：(每个元素的实际宽度 / 总宽度) * 剩余宽度`

+ align-self 属性 对应align-items

+ **缩写方式**
` flex: none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]`
```
flex:1 0 500px;<!-- 可以写两个参数 -->

```

### flex兼容性问题

```

 解决UC、微信兼容性问题
 安卓平台的uc和微信
 	要加-webkit-
  	display: flex;
    display: -webkit-box;
    flex: 1;
    -webkit-box-flex: 1;
    -moz-box-flex: 1;
    box-flex: 1;
    webkit、moz、原生

    align-items: center;
    -webkit-box-align: center;
    flex-direction: column;
    box-orient: vertical;
    webkit、moz、原生


```

### user-modify

+ 语法
`div {-webkit-user-modify: read-write;}`

参数 | 描述
---- | ----
read-only | 只读
read-write | 内容可读写
read-write-plaintext-only | 内容可读写，但富粘贴的文本格式会丢失

### user-select

+ 语法
`div {-webkit-user-select: read-write;}`

参数 | 描述
---- | ----
auto | 用户可选内容
none | 不可选
text | 可选文本

### [~~倒影~~](http://www.w3chtml.com/css3/properties/border/box-reflect.html)

+ 语法
```

box-reflect：none | <direction> <offset>? <mask-box-image>?<direction> = above | below | left | right
<offset> = <length> | <percentage>
<mask-box-image> = none | <url> | <linear-gradient> | <radial-gradient> | <repeating-linear-gradient> | <repeating-radial-gradient>
默认值：none

```

参数 | 描述
---- | ----
none | 无倒影
above<direction> | 指定倒影在对象的上边
below<direction> | 指定倒影在对象的下边
left<direction> | 指定倒影在对象的左边
right<direction> | 指定倒影在对象的右边
offset | 可以是数字或者百分比,zh指倒影与对象之间的间隔 可以为负值
url | 使用绝对或相对地址指定遮罩图像
渐变 | 用渐变做遮罩层

+ 示例
	1. `div {-webkit-box-reflect: <direction>;} // 可取 above below left right`
	2. `div {-webkit-box-reflect: left 10px;} // 也可写百分比`
	3. `div {-webkit-box-reflect: left 10px -webkit-linear-gradient(top,rgba(250,250,250,0),rgba(250,250,250,.0) 30%,rgba(250,250,250,0.3));} // 可以线性 径向 重复`
	4. `div {-webkit-box-reflect: left 10px url(a/b/img.png);}`


### ~~滤镜~~

+ 语法
`filter: none | blur() | brightness() | contrast() | drop-shadow() | grayscale() | hue-rotate() | invert() | opacity() | saturate() | sepia() | url();`

参数 | 描述
---- | ----
none | 无SVG滤镜效果
blur | 模糊效果 px
brightness | 亮度 %/number
contrast | 对比度 %/number
grayscale | 灰度 %/number
hue-rotate | 色相旋转 deg
invert | 反色 %/number
opacity | 透明度 %/number
saturate | 饱和度 %/number
sepia | 褐色成都 %/number
drop-shadow | 阴影 (x y radius color)

* * *

## [动画](https://gudh.github.io/ihover/dist/index.html)

* * *

### 变换

+ 语法
`div { transform: translate(300px);}`

参数 | 描述
---- | ----
translate | 2D平移 px 默认 第一个参数 x 第二个参数y；如果y没给，为0；translateX/Y/Z(需要开启3D才能看到)；支持正负值
scale | 缩放 number(倍数) 原始大小的倍数； 不能为负； 原始比例1；如果没有写方向，默认是 x和y；scaleX/Y/~~Z~~
**rotate** | 旋转角度 deg；默认为Z轴；rotateX/Y/Z；支持正负值
~~skew~~ | 斜切 deg；skewX/Y；支持正负值；如果没写第二个参数默认为0

+ 变幻的轴心
	- 语法
	`div { transform-origin: center center;}`

参数 | top | left | right | bottom | center | number px
----| ----| ---- | ---- |---- | ---- | ----

> 以哪个点做为 圆点

+ 开启3D
	- 语法
	`div {transform-style: preserve-3d;}`

参数 | 描述
---- | ----
flat | 2D空间平面
preserve-3d | 3D空间

+ 景深
	- 语法
	`divFather { persective: 200px;}`

> 给变换的父亲加 值越小代表我们离物体越近 一般推荐大家使用500px~800px

> **变换任何情况下都是先做位移再做其他的**

+ 事例代码翻牌

```

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>翻牌案例</title>
    <style>
        .box{
            position: relative;
            width: 300px;
            height: 500px;
            margin: 30px auto;
            perspective: 500px;
        }
        .pai{
            transition: 5s;
            transform-style: preserve-3d;
            background-color: yellow;
        }
        .pai,.z,.f{
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
        }
        .z{
            background: url(z.jpg) center center / cover no-repeat;
            transform: translateZ(1px);
        }

        .f{
            background: url(f.jpg) center center / cover no-repeat;
            transform: translateZ(-1px) rotateY(180deg);
            /*
                永远先做位移 后做其他的。
            */
        }

        .box:hover .pai{
            transform: rotateY(180deg);
        }
    </style>
</head>
<body>
    <div class="box">
        <div class="pai">
            <div class="z"></div>
            <div class="f"></div>
        </div>
    </div>
</body>
</html>

```

### [过渡](http://www.w3school.com.cn/cssref/pr_transition.asp "transition")

+ 一次动画 需要我们手动的去触发它

+ 语法
`div {transition: 那个属性动 运动在多长时间完成 延迟时间 运动类型;} // 延迟时间必须在运动时间后，其他可变换位置先后；可写多组逗号分开`

参数 | 值 | 描述
---- | ---- | ----
那个属性动 | none/all/width... | 没有属性获得过渡/所有属性/CSS属性名称多个可以逗号分开写
运动在多长时间完成 | number s | 单位 s；默认为0不会有效果
延迟时间 | number s | 单位 s；默认为0
运动类型 | 查看下表 | ....

+ 运动类型

值 | 描述
---- | ----
linear | 规定以相同速度开始至结束的过渡效果（等于 cubic-bezier(0,0,1,1)）
ease | 规定慢速开始，然后变快，然后慢速结束的过渡效果（cubic-bezier(0.25,0.1,0.25,1)）
ease-in | 规定以慢速开始的过渡效果（等于 cubic-bezier(0.42,0,1,1)）
ease-out | 规定以慢速结束的过渡效果（等于 cubic-bezier(0,0,0.58,1)）
ease-in-out | 规定以慢速开始和结束的过渡效果（等于 cubic-bezier(0.42,0,0.58,1)）
cubic-bezier(n,n,n,n) | 在 cubic-bezier 函数中定义自己的值。可能的值是 0 至 1 之间的数值
steps(数字, start/end) | 逐帧动画 数字是步数 参数2未设置 为 end

+ **阻止鼠标事件**
	- 语法
	`div { pointer-events: none;}` 

+ **CSS3 所有的 变换效果，必须inline-block元素或block元素身上**

### [animation](http://cssload.net "CSS3 Loading效果")

+ 多次动画（可重复动画），可以让他自己执行

+ 基本语法

```

div { 
	animation: js中的函数名(move) 时间 延时(可选) 运动方式;
}

@keyframes move {
	/*从哪儿*/
	from {

	}
	/*到哪儿*/
	to {

	}
}

```

+ 分步动画

```

div { 
	animation: js中的函数名(move) 时间 延时(可选) 运动方式;
}

@keyframes move {
	0% {

	}
	50% {

	}
	100% {

	}
}

// 百分比相对于动画执行时间

```

+ animation分解

属性 | 参数 | 描述
---- | ---- | ----
animation-name | string | 名称
animation-duration | number s | 执行时间
animation-timing-function | string | 运动类型
animation-delay | number s | 延迟时间
animation-iteration-count | number/infinite | 循环 次数/无限
animation-direction | alternate | 反向运动 不写默认不
animation-fill-mode | none/forwards/backwards/both | 设置或检索动画时间之外的状态 不设置/结束时/开始时/结束或开始状态
animation-play-state | running/paused | 动画状态 运动/暂停

### [animate库](https://daneden.github.io/animate.css/ "Animate库")

+ 语法
`就是加class名`

+ 示例

```


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>事例</title>
    <link rel="stylesheet" href="animate.css" type="text/css">
    <style>
        .box{
            width: 200px;
            height: 200px;
            background-color: yellowgreen;
            margin: 80px auto;
            /*display: none;*/
        }
    </style>
</head>
<body>
    <a href="#">按钮</a>
    <div class="box"></div>
    <script src="jquery-1.7.min.js"></script>
    <script>
        $('a').click(function(){
            $('.box').show().addClass('animated_kuai bounce');
        })

    </script>
</body>
</html>

```

* * *

## 移动端布局

* * *

### 纯粹的移动端

+ 不需要考虑任何PC上的展示效果

1. ~~百分比（不推荐使用）~~
2. **rem**
3. **viewpoint**
4. *无宽布局（不是说永远都不给宽度）*

#### viewport

+ 可视区尺寸

移动设备上的viewport就是设备的屏幕上能用来显示我们的网页的那一块区域
浏览器上(也可能是一个app中的webview)用来显示网页的那部分区域
它可能比浏览器的可视区域要大，也可能比浏览器的可视区域要小。
默认情况下，手机网页采用980px的宽

+ 语法
`<meta name="viewport" id="viewport" content="width=375,initial-scale=1,user-scalable=1">`

+ content 参数

参数 | 描述
---- | ----
width | viewport的宽度(数值/device-width) 可以是具体数值
height | viewport的高度(数值/device-height) 可以是具体数值
initial-scale | 初始缩放比例 任意值
user-scalable | 是否允许用户缩放(yes/no)/(0/1)
maximum-scale | 最大缩放比例
minimum-scale | 最小缩放比例
~~target-densitydpi~~ | 仅供了解

+ ~~target-densitydpi~~
`一个屏幕像素密度是由屏幕分辨率决定的，通常定义为每英寸点的数量（dpi）。Android支持三种屏幕像素密度：低像素密度，中像素密度，高像素密度。一个低像素密度的屏幕每英寸上的像素点更少，而一个高像素密度的屏幕每英寸上的像素点更多。Android Browser和WebView默认屏幕为中像素密度。`

取值 | 描述
---- | ----
device-dpi | 使用设备原本的 dpi 作为目标 dp。 不会发生默认缩放
high-dpi | 使用hdpi 作为目标 dpi。 中等像素密度和低像素密度设备相应缩小
medium-dpi | 使用mdpi作为目标 dpi。 高像素密度设备相应放大， 像素密度设备相应缩小。 这是默认的target density.
low-dpi | 使用mdpi作为目标 dpi。中等像素密度和高像素密度设备相应放大

#### ios专用属性

1. 是否进入webapp全屏模式
	`<meta name="apple-mobile-web-app-capable" content="yes">`
2. 禁止iPhone把数字识别为电话
	`<meta name="format-detection" content="telephone=no" >`
3.  添加主屏后的标题
	`<meta name="apple-mobile-web-app-title" content="标题">`
4. 添加主屏后的图标
	`<link rel="apple-touch-icon-precomposed" href="/57x57-phone.png">`
	- 规格：1. iPhone、iTouch默认57\*57-必要；2. iPad72\*72-可没有，推荐添加Retina iPhone和Retina iTounch，114\*114像素，可以没有但推荐有；3. Retina iPad，144\*144像素，可以没有但推荐有

+ **移动端注意事项**
	1. A点击有黑色背景
	`-webkit-tap-heighlight-color:transparent;`
	2. 禁用iPhone中Safari的字号自动调整
	`html{-webkit-text-size-adjust:none;}`

#### css单位

+ 尺寸

单位 | 描述
---- | ----
%	| 百分比
in | 英寸
cm | 厘米
mm | 毫米
**em** |1em 等于当前的字体尺寸。2em 等于当前字体尺寸的两倍。例如，如果某元素以 12pt 显示，那么 2em 是24pt。在 CSS 中，em 是非常有用的单位，因为它可以自动适应用户所使用的字体。
ex | 一个 ex 是一个字体的 x-height。 (x-height 通常是字体尺寸的一半。)
pt | 磅 (1 pt 等于 1/72 英寸)
pc | 12 点活字 (1 pc 等于 12 点)
px | 像素 (计算机屏幕上的一个点)
**rem** | 相对单位，可理解为”root em”, 相对根节点html的字体大小来计算，CSS3新加属性
vw | viewpoint width，视窗宽度，1vw等于视窗宽度的1%
vh | viewpoint height，视窗高度，1vh等于视窗高度的1%
vmin | vw和vh中较小的那个
vmax| vw和vh中较大的那个

> **em  的字体大小 是根据父级的字体大小来计算的 如果父级没有字体大小，往上找，找到了就用 找不到 默认 16px**


+ 颜色

单位 | 描述
---- | ----
(颜色名) | 颜色名称 (比如 red)
rgb(x,x,x) | RGB 值 (比如 rgb(255,0,0))
rgb(x%, x%, x%) | RGB 百分比值 (比如 rgb(100%,0%,0%))
rgba(x,x,x,o) | 代表透明度
\#rrggbb | 十六进制数 (比如 #ff0000)

+ retina图片适配问题

```

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>图片适配</title>
    <meta name="viewport" id="viewport" content="width=375,initial-scale=1,user-scalable=0">
    <style>
        div{
            width: 100px;
            height: 100px;
            /*border: solid 2px red;*/
            margin-bottom: 10px;
        }
        .div1{
            background: url(icon@3x.png) 0 0 no-repeat;
        }
        .div2{
            background: url(icon.png) 0 0 no-repeat;
            background-image: -webkit-image-set(url(icon.png) 1x,url(icon@2x.png) 2x);
        }
        .div3{
            background: url(icon@3x.png) 0 0 no-repeat;
            background-image: -webkit-image-set(url(icon.png) 1x,url(icon@2x.png) 2x,url(icon@3x.png) 3x);
        }

    </style>
</head>
<body>
    <!--retina  2倍 或者 3倍的屏幕-->
 
    <div class="div1"></div>
    <div class="div2"></div>
    <div class="div3"></div>

    <img src="icon.png" alt="">
    <img src="icon.png" srcset="icon@2x.png 2x" alt="">
</body>
</html>

```

+ -webkit-image-set 设置 让retina的屏幕 看图片更清晰

+ img 引入的图
`<img src="pic.png" srcset="pic@2x.png 2x">`

+ ~~base 64~~
	- 把图片转成 64进制的编码
	- 语法
	`div { background-image:url("data:image/png;base64,编码");}`

#### [iconfont](http://www.iconfont.cn/plus "阿里字体图标")

1. 拷贝项目下面生成font-face
```

@font-face {
  font-family: 'iconfont';
  src: url('iconfont.eot');
  src: url('iconfont.eot?#iefix') format('embedded-opentype'),
  url('iconfont.woff') format('woff'),
  url('iconfont.ttf') format('truetype'),
  url('iconfont.svg#iconfont') format('svg');
}

```

2. 定义使用iconfont的样式
```

.iconfont{
  font-family:"iconfont" !important;
  font-size:16px;font-style:normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}

```

3. 挑选相应图标并获取字体编码，应用于页面
```

<i class="iconfont">&#x33;</i>

```

#### 移动端页面

+ 适配（兼容），适应各个不同的设备
+ 浏览器、微信（通过转发朋友圈）、QQ（内置浏览器）、UC
	- \*米、华\*会有部分兼容问题
+ 不需要考虑兼容pc、pad
+ 有的公司会把pc版和手机版分开来做
	- 数据交互量很大

##### **rem布局（所有机型）**

+ 示例

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>rem布局</title>
    <meta name="viewport" id="viewport" content="width=device-width,initial-scale=1,user-scalable=0">
    <script>
        alert(window.screen.width);
        var _html = document.getElementsByTagName('html')[0];
        var ch = document.documentElement.clientWidth;
        if(ch>640) {
            _html.style.fontSize = '40px';
            /*最大是40*/
        }
        else{
            _html.style.fontSize = ch / 16 + 'px';
            /*ch / 16 份数*/
        }
    </script>
    <style>
        html{
            font-size: 30px;
        }
        .box{
            width: 7.5rem;
            height: 7.5rem;
            background-color: yellowgreen;
        }
    </style>
</head>
<body>
    <div class="box"></div>

<!--
    有一个300的元素，在 414 保持 300
                    375     300？减小多少？

    640（iphone5 的320来的）  /  750(根据iphone 6)  /  1000+
        如果可视区的尺寸 比640（页面大小） 要大  页面只显示640
        如果小的话，会按照一个比例来缩放。
        40 - HTML的 font-size

        640 / 40 = 16 份 ， 每一份最大是40

    750
        50
        750 / 50 = 15

    适配：
        1 通过rem的方式来进行适配
'

        640的页面 分成了 64份  每份最大是10

        元素大小现在是 315  = 多少  31.5rem ？
-->
</body>
</html>

```

##### ~~viewpoint布局（主流机型）~~

+ 缩放比例
	- 屏幕的尺寸  / 网页的尺寸（设计图的尺寸）
+ 机型兼容
+ js写法
	1. 引入js文件
	`<script src="mobile-util.js"></script> // 必须在meta标签下`
	2. 定宽：对应meta 标签写法
	`<meta name="viewport" content="width=640">`
+ [viewport切图注意事项](https://www.zhihu.com/question/25308946
 "参考")
	- 640/750 正常切
	- 1242(iphone 6p 做的三倍图)/1125(iphone6 做的三倍图)/960(iphone5 做的三倍)
+ [转rem](http://www.520ued.com/tools/rem "px-->rem")

##### rem/viewpoint布局引入js

+ 代码

```

/**
 * 该 JS 中，包含常用的 UA 判断、页面适配、search 参数转 键值对。
 * 该 JS 应在 head 中尽可能早的引入，减少重绘。
 *
 * fixScreen 方法根据两种情况适配，该方法自动执行。
 *      1. 定宽： 对应 meta 标签写法 -- 
            <meta name="viewport" content="width=750">
 *         该方法会提取 width 值，主动添加 scale 相关属性值。
 *         注意： 如果 meta 标签中指定了 initial-scale， 该方法将不做处理（即不执行）。
 *      
 *      2. REM: 不用写 meta 标签，该方法根据 dpr 自动生成，并在 html 标签中加上 data-dpr 和 font-size 两个属性值。
 *         该方法约束：IOS 系统最大 dpr = 3，其它系统 dpr = 1，页面每 dpr 最大宽度（即页面宽度/dpr） = 750，REM 换算比值为 16。
 *         对应 css 开发，任何弹性尺寸均使用 rem 单位，rem 默认宽度为 视觉稿宽度 / 16;
 *         scss 中 $ppr(pixel per rem) 变量写法 -- $ppr: 750px/16/1rem;
 *         元素尺寸写法 -- html { font-size: $ppr*1rem; } body { width: 750px/$ppr; }。
   
 */
window.mobileUtil = (function(win, doc) {
	var UA = navigator.userAgent,
		isAndroid = /android|adr/gi.test(UA),
		isIos = /iphone|ipod|ipad/gi.test(UA) && !isAndroid, // 据说某些国产机的UA会同时包含 android iphone 字符
		isMobile = isAndroid || isIos;  // 粗略的判断

	return {
		isAndroid: isAndroid,
		isIos: isIos,
		isMobile: isMobile,

        isNewsApp: /NewsApp\/[\d\.]+/gi.test(UA),
		isWeixin: /MicroMessenger/gi.test(UA),
		isQQ: /QQ\/\d/gi.test(UA),
		isYixin: /YiXin/gi.test(UA),
		isWeibo: /Weibo/gi.test(UA),
		isTXWeibo: /T(?:X|encent)MicroBlog/gi.test(UA),

		tapEvent: isMobile ? 'tap' : 'click',

		/**
		 * 缩放页面
		 */
		fixScreen: function() {
            var metaEl = doc.querySelector('meta[name="viewport"]'),
                metaCtt = metaEl ? metaEl.content : '',
                matchScale = metaCtt.match(/initial\-scale=([\d\.]+)/),
			    matchWidth = metaCtt.match(/width=([^,\s]+)/);

            if ( !metaEl ) { // REM
                var docEl = doc.documentElement,
                    maxwidth = docEl.dataset.mw || 750, // 每 dpr 最大页面宽度
                    dpr = isIos ? Math.min(win.devicePixelRatio, 3) : 1,
                    scale = 1 / dpr,
                    tid;

                docEl.removeAttribute('data-mw');
                docEl.dataset.dpr = dpr;
                metaEl = doc.createElement('meta');
                metaEl.name = 'viewport';
                metaEl.content = fillScale(scale);
                docEl.firstElementChild.appendChild(metaEl);

                var refreshRem = function() {
                    var width = docEl.getBoundingClientRect().width;
                    if (width / dpr > maxwidth) {
                        width = maxwidth * dpr;
                    }
                    var rem = width / 16;
                    docEl.style.fontSize = rem + 'px';
                };

                win.addEventListener('resize', function() {
                    clearTimeout(tid);
                    tid = setTimeout(refreshRem, 300);
                }, false);
                win.addEventListener('pageshow', function(e) {
                    if (e.persisted) {
                        clearTimeout(tid);
                        tid = setTimeout(refreshRem, 300);
                    }
                }, false);

                refreshRem();
            } else if ( isMobile && !matchScale && ( matchWidth && matchWidth[1] != 'device-width' ) ) { // 定宽
                var	width = parseInt(matchWidth[1]),
                    iw = win.innerWidth || width,
                    ow = win.outerWidth || iw,
                    sw = win.screen.width || iw,
                    saw = win.screen.availWidth || iw,
                    ih = win.innerHeight || width,
                    oh = win.outerHeight || ih,
                    ish = win.screen.height || ih,
                    sah = win.screen.availHeight || ih,
                    w = Math.min(iw,ow,sw,saw,ih,oh,ish,sah),
                    scale = w / width;

                if ( scale < 1 ) {
                    metaEl.content = metaCtt + ',' + fillScale(scale);
                }
            }

            function fillScale(scale) {
                return 'initial-scale=' + scale + ',maximum-scale=' + scale + ',minimum-scale=' + scale + ',user-scalable=no';
            }
		},

		/**
		 * 转href参数成键值对
		 * @param href {string} 指定的href，默认为当前页href
		 * @returns {object} 键值对
		 */
		getSearch: function(href) {
			href = href || win.location.search;
			var data = {},reg = new RegExp( "([^?=&]+)(=([^&]*))?", "g" );
			href && href.replace(reg,function( $0, $1, $2, $3 ){
				data[ $1 ] = $3;
			});
			return data;
		}
	};
})(window, document);

// 默认直接适配页面
mobileUtil.fixScreen();

```

### 响应式

+ 一套网站，兼容N多设备（pc、pad、移动端、IE6~8）
	- 必须共享一套HTML结构，样式不同而已，通过设备的分辨率来自动切换样式
+ 只是用于简单的页面：博客、新闻、简单的公司门户（公司小网站）
+ 需要兼容的尺寸
	- pc 普屏 1000（放的显示器 - 1024\*768）
	- pc 宽屏 1190/1200/1210/1600 分辨率 1366\*768 / 1440\*768 / 1920\*1080
	-pad 768 横屏和竖屏 1024\*768 / 768\*1024
	-phone 分辨率就都不一定了

#### 媒体查询

+ 语法
```

声明：@media
条件：min-width、height/max-width、height设备类型

min-width 最小宽度 >=
max-width 最大宽度 <=

原则：永远从 最小的设备写起 （phone > pad > pc > pc宽屏）

and 并且
	not 不是
	only 不支持的忽略
	device-width/min、max
	device-width / min-device-width / max-device-width

@media (orientation: landscape) 横屏
@media (orientation: portrait) 竖屏

<!-- >= 768 -->
@media (min-width:768px) {
	div {
		width:600px;
	}
}

<!-- >=1000 && <= 1200 -->
@media (min-width:1000px) and (max-width:1200px) {
	div {
		width:800px;
	}
}

<!-- 不是 屏幕 -->
@media (min-width:768px) not screen {
	div {
		width:600px;
	}
}

```

[媒体类型](http://www.runoob.com/cssref/css3-pr-mediaquery.html "媒体类型") | 描述
---- | ----
all | 用于所有的媒体设备
aural | 用于语音和音频合成器
braille | 用于盲人用点字法触觉回馈设备
embossed | 用于分页的盲人用点字法打印机
handheld | 用于小的手持的设备
print | 用于打印机
projection | 用于方案展示，比如幻灯片
screen | 用于电脑显示器
tty | 用于使用固定密度字母栅格的媒体，比如电传打字机和终端
tv | 用于电视机类型的设备

+ 响应式样式表的引用
	1. common.css 公共样式（手机样式）
	2. ~~ie.css ie低版本兼容样式（一般不兼容ie低版本）~~
	3. pad.css pad样式
	4. pc.css 普屏pc样式
	5. pc-w.css 宽屏pc样式
> **css文件命名可随自己**

	- 语法
```

<link rel="stylesheet" href="style/common.css" type="text/css">
<link rel="stylesheet" href="style/pad.css" type="text/css" media="(min-width:768px)">
<link rel="stylesheet" href="style/pc.css" type="text/css" media="(min-width:1000px)">
<link rel="stylesheet" href="style/pc-w.css" type="text/css" media="(min-width:1190px)">


```

#### IE版本判断

+ IE对HTML注释做了一些扩展，使之可以支持条件判断表达式

条件 | 描述
---- | ----
[if IE] | 判断是否IE
[if IE 7] | 判断是否是IE7
[if !IE] | 判断是否不是IE
[if lt IE 5.5] | 判断是否是IE5.5 以下版本。  (<)
[if lte IE 6] | 判断是否等于IE6 版本或者以下 (<=)
[if gt IE 5] | 判断是否IE5以上版本  （> ）
[if gte IE 7] | 判断是否 IE7 版本或者以上
[if !(IE 7)] | 判断是否不是IE7
[if (gt IE 5)&(lt IE 7)] | 判断是否大于IE5， 小于IE7
[if (IE 6)&#124;(IE 7)] | 判断是否IE6 或者 IE7 | &#124; === |

+ 示例

```

<!--[if IE]><p>You are using Internet Explorer.</p><![endif]-->  
<!--[if !IE]><p>You are not using Internet Explorer.</p><![endif]>  
<!--[if IE 7]><p>Welcome to Internet Explorer 7!</p><![endif]-->  
<!--[if !(IE 7)]><p>You are not using version 7.</p><![endif]-->   
<!--[if gte IE 7]><p>You are using IE 7 or greater.</p><![endif]-->  
<!--[if (IE 5)]><p>You are using IE 5 (any version).</p><![endif]-->  
<!--[if (gte IE 5.5)&(lt IE 7)]><p>You are using IE 5.5 or IE 6.</p><![endif]-->  
<!--[if lt IE 5.5]><p>Please upgrade your version of Internet Explorer.</p><![endif]-->  
<!--[if IE]><p>You are using Internet Explorer.</p><![endif]-->
<!--[if !IE]><p>You are not using Internet Explorer.</p><![endif]>
<!--[if IE 7]><p>Welcome to Internet Explorer 7!</p><![endif]-->
<!--[if !(IE 7)]><p>You are not using version 7.</p><![endif]-->
<!--[if gte IE 7]><p>You are using IE 7 or greater.</p><![endif]-->
<!--[if (IE 5)]><p>You are using IE 5 (any version).</p><![endif]-->
<!--[if (gte IE 5.5)&(lt IE 7)]><p>You are using IE 5.5 or IE 6.</p><![endif]-->
<!--[if lt IE 5.5]><p>Please upgrade your version of Internet Explorer.</p><![endif]-->

```

> **注：IE5 以下的版本不支持这种注释扩展**

* * *

## CSS预处理器

+ 换个方式写css

* * *

### [~~less~~](http://www.imooc.com/learn/102 "less教程")

+ 偏前端的
+ [示例](http://www.imooc.com/learn/61 "示例")


### [**sass**](http://www.w3cplus.com/sassguide/ "sass教程")

+ 偏后端的

+ [node安装编译环境](http://blog.csdn.net/merciwen/article/details/76762664 "安装教程")
	1. 安装
	`cnpm install node-sass -g`
	2. 安装成功	
	`node-sass -v`
	`node-sass   4.5.3   (Wrapper)   [JavaScript]`
	`libsass     3.5.0.beta.2    (Sass Compiler) [C/C++]`
	3. 编译
		- 假设项目目录下有css和scss文件夹，运行一下命令会观察文件变化并即时编译
		`node-sass --watch --recursive --output css scss`
		- 以下命令具有同等功能，而且更短
		`node-sass -wro css scss`

+ ryby

```
koala（目前已经停止更新了）
命令的方式
	ruby
		http://rubyinstaller.org/downloads（自备梯子）
			- 安装时候 注意添加环境变量  （...PATH）
			- 可以参考 http://www.w3cplus.com/sassguide/
			- 安装路径中 不能有中文，不能有特殊符号，不能有空格。
			- 编译sass的过程，路径中 也不能 有中文，不能有特殊符号，不能有空格。
			（x64 - 64bit(位系统) 、 x86-32bit-32位系统）
	安装命令：
		gem install sass - win         $ gem install sass   - mac
		- 安装不了 需要切换根
			http://gems.ruby-china.org/


```

#### sass基本语法

1. sass编译
	1. 一次编译
	`sass 需要编译的文件 编译后的文件`
	2. 单文件监听
	`sass --watch common.scss:xx.css`
	3. 文件夹监听
	`sass --watch 文件名名称（要监听的文件夹）：编译到哪儿（编译后的位置）`
	4. 自动搜索（windows cmd 命令大全）
		- dir 查看当前目录文件
		- cd 打开文件 cd a cd a.txt cd .. 上一层
		- cls 清除当前品目
		- ctrl + c 是否终止操作 y / n
		- 按上下箭头 使用你最近使用的几个命令
	5. 编译模式
		- 语法
	`sass --watch 文件夹 : 文件夹 --stye nested 默认 / expanded css纵向写法 / compact 横向 / compressed 压缩（所有代码压缩成一行代码）`

2. sass注释
	- // 注释不会被编译
	- /\* 属于css注释，会被编译出来\*/

3. 变量(可以存 css单位、颜色、文字)
	- 语法
	`$变量:参数`
	- 实例
```
	$width:300px;
	$color:yellowgreen pink;
	div {
		width: $width;
		height: $width;
		background-color: nth($color,1);
		// nth(那个变量，第几个) 1 2 ...（**不是从0开始**）
	}
```
	- 变量作用域 和js中的 作用域一样

4. 嵌套（标签可以怎么嵌套就能怎么嵌套）
	- 语法
```
	ul {
		$lh:30px;
		li {
			height:$lh;
		 	a {
				color: red;
				margin-top: ($lh - 12px) / 2; // 遵循css3规则 运算符 前后空格分开 
		 }
	}
}
```

	- ~~属性嵌套（要用 : 区分）~~
```
	.box {
    //复合样式
    font:{
      style:normal;
      weight: bold;
      size: 14px;
      family: $ms;
    }

    margin: {
      top:12px;
      right: 12px;
      bottom: 12px;
      left: 12px;
    }
	}

```

	- 跳出根
```
	.news {
		@at-root .news_title {
			width: 10px;
		}
		.news_content {
			width: 20px;
		}
	}

// 单个跳出

	.news{
  //@at-root .news_title{
  //    width: 10px;
  //  }
  //@at-root .news_content{
  //    width: 20px;
  //  }

  @at-root {
    .news_title{
      width: 10px;
    }
    .abc{
      width: 10px;
    }
  }
}

// 一组跳出

```
	- 带入上一层选择器（不带父级）
```
.box{
  width: 200px;
  &_cont{
    width: 400px;
    &_abc{
      width: 200px;
    }
  }
}

& === 上一层选择器 --> .box_cont .box_cont_abc
```

5. 混合
	- 基本语法
```
@mixin opa() {
	opacity: .5;
	filter: alpha(opacity=50);
}
// 不带参数 

@mixin opa($opa) {
	opacity: $opa / 100;
	filter: alpha(opacity=$opa);
}
// 带参数，必须传参数

@mixin opa($opa:50) {
	opacity: $opa / 100;
	filter: alpha(opacity=$opa);
}
// 传参数就是传的数，不传就是默认值50 可以自己设定

.demo{
	@include opa();
}

/**
 * @mixin 声明
 * 
 * @include 是调用 @mixin 所声明的东西
 */
```

	- 参数不确定
```
@mixin shadow($shadow...){
  box-shadow: $shadow;
}
/**
 * ... 代表参数不确定
 * 可任意传
 */
```

6. if else判断
	- 语法
```
@mixin sj($fx:top,$size:10px,$color:red){

  @if ($fx == top) {
    border-color: transparent transparent $color transparent;
    border-style: dashed dashed solid dashed;
  }
  @else if($fx == right){
    border-color: transparent transparent transparent $color;
    border-style: dashed dashed dashed solid;
  }
  @else if($fx == bottom){
    border-color: $color transparent transparent transparent ;
    border-style: solid dashed dashed dashed ;
  }
  @else if($fx == left){
    border-color: transparent $color transparent transparent ;
    border-style: dashed solid dashed dashed ;
  }

  width: 0;
  height: 0;
  overflow: hidden;
  border-width: $size;

}

.demo{
  @include sj($fx:bottom,$color:yellowgreen);
}
```

	- if条件 not 非 | or 或 | and 与 | == 等于 | != 不等于
	**写兼容很适用（css3）**

7. 继承

	- 语法
```
.fl{
  float: left;
}

.box{
  width: 300px;
  height: 300px;
  @extend .fl;
}
.box2{
  @extend .box;
}
```

	- % 占位选择器（在用到的时候 才会被编译出来）
```
%clearfix{
  *zoom:1;
  &:after,
  &:before{
    content: '';
    display: table;
  }
  &:after{
    clear: both;
  }
}

.abc{
  width: 300px;
  @extend %clearfix;
}
```

8. \# 字符串插值

	- 语法
```
$icon:'../images/icon/';
$img:'../images/';
$sina:'http://img2.sina.com.cn/2016-11-21/qiaobusi/images/icon/';

//  #{变量名}

.content{
  background: url(#{$sina}/a.jpg) left top no-repeat;
}
```

9. sass中的运算 运算符的前后 必须要有空格

	- 语法
```
.ys{
  color: #F00 + 255;
  width: $width / 2;

  $fs:12px;
  $lh:24px;

  font: #{$fs}/#{$lh} "Microsoft YaHei","微软雅黑";
}
```

10. for循环
	
	- 语法
```
$max:10;
$min:5;
//sass
//  <=
@for $i from $min through $max{
    .item_#{$i}{
      background-position: -($i - 1) * 20px 0;
    }
}

// <
@for $i from 1 to 10{
  .demo_#{$i}{
    background-position: -($i - 1) * 20px 0;
  }
}
```

11. while

	- 语法
```
$a:5;
@while($a >= 1){
  .aaa_#{$a}{
    width: 20px * $a;
  }
  $a:$a - 1;
}
```

12. each

	- 语法
```
$icon_name:user,pass,checked,select;
@each $i in $icon_name{
  .icon_#{$i}{
    width: 10px;
  }
}
```

13. 三目

	- 语法
```
if($condition, $if true, $if false)

if(true, 1px, 2px) --> 1px
if(false, 1px, 2px) -->2px
```