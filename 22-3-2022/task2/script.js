/* 1. Write a JavaScript program that accept two integers and
 * display the larger. Go to the editor */
/******* Start Your Code *********/
//Answer
function maxNum(num1, num2) {
  let max = Math.max(num1, num2);
  return max;
}
console.log(maxNum(10, 30));

function maxNumber(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}
console.log(maxNumber(50, 30));

/* 2. Write a JavaScript conditional statement to find the sign
 of product of three numbers. Display an alert box with the 
 specified sign. Go to the editor 
Sample numbers : 3, -7, 2 
Output : The sign is - */
//Answer
// num1 = window.prompt("Please enter number1");
// num2 = window.prompt("Please enter number2");
// num3 = window.prompt("Please enter number3");
// if (num1 * num2 * num3 > 0) {
//   alert("the sign is +");
// } else {
//   alert("the sign is -");
// }

/* 3. Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the result. Go to the editor 
Sample numbers : 0, -1, 4 
Output : 4, 0, -1 */
let number1 = 26;
let number2 = 25;
let number3 = 30;
if (number1 > number2 && number1 > number3) {
  if (number3 > number2) {
    alert(number1 + " " + number3 + " " + number2);
  } else {
    alert(number1 + " " + number2 + " " + number3);
  }
} else if (number2 > number1 && number2 > number3) {
  if (number3 > number1) {
    alert(number2 + " " + number3 + " " + number1);
  } else {
    alert(number2 + " " + number1 + " " + number3);
  }
} else  {
  if (number2 > number1) {
   alert(number3 + " " + number2 + " " + number1);
  } else {
    alert(number3 + " " + number1 + " " + number2);
  }
}

/*4. Write a JavaScript conditional statement to find the largest of five numbers. 
Display an alert box to show the result. Go to the editor 
Sample numbers : -5, -2, -6, 0, -1 
Output : 0 */

/******* Start Your Code *********/

let nums1 = 10;
let nums2 = 25;
let nums3 = -1;
let nums4 = 90;
let nums5 = 100;

if (nums1 > nums2 && nums1 > nums3 && nums1 > nums4 && nums1 > nums5) {
  console.log(nums1);
} else if (nums2 > nums1 && nums2 > nums3 && nums2 > nums4 && nums2 > nums5) {
  console.log(nums2);
} else if (nums3 > nums1 && nums3 > nums2 && nums3 > nums4 && nums3 > nums5) {
  console.log(nums3);
} else if (nums4 > nums1 && nums4 > nums2 && nums4 > nums3 && nums4 > nums5) {
  console.log(nums4);
} else if (nums5 > nums1 && nums5 > nums2 && nums5 > nums3 && nums5> nums4) {
  console.log(nums5);
}


 /* 5.Write the if statement to display "Hello World" if x is greater than y, otherwise alert "Goodbye".*/
/******* Start Your Code *********/
let x= 7;
let y = 6

if (x > y) {
    alert("Hello World")
} else {
    alert("Goodbye")
}