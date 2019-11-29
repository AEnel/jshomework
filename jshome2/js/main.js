var userObj = {
  firstName: 'Bob',
  lastName: 'Push',
  age: 34,
  fullName() {
    return `${userObj.firstName} ${userObj.lastName}`;
  }
};

console.log(userObj);
console.log(userObj.fullName());

function defUpperStr(str) {
  return (str || 'default text').toUpperCase();
}

console.log(defUpperStr('my text')); 
console.log(defUpperStr());

function evenFn(n) {  
  var arrEven = [];
  for (var i = 1; i <= n; i++) if (i % 2 === 0) arrEven.push(i);
  return arrEven;
}

console.log(evenFn(10));
console.log(evenFn(15));
console.log(evenFn(20));

function weekFn(n) {
  var str = '';

  switch (n) {
    case 1: str = 'Понедельник'; break;
    case 2: str = 'Вторник'; break;
    case 3: str = 'Среда'; break;
    case 4: str = 'Четверг'; break;
    case 5: str = 'Пятница'; break;
    case 6: str = 'Суббота'; break;
    case 7: str = 'Воскресенье'; break;
    default: str = null;
  }

  return str;
}

console.log(weekFn(1)); 
console.log(weekFn(2)); 
console.log(weekFn(3)); 
console.log(weekFn(4)); 
console.log(weekFn(5));
console.log(weekFn(6));
console.log(weekFn(7));
console.log(weekFn(11111));
console.log(weekFn(111111.11111)); 
console.log(weekFn('11111111')); 

function ageClassification(num) {
  return num > 0
    ? num > 24
      ? num > 44
        ? num > 65
          ? num > 75
            ? num > 90
              ? num > 122
                ? null
                : 'долгожители'
              : 'старческий возраст'
            : 'пожилой возраст'
          : 'средний возраст'
        : 'молодой возраст'
      : 'детский возраст'
    : null;
}

// console.log ('-8:', ageClassification(-8));
console.log ('8:', ageClassification(8));
console.log ('24.04:', ageClassification(24.04));
console.log ('52:', ageClassification(52));
console.log ('67:', ageClassification(67));
console.log ('91:', ageClassification(89));
console.log ('123:', ageClassification(111));
console.log ('140:', ageClassification(140));

// console.clear(); 

function oddFn(n) {
  var arr = [];
  var i = 0;

  while (i++ < n) if (i % 2 !== 0) arr.push(i);

  return arr;
}

console.log(oddFn(10)); 
console.log(oddFn(15));
console.log(oddFn(20)); 


function mainFunc(a, b, cb) {  
  if (cb && typeof cb === 'function') return cb(a, b);
  return false;
}

function cbRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function cbPow(num, pow) {
  return Math.pow(num, pow);
}

function cbAdd(a, b) {
  return a + b;
}

console.log(mainFunc(2, 9, cbRandom)); 
console.log(mainFunc(2, 9, cbPow)); 
console.log(mainFunc(2, 9, cbAdd)); 
console.log(mainFunc(2, 9, 'not a func')); 
