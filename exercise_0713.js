const inventors = [
    "Albert Einstein",
    "Issac Newton",
    "Galileo Galilei",
    "Marie Curie",
    "Johannes Kepler",
    "Nicolaus Copernicus",
    "Max Planck",
    "Katherine Blodgett",
    "Ada Lovelace",
    "Sarah E. Goode",
    "Lise Meitner",
    "Hanna Hammarstrom"
];

const numbers = [1, 2, 3, 5, 8, 13, 21, 34, 55];


/* ----------------------------------FILTER--------------------------------
---------------------------------------------------------------------------*/

// 1. out an array of the inventors whose name starts with 'A'.
const startA = inventors.filter((inventorsName) => inventorsName.startsWith("A"));
console.log("1. stars with A: ", startA);

// 2. out an array of the inventors whose name contains 'n'.
const includeN = inventors.filter((inventorsName) => inventorsName.includes("n"));
console.log("2. including N: ", includeN);

// 3. out an array of the inventors whose name has the same letter twice in a row (e.g. nn or mm).
const sameLetter = inventors.filter((inventorsName) => {
    // console.log('inventorsName:', inventorsName)
    for (let i = 0; i < inventorsName.length; i++) {
        if (inventorsName[i] == inventorsName[i + 1]) {
            return inventorsName
        }
    }
})

// another way to solve
// let sameLetter = inventors.filter(name => {
//     let splitName = name.split('')
//     let result = false
//     for (let i = 0; i < splitName.length; i++) {
//         if (splitName[i] === splitName[i + 1]) {
//             result = true
//         }
//     }
//     return result
// })
console.log("3. same letter: ", sameLetter)

/* -----------------------------------------------------------------------
--------------------------------------------------------------------------*/

// 4. out an array of the numbers which are odd.
const oddNumber = numbers.filter(n => n % 2 != 0)
console.log("4. odd Number: ", oddNumber)

// 5. out an array of the numbers that have two digits.
const twoDigit = numbers.filter(n => n >= 10 && n <= 99)
console.log("5. two digit: ", twoDigit)

// 6. out an array of the numbers which are prime.
const primeNumber = numbers.filter((number) => {
    for (let i = 2; i < number; i++)
        if (number % i === 0)
            return false;
    return number > 1;
})
console.log("6. prime number: ", primeNumber)


/* --------------------------------MAP--------------------------------------
---------------------------------------------------------------------------*/

// 1. Print out the first name of each inventor.
let firstName = inventors.map((name) => {
    let arrayName = name.split(" ")
    console.log("1. first name: ", arrayName[0])
})
// console.log(firstName)

// 2. Print out the length of every inventor's full name.
let nameLength = inventors.map(function (name) {
    let len = name.length;
    return len;
});
console.log("2. name length: ", nameLength)

// 3. Print out all the inventors' names in uppercase.
let upperCase = inventors.map((name) => {
    let arrayName = name.toUpperCase()
    console.log("3. upper case: ", arrayName)
})

// 4. Print out initials of all inventors(e.g. A.E., I.N., ...)
let initials = inventors.map(name => {
    let inventorSplit = name.split(' ')
    let result = ''
    // console.log(inventorSplit)
    for (let i = 0; i < inventorSplit.length; i++) {
        result += inventorSplit[i][0] + "."
    }
    return result
})
console.log(initials)

// 5. Print out an array of every number multiplied by 100.
let multiplied = numbers.map((number) => {
    return number * 100;
});
console.log("5. multiplied: ", multiplied);


/* --------------------------------SORT--------------------------------------
---------------------------------------------------------------------------*/

// 1. Sort all the inventors in alphabetical order, A-Z.
let sortedName = inventors.sort()
console.log("1. sorted a-z: ", sortedName)

// 2. Sort all the inventors in reverse alphabetical order, Z-A. Do not use the reverse method.
let reverseSortedName = inventors.sort((a, b) => {
    if (a > b) {
        return -1;
    } else if (a < b) {
        return 1
    } else {
        return 0
    }
})
console.log("2. reverse sorted z-a: ", reverseSortedName)

// 3. Sort all the inventors by length of name, shortest name first.
let legnthOfName = inventors.sort((a, b) => a.length - b.length)
console.log("3. length of name : ", legnthOfName)

// 4. Sort all the inventors by length of name, longest name first. Do not use the reverse method.
let reverseLengthOfName = inventors.sort((a, b) => b.length - a.length)
console.log("4. reverse length of name: ", reverseLengthOfName)


/* --------------------------------REDUCE--------------------------------------
---------------------------------------------------------------------------*/

// 1. Find the sum of all the numbers.
let sum = numbers.reduce((total, item) => {
    total += item
    return total
}, 0)
console.log("1. sum: ", sum)

// 2. Find the sum of all the even numbers.
const even = numbers.filter(number => number % 2 === 0)
let sumEven = even.reduce((total, item) => {
    total += item
    return total
}, 0)
console.log("2. sum even number:", sumEven)

// 3. Create a string that has the first name of every inventor.
let firstNameString = inventors.reduce((total, name) => {
    total += name.split(' ')[0]
    return total
}, '')
console.log("3. first name: ", firstNameString)

/* --------------------------------SOME/EVERY--------------------------------
---------------------------------------------------------------------------*/

// 1. Does any inventor have the letter 'y' in their name?
let checkY = inventors.some(name => name.includes('y'))
console.log("1. name with Y: ", checkY)

// 2. Does every inventor have the letter 'e' in their name?
let checkE = inventors.every(name => name.includes('e'))
console.log("2. name with E: ", checkE)

// 3. Does every inventor have first name that's longer than 4 characters?
let longerThan4 = inventors.every(name => name.split(' ')[0].length > 4)
console.log("3. longer than 4: ", longerThan4)


/* -------------------------------FIND/INDEX--------------------------------
---------------------------------------------------------------------------*/

// 1. Find the inventor that has a middle name.
let haveMiddleName = inventors.find(name => name.split(' ').length >= 3)
console.log("1. have middle name: ", haveMiddleName)


// 2. Bonus: Return a new array, that only has inventors without a middle name. 
// (Hint: think about splice, if you use findIndex. But you may also use another of the methods you've learned about above.)
const noMiddleName = inventors.filter((name) => {
    return name.split(" ").length <= 2
})
console.log("2. no middle name: ", noMiddleName)

// 3. Find the number divisible by 7.
let numberDivSeven = numbers.find(number => number % 7 === 0)
console.log("3. div by 7: ", numberDivSeven)

// 4. Bonus: Return a new array, that only has the numbers that are not divisible by 7.
let notDivSeven = numbers.find(number => {
    let result = true
    for (let i = 0; i < numbers.length; i++) {
        if (number % 7 === 0)
            return false;
    }
    return result
})
console.log("4. not div by 7: ", notDivSeven)


