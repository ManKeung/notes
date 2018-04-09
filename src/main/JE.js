//金额格式转换 
function parsePrice(s) { 
var n = 2 //设置保留的小数位数 
s = parseFloat((s + "").replace(/[^\d\.-]/g, "")).toFixed(n) + ""; 
var l = s.split(".")[0].split("").reverse(); 
var r = s.split(".")[1]; 
var t = ""; 
for (i = 0; i < l.length; i++) { 
t += l[i]; 
} 
return '￥' + t.split("").reverse().join("") + "." + r; 
} 

console.log(parsePrice(10000));