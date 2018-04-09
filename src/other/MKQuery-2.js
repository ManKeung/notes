/*
 * @Author: ManKeung
 * @Date: 2017/11/28
 * @function: 框架封装
 * @Edition：MKQuery-1
 * @copyright: 违者必究
 */

'use strict';

var $MK = function(){};

$MK.prototype = {
	extend:function(tar,source) {
		for(var i in source) {
			tar[i] = source[i];
		}
		return tar;
	}
}

$MK = new $MK();

$MK.extend($MK,{
	trim:function(str){
		return str.replace(/(^\s*)|(\s*$)/g,'');
	}
});