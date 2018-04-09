function getRandomNum() { // 得到随机数字

  var leng = arguments.length;
  // console.log(leng);

  switch(leng) {
    case 0: // 没得参数 默认随机数

      return Math.random();
      break;

    case 1: // 一个参数 0 到 ...
      var range = arguments[0] - 0;
      var rand = Math.random();

      return (0 + Math.round(rand * range));
      break;

    case 2: //  两个参数
      var range = arguments[1] - arguments[0];
      var rand = Math.random();

      return (arguments[0] + Math.round(rand * range));
      break;

    default: // 其他情况
      return console.error("参数错误，超过3个");
  }

}

// 测试代码
/*var num = getRandomNum();
var num1 = getRandomNum(4);
var num2 = getRandomNum(10, 100);
var num3 = getRandomNum(10, 100, 200);

console.log('num = ' + num);
console.log('num = ' + num1);
console.log('num = ' + num2);
console.log('num = ' + num3);
*/

// 注意还可以改进 万一传的是字符窜的情况 其实可以不用考虑
console.log(getRandomNum(10,15,12));