/*
 * @Author: ManKeung
 * @Date: 2017/11/28
 * @function: 框架封装
 * @Edition：MKQuery-1
 * @copyright: 违者必究
 */

'use strict';

// 定义一个对象 - 名字 $MK
var $MK = function() {};

// 第二种写法
$MK.prototype = {
	$id:function(str){
		return document.getElementById(str);
	},
	$tag:function(tag){
		return document.getElementsByTagName(tag);
	},
	// 去除左边空格
	ltrim:function(str){
		return str.replace(/(^\s*)/g,'');
	},
	// 去除右边
	rtrim:function(str){
		return str.replace(/(\s*$)/g,'');
	},
	// 去除两边
	trim:function(str){
		return str.replace(/(^\s*)|(\s*$)/g,'');
	},
	// AJAX
	myAjax:function(URL,fn){
		var xhr = createXHR(); // 返回这个对象，这个对象IE6兼容
		xhr.onreadystatechang = function(){
			if(xhr.readyState === 4){
				if(xhr.status >= 200 && xhr.status < 300 || xhr.status == 304) {
					fn(xhr.responseText);
				}else{
					alert('错误文件！');
				}
			}
		};
		xhr.open('get',URL,true);
		xhr.send();

		// 闭包刑事，因为这个函数只服务于ajax函数，所以放在里面
		function createXHR(){
			// 本函数来自于JavaScript高级程序设计 第三版 第21章
			if(typeof XMLHttpRequest != 'undefined'){
				return new XMLHttpRequest();
			}else if(typeof ActiveXObject != 'undefined'){
				if(typeof arguments.callee.activeXString != 'string'){
					var versions = ["MSXML2.XMLHttp.6.0", "MSXML2.XMLHttp.3.0", "MSXML2.XMLHttp"], i, len;

					for(i  = 0, len = versions.length; i < len; i++){
						try{
							new ActiveXObject(versions[i]);
							arguments.callee.activeXString = versions[i];
							break;
						}catch(ex){
							// skip
						}
					}
				}

				return new ActiveXObject(arguments.callee.activeXString);
			}else{
				throw new Error('n=No XHR object available');
			}
		}
	},
	// extend
	extend:function(tar,source){
		// 遍历
		for(var i in source) {
			tar[i] = source[i];
		}
		return tar;
	},
	isString:function(val){
		return typeof val === 'string';
	}
};

// 在框架中实例化，这样外面就不用实例化
$MK = new $MK();