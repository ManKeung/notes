/*
 * @Author: ManKeung
 * @Date: 2017/11/28
 * @function: 框架封装
 * @Edition：MQuery-2.1
 * @copyright: 违者必究
 * @describe: 此版本为最终版，后续持续完善更新
 */
(function(w,document){
	// 严格模式
	'use strict';

/*********** 要用到的函数---start *************************************************/

	// 事件绑定
	function _myAddEvent(obj, sEv, fn) { // obj -- 事件源；sEv -- 事件；fn -- 执行函数
		if(obj.acctachEvent) { // 判断支持 IE事件绑定
			obj.attachEvent('on' + sEv, function() {
				if(false == fn.call(obj)) { // 函数 return false 阻止冒泡和默认事件
					event.cancelBubble = true;
					return false;
				}
			});
		} else {
			obj.addEventListener(sEv, function(ev){
				ev.cancelBubble = true;
				ev.preventDefault();
			}, false);
		}
	}

	// 得到class类
	function _getByClass(oParent, sClass) { // oParent -- 父级；sClass -- class类名
		var aEle = oParent.getElementsByTagName('*');
		var aResult = [];

		for(var i=0, len=aEle.length; i<len; i++) {
			if(aEle[i].className == sClass) {
				aResult.push(aEle[i]);
			}
		}
		return aResult;
	}

	// 得到style样式
	function _getStyle(obj, attr) { // onj -- DOM；attr -- 属性
		if(obj.currentStyle) {
			return obj.currentStyle[attr];
		} else {
			return getComputedStyle(obj, false)[attr];
		}
	}

/*********** 要用到的函数---end *******************************************************/

/*********** 框架主体---start ********************************************************/

	// 定义一个对象
	function MQuery (vArg) {
		this.elements = []; // 用来保存选中目标

		// 判断传过来的是什么
		switch(typeof vArg) {
			case 'function': // windown.onload=vArg
			_myAddEvent(w, 'load', vArg);
			break;

			case 'String': // 字符串 id class tag
			switch(vArg.charAt(0)) {
				case '#': // id
				var obj = document.getElementById(vArg.substring(1));
				this.elements.push(obj);
				break;

				case '.': // class
				this.elements = _getByClass(document, vArg.substring(1));
				break;

				default: // tagName
				this.elements = getElementsByTagName(vArg);
			}
			break;

			case 'object': // object
			this.elements.push(vArg);
		}
	};

/***************** 框架主体---end ***********************************************************/

/*****************  事件---start ************************************************************/

	MQuery.prototype = {
		click:function(fn) { // 点击事件
			for(var i=0, len=this.elements.length; i<len; i++) {
				_myAddEvent(this.elements[i], 'click', fn);
			}

			return this; // 便于链式访问
		},
		toggle:function() { // 切换
			var _arguments = arguments;
			for(var i=0, len=this.elements.length; i<len; i++) {
				_addToggle(this.elements[i]);
			}

			function _addToggle(obj) {
				var count = 0;
				_myAddEvent(obj, 'click', function (){
					_arguments[count++%_arguments.length].call(obj);
				});
			}

			return this;
		},
		bind:function(sEv, fn) {
			for(var i=0, len=this.elements.length; i<len; i++) {
				_myAddEvent(this.elements[i], sEv, fn);
			}
		}
	}

/******************* 事件---end ***********************************************************/

/******************* 一般动画---start ******************************************************/

	MQuery.prototype = {
		show:function() { // 显示
			for(var i=0, len=this.elements.length; i<len; i++) {
				this.elements[i].style.display = 'block';
			}

			return this; 
		},
		hide:function() { // 隐藏
			for(var i=0, len=this.elements.length; i<len; i++) {
				this.elements[i].style.displlay = 'none';
			}

			return this;
		},
		hover:function(fnOver, fnOut) { // 鼠标经过/离开
			for(var i=0, len=this.elements.length; i<len; i++) {
				_myAddEvent(this.elements[i], 'mouseover', fnOver);
				_myAddEvent(this.elements[i], 'mouseout', fnOut);
			}

			return this;
		}
	}

/************************* 一般动画---end ************************************************/

/************************* CSS操作---start **********************************************/

MQuery.prototype = {
	css:function(attr, value) { // CSS样式
		if(arguments.length == 2) { // 设置样式
			for(var i=0, len=this.elements.length; i<len; i++) {
				this.elements[i].style[attr] = value;
			}
		} else { // 获取属性
			if(typeof att == 'string') {
				return _getStyle(this.elements[0], attr);
			} else {
				for(var i=0, len=this.elements.length; i<len; i++) {
					for(var k in attr) {
						this.elements[i].style[k] = attr[k];
					}
				}
			}
		}

		return this;
	},
	attr:function(attr, value) {
		if(arguments.length == 2) {
			for(var i=0, len=this.elements.length; i<len; i++) {
				this.elements[i][attr] = value;
			}
		} else {
			return this.elements[0][attr];
		}

		return this;
	}，
	eq:function(n) {
		return $m(this.elements[n]);
	},
	find:function(str) {
		var aResult =[];

		for(var i=0, len=this.elements.length; i<len; i++) {
			switch(str.charAt(0)) {
				case '.':
				var aEle = _getByClass(this.elements[i], str.substring(1));
				aResult = aResult.concat(aEle);
				break;

				default:
				var aEle = this.elements[i].getElementsByTagName(str);
				_appendArr(aResult, aEe);
			}
		}

		function _appendArr(arr1, arr2) {
			for(var i=0, len=arr2.length; i<len; i++) {
				arr1.push(arr2[i]);
			}
		}

		var newMQuery = $m();
		newMQuery.elements = aResult;

		return newMQuery;
	},
	index:function() {
		function _getIndex(obj) {
			var aBrother = obj.parentNode.children;

			for(var i=0, len=aBrother.length; i<len; i++) {
				if(aBrother[i] == obj) {
					return i;
				}
			}
		}

		return _getIndex(this.elements[0]);
	}
}

/************************* CSS操作---end **********************************************/

/************************* 插件接口---start **********************************************/

MQuery.prototype.extend = function(name, fn) {
	MQuery.prototype[name] = fn;
}

/************************* 插件接口---end **********************************************/

// function $m(vArg) {
// 	return new MQuery(vArg);
// }

 // w.M = w.$m = MQuery;

 // return MQuery;
 w.$m = function (vArg) {
 	return new MQuery(vArg);
 }

})(window, document);