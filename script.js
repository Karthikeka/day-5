

question 3
//Do the below programs in arrow functions.



// Print odd numbers in an array
// Convert all the strings to title caps in a string array
// Sum of all numbers in an array
// Return all the prime numbers in an array
// Return all the palindromes in an array 

//1.PRINT 0dd numbers in an array

let numberArray = [1, 2, 3, 4, 5, 6, 15, 57,99 ]

console.log("Odd Numbers in Number Array are: " + numberArray.filter((item) => {

    return item % 2 !== 0

}))

output
Odd Numbers in Number Array are: 1,3,5,9,15,57,99


//2.Convert all the strings to title caps in a string array

let stringArray = ["karthik", "is", "a", "smart", "developer"]

stringArray = stringArray.map((item) => {

    return item.toUpperCase()

})

console.log("Converted String Array is: " + stringArray)

output:KARTHIK IS A SMART DEVELOPER

//3 sum of all numbers in an array

let numberArray=[55,25,3,6,5]
let sum = numberArray.reduce((currentTotal, item) => {

    return currentTotal + item

}, 0)

console.log("Sum of elements in Number Array: " + sum)

output:sum of elements in Number Array: 94


//4 return all the numbers in a array
let numberArray=[55,25,3,6,5]
	console.log("Prime Number in Array are: " +
	    numberArray.filter((item) => {
	
	        for (let i = 2; i < item; i++) {
	            if (item % i === 0)
	                return false;
	        }
        return item !== 1;
	
	    }))

        output:
    "prime Number in Array are:3,5" 


 
   //5 Return all the palindromes in an array 

    let arrayPallindrome = [111, 102, 505, 323, 612, 776, 707, 121]

console.log("Palindrome Numbers in array are: " +
    arrayPallindrome.filter((item) => {

        let temp = item + "";

        if (temp.split('').reverse().join('') === item + "")
            return true

        return false

    }))
    output:Palindrome Numbers in array are: 111,505,323,707,121
