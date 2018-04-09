// (function(w){
// 	w.$ = function (arg) {
// 		return document.getElementById(arg);
// 	}
// })(window)
// 
(function(w,document) {
    // 严格模式
    'use strict';

    /*********** 要用到的函数---start *************************************************/

    // 事件绑定
    function _myAddEvent(obj, sEv, fn) { // obj -- 事件源；sEv -- 事件；fn -- 执行函数
        if (obj.acctachEvent) { // 判断支持 IE事件绑定
            obj.attachEvent('on' + sEv, function() {
                if (false == fn.call(obj)) { // 函数 return false 阻止冒泡和默认事件
                    event.cancelBubble = true;
                    return false;
                }
            });
        } else {
            obj.addEventListener(sEv, function(ev) {
                ev.cancelBubble = true;
                ev.preventDefault();
            }, false);
        }
    }

    // 得到class类
    function _getByClass(oParent, sClass) { // oParent -- 父级；sClass -- class类名
        var aEle = oParent.getElementsByTagName('*');
        var aResult = [];

        for (var i = 0, len = aEle.length; i < len; i++) {
            if (aEle[i].className == sClass) {
                aResult.push(aEle[i]);
            }
        }
        return aResult;
    }

    // 得到style样式
    function _getStyle(obj, attr) { // onj -- DOM；attr -- 属性
        if (obj.currentStyle) {
            return obj.currentStyle[attr];
        } else {
            return getComputedStyle(obj, false)[attr];
        }
    }

    /*********** 要用到的函数---end *******************************************************/

    /*********** 框架主体---start ********************************************************/

    // 定义一个对象
    function MQuery(vArg) {
        this.elements = []; // 用来保存选中目标

        // 判断传过来的是什么
        switch (typeof vArg) {
            case 'function': // windown.onload=vArg
                _myAddEvent(w, 'load', vArg);
                break;

            case 'String': // 字符串 id class tag
                switch (vArg.charAt(0)) {
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

        return this;
    };

    w.$m = function(vArg) {
        return new MQuery(vArg);
    }

})(window,document);