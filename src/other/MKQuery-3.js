/*
 * @Author: ManKeung
 * @Date: 2017/11/28
 * @function: 框架封装
 * @Edition：MKQuery-1
 * @copyright: 违者必究
 */

'use strict';

var $MK = {
	trim:function(str){
		return str.replace(/(^\s*)|(\s*$)/g,'');
	},
    //tab
    tab:function(){},
    formateString:function(){},
    event:{
        on:function(){},
        un:function(){}
    }
}