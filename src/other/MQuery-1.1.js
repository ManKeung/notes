/*
 * @Author: ManKeung
 * @Date: 2017/11/28
 * @function: 框架封装
 * @Edition：MQuery-1.1
 * @copyright: 违者必究
 */

'use strict';

// 事件绑定
function mgAddEvent(obj, sEv, fn) {
	if(obj.attachEvent) {
		obj.attachEvent('on'+sEv, function(){
			if(false == fn.call(obj)) { // 如果回调函数 return false 阻止冒泡、默认事件
				event.cancelBuubble = true;
				return false;
			}
		});
	} else {
		obj.addEventListener(sEv, function(ev){
			if(false == fn.call(obj)) {
				ev.cancelBubble = true;
				ev.preventDefault();
			}
		}, false);
	}
}

// 获取class
function getByClass(oParent, sClass) {
	var aEle = oParent.getElementsByTagName('*');
	var aResult = [];

	for(var i=0, len=aEle.length; i<len; i++) {
		if(aEle[i].className == sClass) {
			aResult.push(aEle[i]);
		}
	}

	return aResult;
}

// 得到样式
function getStyle(obj, attr) {
	if(obj.currentStyle) {
		return obj.currentStyle[attr];
	} else {
		return getComputedStyle(obj, false)[attr];
	}
}

function MQuery(vArg) {
	// 用来保存选中的元素
	this.elements = [];
	switch(typeof vArg) {
		case 'function':
			//window.onload=vArg
			mgAddEvent(window, 'load', vArg);
			break;
		case 'string':
			switch(vArg.charAt(0)) {
				case '#': // id
					var obj = document.getElementById(vArg.substring(1));
					this.elements.push(obj);
					break;
				case '.': // class
					this.elements = getByClass(document, vArg.substring(1));
					break;
				default:
					this.elements = document.getElementsByTagName(vArg);
			}
			break;
		case 'object':
			this.elements.push(vArg);
	}
}

MQuery.prototype.click = function (fn) {
	for(var i=0, len=this.elements.length; i<len; i++) {
		myAddEvent(this.elements[i], 'click', fn);
	}

	return this; // 可以链式访问 
};

MQuery.prototype.show = function (fn) {
	for(var i=0, len=this.elements.length; i<len; i++) {
		this.elements[i].style.display = 'block';
	}

	return this; // 可以链式访问 
};

MQuery.prototype.hover=function (fnOver, fnOut)
{
	var i=0;
	
	for(i=0;i<this.elements.length;i++)
	{
		myAddEvent(this.elements[i], 'mouseover', fnOver);
		myAddEvent(this.elements[i], 'mouseout', fnOut);
	}
	
	return this;
};

MQuery.prototype.css=function (attr, value)
{
	if(arguments.length==2)	//设置样式
	{
		var i=0;
		
		for(i=0;i<this.elements.length;i++)
		{
			this.elements[i].style[attr]=value;
		}
	}
	else	//获取样式
	{
		if(typeof attr=='string')
		{
		//return this.elements[0].style[attr];
			return getStyle(this.elements[0], attr);
		}
		else
		{
			for(i=0;i<this.elements.length;i++)
			{
				var k='';
				
				for(k in attr)
				{
					this.elements[i].style[k]=attr[k];
				}
			}
		}
	}
	
	return this;
};

MQuery.prototype.attr=function (attr, value)
{
	if(arguments.length==2)
	{
		var i=0;
		
		for(i=0;i<this.elements.length;i++)
		{
			this.elements[i][attr]=value;
		}
	}
	else
	{
		return this.elements[0][attr];
	}
	
	return this;
};

MQuery.prototype.toggle=function ()
{
	var i=0;
	var _arguments=arguments;
	
	for(i=0;i<this.elements.length;i++)
	{
		addToggle(this.elements[i]);
	}
	
	function addToggle(obj)
	{
		var count=0;
		myAddEvent(obj, 'click', function (){
			_arguments[count++%_arguments.length].call(obj);
		});
	}
	
	return this;
};

MQuery.prototype.eq=function (n)
{
	return $m(this.elements[n]);
};

function appendArr(arr1, arr2)
{
	var i=0;
	
	for(i=0;i<arr2.length;i++)
	{
		arr1.push(arr2[i]);
	}
}

MQuery.prototype.find=function (str)
{
	var i=0;
	var aResult=[];
	
	for(i=0;i<this.elements.length;i++)
	{
		switch(str.charAt(0))
		{
			case '.':	//class
				var aEle=getByClass(this.elements[i], str.substring(1));
				
				aResult=aResult.concat(aEle);
				break;
			default:	//标签
				var aEle=this.elements[i].getElementsByTagName(str);
				
				//aResult=aResult.concat(aEle);
				appendArr(aResult, aEle);
		}
	}
	
	var newMquery=$m();
	
	newMquery.elements=aResult;
	
	return newMquery;
};

function getIndex(obj)
{
	var aBrother=obj.parentNode.children;
	var i=0;
	
	for(i=0;i<aBrother.length;i++)
	{
		if(aBrother[i]==obj)
		{
			return i;
		}
	}
}

MQuery.prototype.index=function ()
{
	return getIndex(this.elements[0]);
};

MQuery.prototype.bind=function (sEv, fn)
{
	var i=0;
	
	for(i=0;i<this.elements.length;i++)
	{
		myAddEvent(this.elements[i], sEv, fn);
	}
};

MQuery.prototype.extend=function (name, fn)
{
	MQuery.prototype[name]=fn;
};

function $m(vArg)
{
	return new MQuery(vArg);
}
