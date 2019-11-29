var myNum = 10;
var myStr = 'строка';
var myBool = true;
var myArr = [1, 2, 3, 4, 5];
var myObj = {
	first: 'First Name',
	last: 'Last Name',
};

console.log('myNum:', myNum);
console.log('myStr:', myStr);
console.log('myBool:', myBool);
console.log('myArr:', myArr);
console.log('myObj:', myObj);

var decimal2 = myNum.toFixed(2);
console.log('decimal2:', decimal2);

var i = 10;
console.log('i=', i);

console.log('++i:', ++i);
console.log('i++:', i++);
console.log('i=', i);

console.log('--i:', --i);
console.log('i--:', i--);
console.log('i=', i);

var myTest = 20;

myTest += myNum;
console.log('+=', myTest);

myTest -= 9;
console.log('-=', myTest);

myTest *= myNum * 22;
console.log('*=', myTest);

myTest /= 2;
console.log('/=', myTest);

myTest %= 50;
console.log('%=', myTest);

var myPi = Math.PI;
console.log('PI=', myPi);

var myRound = Math.round(89.279);
console.log('Round=', myRound);

var myRandom = Math.random() * 10;
console.log('Random=', myRandom);

var myPow = Math.pow(3, 5);
console.log('Pow=', myPow);

var strObj = { str: 'Мама мыла раму, рама мыла маму' };
strObj.length = strObj.str.length;
console.log('strObj = ', strObj);

var isRamaPos = strObj.str.indexOf('рама');
console.log('isRamaPos:', isRamaPos);

var strReplace = strObj.str.replace('мыла', 'моет');
strReplace = strReplace.replace('рама', 'Рама');
strReplace = strReplace.replace('мыла', 'держит');
console.log('strReplace:', strReplace);

console.log('Верхний регистр'.toUpperCase());
console.log('Нижний регистр'.toLowerCase());
