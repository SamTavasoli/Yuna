
let number = 0;
console.log(typeof(number))

let string = "";
console.log(typeof(string))

let boolean = false;
console.log(typeof(boolean))

let object = {};
console.log(typeof(object) + Array.isArray(object))

let array = [];
console.log(typeof(array) + Array.isArray(array))

let nu11 = null;
console.log(typeof(nu11))

let undef = undefined;
console.log(typeof(undef))

// NOT Declaritive Programming
console.log("Not very declaritive:")
var myArray = [1,2,3,4,5,6,7,8,9,0]

var resultArray = [];
for (var i = 0; i < 10; i++)
{
    resultArray.push(myArray[i] + 10) 
}
console.log(resultArray);

var numResult = 0;
for (var i = 0; i < 10; i++)
{
    numResult += resultArray[i]
}
console.log(numResult)


// This is more declaritive:
console.log("More Declaritive:")
var numbers = [1,2,3,4,5,6,7,8,9,0];

// Map = 1-to-1 transformation
var newNumbers = numbers.map(num => num + 10)
console.log(newNumbers)

// Reduce = many-to-1 transformation
var newResult = newNumbers.reduce(addArray, 0)
console.log(newResult)

function addArray (result, number) {
    console.log(`number: ${number}`)
    console.log(`result: ${result}`)
    console.log(`newRes: ${result + number}`)
    console.log()
    return result + number
}


