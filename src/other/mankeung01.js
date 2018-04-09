/**
 * 作者：王文强
 * 开发日期：2017/10/17
 * 描述：通用框架
 * 版权所有：违者必究
 */

// 定义一个对象 - 名字 $$
var $$ = function() {};

// 第二种写法
$$.prototype = {
    $id:function (str){
        return document.getElementById(str);
    },
    $tag:function(tag){
        return document.getElementsByTagName(tag);
    },
    // 去除左边空格
    ltrim:function(str){
        return str.replace(/(^\s*)/g,'');
    },
    // 去除右边空格
    rtrim:function(str){
        return str.replace(/(\s*$)/g,'');
    },
    // 去除两头空格
    trim:function(str){
        return str.replace(/(^\s*)|(\s*$)/g,'');
    },
    // ajax - 前面学我们学习的
    myAjax:function(URL,fn){
        var xhr = createXHR();	//返回了一个对象，这个对象IE6兼容。
        xhr.onreadystatechange = function(){
            if(xhr.readyState === 4){
                if(xhr.status >= 200 && xhr.status < 300 || xhr.status == 304){
                    fn(xhr.responseText);
                }else{
                    alert("错误的文件！");
                }
            }
        };
        xhr.open("get",URL,true);
        xhr.send();

        //闭包形式，因为这个函数只服务于ajax函数，所以放在里面
        function createXHR() {
            //本函数来自于《JavaScript高级程序设计 第3版》第21章
            if (typeof XMLHttpRequest != "undefined") {
                return new XMLHttpRequest();
            } else if (typeof ActiveXObject != "undefined") {
                if (typeof arguments.callee.activeXString != "string") {
                    var versions = ["MSXML2.XMLHttp.6.0", "MSXML2.XMLHttp.3.0",
                            "MSXML2.XMLHttp"
                        ],
                        i, len;

                    for (i = 0, len = versions.length; i < len; i++) {
                        try {
                            new ActiveXObject(versions[i]);
                            arguments.callee.activeXString = versions[i];
                            break;
                        } catch (ex) {
                            //skip
                        }
                    }
                }

                return new ActiveXObject(arguments.callee.activeXString);
            } else {
                throw new Error("No XHR object available.");
            }
        }
    },
    // tab
    extend:function(tar,source) {
        //遍历对象
        for(var i in source){
            tar[i] = source[i];
        }
        return tar;
    },
    isString:function(val){
        return typeof val === 'string';
    }
};

//在框架中实例化，这样外面就不用实例化了
$$ = new $$();

// 我们定义一个时间对象专门放置事件相关操作
var event = new function(){};

event.prototype = {
    on:function(id, type, fn){
        // var dom = document.getElementById(id);
        var dom = $$.isString(id) ? document.getElementById(id) : id;
        // 如果支持
        // w3c版本 -- 火狐 谷歌 等大多数浏览器
        if(dom.addEventListener) {// 检测是否支持
            dom.addEventListener(type, fn, false);
        }else if(dom.attachEvent) {
            dom.attachEvent('on' + type, fn);
        }
    },
    /*点击*/
    click:function(id,fn){
        this.on(id,'click',fn);
    }
};

$$.event = new event();

