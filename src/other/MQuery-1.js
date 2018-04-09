/*
 * @Author: ManKeung
 * @Date: 2017/11/28
 * @function: 框架封装
 * @Edition：MQuery-1
 * @copyright: 违者必究
 */

'use strict';

// 定义一个对象 - 名字 $M
var $m = function(){};

$mk.prototype = {
	extend:function(tar,source){
		for(var i in source){
			tar[i] = source[i];
		}
		return tar;
	}
}

$m = new $m();

/*选择框架*/
$m.extend($m,{
	// id
	$id:function(id){
		return document.getElementById(id);
	}
});