console.log("Here is : ", "array");

/*
1
Correct the syntax error
 [ 1,7  9  45, ]

 ["Str" "alex","moh"

 'the','fox' 'over' lazy, 'dog',  ]

 

*/
//  Answer
let arr = [1, 7, 9, 45];
let arr2 = ["Str", "alex", "moh"];
let arr3 = ["the", "fox", "over", "lazy", "dog"];
/*
2
What the index of "Banana","Tomato"
var fruits=["Tomato","Banana","Watermelon"]



*/
// Answer
var fruits = ["Tomato", "Banana", "Watermelon"];
console.log(fruits[1]);
console.log(fruits[0]);

/*
3
Create an array represents your:
1- Favorite Food (5)
2- Favorite Sport (3)
3- Favorite Movie (4)
*/

// Answer
const food = ["Hamburger", "Hot Dog", "Pizza", "Noodles", "Fries"];
const Sport = ["football", "Run", "Swim", "Tennis", "Yoga"];
const Movie = [
  "The Batman",
  "	The Adam Project ",
  "	Fresh ",
  "	Scream",
  "	Free Guy",
];
/*

4
Create a function called firstOfArray
that take an array as a parameter
and return the first element in an array

Ex: firstOfArray([1,4,5]) => 1
Ex: firstOfArray(["t","u","g","x"]) => "t"
*/
// Answer
function firstOfArray(arr = []) {
  return arr[0];
}
console.log(firstOfArray(["Esraa", "Basil"]));
/*
5
Create a function called lastOfArray
that take an array as a parameter
and return the first element in an array

Ex: lastOfArray([1,4,5]) => 5
Ex: lastOfArray(["t","u","g","x"]) => "x"
*/
// Answer
function lastOfArray(arr = []) {
  return arr[arr.length - 1];
}
console.log(lastOfArray(["Esraa", "Basil", "Shahed"]));

// Answer

/*
6
Using console make this array to be like this one (push, unshift, shift, pop)

var array = [0,5,7,9]
=> [1,3,4,6,8,9,10]
*/
//Answer
var array = [0, 5, 7, 9];
array.shift();
array.shift();
array.shift();
array.shift();
array.push(1, 3, 4, 6, 8, 9, 10);
console.log(array);
/*
7
Using the console try to figure out what the thing thats (push, unshift, shift, pop) return to you

var array2 = [5,9,-7,3.5]
*/
//Answer
var array2 = [5, 9, -7, 3.5];
console.log(array2.shift());
console.log(array2.unshift(6));
console.log(array2.pop());
console.log(array2.push(10));

console.log(array2);

/*
8
Create a function called middleOfArray
that take an array as a parameter
and return the middle element in an array if it is have an odd elemnets
and return the two middle elemnt in an array if it is have an even elemnets

Ex: middleOfArray([1,4,5]) => 4
Ex: middleOfArray(["t","u","g","x"]) =>"u and g"
*/
// Answer
function middleOfArray(arr = []) {
  let middle = arr[Math.floor(arr.length / 2)];
  if (arr.length % 2 !== 0) {
    return middle;
  } else {
    middle = Math.floor(arr.length / 2);
    return arr[middle - 1] + " " + arr[middle];
  }
}
console.log(middleOfArray([3, 9, 7, 5, 5]));
console.log(middleOfArray(["t", "u", "d", "x"]));
/*
9
Using assignment operator (=)
make the animals array have these animals
var animals = ['cat', 'ele', 'bird']
animals; => ['zebra', 'elephant']
** hint: animals[0]=something


var nums= [1,2,3,8,9]
nums => [5,-22,3.5,44,98,44]
*/

let animals = ["cat", "ele", "bird"];
animals[0] = "zebra";
animals[1] = "elephant";
animals.splice(2);
console.log(animals);
var nums = [1, 2, 3, 8, 9];
nums.splice(0, 6, 5, -22, 3.5, 44, 98, 44);
console.log(nums);
/*
10
Create a function called indexOfArray
that accept an array and index
and return what this array have in this index

var nums= [1,2,3,8,9]
Ex: indexOfArray(nums,3) => 8
Ex: indexOfArray(nums,1) => 2
Ex: indexOfArray(nums,4) => 9

**try more cases by your self
*/
//Anawer
var nums = [1, 2, 3, 8, 9];
function indexOfArray(arr, index) {
  return arr[index];
}
console.log(indexOfArray(nums, 3));
/*
11
Create a function called arrayExceptLast
that accept an array
and return the entire array except the last elemnt
** hint: search abou the function that will cut the array on MDN
var nums= [1,2,3,8,9]
Ex: arrayExceptLast(nums) =>  [1,2,3,8]

**try more cases by your self
*/
//Answer
function arrayExceptLast(arr = []) {
  arr.pop();
  return arr;
}
console.log(arrayExceptLast([1, 2, 3, 8, 9, 8, 9]));
/*
12
Create a function called addToEnd
that accept an array and value
and return the entire array with add this value to the end of this array

var nums= [1,2,3,8,9]
Ex: addToEnd(nums,55) =>  [1,2,3,8,55]

**try more cases by your self
*/
//Answer
function addToEnd(arr = [], value) {
  arr.pop();
  arr.push(value);
  return arr;
}
console.log(addToEnd([1, 2, 3, 8, 9], 5));
// all the exercises below should solved 2 times: 1- for loop 2- while lopp

