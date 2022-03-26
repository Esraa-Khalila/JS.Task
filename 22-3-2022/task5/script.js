/*
 * Exercise 1:
 *
 * Make an array of numbers that are doubles of the first array
 *
 * Test Case:
 *
 * console.log(doubleNumbers([2, 5, 100]));
 *
 * Result:
 * [4, 10, 200]
 */
function doubleNumbers(arr) {
  let newArray = [];
  // your code here
  for (i = 0; i < arr.length; i++) {
    newArray.push(arr[i] * arr[i]);
  }
  return newArray;
}
console.log(doubleNumbers([5, 6, 7]));
/*
 * Exercise 2 :
 *
 * Take an array of numbers and make them strings
 *
 * Test Case:
 *
 * console.log(stringItUp([2, 5, 100]));
 *
 * Result:
 * ["2", "5", "100"]
 */

function stringItUp(arr) {
  // your code here
  let newArray = [];
  for (i = 0; i < arr.length; i++) {
    newArray.push(arr[i].toString());
  }
  return newArray;
}
console.log(stringItUp([5, 6, 7]));

//* 3. Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the result. Go to the editor 
//Sample numbers : 0, -1, 4 
//Output : 4, 0, -1 */
/******* Start Your Code *********/

 let x;
 let y;
 let z;

 if(x>y && x>z){
     if(y>z){
         console.log(`${x}, ${y}, ${z}`);
     }else console.log(`${x}, ${z}, ${y}`);
  
 }else if(y>x && y>z){
     if(x>z){
         console.log(`${y}, ${x}, ${z}`);
     }else console.log(`${y}, ${z}, ${x}`);
 }else{
     if(x>y){
         console.log(`${z}, ${x}, ${y}`);
     }else console.log(`${z}, ${y}, ${x}`);
 }

 /******* End Your Code ********* */


/*4. Write a JavaScript conditional statement to find the largest of five numbers. 
Display an alert box to show the result. Go to the editor 
Sample numbers : -5, -2, -6, 0, -1 
Output : 0 */

/******* Start Your Code *********/
  
// let a;
// let b;
// let c;
// let d;
// let e;

// if(a>b && a>c && a>d &&a>e){
//     console.log(a)
// }else if(b>a && b>c && b>d && b>e){
//     console.log(b)
// }else if(c>a && c>b && c>d && c>e){
//     console.log(c)
// }else if(d>a && d>b && d>c && d>e){
//     console.log(d)
// }else  console.log(e)



 /******* End Your Code ********* */

 /* 5.Write the if statement to display "Hello World" if x is greater than y, otherwise alert "Goodbye".*/
/******* Start Your Code *********/
  
 let a;
 let b;
 if(a>b){
     document.write("Hello World")
 }else alert("Goodbye");
 /******* End Your Code ********* */
