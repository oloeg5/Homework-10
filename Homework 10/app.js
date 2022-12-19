
//Task 1

const result = +prompt('Введите любое число') 
if (typeof +result !== 'number') {
} else if (isNaN(result % 2)) {
  alert('Упс, кажется вы ошиблись')
} else if (result % 2 === 0) {
  alert('Число четное')
} else {
  alert('число нечетное')
}


//Task 2

let x = 1,
  res;
switch (typeof x !== 'symbol' && (isFinite(x) || typeof(x) === "string") && typeof(x)) {
  case "number":
    res = "x - число";
    break;
  case "string":
    res = "x - строка";
    break;
  case "boolean":
    res = "x - логическое";
    break;
  default:
    res = "Тип x не определен";
}
console.log(res);



// Task 3

function reverseString(str) {
    return str.split("").reverse().join("");
}
reverseString("hello");




// Task 4

function randomInteger(min, max) {
  let rand = min - 1 + Math.random() * (max - min + 1);
  return Math.round(rand);
}
alert( randomInteger(1, 100) );




// Task 5

let arr = [1, 2, "и", "компот"];
console.log(arr.length);

arr.forEach(function(entry) {
    console.log(entry);
});

function showWithDelay(arr) {
  arr = Array.from(arr);
  
  let i = 0;
  const timer = setInterval(() => {
    console.log(arr[i++]);
    if (i == arr.length)
      clearInterval(timer);
  }, 1000);
}
showWithDelay([1, 2, "и", "компот"]);






//Task 6

function checkArrayType1(arr) {
    return arr.every((e,i,a) => typeof e === typeof a[0]);  
  }
  console.log(checkArrayType1([1,2,3,4]));   //трушный тип данных


function checkArrayType(arr) {
    let arr1 = arr.map(e=>typeof e);
    return [...new Set(arr1)].length === 1;
  }
  console.log(checkArrayType([1,2,3,"four"]));   // фолсовый
  
  
  
  

//Task 7

var arrr = [1,2,3,4,5,6,7,8,9,10,11];
function even(k){
    if (k.length===0) return 0;
    return (k[0] % 2 === 0 ? 1 : 0) + even(k.slice(1));    //проверяем на четные
}
console.log(even(arr));


var arrr = [1,2,3,4,5,6,7,8,9,10,11];
function even(k){
    if (k.length===0) return 0;
    return (k[0] % 2 !== 0 ? 1 : 0) + even(k.slice(1));    //на нечетное
}
console.log(even(arr));   

//если можно скинтьте верный вариант с выводом нулевого элемента и правильной компановкой.




//Task 8

let myMap = new Map();
 myMap.set(1, "you");
myMap.set(2, "are");
myMap.set(3, "badass");

for (let keys of myMap.keys()){
   console.log("Ключ: " + keys)
 }
 for (let values of myMap.values()){
    console.log("Значения: " + values)
 }