/*
13
Create a function called sumArray
that accept an array
and return the summation of all elemnt in this array

var nums= [1,2,3,8,9]
Ex: sumArray(nums) => 23

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
//Answer
function sumArray(arr) {
  let count = 0;
  for (i = 0; i <= arr.length - 1; i++) {
    count = count + arr[i];
  }
  return count;
}
function sumArray1(arr) {
  let count = 0;
  i = 0;
  while (i <= arr.length - 1) {
    count = count + arr[i];
    i++;
  }
  return count;
}

console.log(sumArray([1, 2, 3, 4, 5]));
console.log(sumArray1([1, 2, 3, 4, 7]));

/*
14
Create a function called minInArray
that accept an array
and return the minimum value inside this array

var nums= [1,2,3,8,9]
Ex: minInArray(nums) => 1

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
//Answer
function minInArray(arr) {
  min = arr[0];
  for (i = 0; i <= arr.length - 1; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }

  return min;
}
function minInArray1(arr) {
  i = 0;
  min = arr[0];
  while (i <= arr.length - 1) {
    if (arr[i] < min) {
      min = arr[i];
    }
    i++;
  }
  return min;
}

console.log(minInArray([6, 2, 3, 4, 5]));
console.log(minInArray1([6, 7, 9, 3, 5]));
/*
15
Create a function called removeFromArray
that accept an array and elemnt to remove
and return the array after remove this elemnt from it

var nums= [1,2,3,8,9]
Ex: minInArray(nums,8) => [1,2,3,9]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
//Answer
function removeFromArray(arr, elemnt) {
  for (i = 0; i <= arr.length - 1; i++) {
    if (arr[i] == elemnt) {
      arr.splice(i, 1);
    }
  }
  return arr;
}
function removeFromArray1(arr, elemnt) {
  i = 0;
  while (i <= arr.length - 1) {
    if (arr[i] == elemnt) {
      arr.splice(i, 1);
    }
    i++;
  }
  return arr;
}
console.log(removeFromArray([6, 7, 9, 3, 5, 4], 5));
console.log(removeFromArray1([6, 7, 4, 7, 5], 4));
/*
16
Create a function called oddArray
that accept an array
and return an array have only the odd elemnts

var nums= [1,2,3,8,9]
Ex: oddArray(nums) => [1,3,9]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
//Answer
function oddArray(arr) {
  let arrOdd = [];
  for (i = 0; i <= arr.length - 1; i++) {
    if (arr[i] % 2 != 0) {
      arrOdd.push(arr[i]);
    }
  }
  return arrOdd;
}
function oddArray1(arr) {
  i = 0;
  let arrOdd = [];
  while (i <= arr.length - 1) {
    if (arr[i] % 2 != 0) {
      arrOdd.push(arr[i]);
    }
    i++;
  }
  return arrOdd;
}
console.log(oddArray([6, 8, 9, 3, 5, 4]));
console.log(oddArray1([6, 9, 9, 8, 10, 4]));
/*
17
Create a function called aveArray
that accept an array
and return the average of the numbers inside this array

var nums= [1,2,3,8,9]
Ex: aveArray(nums) => 4.6

var nums2= [1,2,3,8,9,77]
Ex: aveArray(nums) => 16.6

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
//Answer
function aveArray(arr) {
  let count = 0;
  for (i = 0; i <= arr.length - 1; i++) {
    avg = (count += arr[i]) / arr.length;
  }
  return avg;
}
function avgArray1(arr) {
  i = 0;
  let count = 0;
  while (i <= arr.length - 1) {
    avg = (count += arr[i]) / arr.length;
    i++;
  }
  return avg;
}
console.log(aveArray([1, 2, 3, 8, 9, 77]));
console.log(avgArray1([6, 8, 8, 3, 5, 7]));
/*
18
Create a function called shorterInArray
that accept an array of strings
and return the shortest string inside this array (first)

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: shorterInArray(strings) => "alex"

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
//Answer
function shorterInArray(arr) {
  let string = arr[0];

  for (i = 0; i <= arr.length - 1; i++) {
    if (string.length > arr[i].length) {
      string = arr[i];
    }
  }
  return string;
}
console.log(
  shorterInArray([
    "run",
    "ahmed",
    "mercer",
    "emad",
    "madrasa",
    "rashed2",
    "hala",
  ])
);
function shorterInArray1(arr) {
  i = 0;
  let string = arr[0];
  while (i <= arr.length - 1) {
    if (string.length > arr[i].length) {
      string = arr[i];
    }
    i++;
  }
  return string;
}

console.log(
  shorterInArray([
    "ahmed",
    "mercer",
    "emad",
    "madrasa",
    "rashed2",
    "hala",
  ])
);
/*
19
Create a function called repeatChar
that accept a string and char
and return the times that this char repeat inside this string

var string= "alex mercer madrasa rashed2 emad hala"
Ex: repeatChar(string,"a") => 6
Ex: repeatChar(string,"z") => 0

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
//Answer
function repeatChar(string, char) {
  let time = 0;
  for (i = 0; i < string.length; i++) {
    if (string[i] === char) {
      time += 1;
    }
  }
  return time;
}
function repeatChar1(string,char) {
  i = 0;
  let time=0;
  while (i <= string.length ) {
    if (string[i] === char) {
      time += 1;
    }
    i++;
  }
  return time;
}
console.log(repeatChar("alex mercer madrasa rashed2 emad hala", "a"));
console.log(repeatChar1("esraa basil alkhalilah", "l"));

/*
20
Create a function called evenIndexOddLength
that accept an array of strings
and return a new array that have the string with odd length in even index

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: evenIndexOddLength(strings) => ["madrasa"]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
//Answer
function evenIndexOddLength(arr) {
  let arr1 = [];
  for (i = 0; i < arr.length; i++) {
    if (arr[i].length % 2 != 0 && i % 2 == 0) {
      arr1.push(arr[i]);
    }
  }

  return arr1;
}
function evenIndexOddLength1(arr) {
  i = 0;
  let arr1 = [];
  while (i <= arr.length - 1) {
    if (arr[i].length % 2 != 0 && i % 2 == 0) {
      arr1.push(arr[i]);
    }
    i++;
  }
  return arr1;
}
console.log(
  evenIndexOddLength(["alex", "mercer", "madrasa", "rashed2", "emad", "hala"])
);
console.log(
  evenIndexOddLength1([ "mercer", "madrasa", "rashed2", "emad","alex", "hala"])
);

/*
21
Create a function called powerElementIndex
that accept an array of number
and return a new array that have the elemnt power by the index of it self

var nums= 
Ex: powerElementIndex(nums) => [0, 5, 16, 27, 16, 100000]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
//Answer
function powerElementIndex(arr) {
  let power = [];
  for (i = 0; i < arr.length; i++) {
    power.push(Math.pow(arr[i], i));
  }
  return power;
}
function powerElementIndex1(arr) {
  i = 0;
 let power = [];
  while (i <= arr.length - 1) {
      power.push(Math.pow(arr[i], i));
      i++;
  }
  
  
  return power;
}
console.log(powerElementIndex([44, 5, 4, 3, 2, 10]));
console.log(powerElementIndex1([44, 5,7 , 8, 2, 15]));

/*
22
Create a function called evenNumberEvenIndex
that accept an array of nums
and return a new array that have the even number in even index

var nums= [5,2,2,1,8,66,55,77,34,9,55,1]
Ex: evenNumberEvenIndex(nums) => [2,8,34]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
//Answer
function evenNumberEvenIndex(arr) {
  let even = [];
  for (i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0 && i % 2 == 0) {
      even.push(arr[i]);
    }
  }
  return even;
}
function evenNumberEvenIndex1(arr) {
  i = 0;
  let even = [];
  while (i <= arr.length ) {
    if (arr[i] % 2 == 0 && i % 2 == 0) {
      even.push(arr[i]);
    }
    i++;
  }
  return even;
}
console.log(evenNumberEvenIndex([5, 2, 2, 1, 8, 66, 55, 77, 34, 9, 55, 1]));
console.log(evenNumberEvenIndex1([8, 5, 4, 3, 5, 7]));
