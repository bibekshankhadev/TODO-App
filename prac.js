console.log("Hello, World!");

function Sum(num1, num2){
    let sum = num1 + num2
    return sum;
}

function EvenorOdd(num){
    if (num%2 === 0){
        console.log("The number is even");
        
    }else{
        console.log("The number is odd");
        
    }
}

function largest(a, b, c) {
    if (a>=b && a >= c){
        console.log("a is the largest number");
        
    }if( b>= a && b>=c) {
        console.log("b is the largest number");
        
    } else {
        console.log("c is the largest number");
        
    }
}

function reverseString(str){
    return str.split("").reverse().join("");
}

// Function that returns factorial of a number
function factorialOfNumber(num){
    if(num < 0) return " Number should not be zero or less than zero";

    let result = 1;
    for (let i = 1; i <= num ; i++) {
        result *= i
        
    }
    return result;
}

//Function to check palindrome
function palindromeChecker(str){
    const str1 = str.split("").reverse().join("")
    if(str1 === str){
        console.log("The given string is palindrome");
        return true;
    }else{
        console.log("The given string is not palindrome");
        return false;
    }
}

console.log(palindromeChecker("madam"));


function secondLargest(arr){
    if (arr.length < 2) return null;

    let firstLargest = -Infinity;
    let secondNumber = -Infinity;

    for(let num of arr){
        if (num > firstLargest){
            secondNumber = firstLargest;
            firstLargest = num;
        }else if (num > secondNumber && num != firstLargest){
            secondNumber = num;
        }
    }
    return secondNumber === -Infinity ? null : secondNumber;
}


console.log(secondLargest([5]));        // Output: null (not enough numbers)
console.log(secondLargest([5, 5, 5]));  // Output: null (all same)
console.log(secondLargest([10, 20]));   // Output: 10