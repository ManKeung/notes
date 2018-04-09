/*
 * @Author: ManKeung
 * @Date: 2017/11/28
 * @function: 框架封装
 * @Edition：MQuery-2
 * @copyright: 违者必究
 */

(function(w) {
    // 严格模式
    'use strict';

    // 定义一个对象 - 名字 m
    var $m = function() {};

    // 基础扩展
    $m.prototype = {
        extend: function(tar, source) {
            // 遍历
            for (var i in source) {
                tar[i] = source[i];
            }
            return tar;
        }
    };

    // 实例化
    $m = new $m();

    // 选择框架
    $m.extend($m, {
        // id选择器
        $id: function(id) {
            return document.getElementById(id);
        },
        // tag选择器
        $tag: function(tag, context) {
            if (typeof context == 'string') {
                context = $m.$id(context);
            }

            if (context) {
                return context.getElementsByTagName(tag);
            } else {
                return document.getElementsByTagName(tag);
            }
        },
        // class选择器
        $class: function(className, context) {
            var i = 0,
                len, dom[], arr[];

            // 如果传递过来的是字符串，则转化为元素对象
            if ($m.isString(context)) {
                context = document.getElementById(context);
            } else {
                context = document;
            }
            // 如果兼容getElementsByClassName
            if (context.getElementsByClassName) {
                return context.getElementsByClassName(className);
            } else {
                // 不兼容
                dom = context.getElementsByTagName('*');

                for (i, len = dom.length; i < len; i++) {
                    if (dom[i].className == className) {
                        arr.push(dom[i]);
                    }
                }
            }
            return arr;
        },
        // 分组选择器
        $group: function(context) {
            var result = [],
                doms = [];
            var arr = $m.trim(context).split(',');
            // console.log(arr.length)
            for (var i = 0, len = arr.length; i < len; i++) {
                var item = $m.trim(arr[i]);
                var first = item.charAt(0);
                var index = item.indexOf(first);
                if (first === '.') {
                    doms = $m.$class(item.slice(index + 1));

                    pushArray(doms, result);
                } else if (first === '#') {
                    // 陷阱：之前定义的doms是数组 id不可能是数组
                    doms = [$m.$id(item.slice(index + 1))];
                    pushArray(doms, result);
                } else {
                    doms = $m.$tag(item);
                    pushArray(doms, event.result);
                }
            }
            return result;

            // 封装重复性代码
            function pushArray(doms, result) {
                for (var j = 0, domlen = doms.length; j < domlen; j++) {
                    result.push(doms[j]);
                }
            }
        },
        // 层次选择器
        $cengci: function(select) {
            // 各个击破
            var sel = $m.trim(select).split(' ');
            var result = [];
            var context = [];

            for (var i = 0, len = sel.length; i < len; i++) {
                result = [];
                var item = $m.trim(sel[i]);
                var first = sel[i].charAt(0);
                var index = item.indexOf(first);

                if (first === '#') {
                    pushArray([$m.$id(item.slice(index))]);
                    context = result;
                } else if (first === '.') {
                    if (context.length) {
                        for (var j = 0, contextLen = context.length; j < contextLen; j++) {
                            pushArray($m.$class(item.slice(index + 1), context[j]));
                        }
                    } else {
                        pushArray($m.$class(item.slice(index() + 1)));
                    }
                    context = result;
                } else {
                    if (context.length) {
                        for (var j = 0, contextLen = context.length; j < contextLen; j++) {
                            pushArray($m.$tag(item, context[j]));
                        }
                    } else {
                        pushArray($m.$$taf(itrm));
                    }
                    context = result;
                }
            }
            return context;

            // 重复代码封装
            function pushArray(doms) {
                for (var i = 0, domlen = doms.length; i < domlen; j++) {
                    result.push(doms[j]);
                }
            }
        },
        /*多组+层次*/
        $select: function(str) {
            var result = [];
            var item = $m.trim(str).split(',');
            for (var i = 0, glen = item.length; i < glen; i++) {
                var select = $m.trim(item[i]);
                var context = [];
                context = $m.$cengci(select);
                pushArray(context);

            };
            return result;

            //封装重复的代码
            function pushArray(doms) {
                for (var j = 0, domlen = doms.length; j < domlen; j++) {
                    result.push(doms[j])
                }
            }
        },
        //html5实现的选择器
        $all: function(selector, context) {
            context = context || document;
            return context.querySelectorAll(selector);
        }
    });

    // 字符操作模块
    $m.extend($m, {
        //去除左边空格
        ltrim: function(str) {
            return str.replace(/(^\s*)/g, '');
        },
        //去除右边空格
        rtrim: function(str) {
            return str.replace(/(\s*$)/g, '');
        },
        //去除空格
        trim: function(str) {
            return str.replace(/(^\s*)|(\s*$)/g, '');
        },
        //随机数
        random: function(begin, end) {
            return Math.floor(Math.random() * (end - begin)) + begin;
        },
        //简单的数据绑定formateString
        formateString: function(str, data) {
            return str.replace(/@\((\w+)\)/g, function(match, key) {
                return typeof data[key] === "undefined" ? '' : data[key]
            });
        }
    });

    // AJAX
    $m.extend($m,{
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
        }
    });

    // 判断数据类型
    $m.extend($m,{
        //数据类型检测
        isNumber:function (val){
            return typeof val === 'number' && isFinite(val)
        },
        isBoolean:function (val) {
            return typeof val ==="boolean";
        },
        isString:function (val) {
            return typeof val === "string";
        },
        isUndefined:function (val) {
            return typeof val === "undefined";
        },
        isObj:function (str){
            if(str === null || typeof str === 'undefined'){
                return false;
            }
            return typeof str === 'object';
        },
        isNull:function (val){
            return  val === null;
        },
        isArray:function (arr) {
            if(arr === null || typeof arr === 'undefined'){
                return false;
            }
            return arr.constructor === Array;
        }
    });

    /*事件模块*/
    $m.extend($m,{
        /*绑定事件*/
        on:function (id, type, fn) {
            //var dom = document.getElementById(id);
            var dom = $m.isString(id)?document.getElementById(id):id;
            //如果支持
            //W3C版本 --火狐 谷歌 等大多数浏览器
            //如果你想检测对象是否支持某个属性，方法，可以通过这种方式
            if(dom.addEventListener ) {
                dom.addEventListener(type, fn, false);
            }else if(dom.attachEvent){
                //如果支持 --IE
                dom.attachEvent('on' + type, fn);
            }
        },
        /*解除事件*/
        un:function(id, type, fn) {
            //var dom = document.getElementById(id);
            var dom = $m.isString(id)?document.getElementById(id):id;
            if(dom.removeEventListener){
                dom.removeEventListener(type, fn);
            }else if(dom.detachEvent){
                dom.detachEvent(type, fn);
            }

        },
        /*点击*/
        click: function(id,fn){
            this.on(id,'click',fn);
        },
        /*鼠标进入*/
        mouseover:function(id,fn){
            this.on(id,'mouseover',fn);
        },
        /*鼠标离开*/
        mouseout:function(id,fn){
            this.on(id,'mouseout',fn);
        },
        /*悬浮*/
        hover: function(id,fnOver,fnOut){
            if(fnOver){
                this.on(id,"mouseover",fnOver);
            }
            if(fnOut){
                this.on(id,"mouseout",fnOut);
            }
        },
        /*事件基础*/
        /*获取事件对象*/
        getEvent:function(event){
            return event?event:window.event;
        },
        /*获取目标元素*/
        getTarget:function(event){
            var e = $m.getEvent(event);
            /*短路表达式*/
            return e.target||e.srcElement;
        },
        /*阻止默认行为*/
        preventDefault:function(event){
            var event = $m.getEvent(event);
            if(event.preventDefault){
                event.preventDefault();
            }else{
                event.returnValue = false;
            }
        },
        /*阻止冒泡*/
        stopPropagation:function(event){
            var event = $m.getEvent(event);
            if(event.stopPropagation){
                event.stopPropagation();
            }else{
                event.cancelBubble = true;
            }
        },
        //事件委托
        delegate:function (pid, eventType, selector, fn) {
            //参数处理
            var parent = $m.$id(pid);
            function handle(event){
                var target = $m.getTarget(event);
                if(target.nodeName.toLowerCase()=== selector || target.id === selector || target.className.indexOf(selector) != -1){
                    // 在事件冒泡的时候，回以此遍历每个子孙后代，如果找到对应的元素，则执行如下函数
                    // 为什么使用call，因为call可以改变this指向
                    // 大家还记得，函数中的this默认指向window，而我们希望指向当前dom元素本身
                    fn.call(target);
                }
            }
            //当我们给父亲元素绑定一个事件，他的执行顺序：先捕获到目标元素，然后事件再冒泡
            //这里是是给元素对象绑定一个事件
            parent[eventType]=handle;
        }
    });

    /*封装css框架*/
    $m.extend($m,{
        // 样式
        css:function(context, key, value){
            var dom = $m.isString(context)?$m.$all(context):context;
            // 如果是数组
            if(dom.length){
                // 先骨架骨架 -- 如果是获取模式 -- 如果是设置模式
                // 如果value不为空，则表示设置
                if(value){
                    for(var i = dom.length - 1; i>=0; i--){
                        setStyle(dom[i],key,value);
                    }
                    // 如果value为空
                } else{
                    return getStyle(dom[0]);
                }
                // 如果不是数组
            }else{
                if(value){
                    setStyle(dom,key,value);
                }else{
                    return getStyle(dom);
                }
            }
            function getStyle(dom){
                if(dom.currentStyle){
                    return dom.currentStyle[key];
                }else{
                    return getComputedStyle(dom,null)[key];
                }
            }
            function setStyle(dom,key,value){
                dom.style[key] = value;
            }
        },
        // 获取css样式数字
        cssNum:function(context,key){
            return parseFloat($m.css(context,key));
        },
        // 元素高度宽度概述
        // 计算方式：clientHeight clientWidth innerWidth innerHeight
        // 元素的实际高度+border，也不包含滚动条
        width:function(id){
            return $m.$id(id).clientWidth;
        },
        height:function(id){
            return $m.$id(id).clientHeight;
        },
        // 元素的滚动高度和宽度
        // 当元素出现滚动条时候，这里的高度有两种：可视区域的高度 实际高度（可视高度+不可见的高度）
        // 计算方式 scrollwidth
        scrollWidth:function(id){
            return $m.$id(id).scrollWidth;
        },
        scrollHeight:function(id){
            return $m.$id(id).scrollHeight;
        },
        //元素滚动的时候 如果出现滚动条 相对于左上角的偏移量
        //计算方式 scrollTop scrollLeft
        scrollTop:function(id){
            return $m.$id(id).scrollTop;
        },
        scrollLeft:function(id){
            return $m.$id(id).scrollLeft;
        },
        // 获取屏幕的高度和宽度
        screenWidth:function(){
            return window.screen.width;
        },
        screenHeight:function(){
            return window.screen.height
        },
        // 文档视窗的宽高度
        wWidth:function(){
            return document.documentElement.clientWidth;
        },
        wHeight:function(){
            return document.documentElement.clientHeight;
        },
        // 文档滚动区域的整体宽高
        wScrollWidth:function(){
            return document.body.scrollWidth;
        },
        wScrollHeight:function(){
            return document.body.scrollHeight;
        },
        // 获取滚动条相当于顶部的偏移
        wScrollTop:function(){
            var scrollTop = window.pageYOffset|| document.documentElement.scrollTop || document.body.scrollTop;
            return scrollTop;
        },
        //获取滚动条相对于其左边的偏移
        wScrollLeft:function () {
            var scrollLeft = document.body.scrollLeft || (document.documentElement && document.documentElement.scrollLeft);
            return scrollLeft;
        },
        // 获取坐标
        offset:function(id){
            function absolateLeft(id){
                var dom =$m.$id(id);
                var left = $m.position(id).left;
                var parent = dom.offsetParent;
                while(parent !== null){
                    left += parent.offsetLeft;
                    parent = parent.offsetParent;
                }
                return left;
            }
            function absolateTop(id){
                var dom = $m.$id(id);
                var top = $m.position(id).top;
                var parent = dom.offsetParent;
                while(parent !== null){
                    top += parent.offsetTop;
                    parent = parent.offsetParent;
                }
                return top;
            }

            return {top:absolateTop(id),left:absolateLeft(id)};
        },
        // 获取坐标值相当于父亲
        position:function(id){
            function offsetLeft(dom){
                return dom.offsetLeft;
            }
            function offsetTop(dom){
                return dom.offsetTop;
            }

            var dom = $m.$id(id);
            return {top:offsetTop(dom),left:offsetLeft(dom)};
        },
        // 显示
        show:function(context){
            var doms = $m.$all(context);
            for(var i = 0, len = doms.length; i < len; i++) {
                $m.css(dom[i], 'display', 'block');
            }
        },
        // 隐藏
        hide:function(content){
            var doms = $m.$all(content);
            for(var i = 0, len = doms.length; i < len; i++) {
                $m.css(dom[i], 'display', 'none');
            }
        }

    });

    /*封装属性框架*/
    $m.extend($m,{
        // 属性操作，获取属性值，设置属性值 attr('test','target','_blank')
        attr:function(content,key,value){
            var dom = $m.$all(content);
            // 如果是数组 比如 tag
            if(dom.length){
                if(value){
                    for(var i= 0,len=dom.length;i<len;i++){
                        dom[i].setAttribute(key,value);
                    }
                }else{
                    return dom[0].getAttribute(key);
                }
            }else{ // 单个元素 比如id
                if(value){
                    dom.setAttribute(key,value);
                }else{
                    return dom.getAttribute(key);
                }
            }
        },
        // 删除属性
        removeAttr:function(content,key){
            var dom = $m.$all(content);
            if(dom.length){
                for(var i= 0,len=dom.length;i<len;i++){
                    dom[i].removeAttribute(key);
                }
            }else{
                dom.removeAttribute(key);
            }
        },
        // 动态添加和移除class
        addClass:function(content,name){
            var dom = $m.$all(content);
            // 如果是集合
            if(dom.length){
                for(var i=0,len=dom.length;i<len;i++){
                    addName(dom[i]);
                }
            }else{
                addName(dom);
            }
            function addName(dom){
                dom.className = dom.className + ' ' + name;// 把原先class属性加上
            }
        },
        removeClass:function(content,name){
            var dom = $m.$all(content);
            if(dom.length){
                for(var i= 0,len=dom.length;i<len;i++){
                    removeName(dom[i]);
                }
            }else{
                removeName(dom);
            }
            function removeName(dom){
                dom.className = dom.className.replace(name,'');
            }
        },
        // 判断是否有
        hasClass:function(content,name){
            var dom = $m.$all(content);
            var flag = true;
            for(var i= 0,len=dom.length;i<len;i++){
                flag = flag && check(dom[i],name);
            }
            return flag;
            // 判断单个元素
            function check(element,name){
                return -1<(" "+element.className+" ").indexOf(" "+name+" ");
            }
        },
        // 获取
        getClass:function(id){
            var dom = $mk.$all(id);
            return $mk.trim(dom[0].className).split(" ");
        }
    });

    /*内容框架*/
    $m.extend($m,{
        // innerHTML的函数版本
        html:function(content,value){
            var dom = $m.$all(content);
            // 设置
            if(value){
                for(var i= 0,len=dom.length;i<len;i++){
                    dom[i].innerHTML = value;
                }
            }else{
                return dom[0].innerHTML;
            }
        }
    });

    /*封装json*/
    $m.extend($m,{
        // 将json转换成字符串
        sjson: function (json){
            return JSON.stringify(json);
        },
        // 将字符串转换成json
        json:function (str){
            return eval(str);
        }
    });

    /*缓存框架-内存篇*/
    $m.cache = {
        data:[],
        get:function(key){
            console.log('222');
            var value = null;
            console.log(this.data);
            for(var i= 0,len=this.data.length;i<len;i++){
                var item = this.data[i];
                if(key == item.key) {
                    value = item.value;
                }
            }
            console.log('get'+value);
            return value;
        },
        add:function(key,value){
            var json = {key:key, value:value};
            this.data.push(json);
        },
        delete:function(key){
            var status = false;
            for(var i= 0,len=this.data.length;i<len;i++){
                var item = this.data[i];
                // 循环数组元素
                if(item.key.trim() == key){
                    this.data.slice(i,1); // 开始位置，删除个数
                    status = true;
                    break;
                }
            }
            return status;
        },
        update:function(key,value){
            var status = false;
            // 循环数组元素
            for(var i= 0,len=this.data.length;i<len;i++){
                var item = this.data[i];
                if(item.key.trim() === key.trim()){
                    item.value = value.trim();
                    status = true;
                    break;
                }
            }
            return status;
        },
        isExist:function(key){
            for(var i= 0,len=this.data.length;i<len;i++){
                var item = this.data[i];
                if(key === item.key){
                    return true;
                }else{
                    return false;
                }
            }
        }
    };

    /*coockie框架*/
    $m.coockie = {
        // 设置coockie
        setCookie:function(name,value,days,path){
            var name = escape(name);
            var value = escape(value);
            var expires = new Date();
            expires.setTime(expires.getTime() + days*24*60*60*1000);
            path = path ==""?"":";path="+path;
            _expires = (typeof  hours) == "string"?"":";exipires="+expires.toUTCString();
            document.cookie = name + "="+value+_expires+path;
        },
        // 获取cookie值
        getCookie: function(name){
            var name = escape(name);
            // 读cookie值
            var allcookies = document.cookie;

            // 查找名为name的cookie的开始位置
            name += "=";
            var pos = allcookies.indexOf(name);
            // 如果找到了具有该名字的cookie，那么提取并使用它的值
            if (pos != -1){                                             //如果pos值为-1则说明搜索"version="失败
                var start = pos + name.length;                  //cookie值开始的位置
                var end = allcookies.indexOf(";",start);        //从cookie值开始的位置起搜索第一个";"的位置,即cookie值结尾的位置
                if (end == -1) end = allcookies.length;        //如果end值为-1说明cookie列表里只有一个cookie
                var value = allcookies.substring(start,end);  //提取cookie的值
                return unescape(value);                           //对它解码
            }else{
                return "";
            }                                              //搜索失败，返回空字符串
        },
        //删除cookie
        deleteCookie:function (name,path){
            var name = escape(name);
            var expires = new Date(0);
            path = path == "" ? "" : ";path=" + path;
            document.cookie = name + "="+ ";expires=" + expires.toUTCString() + path;
        }
    };

    /*本地存储框架*/
    $m.stroe =(function(){
        var api               = {},
            win               = window,
            doc               = win.document,
            localStorageName  = 'localStorage',
            globalStorageName = 'globalStorage',
            storage;

        api.set    = function (key, value) {};
        api.get    = function (key)        {};
        api.remove = function (key)        {};
        api.clear  = function ()           {};

        if (localStorageName in win && win[localStorageName]) {
            storage    = win[localStorageName];
            api.set    = function (key, val) { storage.setItem(key, val) };
            api.get    = function (key)      { return storage.getItem(key) };
            api.remove = function (key)      { storage.removeItem(key) };
            api.clear  = function ()         { storage.clear() };

        } else if (globalStorageName in win && win[globalStorageName]) {
            storage    = win[globalStorageName][win.location.hostname];
            api.set    = function (key, val) { storage[key] = val };
            api.get    = function (key)      { return storage[key] && storage[key].value };
            api.remove = function (key)      { delete storage[key] };
            api.clear  = function ()         { for (var key in storage ) { delete storage[key] } };

        } else if (doc.documentElement.addBehavior) {
            function getStorage() {
                if (storage) { return storage }
                storage = doc.body.appendChild(doc.createElement('div'));
                storage.style.display = 'none';
                // See http://msdn.microsoft.com/en-us/library/ms531081(v=VS.85).aspx
                // and http://msdn.microsoft.com/en-us/library/ms531424(v=VS.85).aspx
                storage.addBehavior('#default#userData');
                storage.load(localStorageName);
                return storage;
            }
            api.set = function (key, val) {
                var storage = getStorage();
                storage.setAttribute(key, val);
                storage.save(localStorageName);
            };
            api.get = function (key) {
                var storage = getStorage();
                return storage.getAttribute(key);
            };
            api.remove = function (key) {
                var storage = getStorage();
                storage.removeAttribute(key);
                storage.save(localStorageName);
            }
            api.clear = function () {
                var storage = getStorage();
                var attributes = storage.XMLDocument.documentElement.attributes;;
                storage.load(localStorageName);
                for (var i=0, attr; attr = attributes[i]; i++) {
                    storage.removeAttribute(attr.name);
                }
                storage.save(localStorageName);
            }
        }
        return api;
    })();

    /*ease*/
    $m.eases = {
        //t:动画已经执行的时间 b:起始位置 开始位置 c:终止位置 d:持续时间
        // 线性匀速
        linear:function(t, b, c, d){
            return (c-b)*(t/d);
        },
        // 弹性运动
        easeOutBounce:function(t,b,c,d){
            if((t/b)<(1/2.75)){
                return c*(7.5625*t*t)+b;
            }else if(t<(2/2.75)){
                return c*(7.5625*(t-=(1.5/2.75))*t+.75)+b;
            }else if(t<(2.5/2.75)){
                return c*(7.5625*(t-=(2.25/2.75))*t+.9375)+b;
            }else {
                return c*(7.5625*(t-=(2.625/2.75))*7+.984375)+b;
            }
        },
        // 其他
        swing:function(t,b,c,d){
            return this.easeOutQuad(t,b,c,d);
        },
        easeInQuad:function(t,b,c,d){
            return c*(t/=d)*t+b;
        },
        easeOutQuad:function(t,b,c,d){
            return -c*(t/=d)*(t-2)+b;
        },
        easeInOutQuad:function(t,b,c,d){
            if((t/=d/2)<1){
                return c/2*t*t+b;
            }else{
                return -c/2*((--t)*(t-2)-1)+b;
            }
        },
        easeInCubic:function(t,b,c,d){
            return c*(t/=b)*t*t+b;
        },
        easeOutCubic:function(t,b,c,d){
            return c*((t=t/d-1)*t*t+1)+b;
        },
        easeInOutCubic:function(t,b,c,d){
            if((t/=d/2)<1){
                return c/2*t*t*t+b;
            }else{
                return c/2*((t-=2)*t*t+2)+b;
            }
        },
        easeInQuart:function(t,b,c,d){
            return c*(t/=d)*t*t*t+b;
        },
        easeOutQuart:function(t,b,c,d){
            return -c*((t=t/d-1)*t*t*t-1)+b;
        },
        easeInOutQuart:function(t,b,c,d){
            if((t/=d/2)<1){
                return c/2*t*t*t*t+b;
            }else{
                return -c/2*((t-=2)*t*t*t-2)+b;
            }
        },
        easeInQuint:function(t,b,c,d){
            return c*(t/=d)*t*t*t*t+b;
        },
        easeOutQuint:function(t,b,c,d){
            return c*((t=t/d-1)*t*t*t*t+1)+b;
        },
        easeInOutQuint:function(t,b,c,d){
            if((t/=d/2)<1){
                return c/2*t*t*t*t*t+b;
            }else{
                return c/2*((t-=2)*t*t*t*t+2)+b;
            }
        },
        easeInSine:function(t,b,c,d){
            return -c*Math.cos(t/d*(Math.PI/2))+c+b;
        },
        easeOutSine:function(t,b,c,d){
            return c*Math.sin(t/d*(Math.PI/2))+b;
        },
        easeInOutSine:function(t,b,c,d){
            return -c/2*(Math.cos(Math.PI*t/d)-1)+b;
        },
        easeInExpo:function(t,b,c,d){
            return (t==0)?b:c*Math.pow(2,10*(t/d-1))+b;
        },
        easeOutExpo:function(t,b,c,d){
            return (t==d)?b+c:c*(-Math.pow(2,-10*t/d)+1)+b;
        },
        easeInOutExpo:function(t,b,c,d){
            if(t==0) return b;
            if(t==d) return b+c;
            if((t/=d/2)<1) return c/2*Math.pow(2,10*(t-1))+b;
            return c/2*(-Math.pow(2,-10*--t)+2)+b;
        },
        easeInCirc:function(t,b,c,d){
            return -c*(Math.sqrt(1-(t/=d)*t)-1)+b;
        },
        easeOutCirc:function(t,b,c,d){
            return c*Math.sqrt(1-(t=t/d-1)*t)+b;
        },
        easeInOutCirc:function(t,b,c,d){
            if((t/=d/2)<1) return -c/2*(Math.sqrt(1-t*t)-1)+b;
            return c/2*(Math.sqrt(1-(t-=2)*t)+1)+b;
        },
        easeInElastic:function(t,b,c,d){
            var s=1.70158, p=0, a=c;
            if(t==0) return b;if((t/=d)==1) return b+c; if(!p) p=d*.3;
            if(a<Math.abs(c)){a=c;var s=p/4;}
            else var s=p/(2*Math.PI)*Math.asin(c/a);
            return -(a*Math.pow(2,10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p));
        },
        easeOutElastic:function(t,b,c,d){
            var s=1.70158, p=0, a=c;
            if(t==0) return b;if((t/=d)==1) return b+c; if(!p) p=d*.3;
            if(a<Math.abs(c)){a=c;var s=p/4;}
            else var s=p/(2*Math.PI)*Math.asin(c/a);
            return a*Math.pow(2,-10*t)*Math.sin((t*d-s)*(2*Math.PI)/p)+c+b;
        },
        easeInOutElastic:function(t,b,c,d){
            var s=1.70158, p=0, a=c;
            if(t==0) return b;if((t/=d/2)==2) return b+c; if(!p) p=d*(.3*1.5);
            if(a<Math.abs(c)){a=c;var s=p/4;}
            else var s=p/(2*Math.PI)*Math.asin(c/a);
            if(t<1) return -.5*(a*Math.pow(2,10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p))+b;
            return a*Math.pow(2,-10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p)*.5+c+b;
        },
        easeInBack:function(t,b,c,d,s){
            if(s==undefined) s=1.70158;
            return c*(t/=d)*t*((s+1)*t-s)+b;
        },
        easeOutBack:function(t,b,c,d,s){
            if(s==undefined) s=1.70158;
            return c*((t=t/d-1)*t*((s+1)*t+s)+1)+b;
        },
        easeInOutBack:function(t,b,c,d,s){
            if(s==undefined) s=1.70158;
            if((t/=d/d)<1) return c/2*(t*t*(((s*=(1.425))+1)*t-s))+b;
            return c/2*((t-=2)*t*(((s*=(1.525))+1)*t+s)+2)+b;
        },
        easeInBounce:function(t,b,c,d){
            return c-this.easeOutBounce(d-t,0,c,d)+b;
        },
        easeInOutBounce:function(t,b,c,d){
            if(t<d/2) return this.easeInBounce(t*2,0,c,d)*.5+b;
            return this.easeOutBounce(t*2-d,0,c,d)*.5+c*.5+b;
        }};

    /*动画框架*/
    function Animate(){
        this.config={
            interval:300,
            ease:'linear'
        };
        /*定时器的句柄*/
        this.timer;
        /*间隔时间*/
        //this.interval =16;
        /*动画对象*/
        // 多个物体
        this._queen = [];
    };
    Animate.prototype = {
        /*运行部*/
        /*动画本质*/
        /*就是一个循环，循环做一些事情*/
        /*left：100 110 120 ....*/
        _run:function(){
            var that = this;
            that.timer=setInterval(function(){that._loop();},that.config.interval)
        },
        /*每次循环要做的是*/
        _move:function(_obj){
            var id = _obj.id;
            var styles = _obj.styles;
            var that = this;
            var pass = +new Date();
            //this._obj.pass = pass;
            var tween = that._getTween(_obj.now,pass,_obj.duration,that.config.ease);
            if(tween>=1){
                this._stop(id,styles);
            }else{
                that._manyProperty(id,styles,tween);
            }
            //console.log(_obj);
        },
        /*就是循环，每次循环做单个物体代码*/
        /*设计模式：开放封闭原则*/
        _loop:function(){
            var that = this;
            for(var i= 0,len=that._queen.length;i<len;i++){
                var _obj = that._queen[i];
                that._move(_obj);
            }
        },
        /*停止动画*/
        _stop:function(id,styles){
            this._manyProperty(id,styles,1);
            clearInterval(this.timer);
        },
        /*单个属性运动公式*/
        _oneProperty:function(id,name,start,juli,tween){
            if(name == 'opacity'){
                $mk.css(id,name,start+juli*tween);
            }else{
                $mk.css(id,name,start+juli*tween+'px');
            }
        },
        /*多个属性运动公式*/
        _manyProperty:function(id,styles,tween){
            for(var i=0,len=styles.length;i<len;i++){
                this._oneProperty(id,styles[i].property,styles[i].start,styles[i].juli,tween);
            }
        },
        /*获取时间进程*/
        _getTween:function(now,pass,duration,ease){
            var eases ={
                //t:动画已经执行的时间 b:起始位置 开始位置 c:终止位置 d:持续时间
                // 线性匀速
                linear:function(t, b, c, d){
                    return (c-b)*(t/d);
                },
                // 弹性运动
                easeOutBounce:function(t,b,c,d){
                    if((t/b)<(1/2.75)){
                        return c*(7.5625*t*t)+b;
                    }else if(t<(2/2.75)){
                        return c*(7.5625*(t-=(1.5/2.75))*t+.75)+b;
                    }else if(t<(2.5/2.75)){
                        return c*(7.5625*(t-=(2.25/2.75))*t+.9375)+b;
                    }else {
                        return c*(7.5625*(t-=(2.625/2.75))*7+.984375)+b;
                    }
                },
                // 其他
                swing:function(t,b,c,d){
                    return this.easeOutQuad(t,b,c,d);
                },
                easeInQuad:function(t,b,c,d){
                    return c*(t/=d)*t+b;
                },
                easeOutQuad:function(t,b,c,d){
                    return -c*(t/=d)*(t-2)+b;
                },
                easeInOutQuad:function(t,b,c,d){
                    if((t/=d/2)<1){
                        return c/2*t*t+b;
                    }else{
                        return -c/2*((--t)*(t-2)-1)+b;
                    }
                },
                easeInCubic:function(t,b,c,d){
                    return c*(t/=b)*t*t+b;
                },
                easeOutCubic:function(t,b,c,d){
                    return c*((t=t/d-1)*t*t+1)+b;
                },
                easeInOutCubic:function(t,b,c,d){
                    if((t/=d/2)<1){
                        return c/2*t*t*t+b;
                    }else{
                        return c/2*((t-=2)*t*t+2)+b;
                    }
                },
                easeInQuart:function(t,b,c,d){
                    return c*(t/=d)*t*t*t+b;
                },
                easeOutQuart:function(t,b,c,d){
                    return -c*((t=t/d-1)*t*t*t-1)+b;
                },
                easeInOutQuart:function(t,b,c,d){
                    if((t/=d/2)<1){
                        return c/2*t*t*t*t+b;
                    }else{
                        return -c/2*((t-=2)*t*t*t-2)+b;
                    }
                },
                easeInQuint:function(t,b,c,d){
                    return c*(t/=d)*t*t*t*t+b;
                },
                easeOutQuint:function(t,b,c,d){
                    return c*((t=t/d-1)*t*t*t*t+1)+b;
                },
                easeInOutQuint:function(t,b,c,d){
                    if((t/=d/2)<1){
                        return c/2*t*t*t*t*t+b;
                    }else{
                        return c/2*((t-=2)*t*t*t*t+2)+b;
                    }
                },
                easeInSine:function(t,b,c,d){
                    return -c*Math.cos(t/d*(Math.PI/2))+c+b;
                },
                easeOutSine:function(t,b,c,d){
                    return c*Math.sin(t/d*(Math.PI/2))+b;
                },
                easeInOutSine:function(t,b,c,d){
                    return -c/2*(Math.cos(Math.PI*t/d)-1)+b;
                },
                easeInExpo:function(t,b,c,d){
                    return (t==0)?b:c*Math.pow(2,10*(t/d-1))+b;
                },
                easeOutExpo:function(t,b,c,d){
                    return (t==d)?b+c:c*(-Math.pow(2,-10*t/d)+1)+b;
                },
                easeInOutExpo:function(t,b,c,d){
                    if(t==0) return b;
                    if(t==d) return b+c;
                    if((t/=d/2)<1) return c/2*Math.pow(2,10*(t-1))+b;
                    return c/2*(-Math.pow(2,-10*--t)+2)+b;
                },
                easeInCirc:function(t,b,c,d){
                    return -c*(Math.sqrt(1-(t/=d)*t)-1)+b;
                },
                easeOutCirc:function(t,b,c,d){
                    return c*Math.sqrt(1-(t=t/d-1)*t)+b;
                },
                easeInOutCirc:function(t,b,c,d){
                    if((t/=d/2)<1) return -c/2*(Math.sqrt(1-t*t)-1)+b;
                    return c/2*(Math.sqrt(1-(t-=2)*t)+1)+b;
                },
                easeInElastic:function(t,b,c,d){
                    var s=1.70158, p=0, a=c;
                    if(t==0) return b;if((t/=d)==1) return b+c; if(!p) p=d*.3;
                    if(a<Math.abs(c)){a=c;var s=p/4;}
                    else var s=p/(2*Math.PI)*Math.asin(c/a);
                    return -(a*Math.pow(2,10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p));
                },
                easeOutElastic:function(t,b,c,d){
                    var s=1.70158, p=0, a=c;
                    if(t==0) return b;if((t/=d)==1) return b+c; if(!p) p=d*.3;
                    if(a<Math.abs(c)){a=c;var s=p/4;}
                    else var s=p/(2*Math.PI)*Math.asin(c/a);
                    return a*Math.pow(2,-10*t)*Math.sin((t*d-s)*(2*Math.PI)/p)+c+b;
                },
                easeInOutElastic:function(t,b,c,d){
                    var s=1.70158, p=0, a=c;
                    if(t==0) return b;if((t/=d/2)==2) return b+c; if(!p) p=d*(.3*1.5);
                    if(a<Math.abs(c)){a=c;var s=p/4;}
                    else var s=p/(2*Math.PI)*Math.asin(c/a);
                    if(t<1) return -.5*(a*Math.pow(2,10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p))+b;
                    return a*Math.pow(2,-10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p)*.5+c+b;
                },
                easeInBack:function(t,b,c,d,s){
                    if(s==undefined) s=1.70158;
                    return c*(t/=d)*t*((s+1)*t-s)+b;
                },
                easeOutBack:function(t,b,c,d,s){
                    if(s==undefined) s=1.70158;
                    return c*((t=t/d-1)*t*((s+1)*t+s)+1)+b;
                },
                easeInOutBack:function(t,b,c,d,s){
                    if(s==undefined) s=1.70158;
                    if((t/=d/d)<1) return c/2*(t*t*(((s*=(1.425))+1)*t-s))+b;
                    return c/2*((t-=2)*t*(((s*=(1.525))+1)*t+s)+2)+b;
                },
                easeInBounce:function(t,b,c,d){
                    return c-this.easeOutBounce(d-t,0,c,d)+b;
                },
                easeInOutBounce:function(t,b,c,d){
                    if(t<d/2) return this.easeInBounce(t*2,0,c,d)*.5+b;
                    return this.easeOutBounce(t*2-d,0,c,d)*.5+c*.5+b;
                }
            };
            var yongshi = pass - now;

            return eases[ease](yongshi,0,1,duration);
        },


        /*添加部
         * 职责：将用户传递的参数转换成我们需要的格式
         * */
        //接收用户传递参数
        /*addOld:function(id,json,duration){
         this._adapterMany(id,json,duration);
         this._run();
         },*/
        add:function(){
            var options = arguments;
            var id = options[0];
            var json = options[1];
            var duration = options[2];
            //var callback = options[3];
            if(!duration){
                duration = 2000;
            }else{
                if($mk.isString(duration)){
                    switch (duration){
                        case 'slow':
                        case  '慢':
                            duration = 8000;
                            break;
                        case 'normal':
                        case  '普通':
                            duration = 4000;
                            break;
                        case 'fast':
                        case  '快':
                            duration = 1000;
                            break;
                    }
                }else {

                }
            }
            this._adapterMany(id,json,duration);
            this._run();
        },
        //设置默认值
        setConfig:function(json){
            var that = this;
            $mk.extend(that.config,json);
            console.log(that.config);
        },
        //前我们为了提高用户体验，我们尽量让用以直观的形式传递参数
        //适配器
        _adapterOne:function(id,json,duration){
            //复习前面：定义一个styles {name:'left',start:100,juli:500}
            //我们定义一个json对象保存单个物体在运行中需要的一切变量
            //起始时间 经过时间 tween id duration juli stylrs
            var _obj = {};
            _obj.id = id;
            //this._obj.dom = $mk.$id(id);
            _obj.duration = duration;
            _obj.tween = 0;
            //this._obj.pass = +new Date();
            _obj.now = +new Date();
            _obj.styles = this._getStyles(id,json);

            return _obj;
        },
        //转换多个物体
        _adapterMany:function(id,json,duration){
            var _obj = this._adapterOne(id,json,duration);
            this._queen.push(_obj);
        },
        /*得到属性*/
        _getStyles:function(id,source){
            var target=[];
            for(var item in source){
                var json={};

                json.start=parseFloat($m.css(id,item));
                json.juli=parseFloat(source[item])-json.start;
                json.property = item;
                target.push(json);
            }
            return target;
        },


        /*后勤部
         * 职责：代码优化 压缩 安全 内存回收
         * */
        // 内存回收
        _destroy:function(){
            for(var item in this._obj){
                delete item;
            }
            this._obj = null;
        }
    };

    $m.animate = new Animate();

    w.$m = w.M = $m; // 暴露两个全局变量 $m M
})(window);