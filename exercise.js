// check if two objects are equal
function isEqual(obj1, obj2) {
    
    if (Object.keys(obj1).length !== Object.keys(obj2).length) {
        return false;
    }
    for (let prop in obj1) {
        
        if (!(prop in obj2) || obj1[prop] !== obj2[prop]) {
            return false;
        }
    }
    return true;
}

const obj1 = { a: 2 };
const obj2 = { a: 1 };
console.log(isEqual(obj1, obj2)); 

const obj3 = { a: "Hello" };
const obj4 = { a: 1 };
console.log(isEqual(obj3, obj4))

const obj5 = { a: 1 };
const obj6 = { a: 1 };
console.log(isEqual(obj5, obj6));

// intersection of two object
function getIntersection(objj1, objj2) {
    const intersection = {};

    for (let prop in objj1) {

        if (prop in objj2 && objj1[prop] === objj2[prop]) {
        
            intersection[prop] = objj1[prop];
        }
    }
    return intersection;
}
const objj1 = {a: 1, b: 2};
const objj2 = {a: 1, c: 3};
console.log(getIntersection(objj1,objj2))

// merge two array of student data and remove duplicate
function mergeAndRemoveDuplicates(array1, array2) {
    const uniqueArray = [];

    // array1 ke uniqueArray
    for (let student1 of array1) {
        uniqueArray.push(student1);
    }
    // array2 ke uniqueArray 
    for (let student2 of array2) {
        let isDuplicate = false;
        for (let student1 of array1) {
            if (student1.name === student2.name) {
                isDuplicate = true;
                break;
            }
        }
        if (!isDuplicate) {
            uniqueArray.push(student2);
        }
    }
    return uniqueArray;
}
const array1 = [
    { name: 'Student 1', email: 'student1@mail.com' },
    { name: 'Student 2', email: 'student2@mail.com' }
];

const array2 = [
    { name: 'Student 1', email: 'student1@mail.com' },
    { name: 'Student 3', email: 'student3@mail.com' }
];

console.log(mergeAndRemoveDuplicates(array1, array2));

// find a factorial number using recursion
function factorial(n) {
    if (n === 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}
const inputNumber = 5;
console.log(inputNumber + "! = " + factorial(inputNumber));

// can accept input as an array of objects and switch all values into property and property into value
function switchPropertiesAndValues(arr) {
    var result = [];

    for (var item of arr) {
        var newObj = {};

        for (var key in item) {
            newObj[item[key]] = key;
        }
        result.push(newObj);
    }
    return result;
}
var inputArray = [{ name: 'David', age: 20 }];
var switchedOutput = switchPropertiesAndValues(inputArray);
console.log("Output:", switchedOutput);






