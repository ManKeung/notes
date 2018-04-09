// 方法1

function toThousands(num) {  
    var result = [ ], counter = 0;  
    num = (num || 0).toString().split('');  
    for (var i = num.length - 1; i >= 0; i--) {  
        counter++;  
        result.unshift(num[i]);  
        if (!(counter % 3) && i != 0) { result.unshift(','); }  
    }  
    return result.join('');  
}

// 方法二  
function toThousands2(num) {  
    var result = '', counter = 0;  
    num = (num || 0).toString();  
    for (var i = num.length - 1; i >= 0; i--) {  
        counter++;  
        result = num.charAt(i) + result;  
        if (!(counter % 3) && i != 0) { result = ',' + result; }  
    }  
    return result;  
}

// 方法三  
function toThousands3(num) {  
    var num = (num || 0).toString(), re = /\d{3}$/, result = '';  
    while ( re.test(num) ) {  
        result = RegExp.lastMatch + result;  
        if (num !== RegExp.lastMatch) {  
            result = ',' + result;  
            num = RegExp.leftContext;  
        } else {  
            num = '';  
            break;  
        }  
    }  
    if (num) { result = num + result; }  
    return result;  
}

// 方法四   最优选择
function toThousands4(num) {  
    var num = (num || 0).toString(), result = '';  
    while (num.length > 3) {  
        result = ',' + num.slice(-3) + result;  
        num = num.slice(0, num.length - 3);  
    }  
    if (num) { result = num + result; }  
    return result;  
}

// 方法五  
function toThousands5(num) {  
    var num = (num || 0).toString(), temp = num.length % 3;  
    switch (temp) {  
        case 1:  
            num = '00' + num;  
            break;  
        case 2:  
            num = '0' + num;  
            break;  
    }  
    return num.match(/\d{3}/g).join(',').replace(/^0+/, '');  
}        

// 方法六  
function toThousands6(num) {  
    return (num || 0).toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,');  
}  

console.log(toThousands6(11240));
console.log(toThousands6(10));

/*测试结果

数字	执行5000次消耗的时间（ms）
     方法一	方法二	方法三	方法四	方法五	方法六
1	    4	1	3	1	14	2
10  	14	1	3	0	7	2
100	    12	1	2	4	5	3
1000	13	2	3	2	9	5
10000	21	4	3	1	6	3
100000	21	3	2	1	5	6*/

/*方法一和方法二的强烈对比表明，字符串操作的效率比数组操作的效率要高得多；方法六的测试结果告诉我们，代码长短跟性能高低没有关系。方法四的综合性能是最好的（但为何num为100的时候，性能有所降低呢，这个实在不解），主要原因是：

1.对比方法一、二，每次操作3个字符而不是1个字符，减少循环次数；
2.对比方法三、五、六，没有使用正则表达式，减少了消耗。

最后，我选择了方法四作为最终的优化方案。*/